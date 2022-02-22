
import SelecList from './SelecList'
import React, { useState } from 'react';


const SelectsAnidados = () => {

    const [state, setState] = useState("")
    const [town, setTown] = useState("")
    const [suburb, setSuburb] = useState("")

    

  return (
    <div>
        <h2>Selects Anidados</h2>
        <h3>Mexico</h3>
        <SelecList title="estado" url={`https://api.copomex.com/query/get_estados?token=pruebas`} handleChange= {(e)=>{setState(e.target.value)}}/>

        {state && (
            
            <SelecList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas`} handleChange= {(e)=>{setTown(e.target.value)}}/>
        )}

        {town && (
            
            <SelecList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=pruebas`} handleChange= {(e)=>{setSuburb(e.taget.value)}}/>
        )}

        <pre>
            <code>
                {state} - {town} - {suburb}
            </code>
        </pre>
    
    </div>
  )
}

export default SelectsAnidados