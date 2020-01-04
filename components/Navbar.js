import { PureComponent } from 'react'
import Link from 'next/link'
import Tab from './Tab'
import { useRouter } from 'next/router'

class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['about', 'projects', 'contact'],
      activeTabIndex: -1
    }
  }

  setActiveTabIndex = (index) => {
    this.setState({
      activeTabIndex: index
    })
  }

  render() {
    return (
      <div id='navbar' className='col'>
        { this.state.tabs.map((tab, index) =>
          <Tab
            key={ index }
            active={ this.state.activeTabIndex === index }
            tab={ tab }
            index={ index }
            onClick={ this.setActiveTabIndex } />
        ) }
      </div>
    )
  }
}

export default Navbar
