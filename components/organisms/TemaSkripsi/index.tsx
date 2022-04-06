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
          <StepItem icon="website-design" title="1. Aplikasi Web" desc1="Merupakan jenis aplikasi berbasis teknologi web browser, " desc2="aplikasi ini berjalan jika ada browser dan koneksi internet." />
          <StepItem icon="mobile" title="2. Aplikasi Mobile" desc1="Aplikasi yang dikembangkan untuk disematkan pada perangkat" desc2=" mobile seperti ponsel, tablet dan jam tangan digital. " />
          <StepItem icon="integration" title="3. Aplikasi Desktop" desc1="Aplikasi yang berdiri sendiri " desc2="yang diinstal pada komputer desktop atau laptop." />
          <div className="mt-5">  </div>
          <StepItem icon="logo-design" title="4. Desain Aplikasi" desc1="Rancangan dari suatu aplikasi yang akan dibuat " desc2="rancangan suatu sistem " />
          <StepItem icon="iot" title="5. Internet Of Thinks" desc1="Yang secara sederhananya menggambarkan perangkat-perangkat yang terhubung " desc2="satu sama lainnya melalui jaringan internet.  " />
          <StepItem icon="dashboard" title="6. Data Mining" desc1=" proses penggalian data untuk menemukan pola-pola penting " desc2="yang bisa menjadi informasi bermanfaat, khususnya bagi pemilik bisnis. " />
          <div className="mt-5">  </div>
          <StepItem icon="shipping" title="7. Basis Data" desc1="kumpulan data yang disimpan secara sistematis di dalam komputer yang dapat diolah  " desc2="menggunakan perangkat lunak untuk menghasilkan informasi." />
          <StepItem icon="disconnect" title="8. Jaringan Komputer" desc1="Dua perangkat komputer atau lebih saling terhubung untuk  " desc2="membagikan data dan informasi." />
        </div>
      </div>
    </section>
  );
}
