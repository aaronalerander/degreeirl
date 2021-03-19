import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Box, FormControl, Textarea, Button, Text } from '@chakra-ui/react';
import useSWR, { mutate } from 'swr';

//import { useAuth } from '@/lib/auth';
import { createFeedback } from '@/lib/db';
import fetcher from '@/utils/fetcher';
//import Feedback from '@/components/Feedback';
import DashboardShell from '@/components/DashboardShell';
//import SiteHeader from '@/components/SiteHeader';
//import LoginButtons from '@/components/LoginButtons';
import ReviewsTable from '@/components/ReviewsTable';

const ProgramReviewsPage = () => {
  const router = useRouter();
  const safeProgramId = router.query?.programId;
  const programId = safeProgramId ? safeProgramId[0] : null;

  const { data: programReviews } = useSWR(`/api/program/${programId}`, fetcher);
  console.log(programReviews);
  console.log(programReviews?.reviews);

  const allProgramReviews = programReviews?.reviews;

  //const { data: siteData } = useSWR(`/api/site/${siteId}`, fetcher);
  //const { data: feedbackData } = useSWR(feedbackApi, fetcher);

  /*const site = siteData?.site;
  const allFeedback = feedbackData?.feedback;*/

  /*const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      siteId,
      siteAuthorId: site.authorId,
      route: route || '/',
      author: user.name,
      authorId: user.uid,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending'
    };

    inputEl.current.value = '';
    createFeedback(newFeedback);
    mutate(
      feedbackApi,
      async (data) => ({
        feedback: [newFeedback, ...data.feedback]
      }),
      false
    );
  };*/

  /*const LoginOrLeaveFeedback = () =>
    user ? (
      <Button
        type="submit"
        isDisabled={!siteData || !feedbackData}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Leave Feedback
      </Button>
    ) : (
      <LoginButtons />
    );*/

  if (!programReviews) {
    return (
      <DashboardShell>
        <Text>Easter Egg</Text>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <ReviewsTable reviews={programReviews.reviews}></ReviewsTable>
    </DashboardShell>
  );
};

export default ProgramReviewsPage;

//
