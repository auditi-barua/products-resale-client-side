import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

    
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = (data) =>
        console.log(data);
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-center text-xl text-white">SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"className="input input-bordered w-full max-w-xs" {...register("mail", { required: "Name is required" })} 
        aria-invalid={errors.name ? "true" : "false"} 
      />
      {errors.name && <p role="alert">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"className="input input-bordered w-full max-w-xs" {...register("mail", { required: "Email address is required" })} 
        aria-invalid={errors.name ? "true" : "false"} 
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  className="input input-bordered w-full max-w-xs" {...register("password", { required: "Password is required" })} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password"  className="input input-bordered w-full max-w-xs" {...register("password", { required: "Password is required", pattern: /^[A-Za-z]+$/i,minLength:"Password must be 6 characters"  })} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className="btn mt-5 btn-accent w-full" value="Login" />
                </form>
                <p>Already have an account?<Link to='/login' className='text-secondary'>Create a new Account</Link></p>
                <div className='divider'>or</div>
                <button className='btn btn-outline w-full'><FaGoogle className="text-gray-900 w-10"/>CONTNIUE WITH GOOGLE</button>
                <button className='btn btn-outline mt-5 w-full'><FaFacebook className="text-gray-900 w-10"/> CONTNIUE WITH Facebook</button>
                <button className='btn btn-outline mt-5 w-full'><FaGithub className="text-gray-900 w-10"/>CONTNIUE WITH Github</button>
            </div>
        </div>
    );
};

export default SignUp;