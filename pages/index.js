import Layout from '../components/Layout'
import { Component } from 'react'
import { darkGray, blue } from '../assets/colors'
import Icons from '../components/Icons'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <div style={ styles.container }>
          <p style={ styles.title }>DATA</p>
          <h2 style={ styles.subText }>Let's learn something.</h2>
          <Icons width='4vw' height='4vh' />
        </div>
      </Layout>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    background: 'linear-gradient(rgba(52, 156, 216) 90%, white)',
    alignItems: 'center',
  },
  title: {
    fontSize: 150,
    fontFamily: 'Bungee Shade',
    margin: '.6em 0em 0.1em 0em',
    color: 'black',
  },
  subText: {
    fontSize: 15,
    marginTop: '0em',
    color: 'white',
  }
}

export default Home
