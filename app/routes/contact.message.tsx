import type { ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';

// non-GET requests
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const message = (formData.get('message') as string) || '';
  return { message };
}

export default function Message() {
  const data = useActionData<typeof action>();

  return (
    <div className="mt-10">
      {data?.message ? (
        <p>You sent a message: {data.message}</p>
      ) : (
        <Form method="post">
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea
              name="message"
              className="my-2 border-2 border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
            Send
          </button>
        </Form>
      )}
    </div>
  );
}
