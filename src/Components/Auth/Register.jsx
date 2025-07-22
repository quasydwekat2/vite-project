import React, { useState } from 'react';
import { object, string, number, ref } from 'yup';
import { toast, Slide } from 'react-toastify';
import { Row, Col, Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import bgImage from '@/img/Green.avif';
import GlowButton from '../Animated/GlowButton';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Styles/Register.module.less';

// Reusable validation schema
const schema = object({
  firstName: string().required('First name is required'),
  middleName: string().required('Middle name is required'),
  lastName: string().required('Last name is required'),
  age: number().required('Age is required').min(1).max(120),
  gender: string().required('Gender is required'),
  email: string().email('Invalid email').required('Email is required'),
  phone: string()
    .matches(/^[0-9]{10,15}$/, 'Phone must be 10–15 digits')
    .required('Phone is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState([]);
  const [buttonState, setButtonState] = useState('idle');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getFieldError = field => formErrors.find(e => e.path === field)?.message || '';

  const handleFieldValidation = async (field, value) => {
    try {
      await schema.validateAt(field, { ...formData, [field]: value });
      setFormErrors(prev => prev.filter(e => e.path !== field));
    } catch (error) {
      setFormErrors(prev => [
        ...prev.filter(e => e.path !== field),
        ...(error?.inner || [error]),
      ]);
    }
  };

  const runRegisterLogic = async () => {
    setButtonState('loading');
    setFormErrors([]);

    try {
      await schema.validate(formData, { abortEarly: false });

      const toastId = toast.success('SignUp Success 🎉', {
        position: 'top-center',
        autoClose: 3000,
        transition: Slide,
        theme: 'colored',
      });

      setButtonState('success');
      setTimeout(() => {
        toast.dismiss(toastId);
        setButtonState('idle');
        navigate('/');
      }, 3000);
    } catch (err) {
      if (err.inner) setFormErrors(err.inner);
      setButtonState('error');
      setTimeout(() => setButtonState('idle'), 3000);
    }
  };

  return (
    <div className={styles.signInWrapper}>
      <Motion.div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ scale: 1.1, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <Motion.div
        className={styles.animatedBackground}
        initial={{ y: 0 }}
        animate={{ y: 15 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,224C672,224,768,192,864,170.7C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
          />
        </svg>
      </Motion.div>

      <div className={styles.loginContainer}>
        <Row className={styles.loginRow}>
          <Col md={8} lg={6} className={styles.cardMotion}>
            <Motion.div
              className={styles.signInCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className={styles.title}>Create Account</h2>

              <Form
                onSubmit={e => {
                  e.preventDefault();
                  runRegisterLogic();
                }}
              >
                <Row>
                  {['firstName', 'middleName', 'lastName'].map(field => (
                    <Col md={4} key={field}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</Form.Label>
                        <Form.Control
                          id={field}
                          type="text"
                          value={formData[field]}
                          onChange={async e => {
                            const value = e.target.value;
                            setFormData(prev => ({ ...prev, [field]: value }));
                            await handleFieldValidation(field, value);
                          }}
                          isInvalid={!!getFieldError(field)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {getFieldError(field)}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  ))}
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="age">Age</Form.Label>
                      <Form.Control
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={async e => {
                          const value = e.target.value;
                          setFormData(prev => ({ ...prev, age: value }));
                          await handleFieldValidation('age', value);
                        }}
                        isInvalid={!!getFieldError('age')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {getFieldError('age')}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="gender">Gender</Form.Label>
                      <Form.Select
                        id="gender"
                        value={formData.gender}
                        onChange={async e => {
                          const value = e.target.value;
                          setFormData(prev => ({ ...prev, gender: value }));
                          await handleFieldValidation('gender', value);
                        }}
                        isInvalid={!!getFieldError('gender')}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {getFieldError('gender')}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={async e => {
                          const value = e.target.value;
                          setFormData(prev => ({ ...prev, email: value }));
                          await handleFieldValidation('email', value);
                        }}
                        isInvalid={!!getFieldError('email')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {getFieldError('email')}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="phone">Phone</Form.Label>
                      <Form.Control
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={async e => {
                          const value = e.target.value;
                          setFormData(prev => ({ ...prev, phone: value }));
                          await handleFieldValidation('phone', value);
                        }}
                        isInvalid={!!getFieldError('phone')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {getFieldError('phone')}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {['password', 'confirmPassword'].map(field => {
                  const isShow = field === 'password' ? showPassword : showConfirm;
                  const setShow = field === 'password' ? setShowPassword : setShowConfirm;
                  return (
                    <Form.Group className="mb-3" key={field}>
                      <Form.Label htmlFor={field}>
                        {field === 'confirmPassword' ? 'Confirm Password' : 'Password'}
                      </Form.Label>
                      <div className="position-relative d-flex">
                        <Form.Control
                          id={field}
                          type={isShow ? 'text' : 'password'}
                          value={formData[field]}
                          onChange={async e => {
                            const value = e.target.value;
                            setFormData(prev => ({ ...prev, [field]: value }));
                            await handleFieldValidation(field, value);
                          }}
                          isInvalid={!!getFieldError(field)}
                        />
                        <span
                          onClick={() => setShow(prev => !prev)}
                          className={styles.eyeIcon}
                          role="button"
                          tabIndex="0"
                          aria-label={`Toggle ${field}`}
                        >
                          {isShow ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {getFieldError(field)}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                })}

                <GlowButton
                  buttonState={buttonState}
                  onClick={runRegisterLogic}
                  idleText="Sign Up"
                  loadingText="Creating..."
                  successText="Account Created!"
                  errorText="Try Again"
                />
              </Form>

              <div className="text-center mt-3">
                <p className={styles.registerText}>
                  Already have an account?{' '}
                  <NavLink to="/login" className={styles.link}>
                    Login
                  </NavLink>
                </p>
              </div>
            </Motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
