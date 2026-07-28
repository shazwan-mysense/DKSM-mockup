/**
 * Company news for the Knowledge Centre (client direction, 14 July 2026:
 * the Knowledge Centre carries Guides/Education, Company News, General
 * FAQs, and Awards/Recognition).
 *
 * No news items are published yet — the section shows an honest
 * empty-state panel until entries are added here. Do NOT fabricate news.
 *
 * TODO: Add real announcements as they are supplied, e.g.:
 * {
 *   id: 'example-slug',
 *   date: '2026-08-01',            // ISO date
 *   title: 'Announcement title',
 *   summary: 'One or two sentences.',
 *   body: ['Paragraph one.', 'Paragraph two.'],
 * }
 */

export interface NewsItem {
  id: string
  date: string
  title: string
  summary: string
  body: string[]
}

export const news: NewsItem[] = []
