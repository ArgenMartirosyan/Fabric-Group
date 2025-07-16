import Head from 'next/head';
import FloatingNavbar from '../components/FloatingNavbar';
import RestaurantDetail from '../components/RestaurantDetail';

export default function ZanzibarPage() {
  return (
    <>
      <Head>
        <title>Zanzibar - Jungle Cocktail Bar | Fabrica Group</title>
        <meta name="description" content="Step into a tropical paradise where exotic cocktails flow freely. Lush greenery, bamboo accents, and the sounds of distant drums create an immersive escape." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FloatingNavbar />
      <RestaurantDetail restaurantId="zanzibar" />
    </>
  );
} 