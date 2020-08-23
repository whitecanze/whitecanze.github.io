import '../styles/styles.scss'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps } />
    </>
  )
}


MyApp.getServerSideProps = async (appContext) => {
  const appProps = await App.getServerSideProps(appContext);

  return (
      {...appProps}
  ) 
}
export default MyApp
