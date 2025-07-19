import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Styles/NewArrivals.module.less';

const apiUrl = `${import.meta.env.VITE_API_BASE}/products`;

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('125G');

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

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

  const handleNavigate = () => {
    navigate('/teas');
  };

  return (
    <section className="py-5 text-center bg-light">
      <Container fluid>
        <section className={styles['new-arrivals']} data-aos="fade-up">
          <h2 data-aos="fade-up">
            <span className={styles.line}></span>
            New Arrivals
            <span className={styles.line}></span>
          </h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </section>

        <Row className="g-4" xs={6} sm={4} md={3} lg={3} xl={3}>
          {products.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={2}>
              <Card
                data-aos="fade-up"
                className={`${styles.card} h-100 border-0 shadow-sm`}
                onClick={() => handleShow(item)}
              >
                <div className={styles.cardImageWrapper}>
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                  <img
                    src={item.images?.[2] || item.thumbnail}
                    alt={`${item.title} hover`}
                    className={styles['hover-img']}
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
                <div className="col-md-6 text-center d-flex justify-content-center">
                  <img
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                    className={styles.modalImage}
                  />
                </div>

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

        <div data-aos="fade-up" data-aos-delay="300">
          <button className={styles.shopAllBtn} onClick={handleNavigate}>
            <span>Shop All</span>
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
