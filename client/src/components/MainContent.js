import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './screens/NotFound';
import YourMusic from './screens/YourMusic';
import Browse from './screens/Browse';
import Search from './screens/Search';
import AlbumShow from './screens/AlbumShow';
import Account from './screens/Account';
import Artist from './screens/Artist';

const MainContentWrapper = styled.div`
  z-index: 0;
  position: relative;
  word-wrap: break-word;
`;
const MainContentView = styled.div`
  padding-left: 188px;
  padding-bottom: 90px;
  width: 100%;
  height: 100%;
  color: #fff;
`;
const MainContentUser = styled.div`
  max-width: 1480px;
`;

function MainContent({
  audioRef,
  onClickPlayTrack,
  onClickPauseTrack,
  onClickPlaySong,
  onClickPauseSong
}) {
  return (
    <MainContentWrapper>
      <MainContentView>
        <MainContentUser>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/browse" />} />
            <Route path="/browse" component={Browse} />
            <Route path="/your-music" component={YourMusic} />
            <Route path="/search" component={Search} />
            <Route
              path="/album/:id"
              exact
              render={props => (
                <AlbumShow
                  {...props}
                  audioRef={audioRef}
                  onClickPlayTrack={onClickPlayTrack}
                  onClickPauseTrack={onClickPauseTrack}
                  onClickPlaySong={onClickPlaySong}
                  onClickPauseSong={onClickPauseSong}
                />
              )}
            />
            <Route path="/account" component={Account} />
            <Route path="/artist/:id" component={Artist} />
            <Route component={NotFound} />
          </Switch>
        </MainContentUser>
      </MainContentView>
    </MainContentWrapper>
  );
}

export default MainContent;
