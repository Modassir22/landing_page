import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <footer style={{borderTopRightRadius:"30px",borderTopLeftRadius:"30px"}} className="bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          {/* Programs for Creators Section */}
          <div className="col-lg-2 col-md-6 col-sm-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Programs for Creators</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Start Selling On LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Six Figure Creators
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Seven-Figure Creators
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase fw-bold mt-4 mb-3 small">Programs for Business Owners</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  $1K Worth Leads Per Week
                </a>
              </li>
            </ul>
          </div>

          {/* Seven Figure Creators Section */}
          <div className="col-lg-2 col-md-6 col-sm-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Seven Figure Creators</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Our Story & Mission
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Case Studies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Free Content Section */}
          <div className="col-lg-2 col-md-6 col-sm-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Free Content</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Newsletter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  LinkedIn Posts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Podcast
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="col-lg-2 col-md-6 col-sm-6 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Community</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">
                  Slack Login
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="bg-white rounded-3 p-4 text-dark shadow">
              <h5 className="fw-bold mb-3 text-dark">FREE: Learn how to start selling on LinkedIn!</h5>
              <p className="small mb-4 text-muted">
                A free course showing you exactly how to create an offer that sells, so you can start making money online.
              </p>
              
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: '1px solid #dee2e6' }}
                />
              </div>
              
              <button 
                onClick={handleSubmit} 
                className="btn btn-primary w-100 mb-3 btn-lg fw-bold"
                style={{ backgroundColor: '#0d6efd', border: 'none' }}
              >
                Send Free Course!
              </button>
              
              <p className="small text-muted mb-0">
                By providing my email, I agree to receive marketing communications from Seven Figure Creators and/or its partners.{' '}
                <a href="#" className="text-primary text-decoration-underline">
                  See our privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section with horizontal line */}
        <hr className="my-4 opacity-50" />
        
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                   style={{ width: '40px', height: '40px' }}>
                <span className="text-primary fw-bold">SF</span>
              </div>
              <span className="fw-bold">Seven Figure Creators</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <small className="opacity-75">© 2024 Seven Figure Creators. All rights reserved.</small>
          </div>
          
          {/* Social Icons */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-white me-3 opacity-75" style={{ fontSize: '1.2rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-white me-3 opacity-75" style={{ fontSize: '1.2rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-white opacity-75" style={{ fontSize: '1.2rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Powered By Section */}
        <div className="text-center mt-4">
          <div className="bg-white rounded-pill d-inline-block px-4 py-2 shadow-sm">
            <small className="text-dark">
              Powered by <strong>SuperHi</strong>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;