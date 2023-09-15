
import { useState, useEffect } from "react"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProductos(data)
        }
        catch (error) {
            console.log(`Ha ocurrido un error:${error}`)
        }
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (

        <ProductosContext.Provider value={{productos}} >
            {children}
        </ProductosContext.Provider>
    )
}
