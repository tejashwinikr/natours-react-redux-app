import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Dummy = () => {
  const { register, handleSubmit } = useForm() 
  const [imgs,setImgs] =useState()
  const [imageuploaded,setImageUploaded] = useState();

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleFile =(e) =>{
    setImageUploaded(e.target.files)
    console.log(e)
    console.log(e.target.value);
    console.log(e.target.files);
    console.log(imageuploaded)
   
    console.log(e.target.files)
        const data = new FileReader()
        data.addEventListener('load',()=>{
            setImgs(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }

    console.log(imgs)

  return (
    <div> Hello
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Submit</button>
    </form> */}
    <form>
      <input type="file" name="picture" onChange={e => handleFile(e)}>
      
      </input>
    </form>
 
<p>hii jk</p>
    <img src={imgs} alt="imag" height="200px" width="200px">
    </img>
    </div>
  );
}

export default Dummy;