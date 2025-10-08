import { useLoaderData } from '@remix-run/react';

export async function loader() {
  return {
    phone: '(800) 867-5309',
  };
}

export default function Phone() {
  const { phone } = useLoaderData<typeof loader>();

  return <p>Phone: {phone}</p>;
}
