import Card from "./Card.jsx";

function Container({imageArray,setScore,setHighScore,score,highScore,setArray,array,clickedArray,setClickedArray}){


    function shuffleArray(){
        let newArray = []
        let cloneArray = [...array]
        let length = array.length
        for(let i=0;i<length;i++){
            let newIndex = getRandomInt(0,array.length)
            while (cloneArray[newIndex] === null)
                newIndex = getRandomInt(0,array.length)
            newArray.push(cloneArray[newIndex])
            cloneArray[newIndex] = null
        }
        return newArray
    }




    return (
        <>
            <div className={"container"}>
                {imageArray.map((image, index) => (
                    <Card onClick={()=>{
                        image.sound.volume = 0.1
                        image.sound.play()
                        if(clickedArray.includes(image)){
                            setScore(0)
                            setClickedArray([])
                        }
                        else{
                            setScore(score+1)
                            clickedArray.push(image)
                            if(score+1>highScore)
                                setHighScore(highScore+1)
                        }

                        setArray(shuffleArray)
                    }

                    } key = {index} image = {image}></Card>
                ))}
            </div>
        </>
    );
}


function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;




}

export default Container;