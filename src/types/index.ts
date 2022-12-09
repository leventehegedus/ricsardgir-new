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

export interface ISong {
  id: number,
  albumId: number,
  title: "string",
  duration: number,
  contributors: string[],
  spotifyLink?: string,
  concertVideos?: number[],
  articles?: IArticle[],
  videoClip?: string
}

export interface IAlbum {
  id: string,
  title: string,
  year: number,
  spotifyLink: string,
  articles?: IArticle[],
  contributors?: string[],
  albumCover?: string,
  songIds: number[]
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
