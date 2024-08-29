import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


const App = () => {

  return (
    <>

      <NavBar/> 
      <ItemListContainer greeting="Mi musica"/>
      <button type="button" className="btn btn-dark">Base class</button>
    </>
  )
}

export default App