import { PageContainer, PageHeading } from '@/components/shared/PageContainer';
import { useRouter } from 'next/router';

export default function RestaurantAboutPage() {
  const router = useRouter();
  const { restaurantId } = router.query;
  return (
    <PageContainer>
      <PageHeading>About {restaurantId}</PageHeading>
      <p>This is the about us page for the restaurant: <b>{restaurantId}</b>.</p>
    </PageContainer>
  );
} 