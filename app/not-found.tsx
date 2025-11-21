import React from 'react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='flex-row-center min-h-screen text-4xl'>
      <div className='flex flex-col justify-center items-center'>
        <h1>not-found</h1>
        <Link href="./">go back to home page</Link>
      </div>
    </div>
  )
}
