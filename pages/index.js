import Layout from '../components/Layout'
import { Component } from 'react'
import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from './contact'

const Main = () => (
  <Layout>
    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default Main
