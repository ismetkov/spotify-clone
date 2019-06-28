import Player from '../services/Player';

export const getAlbums = async (req, res) => {
  const numberOfAlbums = req.query.limit || 10;
  const albums = await Player.getAlbums(numberOfAlbums);

  res.send(albums);
};

export const getAlbumById = async (req, res) => {
  const { album_id } = req.params;
  const album = await Player.getAlbumById(album_id);

  if (!album) {
    return res.status(404).send('album not found');
  }

  const artist = await Player.getArtistById(album.artist_id);
  const songs = await Player.getSongsByAlbum(album_id);

  res.send({
    id: album.id,
    title: album.title,
    artwork_path: album.artwork_path,
    songs,
    artist,
    total_number: songs.length
  });
};
