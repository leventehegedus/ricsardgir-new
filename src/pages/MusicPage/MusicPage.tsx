import { Fragment } from "react";
import { Track } from "../../components/Track/Track";
import { ITrack, IAlbum } from "../../types";
import { useAlbums } from "../../hooks/useAlbums";
import { Album } from "../../components/Album/Album";

export const MusicPage: React.FC = () => {
  const albums = useAlbums();

  return (
    <div className="sm:grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[10rem] gap-x-8 gap-y-8">
      {albums && albums.map((album) => <Album key={album.id} album={album} />)}
    </div>
  );
};

export default MusicPage;
