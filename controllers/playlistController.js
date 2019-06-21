import Player from '../services/Player';

export const getPlaylist = async (req, res) => {
  const playlist = await Player.getSongsForPlaylist();

  res.send(playlist);
};
