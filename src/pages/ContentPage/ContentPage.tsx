import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive'
import { IContent } from "../../types";

export const ContentPage: React.FC = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState<IContent>();
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    fetch("/data/contents.ts")
      .then(res => res.json())
      .then(response => {
        setContent(response.filter((res: { id: number; }) => res.id === Number(id))[0])
      }).catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    console.log('content', content)
  }, [content])

  return (
    <div className="max-w-5xl pb-8 pt-8 text-white m-auto">
      {content ?
        <div>
          <div className="mb-4">
            <div className="uppercase font-black text-center">
              <a href={content.url} target="_blank">{content.title}</a>
            </div>
            <div className="text-center mb-4">
              {content?.subtitle}
            </div>
            <div className="relative">
              <img src={content.img} className="m-auto max-w-full mb-4" />
            </div>
            {
              content.description &&
              <div className="mb-4" dangerouslySetInnerHTML={{ __html: content.description }} />
            }
            {content.ytIds?.map(ytId => {
              return (
                <div className="flex justify-center mb-4">
                  {isTabletOrBigger ?
                    <YouTube videoId={ytId} className="max-w-full" />
                    :
                    <YouTube videoId={ytId} className="max-w-full" opts={{ widith: '100%' }} />
                  }
                </div>
              )
            })
            }
          </div>

          <div className="font-black">
            {content.tags?.map(tag => {
              return (
                <Link to={`/tag/${tag}`} className="hover:text-red-500">#{tag} </Link>
              )
            })
            }
          </div>
          <div className="font-black flex justify-between items-center">
            <div onClick={() => navigate(-1)} className="hover:text-red-500">Vissza</div>
          </div>
        </div>
        :
        <ErrorPage />
      }
    </div>
  )
}

export default ContentPage;
