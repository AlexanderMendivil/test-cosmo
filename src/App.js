import logo from './logo.svg';
import './App.css';
import { Layout } from './layout/Layout';
import { AppProvider } from './Context/AppProvider';

function App() {
  return (

    <AppProvider>
      <Layout/>
    </AppProvider>
  );
}

export default App;
