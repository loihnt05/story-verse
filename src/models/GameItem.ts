interface GameItem {
  id: number;
  title: string;
  image: string;
  views: string;
  price: number;
  isOwned: boolean;
  isFavorite?: boolean;
  tags: string[];
  rating: number;
}