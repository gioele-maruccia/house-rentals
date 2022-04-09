import './assets/scss/App.scss';
import Header from './elements/Header';
import Home from "./pages/Home";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
