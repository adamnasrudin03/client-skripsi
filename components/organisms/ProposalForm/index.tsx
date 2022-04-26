/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { RequestPengajuanType } from '../../../services/data-types';
import { createPengajuan } from '../../../services/mahasiswa';

interface ProposalFormProps {
  ajaranID: string;
}
export default function ProposalForm(props: ProposalFormProps) {
  const { ajaranID } = props;
  const [fileProposal, setFileProposal] = useState('');
  const [fileRekap, setFileRekap] = useState('');
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
    matkulLain: '',
    dosenOld: '',
    fileProposal: '',
    fileRekap: '',
  });

  const router = useRouter();

  const onSubmit = () => {
    if (!value.npm || !value.fullName || !value.email
      || !value.semester || !value.noWa || !value.tema || !value.title) {
      toast.error('silahkan isi semua data!!!');
      return;
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
      file_proposal: value.fileProposal,
      file_rekap_nilai: value.fileRekap,
      dosen_sebelum: value.dosenOld,
      ajaran_id: value.ajaranId,
    };

    createPengajuan(requestData, () => {
      toast.success('Proposal skripsi telah berhasil diajukan.');
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }, (err: any) => {
      toast.error('Proposal skripsi gagal diajukan, : ', err);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    });
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

  return (
    <>
      <div className={oldSK.yes ? 'pt-md-50 pt-30 pb-20' : 'pt-md-50 pt-30 pb-50'}>
        <label htmlFor="oldSK" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Apakah Sudah Mempunyai SK Sebelumnya ?
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
      <div className="pb-20">
        <label htmlFor="dosenOld" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Nama Dosen Pembimbing Sebelumnya
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="dosenOld"
          name="dosenOld"
          aria-describedby="dosenOld"
          placeholder=" Masukan Nama Dosen Pembimbing Sebelumnya"
          value={value.dosenOld}
          onChange={(event) => setValue({ ...value, dosenOld: event.target.value })}
        />
      </div>
      )}

      <div className="pb-20">
        <div className="pb-20">
          <label htmlFor="NPM" className="form-label text-lg fw-medium color-palette-1 mb-10">
            NPM
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
        </label>
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

      <div className="pb-20">
        <label htmlFor="lanjutan" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Apakah Anda Mahasiswa Lanjutan ?
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
          Upload Document Proposal Skripsi (.doc)
        </label>
        <input
          type="file"
          className="form-control rounded-pill text-lg"
          id="fileProposal"
          name="fileProposal"
          placeholder="Upload File Proposal Anda"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          value={fileProposal}
          onChange={(event) => setFileProposal(event.target.value)}
        />
      </div>

      <div className="pb-20">
        <label htmlFor="fileRekap" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Upload Rekap Nilai Mahasiswa (.pdf)
        </label>
        <input
          type="file"
          className="form-control rounded-pill text-lg"
          id="fileRekap"
          name="fileRekap"
          placeholder="Upload File Rekap Nilai Anda"
          accept=".pdf"
          value={fileRekap}
          onChange={(event) => setFileRekap(event.target.value)}
        />
      </div>

      <div className={matkulLain.yes ? 'pb-20' : 'pb-50'}>
        <label htmlFor="title" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Apakah Masih Ada Lanjut Mata Kuliah Lagi Setelah Sidang Skripsi ?
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
        <label htmlFor="matkulLain" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Mata Kuliah Yang Diambil
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="matkulLain"
          name="matkulLain"
          aria-describedby="matkulLain"
          placeholder="Masukan Nama Mata Kuliah Yang Dimaksud"
          value={value.matkulLain}
          onChange={(event) => setValue({ ...value, matkulLain: event.target.value })}
        />
      </div>
      )}

      <div className="d-sm-block d-flex flex-column w-100 align-items-end justify-content-end">
        <button
          type="button"
          style={{ backgroundColor: '#eeeeee', marginRight: '15px' }}
          className="btn btn-submit rounded-pill fw-medium text-dark border-0 text-lg "
          onClick={onBack}
        >
          Kembali
        </button>
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Kirim
        </button>
      </div>
    </>
  );
}
