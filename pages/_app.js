import '../styles/globals.css'
import Navbar from '../components/Navbar';
import {AnimatePresence} from 'framer-motion';
import PAGE_TRANSITION from '../pageTransitions';


function MyApp({ Component, pageProps, router }) {

  const handExitComplete = () => {
    if (typeof window !== 'undefined') {
      const hashId = window.location.hash;
      if (hashId) {
        setTimeout(() => {
          window.location.href = 'http://localhost:3000/'+hashId 
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
