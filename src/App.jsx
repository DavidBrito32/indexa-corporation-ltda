import Ways from './routes/index';
import { HooksProvider } from './context/index'

const App = () => {

  return (
    <>
      <HooksProvider>
        <Ways />
      </HooksProvider>
    </>
  )
}

export default App
