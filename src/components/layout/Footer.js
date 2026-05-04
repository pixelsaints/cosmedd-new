export default function Footer() {
  return (
    <footer className="footer">

      {/* 1. Brand Statement */}
      <div className="footer__top">
        <h2>Cosmedd</h2>
        <p>
          Precision-led healthcare solutions designed for clarity, trust, and better outcomes.
        </p>
      </div>

      {/* 2. Core Grid */}
      <div className="footer__grid">

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li>Diagnostics</li>
            <li>Consultation</li>
            <li>Treatment Plans</li>
            <li>Care Programs</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li>About Cosmedd</li>
            <li>Our Approach</li>
            <li>Research</li>
            <li>Care Network</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p>support@cosmedd.com</p>
          <p>+91 00000 00000</p>
          <p>Bangalore, India</p>
        </div>

        <div className="footer__col">
          <h4>Operating Hours</h4>
          <p>Mon – Sat</p>
          <p>9:00 AM – 6:00 PM</p>
          <p>Emergency support 24/7</p>
        </div>

      </div>

      {/* 3. Info Strip */}
      <div className="footer__info">
        <span>ISO Certified Processes</span>
        <span>Data Protected Care Systems</span>
        <span>HIPAA-style Compliance Standards</span>
      </div>

      {/* 4. Bottom Bar */}
      <div className="footer__bottom">
        <p>© 2026 Cosmedd. All rights reserved.</p>
        <p>Healthcare clarity through structured systems.</p>
      </div>

    </footer>
  )
}
