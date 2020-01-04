const Tab = ({ active, onClick, index, tab }) => (
  <p className={ 'navtab' + (active ? ' active' : '') }
     onClick={ () => onClick(index) }>
    { tab }
  </p>
)

export default Tab
