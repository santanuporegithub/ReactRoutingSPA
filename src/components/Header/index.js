import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <div className="nav">
      <div className="div1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <p> Wave </p>
      </div>
      <ul>
        <li>
          <Link className="route-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="route-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="route-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </>
)

export default Header
