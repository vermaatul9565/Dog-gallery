import {useState, useEffect} from 'react';
import Breed from './Breed';
import '../App.css'
const SearchByBreed = ({inputSearch}) => {
    
    const [list, setlist] = useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${inputSearch}/images`)
        .then((req)=>req.json())
        .then((d)=>{
            if(d.status === 'success'){
                setlist([...list, ...d.message]);
                console.log(list,d);
            }
        }).catch((err)=>{console.log(err)})
       
    }, [inputSearch])
    return ( 
        <div className="randombreedlist">
        {
            list.length===0 && <h2>Result not found</h2>
        }
        {
            list.length>0 && list.map((breed, i)=>{
                return(
                    <div className={"breed-list-div"}key={i}>
                    {/* <img src={breed} alt="breedImage"/> */}
                    <Breed breedImg={breed} breedName={breed.split('/')[4]}/>
                    </div>
                )
            })
        }

        </div>
     );
}
 
export default SearchByBreed;