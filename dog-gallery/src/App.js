import './App.css';
import BreedList from './components/BreedList';
import Header from './components/Header';
import SearchByBreed from './components/SearchByBreed';
import {useState} from 'react';
function App(){
  const [inputSearch, setinputSearch] = useState("");
  return (
    <div className="App">
      <Header/>
      <input id='input' type='text' onChange={(e)=>{setinputSearch(e.target.value)}} placeholder='Type here to filter by breed...'/>

      {
        !inputSearch && <BreedList/>
      }
      {
        inputSearch  && <SearchByBreed inputSearch={inputSearch} />
      }
      
    </div>
  );
}

export default App;
