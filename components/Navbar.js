import { PureComponent } from 'react'
import Link from 'next/link'
import Tab from './Tab'
import { useRouter } from 'next/router'

class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['about', 'projects', 'blog'],
      active: -1
    }
  }

  handleClick = (index) => {
    this.setState({
      active: index
    })
  }

  render() {
    return (
      <div id='navbar' className='flexcol'>
        { this.state.tabs.map((tab, index) =>
          <Tab
            key={ index }
            active={ this.state.active === index }
            tab={ tab }
            index={ index }
            onClick={ this.handleClick } />
        ) }
      </div>
    )
  }
}

export default Navbar
