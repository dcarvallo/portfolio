import '../styles/globals.css'
import Navbar from '../components/Navbar';
import {AnimatePresence} from 'framer-motion';

function MyApp({ Component, pageProps, router }) {

  const handExitComplete = () => {
    if (typeof window !== 'undefined') {
      const hashId = window.location.hash;
      if (hashId) {
        setTimeout(() => {
          window.location.href = window.location.origin+"/"+hashId 
      
        },300)
        
      }
    }
  };

  return (
      <>
        <Navbar />
        <AnimatePresence exitBeforeEnter initial={false} onExitComplete={handExitComplete}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </>
    )
}

export default MyApp
