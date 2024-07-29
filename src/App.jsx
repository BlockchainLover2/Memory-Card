import './App.css'
import {getImages} from "./ImageApi.js";
import {useEffect, useState} from "react";
import Container from "./Container.jsx";
import DataContainer from "./UserData.jsx";

function App() {
    const [array,setArray] = useState([])
    const [highScore, setHighScore] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedArray,setClickedArray] = useState([]);

    useEffect(() => {
        async function get(){
       setArray(await getImages())
    }
    get()



  }, []);



  return (
    <>
      <Container imageArray={array} setScore = {setScore}
                 setHighScore = {setHighScore}
                 score = {score} highScore = {highScore}
                 setArray = {setArray}
                 array = {array} clickedArray={clickedArray}
                 setClickedArray={setClickedArray}></Container>
      <DataContainer highScore={highScore} score={score}></DataContainer>

    </>
  )
}

export default App
