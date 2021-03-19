import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';
import fetcher from '@/utils/fetcher';

import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';

import ProgramsTable from '@/components/ProgramsTable';

const ProgramsPage = () => {
  const { data } = useSWR('/api/programs', fetcher);

  if (!data) {
    return <DashboardShell></DashboardShell>;
  }

  return (
    <DashboardShell>
      <ProgramsTable programs={data.programs}></ProgramsTable>
    </DashboardShell>
  );
};

export default ProgramsPage;
