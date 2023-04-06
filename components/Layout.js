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

const [showModal, setShowModal] = useState(false);
const [activeModal, setActiveModal] = useState("login");

const toggleModal = (e) => {
    setShowModal(!showModal);
    setActiveModal(e);
}


  return(
    <div>
        <Header />
        <Modal display={activeModal} show={showModal} toggle={toggleModal}/>
        <Navigation toggle={toggleModal} />      
        {children}
        <Footer />        
    </div>
  )
}

export default Layout