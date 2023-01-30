import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const post = props.savedPosts
  return (
            
           post.map((post) => { const { name, title, description, image } = post;
            return <div key={title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} />
                <p>{description}</p>
                </div>
           })
       
  )
}


export default PostItem