export interface Comment{
  body: string;
  user: {
    name: string;
    image: string;
    date: string;
  };
}

export interface Post {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  featuredImage: string | null;
  comments?: Comment[];
}