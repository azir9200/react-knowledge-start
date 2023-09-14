
import './App.css'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {



  return (
    <>


      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto '>
        <Cart></Cart>
        <Home></Home>
      </div>
    </>
  )
}

export default App
