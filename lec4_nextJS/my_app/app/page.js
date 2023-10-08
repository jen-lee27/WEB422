import Image from 'next/image'
import styles from './page.module.css'
import Content from './states'

export default function Home() {
  return (
    <main>
      <h1>HEllo world</h1>
      <Content/>
      {/* <a href="/about">About Us</a>  */}
      {/* not a good idea to use a tag because it'll download a lot of things everytime it accesses the page */}
      {/* to prevent this, always use Link which will cache some of it for you for better performance */}
      <Link href="/about">About Us</Link>
    </main>
  )
}
