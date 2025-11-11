import { useState } from "react";

function CheckInput() {

    const [checked,setChecked] = useState(true)

    return(
        <>
        <input type="checkbox" 
        checked ={checked}
        onChange={(e)=>setChecked(e.target.checked)}

        />
        </>
    )
}

export default CheckInput;