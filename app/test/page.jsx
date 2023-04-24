import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
        
       <h2>test page</h2>

       <div><Link href='/test/blahblah'>first name</Link></div>
       <div>second name</div>
       <div>third name</div>


    </div>
    
  )
}

export default page