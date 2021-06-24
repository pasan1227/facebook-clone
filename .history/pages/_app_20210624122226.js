import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}
    <Component {...pageProps} />
  )
    
}

export default MyApp
