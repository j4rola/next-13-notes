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