import { IConcertYear } from "../../types";
import { ConcertTile } from "../ConcertTile/ConcertTile";

export const ConcertYear: React.FC<IConcertYear> = (props) => {

  return (
    <div className="p-4 max-w-7xl	m-auto xl:pl-0 xl:pr-0">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
        <div className="md:h-16 font-black text-gir-500 text-9xl row-span-1 col-span-2 lg:col-span-4 flex justify-center" id={`year${props.year}`} />
        <div className="md:h-16 font-black text-gir-500 text-9xl row-span-1 col-span-2 lg:col-span-4 flex justify-center">{props.year}</div>
        {props.videoFilter ?
          props?.content.sort((a, b) => b.id - a.id).map((concert, index) => {
            if (concert.ytIds?.length) {
              return (
                <ConcertTile {...concert} key={index} />
              )
            }
          })
          :
          props?.content.sort((a, b) => b.id - a.id).map((concert, index) => {
            return (
              <ConcertTile {...concert} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ConcertYear;