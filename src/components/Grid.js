import React,{useEffect, useState} from 'react'


const Grid = () => {

    const config=[
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ];
 
    const [color,setColor]=useState([]);
    const [dummy,setDummy]=useState([]);
    const [indexToDelete, setIndexToDelete] = useState(0);


    const handleClick=(index)=>{
      
      //  setDummy((prev)=>[...prev,index]);
    }

    useEffect(()=>{
      if(dummy.length>=8){
   
         const t=setInterval(()=>{
      
        const newDummy = [...dummy];
           newDummy.splice(indexToDelete,1);
           setDummy(newDummy);
           setIndexToDelete(indexToDelete+1);
           console.log(dummy);
        },1000) 

     return ()=>clearTimeout(t);

      }
    },[dummy])

  return (
    <div className='h-72 w-72 border border-black items-center p-2 grid grid-cols-3'>
       {
        config.flat(1).map((data,index)=>{
            return(
                
                data?
                <div onClick={()=>handleClick(index)} key={index} className=''>
                   <div className={`h-20 w-20 border border-black ${data==2?"bg-green-400":"bg-white"}`}></div>
                </div>:<span key={index}></span>
                
            )
        })
       }
    </div>
  )
}

export default Grid
