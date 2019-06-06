import Player from '../services/Player'

export const getPlaylist = async (req, res) => {
  const songIds = await Player.pickSongs(10)

  res.send(songIds)
}
