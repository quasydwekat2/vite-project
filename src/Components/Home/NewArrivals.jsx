import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Styles/NewArrivals.module.less';

const apiUrl = `${import.meta.env.VITE_API_BASE}/products`;

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('125G');

  const { newArrivals } = styles;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        const latest6 = [...data.products].slice(-6);
        setProducts(latest6);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchData();
  }, []);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setQuantity(1);
    setSelectedSize('125G');
  };

  return (
    <section className="py-5 text-center bg-light">
      <Container fluid>
        <div className="mb-4">
          <section className={newArrivals}>
            <h2>New Arrivals</h2>
            <p>
              {
                "I'm a paragraph. Click here to add your own text and edit me.\nLet your users get to know you."
              }
            </p>
          </section>
        </div>

        <Row className="g-4" xs={6} sm={4} md={3} lg={3} xl={3}>
          {products.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={2}>
              <Card
                className={`${styles.card} h-100 border-0 shadow-sm`}
                onClick={() => handleShow(item)}
              >
                <div
                  className="position-relative bg-white"
                  style={{ height: '250px', overflow: 'hidden' }}
                >
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'contain' }}
                  />
                  <img
                    src={item.images?.[2] || item.thumbnail}
                    alt={`${item.title} hover`}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: 'contain', opacity: 0 }}
                  />
                  <div className={styles['quick-view-overlay']}>Quick View</div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="h6 fst-italic fw-semibold mb-1">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-muted small mb-0">
                    {item.price}₪
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedProduct && (
          <Modal show={showModal} onHide={handleClose} centered size="lg">
            <Modal.Body className="p-4">
              <div className="row align-items-center">
                {/* Left: Centered Image */}
                <div className="col-md-6 text-center d-flex justify-content-center">
                  <img
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                    style={{
                      maxWidth: '250px',
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>

                {/* Right: Product Info */}
                <div className="col-md-6 mt-4 mt-md-0">
                  <h5 className="fst-italic">{selectedProduct.title}</h5>
                  <p className="text-muted">{selectedProduct.price}₪</p>

                  <Form.Group className="mb-3">
                    <Form.Label>Size</Form.Label>
                    <Form.Select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      <option value="125G">125G</option>
                      <option value="250G">250G</option>
                      <option value="500G">500G</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="mb-3 d-flex align-items-center gap-2">
                    <span className="me-2">Qty:</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                      -
                    </Button>
                    <span>{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      +
                    </Button>
                  </div>

                  <Button variant="dark" className="w-100">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}

        <NavLink to="/teas" className="d-inline-block mt-4">
          <Button variant="dark" className="px-4 py-2 text-uppercase text-sm">
            Shop All
          </Button>
        </NavLink>
      </Container>
    </section>
  );
};

export default NewArrivals;
