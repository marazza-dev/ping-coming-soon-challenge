import "./footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer__container'>
      <ul className='footer__social'>
        <li>
          <a href='#'>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href='#'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='#'>
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p className='footer__copyright'>
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
