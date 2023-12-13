import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/create'>Add Blog</Link></li>
        <li><a href="https://github.com/SarkarTmz/react-crud" target='_blank'>Source Code</a></li>
    </ul>
</nav>
  )
}

export default Navbar