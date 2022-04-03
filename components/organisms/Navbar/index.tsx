import Image from 'next/image';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/logo.png" width={85} height={85} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active />
              <Menu title="Syarat" href="#syarat" />
              <Menu title="Tema" href="#tema-skripsi" />
              <Menu title="Pengajuan" href="#pengajuan" />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
