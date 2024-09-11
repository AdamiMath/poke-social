import React, { useContext, useState } from 'react'
import {UserContext} from '../../UserContext'
import styles from './PhotoComments.module.css'
import PhotoCommentsFrom from './PhotoCommentsFrom'

const PhotoComments = (props) => {
  const [comments,setComments] = useState(()=> props.comments);

  const {login} = useContext(UserContext)
  
  return (
    <>
      <ul className={styles.comment}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}

      </ul>
      {login && <PhotoCommentsFrom id={props.id} setComments={setComments}/> }
    </>
  )
}

export default PhotoComments