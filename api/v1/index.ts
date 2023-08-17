import type { VercelRequest, VercelResponse } from '@vercel/node';

import fetchContent from './_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405);
  }

  const result = await fetchContent(req.body);

  res.send(result);
}
