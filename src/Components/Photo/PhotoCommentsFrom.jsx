import React, {useState} from 'react'
import usefecth from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { COMMENT_POST } from '../../api';
const PhotoCommentsFrom = ({id, setComments}) => {

  const [comment, setComment] = useState('');
  const {request, error} = usefecth();

  async function handleSubmit(event){
    event.preventDefault();
    const{url, options} = COMMENT_POST(id,{comment})
    const {response, json} = await request(url, options);
    setComment('');
    if(response.ok) { 
        setComments((comments) => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <textarea id="comment" name="comment" placeholder='Comente' value={comment} onChange={({target}) => setComment(target.value)}></textarea>
        <button>Comentar</button>
        <Error error={error} />
    </form>
  )
}

export default PhotoCommentsFrom