import {useState, useEffect} from 'react';
import Breed from './Breed';
import '../App.css'
const BreedList = () => {
    const [list, setlist] = useState([]);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/30')
        .then((req)=>req.json())
        .then((d)=>{
            setlist(d.message);
        })
       
    }, [])
    return ( 
        <div className="randombreedlist">
        {   
            list && list.map((breed, i)=>{
                return(
                    <div className={"breed-list-div"}key={i}>
                    <Breed breedImg={breed} breedName={breed.split('/')[4].split('-')[0]}/>
                    </div>
                )
            })
        }

        </div>
     );
}
 
export default BreedList;