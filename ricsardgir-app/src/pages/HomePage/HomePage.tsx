import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";


export const HomePage: React.FC = () => {

  const fn = (e: any) => {
    let tooltip: HTMLElement[] = Array.from(document.querySelectorAll('.bulikrumpli-tooltip'));
    for (let i = 0; i < tooltip.length; i++) {
      tooltip[i].style.left = e.pageX + 'px';
      tooltip[i].style.top = e.pageY + 'px';
    }
  }

  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 right-0 bottom-0 font-black text-9xl flex justify-center items-center uppercase z-index-minus-1">
        <span>ricsárdgír</span>
      </div>
      <div>
        <div className="bulikrumpli m-16 border border-black overflow-hidden rounded-lg shadow-lg"
          onMouseMove={fn}>
          <span className="bulikrumpli-tooltip">bulikrumpli</span>
        </div>
        <div className="bulikrumpli float-right m-16 border border-black overflow-hidden rounded-lg shadow-lg"
          onMouseMove={fn}>
          <span className="bulikrumpli-tooltip">sulibusz</span>
        </div>
        <div className="bulikrumpli m-16 border border-black overflow-hidden rounded-lg shadow-lg"
          onMouseMove={fn}>
          <span className="bulikrumpli-tooltip">bulikrumpli</span>
        </div>
        <div className="bulikrumpli float-right m-16 border border-black overflow-hidden rounded-lg shadow-lg"
          onMouseMove={fn}>
          <span className="bulikrumpli-tooltip">sulibusz</span>
        </div>
        <Footer />
      </div>
    </>
  )
}


export default HomePage;
