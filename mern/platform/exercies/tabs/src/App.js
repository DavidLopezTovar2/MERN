import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home></Home>
      </Layout>
    </div>
  );
}

export default App;
