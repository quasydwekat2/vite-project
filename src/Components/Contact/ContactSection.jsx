import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Styles/ContactSection.module.less';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={styles.contactSection}>
      <Container>
        <h2 className="text-center fs-4 fst-italic fw-light mb-5 border-top pt-3" data-aos="fade-down">
          You're Welcome to Visit
        </h2>

        <Row>
          {/* Contact Form */}
          <Col md={7} data-aos="fade-up">
            <div className={styles.formSection}>
              <p className="fst-italic fw-semibold mb-2">
                Have a Question? We're Here to Help
              </p>
              <p className="mb-4">
                Email us at{' '}
                <a href="mailto:info@my-domain.com">info@my-domain.com</a> or
                send us a message via the contact form below and we’ll get back
                to you.
              </p>

              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="First name *" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Last name *" />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email *" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Type your message here... *"
                  />
                </Form.Group>

                <Button type="submit" variant="dark" className="w-100">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={5} className="ps-md-5" data-aos="fade-left">
            <div className={styles.storeInfo}>
              <div className="mb-5">
                <h5 className="text-end pe-md-4">Our Stores</h5>
                <p className="text-end pe-md-4 mb-2">
                  500 Terry Francine Street
                  <br />
                  San Francisco, CA 94158
                  <br />
                  Tel: 123-456-7890
                </p>
                <hr className={`my-4 ${styles.storeDivider}`} data-aos="fade-left" />
                <p className="text-end pe-md-4">
                  500 Terry Francine Street
                  <br />
                  San Francisco, CA 94158
                  <br />
                  Tel: 123-456-7890
                </p>
              </div>

              <hr className={`my-4 ${styles.storeDivider}`} data-aos="fade-left" />

              <div className="text-end pe-md-4">
                <h5>Opening Hours</h5>
                <p className="mb-1">Mon - Fri: 8am - 8pm</p>
                <p className="mb-1">Saturday: 9am - 9pm</p>
                <p className="mb-0">Sunday: 9am - 10pm</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
