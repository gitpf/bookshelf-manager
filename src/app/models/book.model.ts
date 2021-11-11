export interface IBook {
  id: string;
  title: string;
  rating: number;
  thumbnail: string;
  borrowed: boolean;
  borrowedAt: Date;
  borrowedTo: string;
  pages: number;
  authors: string;
  year?: number;
}
