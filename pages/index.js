import Layout from '../components/Layout'
import { Component } from 'react'
import Icons from '../components/Icons'
import About from './about'
import Projects from './projects'
import Blog from './blog'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <div className='flexcol home' onClick={ () => console.log(document.getElementsByClassName('icon-container')) }>
          <h1 id='home-title'>DATA</h1>
          <h2 id='home-subtitle'>Let's learn something.</h2>
          <Icons />
        </div>
        <About />
        <Projects />
        <Blog />
      </Layout>
    )
  }
}

export default Home
