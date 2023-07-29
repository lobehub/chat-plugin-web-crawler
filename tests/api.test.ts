import Api from '../api/index';
import type { VercelRequest, VercelResponse } from '@vercel/node';

test('Api', async () => {
  const data = await Api(
    <VercelRequest>(<unknown>{}),
    <VercelResponse>(<unknown>{
      json: () => {},
    }),
  );
  expect(data).toEqual('hello');
});
