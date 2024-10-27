import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <>
 <div>
       <div className="flex h-screen items-center justify-center">
       <div className="modal-box dark:bg-slate-900 dark:text-white">
       <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    {/* </form> */}
    <h3 className="font-bold text-lg">Contact Us</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type='name'
        placeholder='Enter the name' 
        className='w-80 px-3 border-rounded-md outline-none'
        {...register("name", { required: true })} 
        />
        <br/>
        {errors.name && <span className='text-sm text-red-500'>Name is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type='email'
        placeholder='Enter the email' 
        className='w-80 px-3 border-rounded-md outline-none'
        {...register("email", { required: true })} 
        />
        <br/>
        {errors.name && <span className='text-sm text-red-500'>Email is required</span>}
    </div>
    <div className='mt-4 space-y-'>
        <span>Message</span>
        <br />
        <textarea
        placeholder='Type your message' 
        className='w-80 px-3 border-rounded-md outline-none'
        {...register("message", { required: true })} 
        />
        <br/>
        {errors.message && <span className='text-sm text-red-500'>Message is required</span>}
        </div>
    <br/>
    <div className='flex justify-around mt-4'>
        <button 
        type="submit" 
        className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
          Submit
          </button>
    </div>
    </form>
  </div>
</div>
 </div>
    </>
  )
}

export default Contact