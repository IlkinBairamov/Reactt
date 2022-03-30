import React from 'react'

export function Clients() {
    const [getClient,setClient]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setClient(data))
    },[])

  return (
    <div>
        {getClient.map(({id,name})=>(
            <p key={id}>
                {`${id}.${name}`}
            </p>
        ))}
    </div>
  )
}

