import Lottie from 'lottie-react';
import Blogging from '../../atoms/Animations/Blogging.json';

export default function Story() {
  return (
    <section className="story pt-50 pb-50" id="pengajuan">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">

            <Lottie
              animationData={Blogging}
              loop
              autoPlay
              className="img-fluid"
              style={{
                margin: 'auto',
                height: 452,
                width: 612,
              }}
            />
            {/* <img src="/img/ilustrations/Vision.png" width="612" height="452" className="img-fluid" alt="" /> */}
          </div>
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                Sudah Siap Mengajukan
                <br />
                {' '}
                Proposal Skripsi ?
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                Jika sudah memenuhi syarat, tunggu apa
                <br
                  className="d-sm-block d-none"
                />
                lagi. Kirim pengajuan proposal skripsi sekarang.
                <br className="d-sm-block d-none" />
                {' '}

              </p>
              <div className="d-md-block d-flex flex-column w-100">
                <a className="btn btn-read text-lg rounded-pill" href="/formulir" role="button">Kirim Pengajuan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
