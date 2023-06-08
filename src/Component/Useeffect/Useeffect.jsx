import React, { useEffect, useState } from 'react'

function Useeffect() {

    const [count, setCount] = useState(0)

    const inc = () =>{
        setCount (count + 1);
    }

    useEffect(() =>{
        if(count >=1){
            console.log("hello useeffect");
            document.title = `notification ${count}`
        }

        return () =>{
            console.log("useeffect is remove");
        }
    });

    console.log("out side effect");
  return (
    <div>
        <h1>
            helloo
        </h1>
        <p>
            {
                count
            }
        </p>
        <button onClick={inc}>
            click
        </button>
    </div>
  )
}

export default Useeffect;