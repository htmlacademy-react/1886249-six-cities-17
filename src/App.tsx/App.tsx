import MainPage from '../pages/mai-page/MainPage';
import { placesToStay } from '../pages/mock-data';


function App() {
  return (
    <MainPage placesToStay={placesToStay}/>
  );
}

export default App;
