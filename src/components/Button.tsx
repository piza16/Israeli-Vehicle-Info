export const Button=()=>{
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        event.currentTarget.style.backgroundColor="green";
    }
    return(
        <div>
            <button
                className="px-4 py-2 ml-4 text-white bg-indigo-500 rounded hover:bg-indigo-600"
                onClick={handleClick}
            >Change color</button>
        </div>
    )
}