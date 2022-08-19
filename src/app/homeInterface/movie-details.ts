export interface MovieDetails {
  poster_path: string;
  title: string;
  overview: string;
  tagline: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genres: [
    {
      name: string;
    }
  ];
}
