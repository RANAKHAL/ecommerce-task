import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getSingleProduct } from "../src/api/getProducts"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Products from "../views/Products";
export default function EditProduct() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
    });
    const { id } = useParams()
    console.log("id", id)
    console.log(product)
    useEffect(() => {
        (getSingleProduct(setProduct, id))
    }, [])

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let handleEdit = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            header: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <Form.Group className="mb-3">
                <Form.Label>Edit Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={product.title} // Set the value from the product state
                    onChange={handleInputChange}
                    placeholder="Edit title"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Edit Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={product.price} // Set the value from the product state
                    onChange={handleInputChange}
                    placeholder="Edit Price"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Edit Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    value={product.description} // Set the value from the product state
                    onChange={handleInputChange}
                    placeholder="Edit description"
                />
            </Form.Group>
            <Button variant="primary" onClick={() => handleEdit(product.id)}>Submit</Button>
        </div>
    )
}
