// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Layout component for the app. This component allows me to share a common section across multiple pages. Header, Navigation and Footer.


// Imports
import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "../Navigation"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Modal from "../Modal";
import { AuthContextProvider } from "@/hooks/AuthContext";
{AuthContextProvider}

config.autoAddCss = false; /* eslint-disable import/first */

// Component allows me to share a common section across multiple pages. Header, Navigation and Footer.





const Layout = ({children}) => {

const [showModal, setShowModal] = useState(false);
const [activeModal, setActiveModal] = useState("login");

const [showNav, setShowNav] = useState(false)


const toggleModal = (e) => {
    setShowModal(!showModal);
    setActiveModal(e);
}

const toggleNav = (e) => {

  setShowNav(!showNav)

}

  return(
    <AuthContextProvider>
    <div>
     
        <Header />
        <Modal display={activeModal} show={showModal} toggle={toggleModal}/>
        <Navigation toggle={toggleModal} navToggle={toggleNav} show={showNav} />      
        {children}
        <Footer />        
    </div>
    </AuthContextProvider>
    
  )
}

export default Layout