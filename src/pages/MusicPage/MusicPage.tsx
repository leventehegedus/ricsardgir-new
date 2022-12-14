import { useState, useEffect, Fragment } from "react";
import { Track } from "../../components/Track/Track";
import { ITrack, IAlbum } from "../../types";

export const MusicPage: React.FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    fetch("/data/albums.ts")
      .then(res => res.json())
      .then(response => {
        setAlbums(response);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="p-4 max-w-7xl	m-auto">
      {albums &&
        <div className="md:grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] auto-rows-[8rem] gap-x-6 gap-y-6">
          {albums.map(album => {
            return (
              <Fragment key={album.id}>
                <a href={album.external_urls ?.spotify} target="_blank" className="md:h-16 font-black text-gir-500 item-small">
                  <div className="text-3xl">{album.name}</div>
                  <br />
                  <div className="text-2xl text-white mb-4 md:mb-0">{album.release_date}</div>
                </a>
                {
                  album.tracks.items.map((track: ITrack) => <Track key={track.id} {...track} image={album.images[0].url} />)
                }
              </Fragment>
            )
          }
          )}
        </div>
      }
    </div>
  )
}

export default MusicPage;
