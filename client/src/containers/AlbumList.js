import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { endpoint } from '../helpers/config';

import { fetchAlbums } from '../actions';

const AlbumListWrapper = styled.div`
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const AlbumListItem = styled.div`
  margin: 10px 10px 40px 10px;
  width: 12.4%;
  height: 170px;
  text-align: center;
  font-weight: 800;
`;

const AlbumCover = styled.div`
  padding-bottom: 140px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;
const AlbumTitle = styled.div`
  color: ${props => props.theme.white};
`;

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
