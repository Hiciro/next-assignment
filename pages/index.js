import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
   <div>
      <h1 className={styles.title}>Homepage NINJA</h1>
      <p className={styles.text}>A ninja (忍者, Japanese pronunciation: [ɲiꜜɲdʑa]) or shinobi (忍び, [ɕinobi]) was a covert agent or mercenary in feudal Japan. The functions of a ninja included reconnaissance, espionage, infiltration, deception, ambush, bodyguarding and their fighting skills in martial arts, including ninjutsu.</p>
      <p className={styles.text}>Ninja (aka Shinobi) were the specialised assassins, saboteurs, and secret agents of medieval Japanese warfare who were highly-trained proponents of the martial arts, especially what later became known as ninjutsu or 'the art of the ninja'. These special forces were adept at disguise, deception, and assaulting enemy positions and strongholds, usually at night when they moved like shadows in their traditional dark clothing. Employed from the 15th century CE onwards, ninjas, because of their lengthy secret training in specialised schools and mysterious anonymity, have acquired a perhaps exaggerated reputation for fantastic feats and weapons play, which makes them perfect characters for many modern comic books and computer games.</p>
   <Link href="/ninjas">
    <a className={styles.btn}>See Ninja Listing</a>
   </Link>
   </div>
   </>
  )
}
