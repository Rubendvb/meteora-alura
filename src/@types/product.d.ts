export interface ProductProps {
  id: number;
  title?: string;
  description?: string;
  price?: string;
  image?: ImagesProps;
}

export interface ImagesProps {
  mobile: string;
  tablet: string;
  desktop: string;
}
