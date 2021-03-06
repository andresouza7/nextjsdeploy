import Head from 'next/head'
import List from '../components/List'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import server from '../server'
import axios from 'axios'

export async function getServerSideProps(context) {

  try {
    let response = await axios.get(`${server}/api/products`)
    let products = response.data
    return {
      props: {
          products
      }
  }
  } catch (error) {
    console.log(error)
    return {
      props: {
          products: []
      }
  }
  }

  
}

export default function Home({products}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="">Next.js shop</a>
        </h1>

        <p className={styles.description}>
          Check out our products at{' '}
          <code className={styles.code}>api/products</code>
        </p>

        <Link href="/create">Create new product</Link>

        <List products={products} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
