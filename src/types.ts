export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'beef' | 'chicken' | 'combos' | 'fries' | 'drinks' | 'sauces';
  isViral?: boolean;
  isLimited?: boolean;
}

export interface Review {
  id: string;
  name: string;
  handle: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  status: 'open' | 'closed';
}
