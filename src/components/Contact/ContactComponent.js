import React from 'react';

export default function ContactComponent() {
  return (
    <div className="text-dark">
      {/* Hero Image + Title */}
      <section className="position-relative w-100" style={{ height: '500px' }}>
        <img
          src="https://static.wixstatic.com/media/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg/v1/fill/w_1225,h_986,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg"
          alt="Contact Background"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        >
          <h1 className="text-white display-5 fst-italic fw-light m-0">Contact Us</h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container py-5">
        <div className="row">
          {/* Left Column - Form */}
          <div className="col-md-7">
            <h2 className="text-center fs-4 fst-italic fw-light mb-4 border-top border-dark pt-3">
              You're Welcome to Visit
            </h2>

            <p className="fst-italic fw-semibold mb-2">Have a Question? We're Here to Help</p>
            <p className="text-muted mb-4">
              Email us at{' '}
              <a href="mailto:info@my-domain.com" className="text-decoration-underline text-dark">
                info@my-domain.com
              </a>{' '}
              or send us a message via the contact form below and we’ll get back to you.
            </p>

            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name *" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name *" />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email *" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Type your message here... *"></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="col-md-5 ps-md-5">
            <div className="mb-5">
              <h5 className="fst-italic fw-semibold mb-3 text-end pe-md-4">Our Stores</h5>
              <p className="mb-2 text-end pe-md-4">
                500 Terry Francine Street<br />
                San Francisco, CA 94158<br />
                Tel: 123-456-7890
              </p>
              <hr className="w-25 my-4 border border-dark ms-auto me-0" />
              <p className="text-end pe-md-4">
                500 Terry Francine Street<br />
                San Francisco, CA 94158<br />
                Tel: 123-456-7890
              </p>
            </div>
            <div className="text-end pe-md-4">
              <h5 className="fst-italic fw-semibold mb-3">Opening Hours</h5>
              <p className="mb-1">Mon - Fri: 8am - 8pm</p>
              <p className="mb-1">Saturday: 9am - 9pm</p>
              <p className="mb-0">Sunday: 9am - 10pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
