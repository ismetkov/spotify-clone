import React, { Component } from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import NotFound from './screens/NotFound'
import YourMusic from './screens/YourMusic'
import Browse from './screens/Browse'
import Search from './screens/Search'

const MainContentWrapper = styled.div`
  z-index: 0;
  position: relative;
  word-wrap: break-word;
`
const MainContentView = styled.div`
  padding-top: 20px;
  padding-left: 230px;
  padding-bottom: 90px;
  width: calc(100% - 230px);
  height: 100%;
  color: #fff;
`
const MainContentUser = styled.div`
  padding: 0 32px;
  margin: 0 auto;
  max-width: 1480px;
`

class MainContent extends Component {
  render() {
    return (
      <MainContentWrapper>
        <MainContentView>
          <MainContentUser>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/browse" />} />
              <Route path="/browse" component={Browse} />
              <Route path="/your-music" component={YourMusic} />
              <Route path="/search" component={Search} />
              <Route component={NotFound} />
            </Switch>
          </MainContentUser>
        </MainContentView>
      </MainContentWrapper>
    )
  }
}

export default MainContent