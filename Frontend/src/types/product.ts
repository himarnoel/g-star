export interface Product {
  id: number;
  external_id: string;
  variants: number;
  synced: number;
  name: string;
  thumbnail_url: string;
  price:string;
  retailPrice?: string;
  size: string
}