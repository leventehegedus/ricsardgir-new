import { animations } from "../../data/animations";
const movieStoryBlock = [
  {
    text: "Nincsen Sárkány",
    img: "",
    title: "The Ricsárdgír movie",
    size: "col-span-1"
  },
  {
    text: "Dark Side of the moon",
    img: "",
    title: "",
    size: "col-span-3 row-span-2"
  },
  {
    text: "Rise of the Koala",
    img: "",
    title: "",
    size: "col-span-3"
  },
  {
    text: "My horse is going to die",
    img: "",
    title: "",
    size: "col-span-2 row-span-2"
  },
  {
    text: "A forgatókönyv megszületése előtt volt szó arról is, hogy mi egyáltalán nem szereplünk a filmben, csak csinálunk egy musicalt. Ezen az úton indultunk el, de valahogy sosem találtuk meg azt az egyensúlyt, amiben a trash, a profi mozis élmény, a Ricsárdgír, a humor és a meglepetés együtt tudott volna élni.",
    img: "",
    title: "",
    size: "row-span-3"
  },
  {
    text: "Ezután egyértelmű volt, hogy a főszereplők mi legyünk. Éva, Edina, Flóra, Andris, Laci és Dani.",
    img: "",
    title: "",
    size: ""
  },
  {
    text: "",
    img: "/movie/03.jpg",
    title: "",
    size: "row-span-2"
  },
  {
    text: "Az a megállapítás is hamar megszületett, hogy ez a film elsősorban egy klipmozi legyen. Vagyis különálló dalszövegeket, zenéket kapcsoljunk úgy össze egy egész estés filmmé, hogy ezek a klipek amúgy külön is megállják a helyüket. Így elsősorban a klipeket találtuk ki és írtuk meg, ccsak ezután húztunk fel egy cselekményt, és kötöttük össze a különböző klipeket dramaturgiailag.",
    img: "",
    title: "",
    size: "col-span-3"
  },
  {
    text: "Nagyon izgalmas kísérlet volt, hogyan írjunk jeleneteket látszólag össze nem függő klipekhez.",
    img: "",
    title: "",
    size: ""
  }
]

export const MusicPage: React.FC = () => {
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const renderStoryBlock = (block: {
    text: string,
    img: string,
    title: string,
    size: string
  }, id: number) => {
    return (
      <div className={`flex flex-col border border-solid border-white overflow-hidden shadow-lg text-white bg-black p-2 transition-all duration-1000 ease-in-out hover:invert hover:scale-105 ${Math.random() > 0.5 ? "hover:rotate-1" : "hover:rotate-[-1deg]"} ${block.size}`}
        data-aos={animations[randomAnimation]}
        key={id}
      >
        <span className="font-black uppercase">{block.title}</span>
        <span>{block.text}</span>
        {block.img &&
          <img src={block.img} className="h-full w-full object-cover object-top" />
        }
      </div>
    )
  }

  return (
    <div className="p-4 max-w-7xl	m-auto">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] gap-x-8 gap-y-8">
        {movieStoryBlock.map((block, index) => {
          return renderStoryBlock(block, index)
        })
        }
      </div>
    </div>
  )
}

export default MusicPage;
