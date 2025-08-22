import { IAlbum } from "../../types";

export const AlbumInfo = ({ album }: { album: IAlbum }) => {
  return (
    <div className={`${album?.shop_link ? "item-large" : "item-small"} mb-8`}>
      {album?.additional_info?.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <br />
      {album?.shop_link && (
        <a
          href={album.shop_link}
          target="_blank"
          className="underline hover:text-gir-500"
        >
          Itt veheted meg CD-n, ha nem tudsz mit kezdeni a pénzeddel
        </a>
      )}
    </div>
  );
};
