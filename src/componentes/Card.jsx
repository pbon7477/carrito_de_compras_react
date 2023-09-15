import { useState } from "react"



export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar}) => {

    const [added,setAdded]=useState(false);

    const clickAgregar = ()=>{
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = ()=>{
        handleQuitar()
        setAdded(false)
    }

    return (
       
            <div className="tarjeta" >
                <img src={imagen} alt={titulo} className='tarjeta-imagen' />
                <div className="tarjeta-contenido">
                    <h6 className="tarjeta-titulo truncate-text-T">{titulo}</h6>
                    <p className="tarjeta-descripcion truncate-text">{descripcion}</p>
                    <p className="tarjeta-precio">$ {precio}</p>
               
                { added 
                ? <button                 
                    type='text'                
                    className="boton-quitar"
                    onClick={clickQuitar}
                    > Quitar del carrito</button>
                
                : <button                 
                    type='text'                
                    className="boton-agregar"
                    onClick={clickAgregar}
                   > Agregar al carrito</button>   
                }

                </div>


            </div>
        
    )
}
