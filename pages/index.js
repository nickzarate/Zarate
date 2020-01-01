import Layout from '../components/Layout'
import { Component } from 'react'
import Home from './home'
import About from './about'
import Projects from './projects'
import Blog from './blog'

const Main = () => (
  <Layout>
    <Home />
    <About />
    <Projects />
    <Blog />
  </Layout>
)

export default Main
