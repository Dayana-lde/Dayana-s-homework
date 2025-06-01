import {useState} from "react";
export default function Smile(){
const[message, setMessage] = useState(0)
return(
<div className="smileFace">
<h1>you are so cute count your smile</h1>
<button onClick={() => setMessage(message + 1)}>
{message}
</button>
</div>
)
}