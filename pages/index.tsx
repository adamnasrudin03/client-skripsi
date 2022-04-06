import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import SyaratSkripsi from '../components/organisms/SyaratSkripsi';
// import FeaturedGame from '../components/organisms/FeaturedGame';
// import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import TemaSkripsi from '../components/organisms/TemaSkripsi';
import PreparedSkripsi from '../components/organisms/PreparedSkripsi';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="https://imageurlkalian" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <SyaratSkripsi />
      <TemaSkripsi />
      <PreparedSkripsi />
      {/* <FeaturedGame />
      <Reached /> */}
      <Story />
      <Footer />
    </>
  );
}
