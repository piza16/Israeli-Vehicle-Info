import React, { useState } from "react"

export const DynamicTextArea = () => {
    const [textContent,setTextContent]=useState<string>("");
    
    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextContent(event.currentTarget.value)
    }
    return(
    <div>
        <textarea onChange={handleChange} className="mt-4 text-black" name="" id=""></textarea>
        <h2 className="text-white">{textContent}</h2>
    </div>
    )
}