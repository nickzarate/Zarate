import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Meta from './Meta'
import '../sass/main.scss'

const Layout = (props) => {
  const router = useRouter()

  return (
    <div id='base' className='col'>
      <Meta />
      <Navbar />
      { props.children }
    </div>
  )
}

export default Layout
