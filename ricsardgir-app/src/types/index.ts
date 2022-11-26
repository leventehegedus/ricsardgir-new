export interface IConcert {
  id: number,
  title: string,
  description: string,
  year: number,
  date: string,
  location: string,
  img: string,
  size: string
}

export interface IConcertYear {
  year: number,
  content: IConcert[]
}

export interface IVideo {
  id: number,
  title: string,
  year: number,
  ytId: string
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
