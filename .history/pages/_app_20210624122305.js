import '../styles/globals.css'
import { Pro }

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
    
}

export default MyApp
