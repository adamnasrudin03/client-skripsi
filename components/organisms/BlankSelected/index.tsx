import Lottie from 'lottie-react';
import selecting from '../../animations/100630-selection-list-clients.json';

export default function BlankSelected() {
  return (
    <section className="not-found mx-auto pt-0 pb-md-212 pb-100 mt-0">
      <div className="container-fluid">
        <div
          className="text-center "
        >
          <Lottie
            animationData={selecting}
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
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">Wajib Memilih Tahun Ajaran.</h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Harap memilih tahun ajaran yang dimaksud, agar dapat melanjutkan pengajuan proposal skripsi.
            <br
              className="d-sm-block d-none"
            />
            ~Terimakasih~

          </p>
        </div>
      </div>
    </section>
  );
}
