import Player from '../services/Player'

export const getSongById = async (req, res) => {
  const { song_id } = req.params
  const song = await Player.getSong(song_id)

  if (!song) {
    return res.status(404).send('no song with given id found')
  }

  res.send(song)
}

export const updateSongPlays = async (req, res) => {
  const { song_id } = req.params

  // first query song with  song_id
  const songFromDb = await Player.getSongById(song_id)

  // if there is song, update plays otherwhite send 404
  if (!songFromDb) {
    return res.status(404).send('no song for update plays')
  }
  await Player.incrementSongPlays(songFromDb.id)
  res.send({ success: true })
}
