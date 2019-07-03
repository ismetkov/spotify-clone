import http from './httpService';
import { endpoint } from '../config';

class PlayerService {
  getPlaylist() {
    return http.get(`${endpoint}/api/playlist`);
  }

  updatePlays(songId) {
    return http.put(`${endpoint}/api/songs/${songId}/plays`);
  }

  getAlbums() {
    return http.get(`${endpoint}/api/albums`);
  }

  getAlbum(albumId) {
    return http.get(`${endpoint}/api/albums/${albumId}`);
  }

  getArtist(artistId) {
    return http.get(`${endpoint}/api/artists/${artistId}`);
  }

  getArtistAlbum(albumId) {
    return http.get(`${endpoint}/api/artists/albums/${albumId}`);
  }
}

export default new PlayerService();
