import { useState, useEffect } from 'react';

const animations = [
  "zoom-in",
  "zoom-in-down",
  "flip-left",
  "flip-right",
  "flip-up",
  "flip-down"
];

export function useRandomAnimation() {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    setAnimation(animations[randomIndex]);
  }, []);

  return animation;
}