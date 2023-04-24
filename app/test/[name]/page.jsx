import React from 'react'

function page({ params }) { 
  return (<>
    <div>{params.name}</div> 
    <div>static</div>
    </>
  )
}

export default page