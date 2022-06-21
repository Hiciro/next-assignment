import Head from 'next/head'

const About= () => {
    return (
        <>
        <Head>
      <title>Ninja List | About</title>
      <meta name="keywords" content="ninjas" />
    </Head>
        <div>
            <h1>About NINJA</h1>
            <p>Ninjas may seem mysterious, but the origin of their name is not. The word ninja derives from the Japanese characters nin and ja. Nin initially meant "persevere," but over time it developed the extended meanings "conceal" and "move stealthily." In Japanese, ja is the combining form of sha, meaning "person." Ninjas originated in the mountains of ancient Japan as practitioners of ninjutsu, a martial art sometimes called "the art of stealth" or "the art of invisibility."</p>
            <p>They often served as military spies and were trained in disguise, concealment, geography, meteorology, medicine, and also the arts of combat and self-defense we associate with modern martial arts. Popular legends still identify them with espionage and assassinations, but modern ninjas are most likely to study ninjutsu to improve their physical fitness and self-defense skills.</p>
        </div>
        </>
    );
}

export default About;