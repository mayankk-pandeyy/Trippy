



function Card(props){

    return(
        <div className="flex flex-col gap-3 rounded cursor-pointer py-4 px-3 shadow-4xl w-[32%] ">
            <div className="h-[200px] overflow-hidden rounded">
                <img src={props.image} className="c object-center hover:scale-150 transition ease-in-out duration-[0.5s]"/>
            </div>
            <div className="text-2xl font-poppins font-bold text-start">
                {props.title}
            </div>
            <div className="font-poppins text-start">
                {props.description}
            </div>
        </div>
    );


}

export default Card;