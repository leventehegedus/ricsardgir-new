import { IConcert } from "../../types";

export const Concert: React.FC<IConcert> = (props) => {
  return (
    <div className={`flex flex-col row-span-${props.height}`}>
      <div className="h-[calc(100%-32px)] w-full">
        <img src={"./concerts/" + props.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="./concerts/empty.jpg";
          }}
          className="h-full w-full object-cover	object-top"
        />
      </div>
      <div className="bg-black text-white h-8">
        {props.id}. {props.title}, {props.location}, {props.year}{props.date}
      </div>
    </div>
  )
}

export default Concert;
