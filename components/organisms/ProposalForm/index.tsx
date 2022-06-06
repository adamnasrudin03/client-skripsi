/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import _ from 'lodash';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { RequestPengajuanType } from '../../../services/data-types';
import { setPengajuan, uploadProposalFile, uploadRekapFile } from '../../../services/mahasiswa';
import InputDinamis from '../../atoms/InputDinamis';

interface ProposalFormProps {
  ajaranID: string;
}

interface fileTypes {
  proposal: any;
  rekap: any;
}

interface HeaderItemProps {
  title: string;
  subTitle: string;
  buttonTitle: string;
  onButtonClick: any;
}
function HeaderItem(props: HeaderItemProps) {
  const {
    title, subTitle, buttonTitle, onButtonClick,
  } = props;
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="form-label text-lg fw-medium color-palette-1 mb-10">
          {title}
          <sup style={{ color: '#ff0000' }}>*</sup>

        </div>
        <div className="form-label text-sm fw-medium color-palette-1 mb-10" style={{ opacity: '0.5' }}>
          {subTitle}

        </div>
      </div>
      <div className="col-lg-4 d-flex align-items-center justify-content-end">
        <button
          onClick={onButtonClick}
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-m"
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

export default function ProposalForm(props: ProposalFormProps) {
  const { ajaranID } = props;
  const [fileUpload, setFileUpload] = useState<fileTypes>({
    rekap: '',
    proposal: '',
  });
  const [lanjutan, setLanjutan] = useState({
    yes: false,
    no: false,
  });
  const [matkulLain, setMatkulLain] = useState({
    yes: false,
    no: false,
  });

  const [oldSK, setOldSK] = useState({
    yes: false,
    no: false,
  });

  const [value, setValue] = useState({
    ajaranId: ajaranID,
    npm: '',
    fullName: '',
    semester: '',
    title: '',
    noWa: '',
    email: '',
    tema: '',
    dosenOld1: '',
    dosenOld2: '',
    fileProposal: '',
    fileRekap: '',
  });

  const [matkulLainDinamis, setMatkulLainDinamis] = useState([{
    name: '',
  }]);

  const [loading, setLoading] = useState(false);
  const handleCloseLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const router = useRouter();

  const onSubmit = async () => {
    setLoading(!loading);
    let uriProposal: string = '';
    let uriRekap: string = '';

    // eslint-disable-next-line no-array-constructor
    let reqMatkulLain = new Array();
    if (matkulLainDinamis && matkulLainDinamis.length > 0) {
      // eslint-disable-next-line no-unused-expressions
      // eslint-disable-next-line array-callback-return
      matkulLainDinamis && matkulLainDinamis.map((data) => {
        if (data.name) {
          reqMatkulLain = [...reqMatkulLain, { name: `${data.name}; ` }];
        }
      });
    }

    if (oldSK.yes && !value.dosenOld1 && !value.dosenOld2) {
      toast.error('Jika memilih ya pada pertanyan mempunyai SK bimbingan, maka wajib mengisi data dosen pembimbing sebelumnya.');
      handleCloseLoading();
      return;
    }

    if (!value.npm || !value.fullName || !value.email
      || !value.semester || !value.noWa || !value.tema || !value.title) {
      toast.error('silahkan isi semua data!!!');
      handleCloseLoading();
      return;
    }

    if (!fileUpload.proposal) {
      toast.error('Wajib mengupload file proposal pengajuan skripsi.');
      handleCloseLoading();
      return;
    }

    if (!fileUpload.rekap) {
      toast.error('Wajib mengupload file rekap nilai.');
      handleCloseLoading();
      return;
    }

    if (matkulLain.yes && reqMatkulLain.length === 0) {
      toast.error('Jika memilih ya pada pertanyan mata kuliah lain, maka wajib mengisi minimal satu mata kuliah.');
      handleCloseLoading();
      return;
    }

    let matkulOther = '';
    if (reqMatkulLain && reqMatkulLain.length > 0) {
      // eslint-disable-next-line no-unused-expressions
      // eslint-disable-next-line array-callback-return
      reqMatkulLain && reqMatkulLain.map((data) => {
        if (data.name) {
          matkulOther += data.name;
        }
      });
    }

    // Upload File Proposal
    if (fileUpload.proposal) {
      const data = new FormData();
      data.append('file', fileUpload.proposal);
      const responseFile = await uploadProposalFile(data);
      if (responseFile.error) {
        toast.error(responseFile.message);
        return;
      }
      uriProposal = responseFile.data?.data?.uri || '';
    }

    // Upload File Rekap
    if (fileUpload.rekap) {
      const data = new FormData();
      data.append('file', fileUpload.rekap);
      const responseFile = await uploadRekapFile(data);
      if (responseFile.error) {
        toast.error(responseFile.message);
        return;
      }
      uriRekap = responseFile.data?.data?.uri || '';
    }

    const requestData: RequestPengajuanType = {
      npm: value.npm,
      nama: value.fullName,
      email: value.email,
      lanjutan: !!lanjutan.yes,
      semester: value.semester,
      no_wa: value.noWa,
      judul_skripsi: value.title,
      tema_skripsi: value.tema,
      file_proposal: uriProposal,
      file_rekap_nilai: uriRekap,
      dosen_sebelum: value.dosenOld1,
      dosen_sebelum2: value.dosenOld2,
      ajaran: value.ajaranId,
      mata_kuliah_lain: matkulOther,
    };

    const response = await setPengajuan(requestData);
    if (response.error) {
      toast.error(response.message);
      handleCloseLoading();
    } else {
      toast.success('Proposal Skripsi Berhasil Diajukan.');
      handleCloseLoading();
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  };

  const optionsBack = () => {
    if (confirm('Apakah anda yakin untuk membatalkan proses pengajuan proposal skripsi ? \n\n'
     + '*jika anda keluar maka data yang anda isi akan terhapus.') === true) {
      router.push('/');
    } else {
      router.push('/formulir/#');
    }
  };

  const onBack = () => {
    optionsBack();
  };

  const handleChangeMatkulLain = (event: any, index: any) => {
    matkulLainDinamis[index].name = event.target.value;
    setMatkulLainDinamis([...matkulLainDinamis]);
  };

  const handleAddMatkulLains = () => {
    // eslint-disable-next-line no-unused-expressions
    matkulLainDinamis && matkulLainDinamis.push({ name: '' });
    setMatkulLainDinamis([...matkulLainDinamis]);
  };

  const handleRemovMatkulLains = (_data: any, index: any) => {
    _.pullAt(matkulLainDinamis, [index]);
    setMatkulLainDinamis([...matkulLainDinamis]);
  };

  return (
    <>
      <div className={oldSK.yes ? 'pt-md-50 pt-30 pb-20' : 'pt-md-50 pt-30 pb-50'}>
        <label htmlFor="oldSK" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Apakah Sudah Mempunyai SK Sebelumnya ?
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            checked={oldSK.yes}
            onChange={() => {
              oldSK.yes = !oldSK.yes;
              oldSK.no = !oldSK.yes;
              setOldSK({ ...oldSK });
            }}
            id="yesoldSK"
          />
          <label className="form-check-label" htmlFor="yesoldSK"> Ya </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            checked={oldSK.no}
            onChange={() => {
              oldSK.no = !oldSK.no;
              oldSK.yes = !oldSK.no;
              setOldSK({ ...oldSK });
            }}
            id="nooldSK"
          />
          <label className="form-check-label" htmlFor="nooldSK">
            Tidak
          </label>
        </div>
      </div>

      {oldSK.yes
      && (
        <>
          <div className="pb-20">
            <label htmlFor="dosenOld1" className="form-label text-lg fw-medium color-palette-1 mb-10">
              Nama Dosen Pembimbing 1 Sebelumnya
              <sup style={{ color: '#ff0000' }}>*</sup>
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="dosenOld1"
              name="dosenOld1"
              aria-describedby="dosenOld1"
              placeholder=" Masukan Nama Dosen Pembimbing 1 Sebelumnya"
              value={value.dosenOld1}
              onChange={(event) => setValue({ ...value, dosenOld1: event.target.value })}
            />
          </div>

          <div className="pb-20">
            <label htmlFor="dosenOld2" className="form-label text-lg fw-medium color-palette-1 mb-10">
              Nama Dosen Pembimbing 2 Sebelumnya
              <sup style={{ color: '#ff0000' }}>*</sup>
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="dosenOld2"
              name="dosenOld2"
              aria-describedby="dosenOld2"
              placeholder=" Masukan Nama Dosen Pembimbing 2 Sebelumnya"
              value={value.dosenOld2}
              onChange={(event) => setValue({ ...value, dosenOld2: event.target.value })}
            />
          </div>
        </>
      )}

      <div className="pb-20">
        <div className="pb-20">
          <label htmlFor="NPM" className="form-label text-lg fw-medium color-palette-1 mb-10">
            NPM
            <sup style={{ color: '#ff0000' }}>*</sup>
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg input-lg"
            id="NPM"
            name="NPM"
            aria-describedby="NPM"
            placeholder="Masukan Nomor Pokok Mahasiswa Anda"
            value={value.npm}
            onChange={(event) => setValue({ ...value, npm: event.target.value })}
            required
          />
        </div>
      </div>

      <div className="pb-20">
        <label htmlFor="fullName" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Nama Lengkap
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="fullName"
          name="fullName"
          aria-describedby="fullName"
          placeholder="Masukan Nama Lengkap Anda"
          value={value.fullName}
          onChange={(event) => setValue({ ...value, fullName: event.target.value })}
          required
        />
      </div>

      <div className="pb-20">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Masukan Email Anda"
          value={value.email}
          onChange={(event) => setValue({ ...value, email: event.target.value })}
          required
        />
      </div>

      <div className="pb-20">
        <label htmlFor="noWA" className="form-label text-lg fw-medium color-palette-1 mb-10">
          No Whatsapp
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <div className="d-flex align-items-center">
          <span style={{ fontSize: '18px' }}>
            +62&nbsp;&nbsp;
          </span>
          <input
            type="number"
            className="form-control rounded-pill text-lg"
            id="noWA"
            name="noWA"
            aria-describedby="noWA"
            placeholder="Masukan No Whatsapp Anda"
            value={value.noWa}
            onChange={(event) => setValue({ ...value, noWa: event.target.value })}
            required
          />
        </div>
      </div>

      <div className="pb-20">
        <label htmlFor="lanjutan" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Apakah Anda Mahasiswa Lanjutan ?
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <br />
        <div className="form-check form-check-inline" id="lanjutan">
          <input
            className="form-check-input"
            type="checkbox"
            checked={lanjutan.yes}
            onChange={() => {
              lanjutan.yes = !lanjutan.yes;
              lanjutan.no = !lanjutan.yes;
              setLanjutan({ ...lanjutan });
            }}
            id="yesLanjutan"
          />
          <label className="form-check-label" htmlFor="yesLanjutan"> Ya </label>
        </div>
        <div className="form-check form-check-inline" id="lanjutan">
          <input
            className="form-check-input"
            type="checkbox"
            checked={lanjutan.no}
            onChange={() => {
              lanjutan.no = !lanjutan.no;
              lanjutan.yes = !lanjutan.no;
              setLanjutan({ ...lanjutan });
            }}
            id="noLanjutan"
          />
          <label className="form-check-label" htmlFor="noLanjutan">
            Tidak
          </label>
        </div>
      </div>

      {(lanjutan.yes || lanjutan.no)
      && (
      <div className="pb-20">
        <label htmlFor="semester" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Semester
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <select
          className="form-select  rounded-pill text-lg"
          id="semester"
          value={value.semester}
          onChange={(event) => setValue({ ...value, semester: event.target.value })}
          required
        >
          <option selected disabled value="">Pilih Semester Saat Ini...</option>
          { lanjutan.yes && (
          <>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </>
          )}

          { lanjutan.no && (
          <>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </>
          )}
        </select>
      </div>
      )}

      <div className="pb-20">
        <label htmlFor="title" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Judul Skripsi
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="title"
          name="title"
          placeholder="Masukan Judul Skripsi Yang Akan Dibuat"
          value={value.title}
          onChange={(event) => setValue({ ...value, title: event.target.value })}
          required
        />
      </div>

      <div className="pb-20">
        <label htmlFor="temaSkripsi" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Tema Skripsi
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <select
          className="form-select  rounded-pill text-lg"
          id="temaSkripsi"
          value={value.tema}
          onChange={(event) => setValue({ ...value, tema: event.target.value })}
          required
        >
          <option selected disabled value="">Pilih Tema Skripsi...</option>
          <option value="bidang_aplikasi_web">Aplikasi Web</option>
          <option value="bidang_aplikasi_mobile">Aplikasi Mobile</option>
          <option value="bidang_aplikasi_desktop">Aplikasi Desktop</option>
          <option value="bidang_desain_aplikasi">Desain Aplikasi</option>
          <option value="bidang_basis_data">Basis Data </option>
          <option value="bidang_iot">Internet Of Thinks</option>
          <option value="bidang_data_mining">Data Mining</option>
          <option value="bidang_jaringan_komputer">Jaringan Komputer</option>
        </select>
      </div>

      <div className="pb-20">
        <label htmlFor="fileProposal" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Upload Dokumen Proposal Skripsi (.doc)
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <input
          type="file"
          className="form-control rounded-pill text-lg"
          id="fileProposal"
          name="fileProposal"
          placeholder="Upload File Proposal Anda"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(event) => {
            const file = event.target.files![0];
            return setFileUpload({
              ...fileUpload,
              proposal: file,
            });
          }}
        />
      </div>

      <div className="pb-20">
        <label htmlFor="fileRekap" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Upload Rekap Nilai Mahasiswa (.pdf)
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <input
          type="file"
          className="form-control rounded-pill text-lg"
          id="fileRekap"
          name="fileRekap"
          placeholder="Upload File Rekap Nilai Anda"
          accept=".pdf"
          onChange={(event) => {
            const file = event.target.files![0];
            return setFileUpload({
              ...fileUpload,
              rekap: file,
            });
          }}
        />
      </div>

      <div className={matkulLain.yes ? 'pb-20' : 'pb-50'}>
        <label htmlFor="title" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Apakah Masih Ada Lanjut Mata Kuliah Lagi Setelah Sidang Skripsi ?
          <sup style={{ color: '#ff0000' }}>*</sup>
        </label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            checked={matkulLain.yes}
            onChange={() => {
              matkulLain.yes = !matkulLain.yes;
              matkulLain.no = !matkulLain.yes;
              setMatkulLain({ ...matkulLain });
            }}
            id="yesMatkulLain"
          />
          <label className="form-check-label" htmlFor="yesMatkulLain"> Ya </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            checked={matkulLain.no}
            onChange={() => {
              matkulLain.no = !matkulLain.no;
              matkulLain.yes = !matkulLain.no;
              setMatkulLain({ ...matkulLain });
            }}
            id="noMatkulLain"
          />
          <label className="form-check-label" htmlFor="noMatkulLain">
            Tidak
          </label>
        </div>
      </div>

      {matkulLain.yes
      && (
      <div className="pb-50">
        <HeaderItem
          onButtonClick={handleAddMatkulLains}
          buttonTitle="Tambah +"
          title="Mata Kuliah Yang Diambil"
          subTitle="Masukan Nama Mata Kuliah Yang Diambil Selain KRS Skripsi"
        />

        <InputDinamis
          onDeleteClick={handleRemovMatkulLains}
          data={matkulLainDinamis}
          placeHolder="Masukan Nama Mata Kuliah Yang Dimaksud"
          onChange={handleChangeMatkulLain}
        />
      </div>

      )}

      <div className="d-sm-block d-flex flex-column w-100 align-items-end justify-content-end">
        <button
          type="button"
          style={{ backgroundColor: '#eeeeee', marginRight: '15px', marginTop: '15px' }}
          className="btn btn-submit rounded-pill fw-medium text-dark border-0 text-lg "
          onClick={onBack}
        >
          Kembali
        </button>
        <button
          type="button"
          style={{ marginTop: '15px' }}
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Kirim
        </button>
      </div>

      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}
