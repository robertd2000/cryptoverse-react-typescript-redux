export interface INewsType {
  readLink: string;
  totalEstimatedMatches: number;
  value: INews[];
}

export interface INews {
  _type: string;
  name: string;
  url: string;
  image: IImage;
  description: string;
  provider: { name: string; image: IImage }[];
  datePublished: string;
}

interface IImage {
  _type: string;
  thumbnail: {
    _type: string;
    contentUrl: string;
    width: number;
    height: number;
  };
}
