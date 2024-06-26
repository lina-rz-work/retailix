interface Image {
  url: string;
}

interface Specifications {
  [key: string]: string | undefined;
}

export interface ProductProps {
  id: number;
  name: string;
  category: string;
  images: Image[];
  color: string;
  newPrice: number;
  oldPrice: number;
  specifications: Specifications;
  style: string;
  description: string;
  fullDescription: string;
}
