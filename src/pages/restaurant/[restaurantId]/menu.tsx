import { PageContainer, PageHeading } from '@/components/shared/PageContainer';
import { useRouter } from 'next/router';

export default function RestaurantMenuPage() {
  const router = useRouter();
  const { restaurantId } = router.query;
  
  return (
    <PageContainer>
      <PageHeading>{restaurantId} Menu</PageHeading>
      <p>This is the menu page for the restaurant: <b>{restaurantId}</b>.</p>
    </PageContainer>
  );
}
