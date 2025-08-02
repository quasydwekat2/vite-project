// src/components/ProductQuickView.jsx
import React from 'react';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import styles from './Styles/ProductQuickView.module.less';

const slideVariants = {
  initial: { opacity: 0, y: 50, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
  exit: { opacity: 0, y: 50, scale: 0.96, transition: { duration: 0.2 } },
};

const renderStars = (rating = 0) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  return Array.from({ length: 5 }, (_, i) => {
    if (i < full) return <FaStar key={i} className={styles.starFilled} />;
    if (i === full && hasHalf)
      return <FaStarHalfAlt key={i} className={styles.starHalf} />;
    return <FaRegStar key={i} className={styles.starEmpty} />;
  });
};

const ProductQuickView = ({
  product,
  onClose = () => {},
  quantity = 1,
  setQuantity = () => {},
  selectedSize = '125G',
  setSelectedSize = () => {},
  onPrev = null,
  onNext = null,
  theme = 'light',
}) => {
  if (!product) return null;

  const {
    title,
    price,
    thumbnail,
    rating = 0,
    description,
    benefits = 'High-quality and satisfaction guaranteed.',
    usage = 'Follow label instructions or use as preferred.',
    sizes = ['125G', '250G', '500G'],
  } = product;

  return (
    <div className={styles.overlayBackdrop} onClick={onClose}>
      <Motion.div
        className={styles.floatingPopup}
        data-theme={theme}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.price}>{price}₪</p>
            <OverlayTrigger
              overlay={<Tooltip>Rated {rating}/5</Tooltip>}
              placement="top"
            >
              <div className={styles.rating}>{renderStars(rating)}</div>
            </OverlayTrigger>
          </div>
          <Motion.button
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close"
            whileHover={{ rotate: 90, scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </Motion.button>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <img src={thumbnail} alt={title} className={styles.modalImage} />
        </div>

        {/* Details */}
        <div className={styles.productDetails}>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Benefits:</strong> {benefits}</p>
          <p><strong>How to Use:</strong> {usage}</p>
        </div>

        {/* Size Selection */}
        <Form.Group className="mb-3">
          <Form.Label>
            Size <span className={styles.tooltipIcon}>🛈</span>
          </Form.Label>
          <Form.Select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className={styles.sizeSelect}
          >
            {sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Quantity Control */}
        <div className={styles.qtyControl}>
          <span>Qty:</span>
          <Button size="sm" variant="outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
          <span>{quantity}</span>
          <Button size="sm" variant="outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</Button>
        </div>

        {/* Add to Cart */}
        <Button variant="dark" className="w-100 mt-2">
          Add to Cart
        </Button>

        {/* Navigation */}
        <div className={styles.navButtons}>
          <Button variant="link" onClick={onPrev} disabled={!onPrev}>
            <FaArrowLeft /> Prev
          </Button>
          <Button variant="link" onClick={onNext} disabled={!onNext}>
            Next <FaArrowRight />
          </Button>
        </div>
      </Motion.div>
    </div>
  );
};

export default ProductQuickView;
