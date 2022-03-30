import StepItem from '../../molecules/StepItem';

export default function TransactionStep() {
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
          <StepItem icon="step1" title="1. Start" desc1="Pilih salah satu game" desc2="yang ingin kamu top up" />
          <StepItem icon="step2" title="2. Fill Up" desc1="Top up sesuai dengan" desc2="nominal yang sudah tersedia" />
          <StepItem icon="step3" title="3. Be a Winner" desc1="Siap digunakan untuk" desc2="improve permainan kamu" />
          <StepItem icon="step1" title="4. Start" desc1="Pilih salah satu game" desc2="yang ingin kamu top up" />
          <StepItem icon="step2" title="5. Fill Up" desc1="Top up sesuai dengan" desc2="nominal yang sudah tersedia" />
          <StepItem icon="step3" title="6. Be a Winner" desc1="Siap digunakan untuk" desc2="improve permainan kamu" />
        </div>
      </div>
    </section>
  );
}
