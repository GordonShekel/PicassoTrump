import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId ={ChainId.Mumbai}
      chainRpc={{
          [ChainId.Mumbai]:'https://polygon-mumbai.infura.io/v3/49d9b5c34a134c9b930a8cf6cf6e8f1c'
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
        
      </ThirdwebProvider>



  )
}
    

export default MyApp
