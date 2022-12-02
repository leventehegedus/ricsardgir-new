import { IConcertYear } from "../../types";
import { ConcertTile } from "../ConcertTile/ConcertTile";

export const ConcertYear: React.FC<IConcertYear> = (props) => {

  return (
    <div className="p-4 max-w-7xl	m-auto">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] auto-rows-[160px] grid-flow-row-dense gap-x-8 gap-y-8">
        <div className="md:h-16 font-black text-gir-500 text-9xl row-span-1 col-span-2 lg:col-span-4 flex justify-center" id={`year${props.year}`}/>
        <div className="md:h-16 font-black text-gir-500 text-9xl row-span-1 col-span-2 lg:col-span-4 flex justify-center">{props.year}</div>
        {props ?.content.sort((a, b) => b.id - a.id).map((concert, index) => {
          return (
            <ConcertTile {...concert} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default ConcertYear;
