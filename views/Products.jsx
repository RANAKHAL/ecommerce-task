import { useState, useEffect } from "react";
import { getProducts } from "../src/api/getProducts";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Products({ cart, setCart }) {

    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    let handleSearch = (e) => {
        setSearchValue(e.target.value)
        // fetch("https://fakestoreapi.com/products/carts?userId=" + e.target.value)
        //     .then(res => res.json())
        // .then(res => console.log(res))

        // let newProducts = products.filter((product) => product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => {
            let newProducts = res.filter((product) => product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
            if (e.target.value !== '') {
                setProducts(newProducts);
            } else {

                setProducts(res);
            }
        })
    }
    const navigate = useNavigate();

    useEffect(() => {
        getProducts(setProducts);
        getProducts(setFilteredProducts);
    }, []);

    // Handle adding products to the cart
    const handleAddToCart = (product) => {

        setCart([...cart ?? [], product]);
        Swal.fire({
            title: "Added to Cart",
            text: `${product.title} has been added to your cart!`,
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
    };

    // Handle delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your product has been deleted.", "success");
                setProducts(products.filter(p => p.id !== id));
                fetch("http://localhost:3000/products/" + id, { method: 'DELETE' });
            }
        });
    };

    // Navigate to the cart page
    const handleGoToCart = () => {
        navigate('/Cart');
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <input type="text" onChange={handleSearch} className="form-control w-50 bg-light rounded-4 text-dark mt-3" placeholder="Search" />

                {/* <div className="cart-icon" onClick={handleGoToCart} style={{ cursor: 'pointer', position: 'relative' }}>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                    {cart.length > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            background: 'red',
                            borderRadius: '50%',
                            color: 'white',
                            padding: '5px 10px',
                            fontSize: '12px'
                        }}>
                            {cart.length}
                        </span>
                    )}
                </div> */}
            </div>

            <Row>
                {
                    products.length > 0
                        ? products.map(product =>
                            <Col className="p-3" key={product.id} sm={12} lg={3}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Link className="btn btn-primary d-block w-50 ms-5" to={"/products/" + product.id}>Details</Link>
                                        <Link className="btn btn-success m-2 d-block w-50 ms-5" to={"/products/edit/" + product.id}>Edit product</Link>
                                        <Button
                                            variant="danger"
                                            className="ms-2 d-block w-50 ms-5"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="warning"
                                            className="ms-2 d-block w-50 ms-5 mt-2"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        :
                        <div><h3>Products not Found</h3></div>
                }
            </Row>
        </Container>
    );
}
