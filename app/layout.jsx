import styles from '../styles/Home.module.css'

export default function RootLayout({children}) {
  
    return (
      <div lang="en" className={styles.flex}>
        <h1>Header</h1>
        <body>{children}</body> 
        <h1>Footer</h1>
      </div>  
    );

}
  