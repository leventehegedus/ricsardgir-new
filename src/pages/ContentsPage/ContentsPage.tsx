import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";
import ContentTile from "../../components/ContentTile/ContentTile";
import { TagDescriptionTile } from "../../components/TagDescriptionTile/TagDescriptionTile";

export const ContentsPage: React.FC = () => {

  // const [contents, setContents] = useState<IContent[]>([]);
  // const [tags, setTags] = useState<string[]>([]);

  // useEffect(() => {
  //   fetch("/data/contents.ts")
  //     .then(res => res.json())
  //     .then(response => {
  //       setContents(response)
  //       let tagArray: string[] = []
  //       response.forEach((res: IContent) => {
  //         if (res.tags) {
  //           res.tags.forEach((tag: string) => {
  //             if (tagArray.indexOf(tag) < 0) {
  //               tagArray.push(tag)
  //             }
  //           });
  //         }
  //       });
  //       setTags(tagArray)
  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   window.scroll(0, 0)
  // }, [])

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-8-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = [];
  const translateToHun = (engExpr: string) => {
    switch (engExpr) {
      case 'days':
        return 'nap'
      case 'hours':
        return 'óra'
      case 'minutes':
        return 'perc'
      case 'seconds':
        return 'másodperc'
      default:
        return null;
    }
  }

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={index}>
        {timeLeft[interval]} {translateToHun(interval)}{" "}
      </div>
    );
  });

  return (
    <div className="p-4 max-w-7xl	m-auto">
      {/* {tags.map((tag, index) => {
        console.log(contents)
        return (
          <div key={index} className="p-4 max-w-7xl	m-auto md:grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] grid-flow-row-dense gap-x-8 gap-y-8">
            <TagDescriptionTile tag={tag} />
            {contents.filter((content) => content.tags?.includes(tag)).slice(0, 12).map(content => {
              return <ContentTile {...content} />
            })}
            <Link to={`/tag/${tag}`} className="text-white hover:text-gir-500">
              <div>Kattints ide a további tartalmakért a <span className="text-gir-500 font-black">{tag}</span> témában</div>
            </Link>
            <div className="row-span-1 h-16 col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-4">
            </div>
          </div>
        )
      })} */}
      <div className="text-gir-500 text-center text-3xl font-black">hamarosan</div>
      <div className="text-center">
        <h1>Nemzetközi  Ricsárdgír nap {year}</h1>
        <div className="mt-4 mb-4">
          <img className="text-center h-64 m-auto" src="./girnap.jpeg" />
        </div>
        {timerComponents.length ? timerComponents : <span>Boldog nemzetközi Ricsárdgír napot!</span>}
      </div>
    </div>
  )
}

export default ContentsPage;
