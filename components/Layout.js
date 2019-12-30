import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Meta from './Meta'

const layoutStyle = {
  fontFamily: 'futura',
  display: 'flex',
  height: '100vh',
  margin: 0,
  padding: 0,
  'zIndex': 0,
}

const Layout = props => {
  const router = useRouter()

  return (
    <div style={ layoutStyle }>
      <Meta />
      <Navbar path={ router.asPath.substr(1) } />
      { props.children }
    </div>
  )
}

export default Layout
