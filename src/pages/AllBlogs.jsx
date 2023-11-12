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
      console.log(response.data)

    setBlogs(response.data)
  
    
  }


  }

  useEffect(()=>{
    fetchBlogs()
   
  },[])


  return (
    <div>
      <Navbar /> 
      <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap'}}>
        {
          blogs.map((blog)=>{
            return (
              <div className="card" key={blog.id}>
                    <img src={blog.avatar} alt="Avatar"  width='100%' />
                      <div className="container">
                        <h4><b>{blog.title}</b></h4> 
                        <p style={{color:"red"}}>{blog.description}</p> 
                        <p>{blog.createdAt}</p>
                      </div>
                      <p onClick={()=>navigate("/singleBlog/" + blog.id)} style={{textAlign:"center"}}>See More</p>
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