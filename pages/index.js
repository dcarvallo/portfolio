import Head from 'next/head'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head key='title'>
        <title>Daniel Carvallo | Software Developer</title>
        <meta name="description" content="I'm a software developer I like to make new exceptional digital experiences with web technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
