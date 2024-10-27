import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const navigate = useNavigate();
  
    const onSubmit = async (data) => {
      // console.log(data);
      const userInfo={
        fullName:data.fullName,
        email:data.email,
        password:data.password,
      };
      try {
      const res = await axios.post("http://localhost:4001/user/signup",userInfo)
      console.log(res.data);
      if (res.data) {
        toast.success('Signup Successfully!');
      
      localStorage.setItem("Users",JSON.stringify(res.data.user));
      navigate('/');
    } }
    catch (err) {
      console.error(err);
      toast.error("Error: " + (err.response?.data?.message || err.message));  }
};
  
  return (
    <>
    <div className="flex h-screen items-center justify-center">
    <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    {/* </form> */}
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type='name'
        placeholder='Enter the name' 
        className='w-80 px-3 border-rounded-md outline-none'
        {...register("fullName", { required: true })}  
        />
        <br/>
        {errors.fullName && <span className='text-sm text-red-500'>Name is required</span>}
    </div>
    {/* <br/> */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type='email'
        placeholder='Enter the email' 
        className='w-80 px-3 border-rounded-md outline-none'
        {...register("email", { required: true })} 
        />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type='password'
        placeholder='Enter the Password'
        className='w-80 px-3 py-1 border-rounded-md outline-none'
        {...register("password", { required: true })} 
        />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
        </div>
    {/* button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
        <p className='text-xl'>Have Account? {" "}
            <button className="underline text-blue-500 cursor-pointer"
    onClick={() => 
      document.getElementById("my_modal_3").showModal()
    }
            >
                Login
                </button> {" "}
            </p>
    </div>
    </form>
  </div>
</div> 
<Login />
    </>
  )
}

export default Signup