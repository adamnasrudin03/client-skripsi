import StepItem from '../../molecules/StepItem';

export default function PreparedSkripsi() {
  return (
    <section id="prepared" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Hal Yang
          <br />
          {' '}
          Perlu Disiapkan
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem icon="step2" title="1. Tema Skripsi" desc1="Mahasiswa wajib memilih " desc2="tema skripsi yang telah disediakan." />
          <StepItem icon="step3" title="2. Dokumen Proposal Skripsi" desc1="Mahasiswa wajib meyiapkan " desc2="Dokumen Proposal Skripsi dengan format .doc" />
          <StepItem icon="step1" title="3. Dokumen Rekap Nilai Mahasiswa" desc1="Mahasiswa wajib menyiapkan " desc2="Dokumen Rekap Nilai sampai semester yang berjalan, dengan format .pdf" />
          <div className="mt-5">  </div>
        </div>
      </div>
    </section>
  );
}
