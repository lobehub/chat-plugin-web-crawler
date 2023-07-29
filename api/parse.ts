import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { NodeHtmlMarkdown } from 'node-html-markdown';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { html, url } = req.body;
  const doc = new JSDOM(html, { url });

  const article = new Readability(doc.window.document).parse();

  const content = NodeHtmlMarkdown.translate(article?.content || '', {});

  res.send({ ...article, content });
}
