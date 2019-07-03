import {
  REQUEST_ALBUMS,
  REQUEST_ALBUM,
  REQUEST_ARTIST,
  REQUEST_ARTIST_ALBUM
} from './types';

export const fetchAlbums = () => ({
  type: REQUEST_ALBUMS
});

export const fetchAlbum = albumId => ({
  type: REQUEST_ALBUM,
  payload: albumId
});

export const fetchArtist = artistId => ({
  type: REQUEST_ARTIST,
  payload: artistId
});

export const fetchArtistAlbum = albumId => ({
  type: REQUEST_ARTIST_ALBUM,
  payload: albumId
});
