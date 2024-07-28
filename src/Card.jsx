function Card({image,onClick}){



    return (
        <>
            <div onClick={()=>{
                onClick()
            }} className={"card"}>
                <img src={image.img}/>
                <p>{image.name}</p>
            </div>
        </>

    );
}
export default Card