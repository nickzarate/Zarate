import { PureComponent } from 'react'
import { darkGray } from '../assets/colors'
import Link from 'next/link'

class Tab extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.onClick(this.props.tab)
  }

  render() {
    return (
      <Link href={ '#' + this.props.tab }>
        <p
          onClick={ this.handleClick }
          style={{ ...styles.tabText,
            color: this.props.active ? darkGray : 'white',
            backgroundColor: this.props.active ? 'white' : 'transparent'
          }}
        >
          { this.props.tab }
        </p>
      </Link>
    )
  }
}

const styles = {
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: '0px 5px 0px 5px',
    margin: '.25em 0em .25em 0em',
    borderRadius: '3px',
    'zIndex': 1,
    width: 'fit-content',
    textTransform: 'uppercase',
  }
}

export default Tab
