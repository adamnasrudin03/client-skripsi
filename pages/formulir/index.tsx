/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import BlankSelected from '../../components/organisms/BlankSelected';
import Expired from '../../components/organisms/Expired';
import Footer2 from '../../components/organisms/Footer/Footer2';
import ProposalForm from '../../components/organisms/ProposalForm';
import ProposalHeader from '../../components/organisms/ProposalHeader';
import { getAjaran } from '../../services/ajaran';
import { AjaranTypes } from '../../services/data-types';

interface DetailProps {
  dataItem: AjaranTypes;
  // eslint-disable-next-line react/no-unused-prop-types
  dateNow: string;
  dateNowNumber: number;
}

export default function Index({ dataItem, dateNowNumber }: DetailProps) {
  const [value, setValue] = useState({
    id: '',
    start_year: '',
    end_year: '',
    semester: '',
    start_at: '',
    end_at: '',
    periode: '',
    numberStartAt: 0,
    numberEndAt: 0,
  });

  const [dataAjaran, setDataAjaran] = useState([
    {
      _id: '',
      start_year: '',
      end_year: '',
      semester: '',
      start_at: '',
      end_at: '',
      createdAt: '',
      updatedAt: '',
    },
  ]);

  useEffect(() => {
    localStorage.setItem('data-ajaran', JSON.stringify(dataItem));

    const dataFromLocal = localStorage.getItem('data-ajaran');
    const dataAjaranLocal = JSON.parse(dataFromLocal!);
    setDataAjaran(dataAjaranLocal);
  }, []);

  return (
    <>
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Formulir Pengajuan Proposal Skripsi</h2>
            {/* <p className="text-lg color-palette-1 mb-0">Mohon lengkapi seluruh pengisian yang ada</p> */}
            <div className="pb-20">
              <label htmlFor="tahunAjaran" className="form-label text-lg fw-medium color-palette-1 mb-10">
                Tahun Ajaran
              </label>
              <select
                className="form-select  rounded-pill text-lg"
                id="tahunAjaran"
                style={{ maxWidth: '320px' }}
                value={value.id}
                onChange={(event) => {
                  const selected = dataAjaran.find((x) => x._id === event.target.value);
                  const sID: string = selected?._id || ' ';
                  const sSemester: string = selected?.semester || ' ';
                  const sStartYear: string = selected?.start_year || ' ';
                  const sEndYear: string = selected?.end_year || ' ';
                  const sStartAt: string = selected?.start_at || ' ';
                  const sEndAt: string = selected?.end_at || ' ';

                  const [day, month, year] = sStartAt.split('/');
                  const numberStart = parseFloat(`${year}${month}${day}`);
                  const [day2, month2, year2] = sEndAt.split('/');
                  const numberEnd = parseFloat(`${year2}${month2}${day2}`);
                  const sPeriode: string = `${[day, month, year].join('-')} s/d ${[day2, month2, year2].join('-')}`;

                  setValue({
                    ...value,
                    id: sID,
                    semester: sSemester,
                    start_year: sStartYear,
                    end_year: sEndYear,
                    start_at: sStartAt,
                    end_at: sEndAt,
                    periode: sPeriode,
                    numberStartAt: numberStart,
                    numberEndAt: numberEnd,
                  });
                }}
                required
              >
                <option selected disabled value="">Pilih Tahun Ajaran</option>
                {dataAjaran && dataAjaran.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.start_year}
                    {' '}
                    -
                    {' '}
                    {item.end_year}
                    {' '}
                    (
                    {item.semester}
                    )
                  </option>
                ))}
              </select>
            </div>
          </div>

          {
            // eslint-disable-next-line no-nested-ternary
            value.numberStartAt === 0 && value.numberEndAt === 0
              ? (
            // blank page if before selected ajaran
                <div className="row" style={{ marginTop: 0 }}>
                  <BlankSelected />
                </div>
              )
              : ((value.numberStartAt <= dateNowNumber && dateNowNumber <= value.numberEndAt)
                ? (
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                      <ProposalHeader
                        type="mobile"
                        data={{
                          idAjaran: value.id,
                          name: `Tahun Ajaran ${value.start_year} - ${value.end_year} (${value.semester})`,
                          thumbnail: '/logo.png',
                          periode: {
                            date: value.periode,
                          },
                        }}
                      />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                      <ProposalHeader
                        type="desktop"
                        data={{
                          idAjaran: value.id,
                          name: `Tahun Ajaran ${value.start_year} - ${value.end_year} (${value.semester})`,
                          thumbnail: '/logo.png',
                          periode: {
                            date: value.periode,
                          },
                        }}
                      />
                      <hr />
                      <ProposalForm
                        ajaranID={value.id}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="row" style={{ marginTop: '-100px' }}>
                    <Expired />
                  </div>
                ))
          }

        </div>
      </section>
      <Footer2 />
    </>
  );
}

export async function getStaticProps() {
  const currentDate = new Date();
  const cDay = currentDate.getDate();
  const cMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const cYear = currentDate.getFullYear();
  const now:string = `${cDay}/${cMonth}/${cYear}`;

  const nowNumeber: number = parseFloat(`${cYear}${cMonth}${cDay}`);

  const data = await getAjaran();
  return {
    props: {
      dataItem: data,
      dateNow: now,
      dateNowNumber: nowNumeber,
    },
  };
}
