'use client'
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
  email: z.email( { message: 'Invalid email address' } ),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must include at least one number' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must include at least one symbol (e.g. @, #, !)' }),
  })

  type registerFormInputs = z.infer< typeof loginSchema >

  export default function RegisterPage() {
  const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const {register, handleSubmit, formState: { errors } } = useForm<registerFormInputs>({
      resolver: zodResolver(loginSchema)
    })

    const sendDataToServer = async (data : registerFormInputs) => {
      try{
        const response = await fetch('https://jiran-api.com/api/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify(data)
        })
        if(!response.ok) {
            const errorBody = await response.json()
            alert(errorBody.message || 'Login failed')
            return
        }
          const result = await response.json()
          const token = result.data.token
          router.push('/dashboard')
          console.log(token)
          localStorage.setItem('token', token)
          console.log(result)
      } catch (error) {
        console.log(error)
      }
    }

    return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit(sendDataToServer)} className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
        {/* Email */}
        <label htmlFor="email" className="block mt-4 mb-1 font-medium">Email</label>
        <div className={`flex-row-center w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <svg className="h-7 w-7" > 
            <use href="#envelopIcon"></use>
          </svg>
          <input {...register('email')}
          id="email" type="email" placeholder="Enter your email" className="w-full pl-2" />
        </div>
        {errors.email && (<p className="text-red-600 text-sm">{errors.email.message}</p>)}

        {/* Password */}
        <label htmlFor="password" className="block mt-4 mb-1 font-medium">Password</label>
        <div className={`relative rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <div className="flex-row-center w-full p-2">
            <svg className="h-7 w-7" > 
                <use href="#keyIcon"></use>
            </svg>
            <input {...register('password')}
            type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter your password" className="w-full pl-2" />
          </div>
          <button type="button" onClick={e => { e.preventDefault(); setShowPassword(prev => !prev) }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
            <Image src={showPassword ? '/images/close.svg' : '/images/open.svg'} width={25} height={25} alt="toggle visibility" />
          </button>
        </div>
          {errors.password && (<p className="text-red-600 text-sm">{errors.password.message}</p>)}

        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-1">
              <input className="w-3.5 h-3.5" type="checkbox" name="rememberMe" />
              <span className="text-sm select-none">Remember me</span>
            </div>
            <a href="#" className="text-sm text-(--primaryColor) hover:underline">Forgot password?</a>
          </label>
        </div>

        {/* Submit */}
        <button type="submit" className={`w-full bg-(--primaryColor) cursor-pointer mt-4 text-white py-2 rounded-md transition`}>
            sign in
        </button>

        {/* Link to login */}
        <p className="text-center mt-4 text-sm">
          Already have an account? <Link href="/register" className="text-(--primaryColor) hover:underline">Sign up</Link>
        </p>
      </form>
    </section>
  )
}
