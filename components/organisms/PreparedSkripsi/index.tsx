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
          <StepItem icon="step3" title="2. Document Proposal Skripsi" desc1="Mahasiswa wajib meyiapkan " desc2="document Proposal Skripsi dengan format .doc" />
          <StepItem icon="step1" title="3. Document Rekap Nilai Mahasiswa" desc1="Mahasiswa wajib menyiapkan " desc2="document Rekap Nilai sampai semester saat ini, dengan format .pdf" />
          <div className="mt-5">  </div>
        </div>
      </div>
    </section>
  );
}
