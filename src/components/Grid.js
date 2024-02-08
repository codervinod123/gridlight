import React,{useEffect, useState} from 'react'


const Grid = () => {

    const config=[
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ];
 
    const [color,setColor]=useState([]);
    const [deactivating,setDeactivating]=useState(false);
    // const [indexToDelete, setIndexToDelete] = useState(0);


   
 


    const handleOnOff=(index)=>{

          const newColor=[...color,index];
          setColor(newColor);
          if(newColor.length===8) {
            deActivateCells();
          }
    }

    const deActivateCells=()=>{
        setDeactivating(true);
        const timer=setInterval(()=>{
           setColor((originalColor)=>{
             const newColor=originalColor.slice();
             newColor.pop();

             if(newColor.length===0){
               clearInterval(timer);
               setDeactivating(false);
             }
            return newColor;
           })
        },400)
    }

  return (
    <div className='h-72 w-72 border-2 border-black rounded items-center p-2 grid grid-cols-3'>
       {
        config.flat(1).map((data,index)=>{
            return(
                data?
                <button disabled={color.includes(index)} onClick={()=>handleOnOff(index)} key={index} >
                   <div className={`h-20 w-20 border border-black ${color.includes(index)?"bg-green-500":""}`}></div>
                </button>
                :<span key={index}></span>                
            )
        })
       }
    </div>
  )
}

export default Grid
