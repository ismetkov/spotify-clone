import { REQUEST_ALBUMS, REQUEST_ALBUM } from './types';

export const fetchAlbums = () => ({
  type: REQUEST_ALBUMS
});

export const fetchAlbum = albumId => ({
  type: REQUEST_ALBUM,
  payload: albumId
});
