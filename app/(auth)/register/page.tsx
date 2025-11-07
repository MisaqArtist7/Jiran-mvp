import Link from "next/link"
export default function RegisterPage() {
    return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <form action="" className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
        {/* Name */}
        <label htmlFor="FullName" className="block mb-1 font-medium">Full Name</label>
        <div className={`flex-row-center w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <svg className="h-7 w-7" > 
            <use href="#userIcon"></use>
          </svg>
          <input id="FullName" type="text" placeholder="Enter your name" className="w-full pl-2" />
        </div>

        {/* Email */}
        <label htmlFor="email" className="block mt-4 mb-1 font-medium">Email</label>
        <div className={`flex-row-center w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <svg className="h-7 w-7" > 
            <use href="#envelopIcon"></use>
          </svg>
          <input id="email" type="email" placeholder="Enter your email" className="w-full pl-2" />
        </div>

        {/* Password */}
        <label htmlFor="password" className="block mt-4 mb-1 font-medium">Password</label>
        <div className={`relative rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <div className="flex-row-center w-full p-2">
            <svg className="h-7 w-7" > 
                <use href="#keyIcon"></use>
            </svg>
            <input type="password" id="password" placeholder="Enter your password" className="w-full pl-2" />
          </div>
          {/* <button type="button" onClick={e => { e.preventDefault(); setShowPassword(prev => !prev) }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
            <Image src={showPassword ? '/images/close.svg' : '/images/open.svg'} width={25} height={25} alt="toggle visibility" />
          </button> */}
        </div>

        {/* Confirm Password */}
        <label htmlFor="confirmPassword" className="block mt-4 mb-1 font-medium">Re-Password</label>
        <div className={`relative rounded border border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <div className="flex-row-center w-full p-2">
            <svg className="h-7 w-7" > 
                <use href="#keyIcon"></use>
            </svg>
            <input type="password" id="confirmPassword" placeholder="Re-enter your password" className="w-full pl-2" />
          </div>
          {/* <button type="button" onClick={e => { e.preventDefault(); setShowConfirmPassword(prev => !prev) }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
            <Image src={showConfirmPassword ? '/images/close.svg' : '/images/open.svg'} width={25} height={25} alt="toggle visibility" />
          </button> */}
        </div>

        {/* Terms */}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="w-3.5 h-3.5" />
            <span className="text-sm select-none">I agree to the <span className="text-(--primaryColor)">Terms Of Services</span></span>
          </label>
        </div>

        {/* Submit */}
        <button type="submit" className={`w-full bg-(--primaryColor) cursor-pointer mt-6 text-white py-2 rounded-md transition`}>
            sign up
        </button>

        {/* Link to login */}
        <p className="text-center mt-4 text-sm">
          Already have an account? <Link href="/login" className="text-[var(--primaryColor)] hover:underline">Sign In</Link>
        </p>
      </form>
    </section>
  )
}
