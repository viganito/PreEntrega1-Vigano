import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const NavBar = () => {


  return (

    <header>
        <h1>Electronic Music Station</h1>

        <nav>
            <ul>
                <li className='text-dark'>Inicio</li>
                <li className='text-info'>Tour</li>
                <li className='text-info'>Djs/Productores</li>
                <li className='text-info'>Musica</li>
            </ul>
        </nav>

        <CartWidget/>


    </header>
  )
}

export default NavBar