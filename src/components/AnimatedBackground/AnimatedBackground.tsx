import React, { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AnimatedBackground: React.FC = () => {

  const app = React.useRef<HTMLInputElement>(null);


  const renderKoalas = () => {
    let lis = [];
    for (let i = 0; i < 20; i++) {
      lis.push(
        <li key={i}>
          <img src="/fav.png" />
        </li>
      )
    }
    return lis;
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.registerPlugin(ScrollTrigger);
      gsap.to('img', {
        rotation: -5400,
        ease: 'none',
        scrollTrigger: {
          scrub: 1,
          start: 'top top',
          end: '+=50000',
        }
      });

      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.circles', {
        rotation: 450,
        ease: 'none',
        scrollTrigger: {
          scrub: 1,
          start: 'top top',
          end: '+=50000',
        }
      });

    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="area" ref={app}>
      <ul className="circles">
        {renderKoalas()}
      </ul>
    </div >
  )
}

export default AnimatedBackground;
