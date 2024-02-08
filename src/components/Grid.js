import React,{useEffect, useState} from 'react'


const Grid = () => {

    const config=[
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ];
 
    const [color,setColor]=useState(new Set());
    const [count,setCount]=useState(0);
    // const [indexToDelete, setIndexToDelete] = useState(0);


   
    // useEffect(()=>{
    //   if(dummy.length>=8){
   
    //      const t=setInterval(()=>{
      
    //     const newDummy = [...dummy];
    //        newDummy.splice(indexToDelete,1);
    //        setDummy(newDummy);
    //        setIndexToDelete(indexToDelete+1);
    //        console.log(dummy);
    //     },1000) 

    //  return ()=>clearTimeout(t);

    //   }

    useEffect(()=>{
       
      if(count>=8){
         
          const colorArray = Array.from(color);
          const lastElement = colorArray[colorArray.length - 1];
          console.log(lastElement);
     }
    },[count])

    const handleOnOff=(index)=>{
        console.log(`on/off ${index}`);
        setColor(new Set([...color,index]));
        setCount(count+1);
    }

  return (
    <div className='h-72 w-72 border-2 border-black rounded items-center p-2 grid grid-cols-3'>
       {
        config.flat(1).map((data,index)=>{
            return(
                data?
                <div onClick={()=>handleOnOff(index)} key={index} >
                   <div className={`h-20 w-20 border border-black  ${color.has(index)?"bg-green-500":""}` }></div>
                </div>
                :<span key={index}></span>                
            )
        })
       }
    </div>
  )
}

export default Grid
