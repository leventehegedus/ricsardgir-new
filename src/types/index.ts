export interface IConcert {
  id: number,
  title: string,
  description: string,
  year: number,
  date: string,
  locationId: number,
  img: string,
  size: string,
  ytIds?: string[]
}

export interface IConcertYear {
  year: number,
  content: IConcert[]
}

export interface IArticle {
  title: string,
  url: string
}

export interface IVideo {
  id: number,
  title: string,
  year: number,
  ytId: string,
  director?: string,
  highlights?: IArticle[],
  articles?: IArticle[]
}

export interface IQuote {
  text: string,
  quoteFrom: string
}

export interface ITrack {
  duration_ms: number,
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  name: string,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string,
  image?: string
}

export interface IAlbum {
  album_type: string,
  additional_info: string[],
  shop_link: string,
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  images: [
    {
      height: number,
      url: string,
      width: number
    }
  ],
  name: string,
  release_date: string,
  total_tracks: number,
  type: string,
  uri: string,
  tracks: {
    href: string,
    items: ITrack[]
  }
}

export interface IMerch {
  id: number,
  title: string,
  img: string,
  price: number,
  currency: string,
  link: string,
  description: string
}

export interface IRoute {
  id: number,
  title: string,
  description: string,
  img: string,
  gif: string,
  url: string
}

export interface ILocation {
  id: number,
  city: string,
  place: string,
  latlng: [number, number]
}

export interface ITinderProfile {
  id: string,
  name: string,
  yearOfBirth: number,
  location: string,
  shortBio: string,
  longBio: string,
  images: string[]
}

export interface IMovieStoryBlock {
  text: string,
  img: string,
  title: string,
  size: string
}

export interface IContent {
  id: number,
  title: string,
  url: string,
  subtitle?: string,
  description?: string,
  img?: string,
  ytIds?: string[],
  tags?: string[]
}