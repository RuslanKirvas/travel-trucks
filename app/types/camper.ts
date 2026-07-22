export interface FetchCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: "alcove" | "semi_integrated" | "integrated";
  length: string;
  height: string;
  width: string;

  tank: string;
  consumption: string;
  transmission: "automatic" | "manual";
  engine: "petrol" | "diesel" | "hybrid" | "electric";
  amenities: Amenity[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;

  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];

  gallery: {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
  }[];
}
export type Amenity =
  | "automatic"
  | "ac"
  | "petrol"
  | "kitchen"
  | "radio"
  | "alcove"
  | "bathroom"
  | "tv"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";
