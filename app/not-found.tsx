import Link from 'next/link'
import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <section className='container flex items-center justify-around min-h-screen'>
      <div>
        <Image src='/images/notfound.svg' height={100} width={100} alt='' className='w-full h-full'></Image>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/images/404.svg' height={100} width={100} alt='' className='w-full h-full'></Image>
        <div className='flex-col-center mt-2 mb-4'>
          <h1>lost in metaverse</h1>
          <p className='text-gray-600 text-sm'>Oops it seems you follow backlink</p>
        </div>
        <div className='flex items-center justify-center gap-1 text-blue-800 text-xl font-semibold border  rounded-full px-3 py-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          <Link href="./">go back to home page</Link>
        </div>
      </div>
    </section>
  )
}
