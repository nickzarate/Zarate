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
import { shuffle, whichTransitionEvent } from '../utils'

class Icons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: shuffle([...Array(20).keys()])
    }
  }

  componentDidMount() {
    // Assign every Icon: unique Id based on random order in state
    //                 && (x,y) coordinate using Custom CSS Properties
    let icontainers = document.getElementsByClassName('icon-container')
    this.state.order.map((num, i) => {
      icontainers[i].setAttribute('id', 'icon-container' + num)
      icontainers[i].style.setProperty('--y', 'var(--y' + num + ')')
      icontainers[i].style.setProperty('--x', 'var(--x' + num + ')')
    })

    // Set scroll position and animation state
    let scrollPos = 0
    let animateDown = false
    window.addEventListener('scroll', (event) => {
      // Check if we are scrolling up
      if (animateDown && window.scrollY < 250 && (document.body.getBoundingClientRect()).top > scrollPos) {
        // Set the state of the animation
        animateDown = false

        // Undo 'gather' animation by setting visibility property to 'visible', then removing animation class
        let icontainers = document.getElementsByClassName('icon-container')
        for (let i = 0; i < icontainers.length; i++) {
          if (window.getComputedStyle(icontainers[i]).getPropertyValue('visibility') === 'hidden') {
            icontainers[i].style.setProperty('visibility', 'visible')
          }
          icontainers[i].classList.remove('gather-animate')
        }

        // Resume icon floating animation
        let icons = document.getElementsByClassName('icon')
        window.setTimeout(() => {
          for (let i = 0; i < icons.length; i++) {
            icons[i].style.setProperty('animation-play-state', 'running')
          }
        }, 100)

      // Else check if we are scrolling down
      } else if (!animateDown && window.scrollY > 250 && (document.body.getBoundingClientRect()).top <= scrollPos) {
        // Set the state of the animation
        animateDown = true

        // Pause icon floating animation
        let icons = document.getElementsByClassName('icon')
        for (let i = 0; i < icons.length; i++) {
          icons[i].style.setProperty('animation-play-state', 'paused')
        }

        // Initiate 'gather' animation for icon wrappers
        let icontainers = document.getElementsByClassName('icon-container')
        window.setTimeout(() => {
          for (let j = 0; j < icontainers.length; j++) {
            icontainers[j].classList.add('gather-animate')

            // Create listener for the end of 'gather' animation, then set visibility to hidden
            let transitionEvent = whichTransitionEvent()
            let custFunc = function(event) {
              icontainers[j].removeEventListener(transitionEvent, custFunc)
              if (animateDown) {
                icontainers[j].style.setProperty('visibility', 'hidden')
              }
            }
            icontainers[j].addEventListener(transitionEvent, custFunc)
          }
        }, 100)
      }

      // Set scroll position
      scrollPos = (document.body.getBoundingClientRect()).top
    })
  }

  handleHover = (e) => {
    e.currentTarget.style.setProperty('animation-play-state', 'paused')
  }

  handleLeave = (e) => {
    e.currentTarget.style.setProperty('animation-play-state', 'running')
  }

  render () {
    return (
      <div>
        <div className='icon-container'>
          <Cloud className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Binary className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Youtube className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Folder className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Dropbox className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Drive className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <HardDisk className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Screen className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <MemoryCard className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Code className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Chip className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Audio className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Microphone className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Earth className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Message className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Picture className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <News className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <CloudData className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <USB className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div className='icon-container'>
          <Pin className='icon' onMouseEnter={ this.handleHover } onMouseLeave={ this.handleLeave } />
        </div>
        <div>
          <Server id='database-icon' />
        </div>
      </div>
    )
  }
}

export default Icons
