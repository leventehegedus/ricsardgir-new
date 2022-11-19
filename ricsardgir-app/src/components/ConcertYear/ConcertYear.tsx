import { IConcertYear } from "../../types";
import { Concert } from "../../components/Concert/Concert";

export const ConcertYear: React.FC<IConcertYear> = (props) => {
  return (
    <div className="p-4 max-w-7xl	m-auto">
      <div className="h-16">{props.year}</div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] auto-rows-[160px] grid-flow-row-dense gap-x-8 gap-y-16">
        {props ?.content.sort((a,b) => b.id - a.id).map((concert, index) => {
          return (
            <Concert {...concert} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default ConcertYear;
