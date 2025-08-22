import { Fragment } from "react";
import { IAlbum, ITrack, VIEWMODE } from "../../types";
import Track from "../Track/Track";
import { AlbumTitle } from "./AlbumTitle";
import { AlbumInfo } from "./AlbumInfo";

export const Album = ({ album, view }: { album: IAlbum; view: VIEWMODE }) => {
  return (
    <Fragment key={album.id}>
      <AlbumTitle album={album} view={view} />
      {view === VIEWMODE.GRID && <AlbumInfo album={album} />}
      {album.tracks.items.map((track: ITrack) => (
        <Track
          key={track.id}
          {...track}
          image={album.images?.[0]?.url || ""}
          view={view}
        />
      ))}
    </Fragment>
  );
};
