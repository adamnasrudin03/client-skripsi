import Image from 'next/image';

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/logo.png" width={120} height={120} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Jurusan Teknik Informatika
                <br />
                {' '}
                Fakultas Teknologi Industri
                <br />
                {' '}
                Institut Teknologi Budi Utomo

              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright
                {' '}
                {year}
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-20 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12"> </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12"> </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-lg color-palette-1 text-decoration-none"> </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Kampus ITBU</p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="https://goo.gl/maps/gi67n6vY4ZidyzK89"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Jl. Raya Mawar Merah No.23,
                        Pondok Kopi, Duren Sawit,
                        Kota Jakarta Timur, 13460
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 02111229090"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Telp: (021) 86606633

                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="mailto: info@itbu.ac.id"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Email: info@itbu.ac.id
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
