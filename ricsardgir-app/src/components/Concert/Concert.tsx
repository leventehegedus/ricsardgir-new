import { IConcert } from "../../types";
import './concerts.css';

const imgSizes: string[] = [
  "item-original",
  "item-small",
  "item-medium",
  "item-rect-left",
  "item-rect-middle",
  "item-rect-right"
]

const emptyImages: string[] = [
  "./concerts/empty.jpg",
  "./concerts/empty_2.jpg",
  "./concerts/empty_3.jpg",
  "./concerts/empty_4.jpg",
  "./concerts/empty_5.jpg",
  "./concerts/empty_6.jpg",
  "./concerts/empty_7.jpg"
]

export const Concert: React.FC<IConcert> = (props) => {

  const randomImg = Math.floor(Math.random() * imgSizes.length);
  const randomEmptyImg = Math.floor(Math.random() * emptyImages.length);

  return (
    <div className={`flex flex-col overflow-hidden rounded-lg ${props.size ? props.size : imgSizes[randomImg]}`}>
      <div className="h-full w-full overflow-hidden">
        <img src={"./concerts/" + props.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = emptyImages[randomEmptyImg];
          }}
          className="h-full w-full object-cover	object-top transition-all duration-1000 ease-in-out hover:invert hover:scale-105	hover:rotate-1"
        />
      </div>
      <div className="bg-black text-white p-2 text-xs">
        <div>
          {props.id}. {props.title}
        </div>
        <div>
          {props.location}, {props.year}. {props.date}
        </div>
      </div>
    </div>
  )
}

export default Concert;
