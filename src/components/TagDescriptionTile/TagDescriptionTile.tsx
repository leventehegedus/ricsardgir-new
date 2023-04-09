import { Link } from "react-router-dom"
import { ITagDescriptionTileProps } from "../../types"
import { useEffect, useState } from "react"

export const TagDescriptionTile: React.FC<ITagDescriptionTileProps> = (props) => {

  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("/data/tags.ts")
      .then(res => res.json())
      .then(response => {
        let tags = response.filter((res: { tag: string; }) => res.tag === props.tag);
        if (tags.length) {
          setDescription(tags[0].description)
        } else {
          setDescription("Ehhez a taghez nincs leírás, szóval ez itt egy zsákbamacska")
        }
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="md:h-16 row-span-2 col-span-2 mb-8 md:mb-0">
      <Link to={`/tag/${props.tag}`} className="text-3xl text-gir-500 font-black">#{props.tag}</Link>
      <div className="text-base text-white">{description}</div>
    </div>

  )
}

export default TagDescriptionTile
