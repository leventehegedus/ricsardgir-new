import { merchs } from "../../data/merch";
import { animations } from "../../data/animations";


export const MerchPage: React.FC = () => {

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
      {merchs ?.map((merch) => {
        return (
          <div className="card row-span-2 col-span-2">
            <a href={merch.link}
              className="card__face flex flex-col border border-black overflow-hidden shadow-lg"
              key={merch.id}
              data-aos={animations[Math.floor(Math.random() * animations.length)]}
              target="__blank">
              <div className="h-full w-full overflow-hidden">
                <img src={"./merch/" + merch.img} className="h-full w-full object-cover	object-center transition-all duration-1000 ease-in-out" />
              </div>
              <div className="bg-black p-2 text-xs">
                <div>
                  {merch.title} - {merch.price} {merch.currency}
                </div>
              </div>
            </a>
            <div className="card__face card__face--back">
              <a href={merch.link}
                className="flex h-full w-full flex-col border border-black overflow-hidden shadow-lg"
                target="__blank">
                <div className="flex justify-center items-center h-full w-full overflow-hidden bg-black">
                  <div className="p-4">{merch.description}</div>
                </div>
                <div className="bg-black p-2 text-xs">
                  <div>
                    {merch.title} - {merch.price} {merch.currency}
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default MerchPage;
