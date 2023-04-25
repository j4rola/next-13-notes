import React from 'react'

function page({ params }) { 
  return (
    <>
    <div>Dynamic page name: {params.arbitrary_name}</div> 
    <div>static data</div> 
    </>  
  )
}

export default page  