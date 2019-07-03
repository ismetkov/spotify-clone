import Artist from '../services/Artist';

export const getArtistById = async (req, res) => {
  const { artist_id } = req.params;
  const artist = await Artist.getArtistById(artist_id);
  const { artist_plays } = await Artist.getArtistPlays(artist_id);
  const songs = await Artist.getSongsByArtistId(artist_id);
  const albums = await Artist.getAlbumsByArtistId(artist_id);

  const data = {
    artist,
    artist_plays,
    songs,
    albums
  };

  res.send(data);
};

export const getArtistAlbumById = async (req, res) => {
  const { album_id } = req.params;
  const album = await Artist.getArtistAlbum(album_id);

  res.send(album);
};
