import React from 'react'

export function Posts() {
    const [getPost,setPost]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>setPost(data))
    },[])
  return (
    <div>
        {getPost.map(({id,title})=>(
            <p  key={id}>
                {`${id}.${title}`}
            </p>
        ))}
    </div>
  )
}

