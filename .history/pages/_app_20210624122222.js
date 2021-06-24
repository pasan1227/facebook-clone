import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.}
    <Component {...pageProps} />
  )
    
}

export default MyApp
