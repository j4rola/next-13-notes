/* Dynamic Routing
 To create a dynamic route, first create folder in the desired directory and
 put its name inside of brackets. The name you choose does not matter. You will will
 need to use this name inside your page component for the dynamic route if you want
 to access the dynamic value but the actual value that you choose does not matter to
 begin with
*/ 

import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


function page() {
  return (
    <div className={styles.flex}>
        
      <h2>test page</h2>

      <div><Link href='/test/blahblah'>first item</Link></div>
      <div><Link href='/test/dfdgd'>second item</Link></div>
      <div><Link href='/test/hjhjkh'>third item</Link></div>


    </div>
    
  )
}

export default page