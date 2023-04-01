// Imports

import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

// Component allows me to share a common section across multiple pages. Header, Navigation and Footer.


const Layout = ({children}) => {
  return(
    <div>
        <Header />
        <Navigation />      
        {children}
        <Footer />        
    </div>
  )
}

export default Layout