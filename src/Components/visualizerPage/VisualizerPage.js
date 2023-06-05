import React, { useState } from 'react'
import './VisualizerPage.css'

export default function VisualizerPage() {

    
    const [size, setSize] = useState(0);

    const [array,setArray] = useState([]);

    const handleKeyDown = (event) => {
        if(event.key === "Enter")
        {
            setSize(event.target.value);
        }
    }

    const handleOnClick = () => {
        let arr =[];
        let num;
        for(let i=0;i<size;i++)
        {
            num = Math.ceil((Math.random()*200) + 5);
            arr.push(num);
        }
        setArray(arr);
        console.log("Before Sort: "+array); 
    }

    //use state sets up after the func is odne


    function bubbleSort(){

        // for(let i=0;i<size;i++)
        // {
        //     for(let j=i+1;j<size-i-1;j++)
        //     {
        //         if(array[j]>array[j+1])
        //         {
        //             let temp = array[j];
        //             array[j] = array[j+1];
        //             array[j+1] = temp;
        //         }
        //     }
        // }

        console.log("After sort: "+array);

        let dummyArray = array;
        dummyArray.sort((a,b) => a-b)

        setArray(dummyArray);
        
    }

    console.log("rerendered");
  return (
    <div>
        <h1>Bubble Sort Visualizer</h1>
        <label htmlFor="sizeOfArray">Enter Size: </label>
        <input type="number" id='sizeOfArray' onKeyDown={handleKeyDown}/>
        <br />
        <div  style={{marginBottom: "0.5rem"}}>
            <label htmlFor="enteredSize">Size: </label>
            <span id='enteredSize'>{size}</span>
        </div>
        <button onClick={handleOnClick} style={{marginRight: "1rem"}}>Generate Array</button>
        <button onClick={bubbleSort}>Sort</button>
        <div className='arrayContainer'>
            {array.map( (value,index) => (
                <div className='arrayBar' key={index} style={{height: `${value}px`}}>
                    
                </div>
            ))}
        </div>
    </div>
  )
}
