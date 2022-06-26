import '../styles/globals.css'
import Navbar from '../components/Navbar';
import {AnimatePresence} from 'framer-motion';
import {ThemeProvider} from 'next-themes'
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
      
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <AnimatePresence exitBeforeEnter initial={false} onExitComplete={handExitComplete}>
              <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </ThemeProvider>
      
    )
}

export default MyApp
