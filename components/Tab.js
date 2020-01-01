const Tab = (props) => (
  <p className={ 'navtab' + (props.active ? ' active' : '') }
     onClick={ () => props.onClick(props.index) }>
    { props.tab }
  </p>
)

export default Tab
