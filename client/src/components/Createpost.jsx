import { useState } from "react"
import { Form } from "react-router-dom"

const Createpost = () => {
    const [image, setimage] = useState("")
    const handleImage = (e) => {
        setimage(e.target.files[0])
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(image)
    } 
  return (
    <>
    
    <div className='h-64 p-4 text-white w-[22rem] rounded-3xl bg-blue-500'>
       <form onSubmit={submitHandler}>
        <input type="file" name="post" onChange={handleImage}  id="" />
        
       <button type="submit">submit</button>
       </form>
</div>
</>
  )
}

export default Createpost