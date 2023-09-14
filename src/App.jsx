
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/blog'
function App() {



  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        <Blog></Blog>

      </div>
    </>
  )
}

export default App
