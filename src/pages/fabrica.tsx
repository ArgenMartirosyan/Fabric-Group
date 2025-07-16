import Head from 'next/head';
import FloatingNavbar from '../components/FloatingNavbar';
import RestaurantDetail from '../components/RestaurantDetail';

export default function FabricaPage() {
  return (
    <>
      <Head>
        <title>Fabrica - Brunchy Loft Vibes | Fabrica Group</title>
        <meta name="description" content="A sun-drenched loft space where artisanal coffee meets elevated brunch. Think exposed brick, hanging plants, and the perfect spot for your morning ritual." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FloatingNavbar />
      <RestaurantDetail restaurantId="fabrica" />
    </>
  );
} 