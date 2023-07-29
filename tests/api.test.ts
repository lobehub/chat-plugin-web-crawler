import Api from '../api/parse';
import type { VercelRequest, VercelResponse } from '@vercel/node';

test.skip('Api', async () => {
  const data = await Api(
    <VercelRequest>(<unknown>{}),
    <VercelResponse>(<unknown>{
      json: () => {},
    }),
  );
  expect(data).toEqual('hello');
});
