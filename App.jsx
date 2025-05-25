import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const img =  document.querySelector("img")
const lightOn = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
const lightOff ="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
img.addEventListener("click", function(){
img.src = lightOn;
if (img.src = lightOn){
img.addEventListener("click",function(){
img.src = lightOff;}) 
} else if(img.src = lightOff){
img.addEventListener("click", function(){
img.src = lightOn;
})
}

})
export default App
