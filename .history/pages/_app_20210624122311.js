import '../styles/globals.css'
import { Provider } from 'ne'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
    
}

export default MyApp
