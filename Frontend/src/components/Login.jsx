import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // console.log(data);
    const userInfo={
      email:data.email,
      password:data.password,
    };
    try {
    const res = await axios.post("http://localhost:4001/user/login",userInfo)
    console.log(res.data);
    if (res.data) {
      toast.success('Login Successfully!');
      document.getElementById("my_modal_3").close();
      setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      },3000)
      }  } 
  catch (err) {
    console.error(err);
    toast.error("Error: " + (err.response?.data?.message || err.message));
    setTimeout(()=>{},3000);
}
  };

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
          </button>
    {/* </form> */}
    <h3 className="font-bold text-lg">Login</h3>
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
    <br/>
    <div>
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
        <button 
        type="submit" 
        className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
          Login
          </button>
        <p>Not Registered? {" "}
            <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link> {""}
            </p>
    </div>
    </form>
  </div>
</dialog> 
    </div>
    </>
  );
}

export default Login