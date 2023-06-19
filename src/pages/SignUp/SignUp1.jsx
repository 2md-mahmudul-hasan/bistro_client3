
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const SignUp1 = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>

        </div>
        <div className="card w-[500px] shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit((data) => console.log(data))} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input {...register('name', { required: true })} type="text" placeholder="name" className="input input-bordered" />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  {...register('email', { required: true })} type="text" placeholder="email" className="input input-bordered" />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input  {...register('password', { required: true })} type="password" placeholder="password" className="input input-bordered" />
              {errors.name && <span>This field is required</span>}
            </div>
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value='login' />
            </div>
          </form>
          <div>Already sign up <Link to='/login'> log in here</Link></div>
        </div>
      </div>
    </div>
  )
};

export default SignUp1;