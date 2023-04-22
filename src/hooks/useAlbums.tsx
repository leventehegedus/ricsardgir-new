import { useState, useEffect } from 'react';
import { IAlbum } from "../types";

export function useAlbums() {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    fetch("/data/albums.ts")
      .then(res => res.json())
      .then(response => {
        setAlbums(response);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return albums;
}

