import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getSingleProduct } from "../src/api/getProducts"
export default function ProductDetails() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        (getSingleProduct(setProduct, params.id))
    }, [])
    const params = useParams()
    console.log(params)
    return (
        <div>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
            Products Details
        </div>
    )
}
