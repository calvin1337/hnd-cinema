
const Form = () => {
  return(
    <form style={{color:"#222"}} action="login" className="flex flex-col h-full w-full justify-center align-center">
      <h1 className="text-center">Welcome Please Login :)</h1>
      <input style={{border:"1px solid #222", margin:"20px auto"}} className="h-10 w-4/5 bg-gray-200 p-2 rounded" type="text" name="username" placeholder="Username" required></input>
      <input style={{border:"1px solid #222", margin:"20px auto"}} className="h-10 w-4/5 bg-gray-200 p-2 rounded" type="password" name="password" placeholder="Password" required></input>
      <button type="submit" value="Login">Login</button>
    </form>
  )
}

export default Form 