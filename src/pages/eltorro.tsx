import Head from 'next/head';
import FloatingNavbar from '../components/FloatingNavbar';
import RestaurantDetail from '../components/RestaurantDetail';

export default function ElTorroPage() {
  return (
    <>
      <Head>
        <title>El Torro - Spanish Steakhouse | Fabrica Group</title>
        <meta name="description" content="Authentic Spanish flavors meet premium steaks in an elegant setting. Rustic charm with modern sophistication, where every meal is a celebration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FloatingNavbar />
      <RestaurantDetail restaurantId="eltorro" />
    </>
  );
} 