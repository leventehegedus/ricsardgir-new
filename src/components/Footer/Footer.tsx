
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaSpotify, FaBandcamp, FaSoundcloud, FaTumblr } from "react-icons/fa";

interface IUrl {
  name: string,
  url: string,
  text: string
}

const urls: IUrl[] = [
  {
    name: "facebook",
    url: "https://facebook.com/ricsardgir",
    text: "ricsardgir"
  },
  {
    name: "instagram",
    url: "https://instagram.com/ricsardgir",
    text: "ricsardgir"
  },
  {
    name: "youtube",
    url: "https://youtube.com/user/RCHRDGR",
    text: "RCHRDGR"
  },
  {
    name: "email",
    url: "mailto:ricsardgir@gmail.com",
    text: "ricsardgirzenekar@gmail.com"
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/artist/1F0VVhw2sUlJONnuGXbnQm",
    text: "spotify"
  },
  {
    name: "bandcamp",
    url: "https://rcsrdgr.bandcamp.com",
    text: "rcsrdgr"
  },
  {
    name: "soundcloud",
    url: "https://soundcloud.com/ricsardgir",
    text: "ricsardgir"
  }
]


export const Footer: React.FC = () => {

  const renderLink = (url: IUrl) => {
    return (
      <a key={url.url} href={url.url} target="_blank" className="text-white hover:text-gir-500 flex justify-center items-center gap-x-2">
        <span>{renderLogo(url.name)}</span>
        <span>{url.text}</span>
      </a>
    )
  }

  const renderLogo = (name: string) => {
    switch (name) {
      case 'facebook':
        return <FaFacebook />
      case 'instagram':
        return <FaInstagram />
      case 'youtube':
        return <FaYoutube />
      case 'email':
        return <FaEnvelope />
      case 'spotify':
        return <FaSpotify />
      case 'bandcamp':
        return <FaBandcamp />
      case 'soundcloud':
        return <FaSoundcloud />
      default:
        return null;
    }
  }

  return (
    <div className="p-4 w-full mt-16 bg-black text-xs md:text-base">
      <div className="flex justify-center items-center gap-x-4 flex-wrap">
        {urls && urls.map(url => {
          return renderLink(url)
        })}
        <div>
          <a href="http://leventehegedus.hu" target="_blank" className="text-white hover:text-gir-500">
            <span>Készítette sok szeretettel és még több pénzért (ja, nem): Hegedüs Levente</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
