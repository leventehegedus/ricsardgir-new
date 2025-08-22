import { Fragment } from "react";
import { IAlbum, ITrack } from "../../types";
import Track from "../Track/Track";
import { AlbumTitle } from "./AlbumTitle";
import { AlbumInfo } from "./AlbumInfo";

export const Album = ({ album }: { album: IAlbum }) => {
  return (
    <Fragment key={album.id}>
      <AlbumTitle album={album} />
      <AlbumInfo album={album} />
      {album.tracks.items.map((track: ITrack) => (
        <Track key={track.id} {...track} image={album.images?.[0]?.url || ""} />
      ))}
    </Fragment>
  );
};
