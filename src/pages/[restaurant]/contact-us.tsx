import { useRouter } from 'next/router';
import { PageContainer, PageHeading } from '../../components/PageContainer';

export default function RestaurantContactPage() {
  const router = useRouter();
  const { restaurant } = router.query;
  return (
    <PageContainer>
      <PageHeading>Contact {restaurant}</PageHeading>
      <p>This is the contact us page for the restaurant: <b>{restaurant}</b>.</p>
    </PageContainer>
  );
}