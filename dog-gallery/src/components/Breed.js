import '../App.css'
import Popup from './Popup';
import { useState,useRef } from 'react';


const Breed = ({breedImg, breedName}) => {
    const disblepopup = useRef(null)
    const [popup, setpopup] = useState(false);
    const openpopup = ()=>{
        setpopup(true)
        disblepopup.current.onClick=undefined;
    }
    const closepopup = ()=>{
        setpopup(false)
        disblepopup.current.onClick=openpopup;
    }

    return (  
    <div className=' randombreed '>
      <img ref={disblepopup} onClick={openpopup} src={breedImg} alt="breedImage"/>
      <h5 id='breedname'>{breedName}</h5>
      {
          popup && <Popup closePopup={closepopup} breedName={breedName}/>
      }
    </div>

    );
}
 
export default Breed;