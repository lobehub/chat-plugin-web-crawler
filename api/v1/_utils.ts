import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import { NodeHtmlMarkdown } from 'node-html-markdown';

const BASE_URL = process.env.BROWSERLESS_URL ?? 'https://chrome.browserless.io';
const BROWSERLESS_TOKEN = process.env.BROWSERLESS_TOKEN;

export const htmlToMarkdown = (html: string, url: string) => {
  const doc = new JSDOM(html, { url });

  const article = new Readability(doc.window.document).parse();
  const content = NodeHtmlMarkdown.translate(article?.content || '', {});

  return { ...article, content };
};

const runner = async ({ url }: { url: string }) => {
  const input = {
    gotoOptions: { waitUntil: 'networkidle2' },
    url,
  };

  try {
    const res = await fetch(`${BASE_URL}/content?token=${BROWSERLESS_TOKEN}`, {
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const html = await res.text();

    const article = htmlToMarkdown(html, url);

    return { content: article.content, title: article?.title, url, website: article?.siteName };
  } catch (error) {
    console.error(error);
    return { content: '抓取失败', errorMessage: (error as any).message, url };
  }
};

export default runner;
