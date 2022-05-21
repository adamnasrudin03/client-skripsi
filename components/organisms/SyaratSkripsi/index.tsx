import StepItem from '../../molecules/StepItem';

export default function SyaratSkripsi() {
  return (
    <section id="syarat" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Syarat Mengikuti
          <br />
          {' '}
          Mata Kuliah Skripsi
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem icon="step1" title="1. Mengisi KRS Skripsi" desc1="Mahasiswa wajib mengisi KRS " desc2="skripsi pada semester yang berjalan." />
          <StepItem icon="step2" title="2. Memenuhi syarat SKS" desc1="Mahasiswa telah menempuh minimal 120 / 130 SKS " desc2="saat mengambil krs skripsi." />
          <StepItem icon="step3" title="3. Tidak boleh ada nilai D dan E" desc1="Jika terdapat nilai D dan E" desc2="Mahasiswa wajib mengulang mata kuliah tersebut" />
          <div className="mt-5">  </div>
        </div>
      </div>
    </section>
  );
}
