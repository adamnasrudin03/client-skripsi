/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function ProposalForm() {
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
  const [value, setValue] = useState({
    npm: '',
    fullName: '',
    semester: '',
    title: '',
    noWa: '',
    email: '',
    tema: '',
    matkulLain: '',
  });
  const router = useRouter();

  const onSubmit = () => {
    if (value.npm === '' || value.fullName === '') {
      toast.error('silahkan isi semua data!!!');
    } else {
      toast.success('Proposal skripsi telah berhasil diajukan.');
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

  return (
    <>
      <div className="pt-md-50 pt-30">
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
        />
      </div>

      <div className="pb-20">
        <label htmlFor="noWA" className="form-label text-lg fw-medium color-palette-1 mb-10">
          No Whatsapp
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="noWA"
          name="noWA"
          aria-describedby="noWA"
          placeholder="Masukan No Whatsapp Anda"
          value={value.noWa}
          onChange={(event) => setValue({ ...value, noWa: event.target.value })}
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

      <div className="pb-20">
        <label htmlFor="semester" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Semester
        </label>
        <input
          type="number"
          className="form-control rounded-pill text-lg"
          id="semester"
          name="semester"
          aria-describedby="semester"
          placeholder="Masukan Semester Anda"
          value={value.semester}
          onChange={(event) => setValue({ ...value, semester: event.target.value })}
        />
      </div>

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
        >
          <option selected>Pilih Tema Skripsi...</option>
          <option value="1">Aplikasi Web</option>
          <option value="2">Aplikasi Mobile</option>
          <option value="3">Aplikasi Desktop</option>
          <option value="4">Desain Aplikasi</option>
          <option value="5">Basis Data </option>
          <option value="6">Internet Of Thinks</option>
          <option value="7">Data Mining</option>
          <option value="8">Jaringan Komputer</option>
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
