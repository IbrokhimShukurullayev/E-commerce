import React, { useEffect } from 'react'
import "./blog.scss"
import Breadcrumb from '../../components/breadCrumb/BreadCrumb'
import Blogcard from '../../components/blogcard/Blogcard'

const Blog = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div id='blog'>
      <div className="container blog">
        <Breadcrumb/>
        <h2 className='blog__title'>Блог</h2>
        <Blogcard/>
        <Blogcard/>
      </div>
    </div>
  )
}

export default Blog