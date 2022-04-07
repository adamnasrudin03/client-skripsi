import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import SyaratSkripsi from '../components/organisms/SyaratSkripsi';
import Story from '../components/organisms/Story';
import TemaSkripsi from '../components/organisms/TemaSkripsi';
import PreparedSkripsi from '../components/organisms/PreparedSkripsi';
import Footer2 from '../components/organisms/Footer/Footer2';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Teknik Informatika - Pengajuan Proposal Skripsi</title>
        <meta name="description" content="Tempat untuk mengajukan proposal skripsi untuk mahasiswa Teknik Informatika di Institut Teknologi Budi Utomo" />
        <meta property="og:title" content="Teknik Informatika - Pengajuan Proposal Skripsi" />
        <meta property="og:description" content="Tempat untuk mengajukan proposal skripsi untuk mahasiswa Teknik Informatika di Institut Teknologi Budi Utomo" />
        <meta property="og:url" content="https://www.itbu.ac.id/" />
        <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/logo/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/logo/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
        <link rel="manifest" href="/logo/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/logo/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <MainBanner />
      <SyaratSkripsi />
      <TemaSkripsi />
      <PreparedSkripsi />
      <Story />
      <Footer2 />
    </>
  );
}
