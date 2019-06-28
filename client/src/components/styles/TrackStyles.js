import styled from 'styled-components';

export const TrackWrapper = styled.li`
  list-style: none;
  padding: 7px 10px;
  box-sizing: border-box;
  user-select: none;

  background: ${props => (props.isPlaying ? props.theme.blackDark : null)};

  &:hover {
    background: ${props => props.theme.blackDark};
  }

  &:hover .track__note {
    display: none;
  }

  &:hover .track__arrow {
    display: block;
    padding-bottom: 10px;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TrackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover .track-more-info {
    display: block;
  }
`;

export const TrackLeftPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrackRightPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .track-more-info {
    display: none;
  }
`;

export const TrackTitle = styled.p`
  cursor: pointer;
  margin: 6px 0;
  font-size: 16px;
  font-weight: 500;
`;

export const AuthorName = styled.p`
  cursor: pointer;
  color: ${props => props.theme.lightWhite};
  letter-spacing: 0.04rem;
  margin-top: -9px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  padding-right: 15px;

  .track__arrow {
    display: none;
  }
`;

export const TrackAvatar = styled.div`
  width: 30px;
  height: 30px;
  background: pink;
  margin-right: 10px;
  background-image: url('https://www.billboard.com/files/styles/1296x857_gallery/public/media/Kygo-press-photo-03-by-Johannes-Lovund-2017-billboard-1548.jpg');
  background-size: cover;
  background-position: center;
`;
