import { useRouter } from 'next/router';
import { PageContainer, PageHeading } from '../../components/PageContainer';

export default function RestaurantMenuPage() {
  const router = useRouter();
  const { restaurant } = router.query;
  return (
    <PageContainer>
      <PageHeading>{restaurant} Menu</PageHeading>
      <p>This is the menu page for the restaurant: <b>{restaurant}</b>.</p>
    </PageContainer>
  );
}
