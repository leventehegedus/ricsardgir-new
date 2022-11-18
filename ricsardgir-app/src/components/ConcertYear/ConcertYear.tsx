import { IConcertYear } from "../../types";
import { Concert } from "../../components/Concert/Concert";

export const ConcertYear: React.FC<IConcertYear> = (props) => {
  return (
    <div>
      {props.year}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] auto-rows-[260px] grid-flow-row-dense gap-x-8 gap-y-16">
        {props ?.content.map((concert, index) => {
          return (
            <Concert {...concert} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default ConcertYear;
