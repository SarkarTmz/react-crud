
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllBlogs from './pages/AllBlogs'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'

function App() {
   return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllBlogs />} />
            <Route path="/singleBlog/:id" element={<SingleBlog />} />
            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path="/editBlog/:id" element={<EditBlog />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
