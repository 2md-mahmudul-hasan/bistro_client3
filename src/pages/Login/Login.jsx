

const Login = () => {
  const handleLoginForm = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>

        </div>
        <div className="card w-[500px] shadow-2xl bg-base-100">
          <form onSubmit={handleLoginForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="text" placeholder="email" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="text" placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value='login' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;