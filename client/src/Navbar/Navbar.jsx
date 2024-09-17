import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="/index" className='navbar-brand'>Logo</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li><Link to="/index" className='nav-link'>Home</Link></li>
                            <li><Link to="/products" className='nav-link'>Products</Link></li>
                            <li><Link to="/Admin" className='nav-link'>Admin</Link></li>
                        </ul>
                    </div>
            </nav>
}

export default Navbar