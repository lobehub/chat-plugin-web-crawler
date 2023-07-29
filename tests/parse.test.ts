import { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'node:fs';
import * as path from 'node:path';

import { expect } from 'vitest';
import Api from '../api/parse';

describe('html-to-markdown', () => {
  it('Zhihu', async () => {
    const html = readFileSync(path.join(__dirname, './html/zhihu.html'), { encoding: 'utf8' });

    const data = await Api(
      <VercelRequest>(<unknown>{
        body: {
          html,
          url: 'https://zhuanlan.zhihu.com/p/641434725',
        },
      }),
      <VercelResponse>(<unknown>{
        send: () => {},
      }),
    );

    expect(data).toMatchSnapshot();
  });
});
