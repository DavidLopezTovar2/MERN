import Layout from './components/Layout';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
