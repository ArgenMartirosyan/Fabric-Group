import { PageContainer, PageHeading } from '@/components/shared/PageContainer';
import { useRouter } from 'next/router';

export default function RestaurantContactPage() {
  const router = useRouter();
  const { restaurantId } = router.query;
  return (
    <PageContainer>
      <PageHeading>Contact {restaurantId}</PageHeading>
      <p>This is the contact us page for the restaurant: <b>{restaurantId}</b>.</p>
    </PageContainer>
  );
}