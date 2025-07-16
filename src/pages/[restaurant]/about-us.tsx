import { useRouter } from 'next/router';
import { PageContainer, PageHeading } from '../../components/PageContainer';

export default function RestaurantAboutPage() {
  const router = useRouter();
  const { restaurant } = router.query;
  return (
    <PageContainer>
      <PageHeading>About {restaurant}</PageHeading>
      <p>This is the about us page for the restaurant: <b>{restaurant}</b>.</p>
    </PageContainer>
  );
} 