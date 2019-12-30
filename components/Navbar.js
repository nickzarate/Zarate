import { PureComponent } from 'react'
import Link from 'next/link'
import Tab from './Tab'
import { useRouter } from 'next/router'

class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['about', 'projects', 'blog'],
      active: '',
    }
  }

  handleClick = (tab) => {
    this.setState({
      active: tab
    });
  }

  render() {
    return (
      <div style={ styles.container }>
        { this.state.tabs.map((tab, index) =>
          <Tab key={ tab } tab={ tab } onClick={ this.handleClick } active={ this.state.active === tab }>{ tab }</Tab>
        )}
      </div>
    )
  }
}

let styles = {
  container: {
    position: 'fixed',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    left: '4em',
    top: '4em',
    // backgroundColor: 'green'
  },
}

export default Navbar
