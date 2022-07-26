import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"

import { useMoralis } from "react-moralis"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract raffle</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello ! Testing connection. </h1>
            {/* header /connect button / nav bar */}
            <ManualHeader />
        </div>
    )
}
