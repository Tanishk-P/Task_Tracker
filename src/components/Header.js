import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='Header'>
      <h1> {title}
    <Button 
      color={showAdd ? 'red' : 'green'} 
      text={showAdd ? 'Close' : 'Add'} 
      onClick={onAdd} />
    </h1> 
    </header>
  )
}

Header.defaultProps = {
  title:' 🎯 Task Tracker________',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
//CSS in JS
//const headingStyle = {
//  color: 'red', 
//  backgroundColor:'black', 
//}
export default Header