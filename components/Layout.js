// Imports

import Header from "./Header"
import Navigation from "./Navigation"

// Component allows me to share a common section across multiple pages. Header, Navigation and Footer.


const Layout = ({children}) => {
  return(
    <div>
      <Header />
       <Navigation />      
        {children}
        <h1>Footer</h1>        
    </div>
  )
}

export default Layout