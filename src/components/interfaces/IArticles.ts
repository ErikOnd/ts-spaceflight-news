export interface IArticles {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: string[] | Date[];
  events: any[];
}
