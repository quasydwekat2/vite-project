import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <section className="py-5" data-aos="fade-up">
      <Container>
        <h2 className="text-center mb-3">You're Welcome to Visit</h2>
        <p className="text-center fs-5">Have a Question? We're Here to Help</p>
        <p className="text-center text-muted mb-4">
          Email us at{' '}
          <a
            href="mailto:info@my-domain.com"
            className="text-decoration-underline text-dark fw-semibold"
          >
            info@my-domain.com
          </a>{' '}
          or send us a message via the contact form below and we’ll get back to you.
        </p>

        <Form>
          <Row className="mb-3">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Control type="text" placeholder="First name *" required />
            </Col>
            <Col md={6}>
              <Form.Control type="text" placeholder="Last name *" required />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email *" required />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Type your message here... *"
              required
            />
          </Form.Group>
          <Button type="submit" variant="dark" className="w-100">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}
