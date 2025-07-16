import { useRouter } from 'next/router';
import { PageContainer, PageHeading } from '../../components/PageContainer';

export default function RestaurantLandingPage() {
  const router = useRouter();
  const { restaurant } = router.query;
  return (
    <PageContainer>
      <PageHeading>{restaurant} Landing Page</PageHeading>
      <p>This is the landing page for the restaurant: <b>{restaurant}</b>.</p>
    </PageContainer>
  );
}
