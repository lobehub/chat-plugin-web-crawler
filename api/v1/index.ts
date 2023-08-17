import type { VercelRequest, VercelResponse } from '@vercel/node';

import fetchContent from './_utils';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405);
  }

  const data = typeof req.body === 'string' ? JSON.parse(JSON.parse(req.body)) : req.body;

  const result = await fetchContent(data);

  res.send(result);
}
