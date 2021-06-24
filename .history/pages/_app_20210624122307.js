import '../styles/globals.css'
import { Provider } from ''

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
    
}

export default MyApp
