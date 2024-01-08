import { redirect } from 'next/navigation';

interface Props {
  searchParams?: URLSearchParams;
}

const LOGIN_ROUTE = '/login';

const Page = async ({ searchParams }: Props) => {
  if (!searchParams) {
    redirect(LOGIN_ROUTE);
  }

  const queryParamString = new URLSearchParams(searchParams).toString();

  if (!queryParamString) {
    redirect(LOGIN_ROUTE);
  }

  redirect(`${LOGIN_ROUTE}?${queryParamString}`);
};

export default Page;
