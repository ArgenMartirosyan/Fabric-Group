import { useRouter } from 'next/router';
import RestaurantDetail from '@/components/RestaurantDetail/RestaurantDetail';
import { restaurants } from '@/data/restaurants';
import Head from 'next/head';
import Link from 'next/link';

export default function RestaurantLandingPage() {
  const router = useRouter();
  const { restaurantId } = router.query;

   const restaurant = restaurants.find(r => r.id === restaurantId);

   
  if (!restaurant) {
    return <p>Restaurant not found</p>; 
  }

  return (
    <>
      <Head>
        <title>{restaurant.metaTitle}</title>
        <meta name="description" content={restaurant.metaDescription} />
      </Head>

        <Link href={`/restaurant/${restaurant.id}/menu`}>
          <button style={{ marginRight: '1rem' }}>
            View Menu
          </button>
        </Link>
        <Link href={`/restaurant/${restaurant.id}/contact`}>
          <button style={{ marginRight: '1rem' }}>
            View Contacts
          </button>
        </Link>
        <Link href={`/restaurant/${restaurant.id}/about`}>
          <button style={{ marginRight: '1rem' }}>
            View About
          </button>
        </Link>

      <RestaurantDetail restaurantId={restaurant?.id} />
    </>
  );
}
