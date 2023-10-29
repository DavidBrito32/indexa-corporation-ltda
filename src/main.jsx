import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import { Theme } from './theme/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </>,
)
