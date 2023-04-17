import { useState, useEffect } from 'react';

const emptyImages: string[] = [
  "/concerts/empty.jpg",
  "/concerts/empty_2.jpg",
  "/concerts/empty_3.jpg",
  "/concerts/empty_4.jpg",
  "/concerts/empty_5.jpg",
  "/concerts/empty_6.jpg",
  "/concerts/empty_7.jpg"
]

export function useRandomEmptyImage() {
  const [emptyImage, setEmptyImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * emptyImages.length);
    setEmptyImage(emptyImages[randomIndex]);
  }, []);

  return emptyImage;
}