/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { object, string } from 'yup';
import { toast, Slide } from 'react-toastify';
import { Row, Col, Form } from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import Green from '@/img/Green.webp';

import GlowButton from '../Animated/GlowButton';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Styles/Login.module.less';

// Schema reused across input validation and submit
const schema = object({
  emailOrPhone: string()
    .required('Email or phone number is required')
    .test('is-valid-contact', 'Enter a valid email or phone number', value => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{6,15}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ emailOrPhone: '', password: '' });
  const [formErrors, setFormErrors] = useState([]);
  const [buttonState, setButtonState] = useState('idle');
  const [showPassword, setShowPassword] = useState(false);

  const getFieldError = field => formErrors.find(e => e.path === field)?.message || '';

  const runLoginLogic = async () => {
    setButtonState('loading');
    setFormErrors([]);
    let toastId;

    try {
      await schema.validate(formData, { abortEarly: false });

      toastId = toast.success('SignIn Success', {
        position: 'top-center',
        autoClose: false,
        theme: 'colored',
        transition: Slide,
      });

      setButtonState('success');
      setTimeout(() => {
        toast.dismiss(toastId);
        setButtonState('idle');
        navigate('/');
      }, 3000);
    } catch (err) {
      if (err.inner) setFormErrors(err.inner);

      toastId = toast.error(err.errors?.join('\n') || 'Validation failed', {
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
    }
  };

  return (
    <div className={styles.signInWrapper}>
      {/* 🌄 Animated Background */}
      <Motion.div
        className={styles.Green}
        style={{ backgroundImage: `url(${Green})` }}
        initial={{ scale: 1.1, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* 🌊 Animated Wave */}
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

      {/* 🔐 Login Form */}
      <div className={styles.loginContainer}>
        <Row className={styles.loginRow}>
          <Col md={6} lg={5} className={styles.cardMotion}>
            <Motion.div
              className={styles.signInCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className={styles.title}>Welcome Back</h2>

              {/* Social Logins */}
              <div className={styles.socialButtons}>
                <button className={styles.google} aria-label="Sign in with Google">
                  <FaGoogle /> Sign in with Google
                </button>
                <button className={styles.facebook} aria-label="Sign in with Facebook">
                  <FaFacebookF /> Sign in with Facebook
                </button>
              </div>

              <Form
                onSubmit={e => {
                  e.preventDefault();
                  runLoginLogic();
                }}
              >
                {/* Email or Phone */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="emailOrPhone">Email or Phone Number</Form.Label>
                  <Form.Control
                    id="emailOrPhone"
                    type="text"
                    value={formData.emailOrPhone}
                    onChange={async e => {
                      const value = e.target.value;
                      setFormData(prev => ({ ...prev, emailOrPhone: value }));
                      try {
                        await schema.validateAt('emailOrPhone', {
                          ...formData,
                          emailOrPhone: value,
                        });
                        setFormErrors(prev => prev.filter(err => err.path !== 'emailOrPhone'));
                      } catch (error) {
                        setFormErrors(prev => [
                          ...prev.filter(err => err.path !== 'emailOrPhone'),
                          ...(error?.inner || [error]),
                        ]);
                      }
                    }}
                    isInvalid={!!getFieldError('emailOrPhone')}
                    placeholder="Enter your email or phone number"
                    autoComplete="username"
                    aria-label="Email or phone"
                  />
                  <Form.Control.Feedback type="invalid">
                    {getFieldError('emailOrPhone')}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <div className="position-relative d-flex">
                    <Form.Control
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={async e => {
                        const value = e.target.value;
                        setFormData(prev => ({ ...prev, password: value }));
                        try {
                          await schema.validateAt('password', {
                            ...formData,
                            password: value,
                          });
                          setFormErrors(prev => prev.filter(err => err.path !== 'password'));
                        } catch (error) {
                          setFormErrors(prev => [
                            ...prev.filter(err => err.path !== 'password'),
                            ...(error?.inner || [error]),
                          ]);
                        }
                      }}
                      isInvalid={!!getFieldError('password')}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      aria-label="Password"
                    />
                    <span
                      onClick={() => setShowPassword(prev => !prev)}
                      className={styles.eyeIcon}
                      role="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {getFieldError('password')}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Remember + Forgot */}
                <div className={styles.optionsRow}>
                  <Form.Check type="checkbox" label="Remember Me" />
                  <NavLink to="/forgot-password" className={styles.link}>
                    Forgot Password?
                  </NavLink>
                </div>

                {/* Submit Button */}
                <GlowButton
                  buttonState={buttonState}
                  onClick={runLoginLogic}
                  idleText="Sign In"
                  loadingText="Checking..."
                  successText="Valid!"
                  errorText="Try Again"
                />
              </Form>

              {/* Sign Up Link */}
              <div className="text-center mt-3">
                <p className={styles.registerText}>
                  Don’t have an account?{' '}
                  <NavLink to="/register" className={styles.link}>
                    Sign Up
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
