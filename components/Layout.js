// Imports
import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Modal from "./Modal";

config.autoAddCss = false; /* eslint-disable import/first */

// Component allows me to share a common section across multiple pages. Header, Navigation and Footer.





const Layout = ({children}) => {
  const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);

const toggleLogin = () => {
  setShowLogin(!showLogin);
}

const toggleRegister = () => {
setShowRegister(!showRegister);
}

  return(
    <div>
        <Header />
        <Modal>
          <h1>Test</h1>
        </Modal>
        <Navigation />      
        {children}
        <Footer />        
    </div>
  )
}

export default Layout