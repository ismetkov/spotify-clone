import http from './httpService'
import { endpoint } from '../config'

class PlayerService {
  getPlaylist() {
    return http.get(`${endpoint}/api/playlist`)
  }

  updatePlays(songId) {
    return http.put(`${endpoint}/api/songs/${songId}/plays`)
  }
}

export default new PlayerService()
