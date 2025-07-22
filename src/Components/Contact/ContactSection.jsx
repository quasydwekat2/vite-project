import React, { useState } from 'react';
import { object, string, number } from 'yup';
import { toast, Slide } from 'react-toastify';
import { Container, Row, Col, Form, NavLink } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import GlowButton from '../Animated/GlowButton';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Styles/ContactSection.module.less';

export default function ContactSection() {
  const [buttonState, setButtonState] = useState('idle');
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    age: '',
    message: '',
  });

  const handleValidate = async data => {
    const schema = object({
      Fname: string().required('First name is required').min(4),
      Lname: string().required('Last name is required').min(4),
      Email: string().required('Email is required').email('Invalid email format'),
      age: number()
        .required('Age is required')
        .min(1, 'Too young')
        .max(100, 'Too old')
        .integer('Must be a whole number'),
      message: string().required('Message is required').min(10),
    });

    return await schema.validate(data, { abortEarly: false });
  };

  const handleSubmit = async () => {
    setButtonState('loading');
    let toastId = null;

    try {
      await handleValidate(formData);

      toastId = toast.success('✅ Form sent successfully!', {
        position: 'top-center',
        autoClose: false,
        theme: 'colored',
        transition: Slide,
      });

      setFormData({
        Fname: '',
        Lname: '',
        Email: '',
        age: '',
        message: '',
      });

      setButtonState('success');
      setTimeout(() => {
        toast.dismiss(toastId);
        setButtonState('idle');
      }, 3000);
    } catch (err) {
      if (err.errors) {
        toastId = toast.error(err.errors.join('\n'), {
          position: 'top-center',
          autoClose: false,
          theme: 'colored',
          transition: Slide,
        });
        setButtonState('error');
        setTimeout(() => {
          toast.dismiss(toastId);
          setButtonState('idle');
        }, 4000);
      } else {
        setButtonState('idle');
      }
    }
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
          {/* === Form Column === */}
          <Col md={7} className={styles.formColumn}>
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={styles.subtitle}>
                <em>Have a Question? We're Here to Help</em>
              </p>
              <p className={styles.description}>
                Email us at
                <NavLink to="mailto:info@my-domain.com">info@my-domain.com</NavLink>
                or send us a message via the contact form below and we’ll get back to you.
              </p>

              <Form
                onSubmit={e => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="First name *"
                      value={formData.Fname}
                      onChange={e => setFormData({ ...formData, Fname: e.target.value })}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Last name *"
                      value={formData.Lname}
                      onChange={e => setFormData({ ...formData, Lname: e.target.value })}
                      required
                    />
                  </Col>
                </Row>

                <Form.Control
                  type="email"
                  placeholder="Email *"
                  className="mb-3"
                  value={formData.Email}
                  onChange={e => setFormData({ ...formData, Email: e.target.value })}
                  required
                />

                <Form.Control
                  type="number"
                  placeholder="Age *"
                  className="mb-3"
                  value={formData.age}
                  onChange={e => setFormData({ ...formData, age: e.target.value })}
                  required
                />

                <Form.Control
                  as="textarea"
                  placeholder="Your message *"
                  rows={5}
                  className="mb-3"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />

                <div className={styles.buttonWrapper}>
                  <GlowButton
                    buttonState={buttonState}
                    onClick={handleSubmit}
                    idleText="Send Message"
                    loadingText="Sending..."
                    successText="Sent!"
                    errorText="Fix Errors"
                    width="100%"
                  />
                </div>
              </Form>
            </Motion.div>
          </Col>

          {/* === Info Column === */}
          <Col md={5} className={styles.infoColumn}>
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
                <NavLink to="tel:1234567890" className={styles.link}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
