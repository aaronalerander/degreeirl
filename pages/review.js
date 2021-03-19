import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';

import DashboardShell from '@/components/DashboardShell';

import ReviewForm from '@/components/ReviewForm';

const ReviewPage = () => {
  return (
    <DashboardShell>
      <ReviewForm />
    </DashboardShell>
  );
};

export default ReviewPage;
