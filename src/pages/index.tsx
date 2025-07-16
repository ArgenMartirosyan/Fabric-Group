import Head from 'next/head';
import Hero from '../components/Hero';
import NewsEventsCarousel from '../components/NewsEventsCarousel';
import RestaurantCardsGrid from '@/components/RestaurantCardsGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrica Group</title>
        <meta name="description" content="Fabrica Group - Inspired by Big Mamma Group" />
      </Head>
      <Hero />
      <RestaurantCardsGrid />
      <NewsEventsCarousel />
    </>
  );
}
