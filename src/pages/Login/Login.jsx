import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const captchaRef = useRef(null)
  const [disabled, setDisabled] = useState(true)


  const { login } = useContext(authContext)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const validateCaptchaText = () => {
    const captchaText = captchaRef.current.value;
    if (validateCaptcha(captchaText) == true) {
      setDisabled(false)
    }

    else {
      alert('Captcha Does Not Match');
    }
  }
  const handleLoginForm = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    login(email, password)
      .then(result => {
        const user = result.user;
        Swal.fire(
          'Log in successful!',
          'success'
        )
        navigate(from, { replace: true })
      })
      .catch()

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

            <div className="form-control">
              <label className="label">
                <span className="label-text"> <LoadCanvasTemplate /></span>
              </label>
              <input ref={captchaRef} name="captcha" type="text" placeholder="type above text" className="input input-bordered" />
              {/* <button onClick={validateCaptchaText} className='btn btn-secondary btn-xs my-4'>Validate captcha</button> */}
            </div>
            <div className="form-control mt-6">
              {/* <input disabled={disabled} type="submit" className="btn btn-primary" value='login' /> */}
              <input type="submit" className="btn btn-primary" value='login' />
            </div>
          </form>
          <div>
            not regeistered <Link to='/signUp'>sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;