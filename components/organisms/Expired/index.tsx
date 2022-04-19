import Lottie from 'lottie-react';
import laptop from '../../animations/laptop.json';

export default function Expired() {
  return (
    <section className="not-found mx-auto pt-0 pb-md-212 pb-100">
      <div className="container-fluid">
        <div
          className="text-center "
        >
          <Lottie
            animationData={laptop}
            loop
            autoPlay
            style={{
              margin: 'auto',
              height: '380px',
              width: '380px',
            }}
          />
        </div>
        <div className="pt-10 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">Oops! Expired...</h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Periode Pengajuan Skripsi Telah Berakhir
            <br
              className="d-sm-block d-none"
            />
            Silahkah Menghubungi Bagian Program Studi Untuk Info Lebih Lanjut.

          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <a
            className="btn btn-homepage fw-medium text-lg text-white rounded-pill"
            href="/#"
            role="button"
          >
            Homepage

          </a>
        </div>
      </div>
    </section>
  );
}
