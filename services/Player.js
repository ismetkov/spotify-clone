import db from '../db'

class Player {
  pickSongs(limitSongs) {
    return db
      .select('*')
      .from('songs')
      .limit(limitSongs)
  }

  getSongById(songId) {
    return db
      .select('*')
      .from('songs')
      .where('id', songId)
      .first()
  }

  getSong(songId) {
    return db('songs')
      .join('artists', 'artists.id', '=', 'songs.artist_id')
      .join('albums', 'albums.id', '=', 'songs.album_id')
      .select(
        'songs.id',
        'songs.title',
        'albums.title as album_title',
        'albums.artwork_path',
        'artists.name as artist_name',
        'songs.duration',
        'songs.path',
        'songs.album_order',
        'songs.plays',
        'songs.artist_id',
        'songs.album_id',
        'songs.genre_id'
      )
      .where('songs.id', songId)
      .first()
  }

  incrementSongPlays(songId) {
    return db('songs')
      .where('id', songId)
      .increment({ plays: 1 })
  }

  getAlbums(limitAlbums) {
    return db
      .select('*')
      .from('albums')
      .limit(limitAlbums)
  }

  getAlbumById(id) {
    return db
      .select('*')
      .from('albums')
      .where('id', id)
      .first()
  }

  getArtistById(artist_id) {
    return db
      .select('*')
      .from('artists')
      .where('id', artist_id)
      .first()
  }

  getSongsByAlbum(id) {
    return db
      .select('*')
      .from('artists')
      .innerJoin('songs', 'songs.artist_id', '=', 'artists.id')
      .where('album_id', id)
  }

  getSongsForPlaylist() {
    return db('songs')
      .join('artists', 'artists.id', '=', 'songs.artist_id')
      .join('albums', 'albums.id', '=', 'songs.album_id')
      .select(
        'songs.id',
        'songs.title',
        'albums.title as album_title',
        'albums.artwork_path',
        'artists.name as artist_name',
        'songs.duration',
        'songs.path',
        'songs.album_order',
        'songs.plays',
        'songs.artist_id',
        'songs.album_id',
        'songs.genre_id'
      )
  }
}

export default new Player()
