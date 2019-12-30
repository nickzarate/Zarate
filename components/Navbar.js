import { PureComponent } from 'react'
import Link from 'next/link'
import Tab from './Tab'
import { useRouter } from 'next/router'

class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['about', 'projects', 'blog'],
      active: props.path,
    }
  }

  handleClick = (tab) => {
    console.log("here")
    console.log(tab)
    this.setState({
      active: tab
    });
  }

  handleLogo = () => {
    this.setState({
      active: ''
    })
  }

  render() {
    return (
      <div style={ styles.container }>
        <Link href={ '/' }>
          <p onClick={ this.handleLogo } style={ styles.logo }>Z</p>
        </Link>
        <div style={ styles.tabs }>
          { this.state.tabs.map((tab, index) =>
            <Tab key={ index } onClick={ this.handleClick } active={ this.state.active === tab }>{ tab }</Tab>
          )}
        </div>
      </div>
    )
  }
}

let styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: home,
  },
  logo: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: '#4f4f4f',
    borderRadius: '10px',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    margin: '1.5% 1.5% 1.5% 1.5%',
    color: '#4f4f4f'
  },
  tabs: {
    display: 'flex',
    flex: 29,
    flexDirection: 'row',
  }
}

export default Navbar
