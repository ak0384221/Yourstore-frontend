export type TProduct = {
  _id: string;
  productId: string;

  // Basic Info
  name: string;
  description: string;
  brand: string;
  category: string;
  images: ProductImage[];

  // Variants
  variants: Variant[];

  // Pricing
  basePrice: number;
  discountPercent: number;
  salePercent: number;
  finalPrice: number;

  // Stock Info
  totalStock: number;
  sold: number;
  availableQuantity: number;

  // Status & Ratings
  status: "active" | "on hold" | "archived";
  rating: ProductRating;

  // Dates
  addedDate: string; // comes as ISO string
  updatedDate: string; // comes as ISO string
};

/* ---------------------------------- */
/* Sub Types                          */
/* ---------------------------------- */

export interface ProductImage {
  url: string;
  alt: string;
}

interface Variant {
  size: string;
  colors: ColorVariant[];
}

interface ColorVariant {
  colorName: string;
  stock: number;
}

interface ProductRating {
  average: number;
  count: number;
}

export type TProductRes = {
  ok: boolean;
  error: string | null;
  data: TProduct[] | [];
};
