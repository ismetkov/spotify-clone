import db from '../db';

class Artist {
  getArtistById(artistId) {
    return db
      .select('*')
      .from('artists')
      .where('id', artistId)
      .first();
  }

  getSongsByArtistId(artistId) {
    return db('songs')
      .join('artists', 'artists.id', '=', 'songs.artist_id')
      .join('albums', 'albums.id', '=', 'songs.album_id')
      .where('songs.artist_id', artistId)
      .select(
        'songs.id',
        'songs.title',
        'songs.duration',
        'songs.path',
        'songs.artist_id',
        'songs.plays',
        'artists.name as artist_name',
        'albums.artwork_path'
      )
      .orderBy('songs.plays', 'desc');
  }

  getAlbumsByArtistId(artistId) {
    return db
      .select('*')
      .from('albums')
      .where('artist_id', artistId);
  }

  getArtistAlbum(albumId) {
    return db('songs')
      .join('albums', 'albums.id', '=', 'songs.album_id')
      .join('artists', 'artists.id', '=', 'songs.artist_id')
      .where('album_id', albumId)
      .select(
        'songs.id',
        'songs.title',
        'songs.duration',
        'songs.path',
        'songs.artist_id',
        'songs.plays',
        'albums.artwork_path',
        'artists.name as artist_name'
      );
  }

  getArtistPlays(artistId) {
    return db('songs')
      .sum('plays as artist_plays')
      .where('artist_id', artistId)
      .first();
  }
}

// SELECT SUM(plays) as artist_plays FROM songs WHERE aritst_id = 1;
export default new Artist();
