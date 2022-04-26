import { Provider } from "react-redux";
import { Routes } from "./routes/index";
import store from './store';
import GlobalStyle from './styles/global';
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      <GlobalStyle />
    </>
  )
}

export default App
