import { IAlbum, VIEWMODE } from "../../types";

export const AlbumTitle = ({
  album,
  view,
}: {
  album: IAlbum;
  view: VIEWMODE;
}) => (
  <a
    href={album?.external_urls?.spotify}
    target="_blank"
    className={`${
      view === VIEWMODE.GRID ? "md:h-16" : ""
    } font-black text-gir-500 item-small`}
  >
    <div className="text-3xl">{album?.name}</div>
    <br />
    <div className="text-2xl mb-4 md:mb-0">{album?.release_date}</div>
  </a>
);
