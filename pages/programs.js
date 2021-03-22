import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';
import fetcher from '@/utils/fetcher';

import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';

import ProgramsTable from '@/components/ProgramsTable';
import EmptyProgramsTable from '@/components/EmptyProgramsTable';

const ProgramsPage = () => {
  const { data } = useSWR('/api/programs', fetcher);
  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <EmptyProgramsTable></EmptyProgramsTable>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <ProgramsTable programs={data.programs}></ProgramsTable>
    </DashboardShell>
  );
};

export default ProgramsPage;
