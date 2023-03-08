import Header from "./Header"

const Layout = ({children}) => {
  return(
    <div>
      <Header />
       <h1>Nav</h1>         
        {children}
        <h1>Footer</h1>        
    </div>
  )
}

export default Layout