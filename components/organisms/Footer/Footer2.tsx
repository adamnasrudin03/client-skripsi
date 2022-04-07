// import Image from 'next/image';

export default function Footer2() {
  return (
    <div className="footer py-4 d-flex flex-lg-column bg-light" id="kt_footer">
      {/* begin::Container */}
      <div
        className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between "
      >
        {/* begin::Copyright */}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-bold me-2">
            {new Date().getFullYear()}
            {' '}
            &copy;
          </span>
          <a href="https://www.itbu.ac.id/" className="text-lg color-palette-1 text-decoration-none">
            Institut Teknologi Budi utomo
          </a>
        </div>
        {/* end::Copyright */}

        {/* begin::Nav */}
        <ul className="order-1 list-unstyled">
          <li>
            <a href="https://goo.gl/maps/gi67n6vY4ZidyzK89" className="text-lg color-palette-1 text-decoration-none">
              Hubungi Kami
            </a>
          </li>
        </ul>
        {/* end::Nav */}
      </div>
      {/* end::Container */}
    </div>
  );
}
