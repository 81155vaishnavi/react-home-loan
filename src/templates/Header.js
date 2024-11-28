import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className=' bg-dark d-flex justify-content-around'>
        <h1 className='text-blue'>Enquiry Management...!</h1>
        <div>
            <Link className='btn btn-dark me-5' to={'/add'}>AddProduct</Link>
            <Link className='btn btn-dark' to={'/view'}>ViewProduct</Link>
        </div>

    </nav>
    
  )
}

export default Header;