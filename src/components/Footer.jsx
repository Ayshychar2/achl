import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-name">ACHL <span className="title-highlight">Learning</span></span>
          <p className="footer-description">
            Building Critical Thinkers In the era of AI. Supporting Professionals in Building Career-Ready Graduates.
          </p>
          <p className="footer-copyright">© 2026 ACHL Pvt. Ltd. All Rights Reserved.</p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/achl_learnings" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a href="https://www.linkedin.com/company/achllearnings/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a href="mailto:contact@achllearnings.com" className="social-link" aria-label="Email">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
