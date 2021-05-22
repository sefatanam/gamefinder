export interface Game {
  trailers: Array<Trailer>;
  id: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publisher>;
  rating: Array<Rating>;
  screenshots: Array<Screenshot>;
}


export interface APIResponse<T> {
  results: Array<T>
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  }
}

interface Publisher {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface Trailer {
  id: number;
  image: string;
  preview: string;
  data: {
    min: string;
    max: string;
  }
}
