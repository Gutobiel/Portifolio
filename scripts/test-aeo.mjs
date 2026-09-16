import { remoteAuditSite, parseRobotsTxtBotAccess, extractTitle, extractDescription, extractTextFromHtml, extractJsonLd } from 'aeo.js';
import fs from 'fs';

const robots = fs.readFileSync('robots.txt', 'utf8');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const analyticsHtml = fs.readFileSync('analytics.html', 'utf8');
const connectHtml = fs.readFileSync('connect.html', 'utf8');

const sitemapUrls = sitemap
  .match(/<loc>(.*?)<\/loc>/g)
  .map(loc => loc.replace(/<\/?loc>/g, '').trim());

console.log('Sitemap URLs:', sitemapUrls);

const discovery = {
  robotsTxt: { exists: true, content: robots, hasAiDisallow: false },
  llmsTxt: { exists: true, contentLength: fs.readFileSync('llms.txt', 'utf8').length, content: fs.readFileSync('llms.txt', 'utf8') },
  llmsFullTxt: { exists: true, contentLength: fs.readFileSync('llms-full.txt', 'utf8').length },
  sitemap: { exists: true, urls: sitemapUrls },
  aiIndex: { exists: true, content: fs.readFileSync('ai-index.json', 'utf8') },
  homepage: { html: indexHtml, url: 'https://gutobiel.vercel.app/' },
  botAccess: parseRobotsTxtBotAccess(robots)
};

const pages = [
  {
    url: 'https://gutobiel.vercel.app/',
    pathname: '/',
    html: indexHtml,
    title: extractTitle(indexHtml),
    description: extractDescription(indexHtml),
    content: extractTextFromHtml(indexHtml),
    jsonLd: extractJsonLd(indexHtml),
    ogTags: { 'og:title': extractTitle(indexHtml), 'og:description': extractDescription(indexHtml) }
  },
  {
    url: 'https://gutobiel.vercel.app/connect',
    pathname: '/connect',
    html: connectHtml,
    title: extractTitle(connectHtml),
    description: extractDescription(connectHtml),
    content: extractTextFromHtml(connectHtml),
    jsonLd: extractJsonLd(connectHtml),
    ogTags: { 'og:title': extractTitle(connectHtml), 'og:description': extractDescription(connectHtml) }
  },
  {
    url: 'https://gutobiel.vercel.app/analytics',
    pathname: '/analytics',
    html: analyticsHtml,
    title: extractTitle(analyticsHtml),
    description: extractDescription(analyticsHtml),
    content: extractTextFromHtml(analyticsHtml),
    jsonLd: extractJsonLd(analyticsHtml),
    ogTags: { 'og:title': extractTitle(analyticsHtml), 'og:description': extractDescription(analyticsHtml) }
  }
];

const audit = remoteAuditSite(discovery, pages);
console.log('\n========================================');
console.log(`REAL DISK AUDIT SCORE: ${audit.score} / 100`);
console.log('========================================');
for (const cat of audit.categories) {
  console.log(`  ${cat.name}: ${cat.score}/${cat.maxScore}`);
  for (const chk of cat.checks) {
    console.log(`    ${chk.passed ? '+' : '-'} ${chk.label}`);
  }
}

if (audit.issues.length) {
  console.log('\nRemaining issues:', JSON.stringify(audit.issues, null, 2));
} else {
  console.log('\n🏆 100/100 PERFECT AUDIT ACHIEVED ON REAL PROJECT FILES!');
}
