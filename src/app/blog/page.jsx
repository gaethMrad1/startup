import Blogs from '@/components/Blogs/Blogs'
import React from 'react'

export const metadata = {
  title: "Sartup-Blogs",
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container">
        <Blogs />
      </div>
    </div>
  )
}
