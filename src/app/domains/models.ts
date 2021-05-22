export interface Game {
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
  short_screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}


export interface APIResponse<T> {
  results: Array<T>
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    id:number;
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

interface Screenshots {
  id: number;
  image: string;
}

interface Trailer {
  data: {
    max: string;
  }
}
