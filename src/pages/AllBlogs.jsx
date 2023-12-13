import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import '../styles/AllBlogs.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"


const AllBlogs = () => {
  const navigate = useNavigate()
  const [blogs,setBlogs] = useState([])


  const fetchBlogs = async()=>{
        const response = await axios.get("https://64ee096e1f872182714237b9.mockapi.io/blog")
        if(response.status == 200){
          // console.log(response.data)

        setBlogs(response.data)
        }


  }

  useEffect(()=>{
    fetchBlogs()
   
  },[])


  return (
    <div>
      <Navbar /> 
      <div className="allblog">
        {
          blogs.map((blog)=>{
            return (
              <div className="card" key={blog.id}>
                    <img src={blog.avatar} alt="Avatar"  width='100%' />
                      <div className="container">
                        <h3 className="title">{blog.title}</h3> 
                        <p className="description">{blog.description}</p>
                        {/* <p className="content">{blog.content}</p> */}
                        <p className="date">{blog.createdAt}</p>
                      </div>
                      <p onClick={()=>navigate("/singleBlog/" + blog.id)} className="next">See More</p>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default AllBlogs