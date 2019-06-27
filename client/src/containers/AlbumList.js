import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { endpoint } from '../helpers/config';
import { fetchAlbums } from '../actions';

import {
  AlbumListWrapper,
  AlbumListItem,
  AlbumCover,
  AlbumTitle
} from '../components/styles/AlbumStyles';

class AlbumList extends Component {
  componentDidMount = () => {
    const { fetchAlbums } = this.props;

    fetchAlbums();
  };

  renderAlbums = () => {
    const { albums } = this.props;

    return (
      albums.length > 0 &&
      albums.map(album => {
        return (
          <AlbumListItem key={album.id}>
            <Link to={`/album/${album.id}`}>
              <AlbumCover src={`${endpoint}${album.artwork_path}`} />
              <AlbumTitle>{album.title}</AlbumTitle>
            </Link>
          </AlbumListItem>
        );
      })
    );
  };

  render = () => {
    return <AlbumListWrapper>{this.renderAlbums()}</AlbumListWrapper>;
  };
}

const mapStateToProps = ({ music }) => ({ albums: music.albums });

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);
