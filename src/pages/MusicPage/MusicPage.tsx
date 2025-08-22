import { Fragment, useState } from "react";
import { Track } from "../../components/Track/Track";
import { ITrack, IAlbum, VIEWMODE } from "../../types";
import { useAlbums } from "../../hooks/useAlbums";
import { Album } from "../../components/Album/Album";

export const MusicPage: React.FC = () => {
  const albums = useAlbums();

  const [view, setView] = useState<VIEWMODE>(VIEWMODE.GRID);

  return (
    <>
      <div className="flex justify-end mb-4 gap-2">
        <button
          onClick={() => setView(VIEWMODE.GRID)}
          className={`${VIEWMODE.GRID === view ? "font-bold" : ""}`}
        >
          Grid View
        </button>
        <button
          onClick={() => setView(VIEWMODE.LINE)}
          className={`${VIEWMODE.LINE === view ? "font-bold" : ""}`}
        >
          List View
        </button>
      </div>
      <div
        className={`${
          view === VIEWMODE.GRID
            ? "sm:grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] gap-x-8 gap-y-8"
            : "flex flex-col gap-y-4"
        } p-4 md:p-8`}
      >
        {albums &&
          albums.map((album) => (
            <Album key={album.id} album={album} view={view} />
          ))}
      </div>
    </>
  );
};

export default MusicPage;
