import Illustration from './Illustration';

export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">
              Selamat Datang Di Website,
            </p>
            <h1 className="header-title color-palette-1 fw-bold">
              Pengajuan Proposal Skripsi
              {' '}
              <span className="d-sm-inline d-none">jurusan</span>
              <span className="d-sm-none d-inline">
                jurusan
              </span>
              <span className="underline-blue"> Teknik</span>
              {' '}
              <br className="d-sm-block d-none" />
              {' '}
              <span
                className="underline-blue"
              >
                Informatika
              </span>
              {' '}
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Website ini digunakan untuk mahasiswa Institut Teknologi Budi Utomo
              khususnya jurusan Teknik Informtika,
              <br
                className="d-md-block d-none"
              />
              {' '}
              sebagai tempat pengajuan proposal skripsi
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a className="btn btn-get text-lg text-white rounded-pill" href="#pengajuan" role="button">
                Pengajuan
              </a>
              <a className="btn-learn text-lg color-palette-1 my-auto text-center" href="#syarat" role="button">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </section>
  );
}
