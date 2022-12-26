import { useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export const HomePageParallaxElement: React.FC = props => {

  useEffect(() => {
    console.log(props);
  }, [])

  const fn = (e: any) => {
    let tooltip: HTMLElement[] = Array.from(document.querySelectorAll('.tooltip'));
    for (let i = 0; i < tooltip.length; i++) {
      tooltip[i].style.left = e.pageX + 'px';
      tooltip[i].style.top = e.pageY + 'px';
    }
  }

  const toggleBgEnter = (block: any) => {
    let htmlBlock = document.getElementById(block.title)
    if (htmlBlock) {
      htmlBlock.style.backgroundImage = `url(${block.gif})`;
    }
  }
  const toggleBgLeave = (block: any) => {
    let htmlBlock = document.getElementById(block.title)
    if (htmlBlock) {
      htmlBlock.style.backgroundImage = `url(${block.img})`;
    }
  }

  const render40content = () => {
    let content: string = "";
    for (let i = 0; i < 30; i++) {
      if (Math.random() > 0.3) {
        content = content.concat(props.title)
      } else {
        content = content.concat(props.emoji);
      }
    }
    return content;
  }


  return (
    <Link to={props.url} className={`flex flex-col shadow-lg h-32 md:h-64 w-auto md:w-full h-full bg-no-repeat m-auto bg-center col-span-${props.id % 3 + 1} row-span-${props.id % 2 + 1}`}
      // onMouseEnter={() => {
      //   toggleBgEnter(props)
      // }}
      // onMouseLeave={() => {
      //   toggleBgLeave(props)
      // }}
      // style={{ backgroundImage: `url(${props.img})` }}
      id={props.title}
      key={props.id}
    >
      <ParallaxBanner layers={[
        {
          speed: 30,
          children: (
            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-wrap break-all">
              <div className="text-6xl text-white uppercase font-black hover:text-gir-500">
                {render40content()}
              </div>
            </div>
          )
        }
      ]}
        className="h-full"
      >
      </ParallaxBanner>
    </Link >
  )

  return <div ref={parallax.ref} />;
}
export default HomePageParallaxElement;
