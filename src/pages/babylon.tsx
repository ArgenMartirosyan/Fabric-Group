import Head from 'next/head';
import FloatingNavbar from '../components/FloatingNavbar';
import RestaurantDetail from '../components/RestaurantDetail';

export default function BabylonPage() {
  return (
    <>
      <Head>
        <title>Babylon - Exotic Arabesque | Fabrica Group</title>
        <meta name="description" content="A mystical journey through Middle Eastern flavors in an opulent setting. Rich spices, intricate patterns, and an atmosphere that transports you to ancient times." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FloatingNavbar />
      <RestaurantDetail restaurantId="babylon" />
    </>
  );
} 