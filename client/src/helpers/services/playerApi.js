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
}

export default new PlayerService();
