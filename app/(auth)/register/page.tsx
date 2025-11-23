'use client'
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

const registerSchema = z.object({
  name: z.string().min(8, { message: 'Name must be at least 8 characters' })
  .regex(/^[a-zA-Z\s]+$/, { message: 'Name may only contain letters and spaces.' }),
  email: z.email( { message: 'Invalid email address' } ),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must include at least one number' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must include at least one symbol (e.g. @, #, !)' }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ['password_confirmation'],
  });
  
  type registerFormInputs = z.infer< typeof registerSchema >
  
  type registerPayload = registerFormInputs & {
    location: { lat: number; lng: number } | null
  };

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [pending, setPending] = useState(false)
  const {register, handleSubmit, setError, formState: { errors } } = useForm<registerFormInputs>({
    resolver: zodResolver(registerSchema)
  })

  const onsubmit = async (data: registerFormInputs) => {  
    setPending(true)
    const sendToServer = async (finalData : registerPayload) => {
      try {
        const response = await fetch('https://jiran-api.com/api/v1/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalData),
        });
        if (!response.ok) throw new Error('Something went wrong');
        const result = await response.json();
        console.log(result);

      } catch (error) {
        console.log(error);
      } finally {
        setPending(false)
      }
    };

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const finalData = {
          ...data,
          location: { lat: latitude, lng: longitude },
        };
        await sendToServer(finalData);
      },
      async () => {
        const finalData = { ...data, location: null };
        await sendToServer(finalData);
      }
    );
  };

    return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit(onsubmit)} className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
        {/* Name */}
        <label htmlFor="FullName" className="block mb-1 font-medium">Full Name</label>
        <div className={`flex-row-center w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <svg className="h-7 w-7" > 
            <use href="#userIcon"></use>
          </svg>
          <input {...register('name')}
          id="FullName" type="text" placeholder="Enter your name" className="w-full pl-2" />
        </div>
        {errors.name && (<p className="text-red-600 text-sm">{errors.name.message}</p>)}

        {/* Email */}
        <label htmlFor="email" className="block mt-3 mb-1 font-medium">Email</label>
        <div className={`flex-row-center w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <svg className="h-7 w-7" > 
            <use href="#envelopIcon"></use>
          </svg>
          <input {...register('email')}
          id="email" type="email" placeholder="Enter your email" className="w-full pl-2" />
        </div>
        {errors.email && (<p className="text-red-600 text-sm">{errors.email.message}</p>)}

        {/* Password */}
        <label htmlFor="password" className="block mt-3 mb-1 font-medium">Password</label>
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

        {/* Confirm Password */}
        <label htmlFor="confirmPassword" className="block mt-3 mb-1 font-medium">Re-Password</label>
        <div className={`relative rounded border-2 border-gray-200 hover:border-(--primaryColor)`}>
          <div className="flex-row-center w-full p-2">
            <svg className="h-7 w-7" > 
                <use href="#keyIcon"></use>
            </svg>
            <input {...register('password_confirmation')}
            type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" placeholder="Re-enter your password" className="w-full pl-2" />
          </div>
          <button type="button" onClick={e => { e.preventDefault(); setShowConfirmPassword(prev => !prev) }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
            <Image src={showConfirmPassword ? '/images/close.svg' : '/images/open.svg'} width={25} height={25} alt="toggle visibility" />
          </button>
        </div>
          {errors.password_confirmation && (<p className="text-red-600 text-sm">{errors.password_confirmation.message}</p>)}

        {/* Terms */}
        <div className="flex items-center justify-between mt-3">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="w-3.5 h-3.5" />
            <span className="text-sm select-none">I agree to the <span className="text-(--primaryColor)">Terms Of Services</span></span>
          </label>
        </div>

        {/* Submit */}
        <button type="submit" disabled={pending} className={`w-full cursor-pointer mt-6 text-white py-2 rounded-md transition ${pending ? 'bg-(--primaryColor)/70 cursor-not-allowed' : 'bg-(--primaryColor) cursor-not-allowed'}`}>
            {pending ? 'pending...' : 'sign up'}
        </button>

        {/* Link to login */}
        <p className="text-center mt-3 text-sm">
          Already have an account? <Link href="/login" className="text-(--primaryColor) hover:underline">Sign In</Link>
        </p>
      </form>
    </section>
  )
}
