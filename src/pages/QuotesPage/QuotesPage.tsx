import { useState, useEffect } from "react";
import { IQuote } from "../../types";


export const QuotesPage: React.FC = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [quoteNumber, setQuoteNumber] = useState<number>();

  useEffect(() => {
    generateRandomQuote();
  }, [])

  useEffect(() => {
    fetch("/data/quotes.ts")
      .then(res => res.json())
      .then(response => {
        setQuotes(response);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  const generateRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
    if (randomNumber === quoteNumber) {
      generateRandomQuote();
    } else {
      setQuoteNumber(randomNumber);
    }
  }

  const renderButton = () => {
    return (
      <button onClick={() => { generateRandomQuote() }} className="border-solid border-white border hover:text-gir-500 hover:font-black p-2 shadow-[2px_2px_0_rgb(255,255,255)] hover:shadow-[0px_0px_0_rgb(255,255,255)] hover:mt-[2px] hover:mb-[-2px] hover:ml-[2px] hover:mr-[-2px]">Kérek egy idézetet</button>
    )
  }

  const getBackgroundColor = () => {
    let hue = Math.floor(Math.random() * 10) + 345;
    let saturation = Math.floor(Math.random() * 60) + 40;
    let light = Math.floor(Math.random() * 35) + 30;
    return 'hsl(' + hue + ',' + saturation + '%,' + light + '%)';
  }

  const renderQuotes = () => {
    if (quotes && typeof quoteNumber === 'number' && quotes.length > 0) {
      return (
        <div className="card w-[300px] h-[300px] md:w-[450px] md:h-[450px] m-auto" style={{ backgroundColor: getBackgroundColor() }}>
          <div className="card__face w-full h-full font-black text-xl border border-white border-8 text-center flex justify-center items-center p-4">
            <span className={`z-10 ${quotes[quoteNumber].text.length > 100 && "text-left"}`}>„{quotes[quoteNumber]?.text}”</span>
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
              <img className="h-full w-full object-cover object-top" src={`/concerts/empty_${Math.floor(Math.random() * 10) + 1}.jpg`} />
            </div>
          </div>
          <div className="card__face card__face--back w-full h-full border border-white border-8 text-center flex justify-center items-center">
            {quotes[quoteNumber]?.quoteFrom}
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <div className="m-8 text-center">
        {renderButton()}
      </div>
      {renderQuotes()}
    </>
  )
}

export default QuotesPage;
