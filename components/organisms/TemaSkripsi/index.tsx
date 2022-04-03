import StepItem from '../../molecules/StepItem';

export default function TemaSkripsi() {
  return (
    <section id="tema-skripsi" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Tema
          <br />
          {' '}
          Skripsi
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem icon="step1" title="1. Aplikasi Web" desc1="Mahasiswa wajib mengisi KRS " desc2="skripsi pada semester yang berjalan." />
          <StepItem icon="step2" title="2. Aplikasi Mobile" desc1="Mahasiswa telah menempuh minimal 120 / 130 SKS " desc2="saat mengambil skripsi." />
          <StepItem icon="step3" title="3. Aplikasi Desktop" desc1="Mahasiswa tidak boleh mendapatkan nilai D dan E" desc2="improve permainan kamu" />
          <div className="mt-5">  </div>
          <StepItem icon="step1" title="4. Desain Aplikasi" desc1="Pilih salah satu game" desc2="yang ingin kamu top up" />
          <StepItem icon="step2" title="5. Internet Of Thinks" desc1="Top up sesuai dengan" desc2="nominal yang sudah tersedia" />
          <StepItem icon="step3" title="6. Data Mining" desc1="Siap digunakan untuk" desc2="improve permainan kamu" />
          <div className="mt-5">  </div>
          <StepItem icon="step2" title="7. Basis Data" desc1="Top up sesuai dengan" desc2="nominal yang sudah tersedia" />
          <StepItem icon="step3" title="8. Jaringan Komputer" desc1="Siap digunakan untuk" desc2="improve permainan kamu" />
        </div>
      </div>
    </section>
  );
}
