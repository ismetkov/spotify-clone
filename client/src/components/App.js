import React from 'react'
import { connect } from 'react-redux'

import {
  logout,
  getPlaylist,
  togglePlaying,
  incrementCurrentIndex,
  decrementCurrentIndex,
  updateSongPlays
} from '../actions'

import { getCurrentSong } from '../selectors/playerSelector'
import { endpoint } from '../helpers/config'

import Page from './Page'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Player from './Player'

import UserPageWrapper from './styles/UserPageWrapper'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.audioRef = React.createRef()
  }

  componentDidMount() {
    this.setPlaylist()
  }

  setPlaylist = () => {
    const { getPlaylist } = this.props

    getPlaylist()
  }

  onClickLogout = () => this.props.logout()

  onClickPlaySong = () => {
    this.audioRef.current.autoplay = true

    if (this.audioRef.current.currentTime === 0) {
      this.props.updateSongPlays(this.props.currentSong.id)
    }

    this.audioRef.current.play()
    this.props.togglePlaying()
  }

  onClickPauseSong = () => {
    this.audioRef.current.pause()
    this.props.togglePlaying()
  }

  onClickNextSong = () => {
    this.props.incrementCurrentIndex()
    if (!this.props.player.isPlaying) {
      this.props.togglePlaying()
    }
  }

  onClickPrevSong = () => {
    if (
      this.audioRef.current.currentTime >= 3 ||
      this.props.player.currentIndex === 0
    ) {
      this.setTimeSong(0)
      return
    }

    this.props.decrementCurrentIndex()
  }

  setTimeSong = seconds => (this.audioRef.current.currentTime = seconds)

  render() {
    const { currentSong, player } = this.props

    return (
      <Page>
        <UserPageWrapper>
          <Sidebar logout={this.onClickLogout} />
          <MainContent />
          <audio ref={this.audioRef} src={endpoint + currentSong.path} />
          <Player
            isPlaying={player.isPlaying}
            currentSong={currentSong}
            currentIndex={player.currentIndex}
            onClickPlaySong={this.onClickPlaySong}
            onClickPauseSong={this.onClickPauseSong}
            onClickNextSong={this.onClickNextSong}
            onClickPrevSong={this.onClickPrevSong}
          />
        </UserPageWrapper>
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getPlaylist: () => dispatch(getPlaylist()),
  togglePlaying: () => dispatch(togglePlaying()),
  incrementCurrentIndex: () => dispatch(incrementCurrentIndex()),
  decrementCurrentIndex: () => dispatch(decrementCurrentIndex()),
  updateSongPlays: songId => dispatch(updateSongPlays(songId))
})

const mapStateToProps = state => ({
  player: state.player,
  currentSong: getCurrentSong(state.player)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
