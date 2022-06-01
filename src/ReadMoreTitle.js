import { useState } from "react";

export default function ReadMoreTitle ({ children = 35 }) {
    const text = children;
    const [isShown, setIsShownLess] = useState(true);
    const result = isShown ? text.slice(0, 35) : text;

    function toggleIsShown() {
        setIsShownLess((!isShown));
    }

    return(
    <p>
     {result}
     <span onClick={toggleIsShown}></span>  
    </p>
    )
}