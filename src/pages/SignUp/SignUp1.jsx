
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProviders';



const SignUp1 = () => {
  const { createUser } = useContext(authContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      })
  }
  return (
    <>
      <Helmet>
        <title>sign up </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>

          </div>
          <div className="card w-[500px] shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input {...register('name', { required: true })} type="text" placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-warning'> Name is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  {...register('email', { required: true })} type="text" placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-warning'> Email is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  {...register('password', { required: true, minLength: 6, maxLength: 10 })} type="password" placeholder="password" className="input input-bordered" />
                {errors.password && <span className='text-warning'> password is required</span>}
              </div>


              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value='sign up' />
              </div>
            </form>
            <div className='text-secondary text-center py-4'>Already sign up <Link to='/login'> <button className='btn btn-outline'>log in here </button> </Link></div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SignUp1;