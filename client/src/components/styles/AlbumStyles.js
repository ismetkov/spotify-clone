import styled from 'styled-components';

export const AlbumListWrapper = styled.div`
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const AlbumListItem = styled.div`
  margin: 10px 10px 40px 10px;
  width: 12.4%;
  height: 170px;
  text-align: center;
  font-weight: 800;
`;

export const AlbumCover = styled.div`
  padding-bottom: 140px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;

export const AlbumTitle = styled.div`
  color: ${props => props.theme.white};
`;

export const ArtistIconAction = styled.i`
  cursor: pointer;
  opacity: ${props => (props.isPlaying ? 1 : 0)};
  position: absolute;
  top: calc(50% - 68.5px);
  left: calc(50% - 39px);
  border: 1px solid ${props => props.theme.white};
  padding: 10px;
  user-select: none;
  border-radius: 50%;
`;

export const ArtistAvatar = styled.div`
  padding-top: 100%;
  position: relative;
  opacity: ${props => (props.isPlaying ? 0.4 : 1)};
  background: url(${props => props.src}) no-repeat;
  background-size: cover;

  &:hover {
    opacity: 0.4;
  }

  &:hover ${ArtistIconAction} {
    opacity: 1;
  }
`;

export const ArtistAvatarWrapper = styled.div`
  box-shadow: 0px 0px 25px ${props => props.theme.lightBlack};
  width: 100px;
  min-width: 157px;
  position: relative;
  background: ${props => props.theme.black};
  margin-right: 10px;

  &:hover ${ArtistIconAction} {
    opacity: 1;
  }
`;
