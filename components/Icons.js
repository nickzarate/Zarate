import { Component } from 'react'
import Cloud from '../public/icons/cloud.svg'
import Binary from '../public/icons/binary-code.svg'
import Youtube from '../public/icons/youtube.svg'
import Folder from '../public/icons/folder.svg'
import Dropbox from '../public/icons/dropbox.svg'
import Drive from '../public/icons/drive.svg'
import HardDisk from '../public/icons/hard-disk.svg'
import Screen from '../public/icons/screen.svg'
import MemoryCard from '../public/icons/memory-card.svg'
import Code from '../public/icons/code.svg'
import Chip from '../public/icons/chip.svg'
import Audio from '../public/icons/audio.svg'
import Microphone from '../public/icons/microphone.svg'
import Earth from '../public/icons/earth.svg'
import Server from '../public/icons/server.svg'
import Message from '../public/icons/message.svg'
import Picture from '../public/icons/picture.svg'
import News from '../public/icons/news.svg'
import CloudData from '../public/icons/cloud-data.svg'
import USB from '../public/icons/usb.svg'
import Pin from '../public/icons/pin.svg'

class Icons extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Cloud style={{ width: this.props.width, height: this.props.height }} />
        <Code style={{ width: this.props.width, height: this.props.height }} />
        <Chip style={{ width: this.props.width, height: this.props.height }} />
        <Audio style={{ width: this.props.width, height: this.props.height }} />
        <Microphone style={{ width: this.props.width, height: this.props.height }} />
        <Earth style={{ width: this.props.width, height: this.props.height }} />
        <Binary style={{ width: this.props.width, height: this.props.height }} />
        <Youtube style={{ width: this.props.width, height: this.props.height }} />
        <Message style={{ width: this.props.width, height: this.props.height }} />
        <Folder style={{ width: this.props.width, height: this.props.height }} />
        <Dropbox style={{ width: this.props.width, height: this.props.height }} />
        <Drive style={{ width: this.props.width, height: this.props.height }} />
        <HardDisk style={{ width: this.props.width, height: this.props.height }} />
        <Screen style={{ width: this.props.width, height: this.props.height }} />
        <MemoryCard style={{ width: this.props.width, height: this.props.height }} />
        <Server style={{ width: this.props.width, height: this.props.height }} />
        <Picture style={{ width: this.props.width, height: this.props.height }} />
        <News style={{ width: this.props.width, height: this.props.height }} />
        <CloudData style={{ width: this.props.width, height: this.props.height }} />
        <USB style={{ width: this.props.width, height: this.props.height }} />
        <Pin style={{ width: this.props.width, height: this.props.height }} />
      </div>
    )
  }
}

const styles = {
}

export default Icons
