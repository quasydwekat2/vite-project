import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Placeholder,
  NavLink,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { motion as Motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
} from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Styles/ContactSection.module.less';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [skeleton, setSkeleton] = useState(true); // <- skeleton state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSkeleton(false); // show content after delay
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('Message sent successfully!');
    }, 2000);
  };

  return (
    <section id="ContactSection" className={styles.contactSection}>
      <h2 className={styles.title}>
        <span className={styles.line} />
        <span>You’re Welcome to Visit</span>
        <span className={styles.line} />
      </h2>

      <Container fluid="lg">
        <Row>
          <Col md={7} className={styles.formColumn}>
            {skeleton ? (
              <Placeholder as="div" animation="glow">
                <Placeholder xs={12} className="mb-3" />
                <Placeholder xs={12} className="mb-3" />
                <Placeholder xs={6} className="mb-3" />
                <Placeholder xs={6} className="mb-3" />
                <Placeholder xs={12} className="mb-3" />
                <Placeholder xs={12} className="mb-3" />
                <Placeholder.Button xs={12} variant="dark" />
              </Placeholder>
            ) : (
              <Motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className={styles.subtitle}>
                  <em>Have a Question? We’re Here to Help</em>
                </p>
                <p className={styles.description}>
                  Email us at{' '}
                  <NavLink to="mailto:info@my-domain.com">
                    info@my-domain.com
                  </NavLink>{' '}
                  or send us a message via the contact form below and we’ll get
                  back to you
                </p>

                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="First name *"
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Last name *"
                        required
                      />
                    </Col>
                  </Row>

                  <Form.Control
                    type="email"
                    placeholder="Email *"
                    className="mb-3"
                    required
                  />

                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message here..."
                    className="mb-3"
                    required
                  />

                  <Button
                    type="submit"
                    variant="dark"
                    className="w-100"
                    disabled={loading || submitted}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          role="status"
                          className="me-2"
                        />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <FaCheckCircle className="me-2" /> Sent!
                      </>
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </Form>
              </Motion.div>
            )}
          </Col>

          <Col md={5} className={styles.infoColumn}>
            {skeleton ? (
              <Placeholder as="div" animation="glow">
                <Placeholder xs={10} className="mb-3" />
                <Placeholder xs={12} className="mb-2" />
                <Placeholder xs={12} className="mb-2" />
                <Placeholder xs={6} className="mb-2" />
                <Placeholder xs={8} className="mb-2" />
              </Placeholder>
            ) : (
              <>
                <Motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={styles.block}
                >
                  <h5>
                    <FaMapMarkerAlt /> Our Stores
                  </h5>
                  <p>
                    500 Terry Francine Street
                    <br />
                    San Francisco, CA 94158
                    <br />
                    <NavLink href="tel:1234567890" className={styles.link}>
                      <FaPhoneAlt /> Tel: 123-456-7890
                    </NavLink>
                  </p>
                  <hr className={styles.divider} />
                  <p>
                    500 Terry Francine Street
                    <br />
                    San Francisco, CA 94158
                    <br />
                    <NavLink to="tel:1234567890" className={styles.link}>
                      <FaPhoneAlt /> Tel: 123-456-7890
                    </NavLink>
                  </p>
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={styles.block}
                >
                  <h5>
                    <FaClock /> Opening Hours
                  </h5>
                  <p>Mon - Fri: 8am - 8pm</p>
                  <p>Saturday: 9am - 9pm</p>
                  <p>Sunday: 9am - 10pm</p>
                </Motion.div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
