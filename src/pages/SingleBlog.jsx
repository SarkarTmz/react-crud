import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import '../styles/SingleBlog.css'
import Navbar from "../components/Navbar";


const SingleBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [blog,setBlog]  =  useState();

        const fetchBlog = async ()=>{
        const response = await axios.get("https://64ee096e1f872182714237b9.mockapi.io/blog/" + id)
          if(response.status == 200){
            setBlog(response.data)
            // console.log(blog)
          }else{
            alert("Something went wrong")
          }
  }

    // delete blog
    const deleteBlog = async ()=>{
      const response = await axios.delete("https://64ee096e1f872182714237b9.mockapi.io/blog/" + id)
        if(response.status == 200){
          navigate("/")
        }else{
          alert("Something went wrong")
        }
    }

  useEffect(()=>{
    fetchBlog()

  },[])

  return (
    <>
        <Navbar />
          <div className="blog-post">
            <div className="avatar">
                <img src={blog?.avatar} alt="Author Avatar" />
            </div>
            <div className="post-content">
                <h1 className="post-title">{blog?.title}</h1>
                <p className="post-description">{blog?.description}</p>
                <p className="post-content">{blog?.content}</p>
            <button onClick={deleteBlog} >Delete</button>
            <button onClick={()=>navigate("/editBlog/" + blog.id)} >Edit</button>
            </div>
          </div>
    </>
  )
}

export default SingleBlog