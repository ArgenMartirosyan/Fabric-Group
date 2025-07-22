import Head from 'next/head';
import RestaurantJourney from '../components/RestaurantJourney/RestaurantJourney';
import RestaurantSlider from '../components/RestaurantSlider/RestaurantSlider';
import MissionBlock from '../components/MissionBlock/MissionBlock';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fabrica Group - Five Unique Restaurants in Yerevan</title>
        <meta name="description" content="Discover five unique restaurants in Yerevan: Fabrica (brunchy loft), Zanzibar (jungle cocktail bar), El Torro (Spanish steakhouse), Babylon (exotic Arabesque), and Antar (arctic elegance)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <RestaurantJourney />
      <RestaurantSlider />
      <MissionBlock />
    </>
  );
}
