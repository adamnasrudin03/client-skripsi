/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Expired from '../../components/organisms/Expired';
import Footer2 from '../../components/organisms/Footer/Footer2';
import ProposalForm from '../../components/organisms/ProposalForm';
import ProposalHeader from '../../components/organisms/ProposalHeader';
import { getAjaran } from '../../services/ajaran';
import { AjaranTypes } from '../../services/data-types';

interface DetailProps {
  dataItem: AjaranTypes;
}

export default function Index({ dataItem }: DetailProps) {
  const [value, setValue] = useState({
    id: '',
    startYear: '',
    endYear: '',
    periode: '',

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
                onChange={(event) => setValue({ ...value, id: event.target.value })}
                required
              >
                <option selected disabled value="">Pilih Tahun Ajaran</option>
                {dataAjaran.map((item) => (
                  <option value={item._id}>
                    {item.start_year}
                    {' '}
                    -
                    {' '}
                    {item.end_year}
                    {' '}
                    {item.semester}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {value.id.length > 0 && (
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <ProposalHeader
                type="mobile"
                data={{
                  name: 'nama',
                  thumbnail: '/logo.png',
                  periode: {
                    date: '01-04-2022 s/d 16-04-2022',
                  },
                }}
              />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <ProposalHeader
                type="desktop"
                data={{
                  name: 'Tahun ajaran 2022 - 2023',
                  thumbnail: '/logo.png',
                  periode: {
                    date: '01-04-2022 s/d 16-04-2022',
                  },
                }}
              />
              <hr />
              <ProposalForm />
            </div>
          </div>
          )}

          {value.id.length === 0
          && (
          <div className="row" style={{ marginTop: '-100px' }}>
            <Expired />
          </div>
          )}
        </div>
      </section>
      <Footer2 />
    </>
  );
}

export async function getStaticProps() {
  const data = await getAjaran();
  return {
    props: {
      dataItem: data,
    },
  };
}
