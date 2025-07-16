import Head from 'next/head';
import FloatingNavbar from '../components/FloatingNavbar';
import RestaurantJourney from '../components/RestaurantJourney';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrica Group - Four Unique Restaurants in Yerevan</title>
        <meta name="description" content="Discover four unique restaurants in Yerevan: Fabrica (brunchy loft), Zanzibar (jungle cocktail bar), El Torro (Spanish steakhouse), and Babylon (exotic Arabesque)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FloatingNavbar />
      <RestaurantJourney />
    </>
  );
}
