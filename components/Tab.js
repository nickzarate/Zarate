import { PureComponent } from 'react'
import { home } from '../assets/colors'
import Link from 'next/link'

class Tab extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.onClick(this.props.children)
  }

  render() {
    return (
      <Link href={ '/' + this.props.children }>
        <p
          onClick={ this.handleClick }
          style={{ ...styles.tabText,
            color: this.props.active ? home : 'white',
            backgroundColor: this.props.active ? 'white' : home
          }}
        >
          { this.props.children.toUpperCase() }
        </p>
      </Link>
    )
  }
}

const styles = {
  tabText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: '0px 5px 0px 5px',
    margin: '0% 1.5% 0% 1.5%',
    borderRadius: '3px'
  }
}

export default Tab
