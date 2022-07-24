import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from ".././components/Header"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello ! Testing connection. </h1>
            <Header />
        </div>
    )
}
