import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Styles from './Styles/NewArrivals.module.less';
import ProductDetails from './ProductDetails';

const apiUrl = `${import.meta.env.VITE_API_BASE}/products`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('125G');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        setProducts(data.products.slice(-6));
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchData();
  }, []);

  const handleShow = product => {
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
    <section className={`py-5 text-center bg-light`}>
      <Container fluid>
        <Motion.div
          className={Styles['new-arrivals']}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>New Arrivals</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know
            you.
          </p>
        </Motion.div>

        <Row className="g-4 justify-content-center">
          {products.map(item => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={2}>
              <Motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  className={`${Styles.card} h-100`}
                  onClick={() => handleShow(item)}
                >
                  <div className={Styles.cardImageWrapper}>
                    <Card.Img
                      variant="top"
                      src={item.thumbnail}
                      alt={item.title}
                      className={Styles.cardImage}
                    />
                    <img
                      src={item.images?.[2] || item.thumbnail}
                      alt={`${item.title} hover`}
                      className={Styles['hover-img']}
                    />
                    <div className={Styles['quick-view-overlay']}>Quick View</div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.price}₪</Card.Text>
                  </Card.Body>
                </Card>
              </Motion.div>
            </Col>
          ))}
        </Row>

        <Motion.div
          className="mt-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className={Styles.shopAllBtn} onClick={handleNavigate}>
            Shop All &rarr;
          </button>
        </Motion.div>

        <AnimatePresence>
          {showModal && selectedProduct && (
            <ProductDetails
              product={selectedProduct}
              onClose={handleClose}
              quantity={quantity}
              setQuantity={setQuantity}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default NewArrivals;
