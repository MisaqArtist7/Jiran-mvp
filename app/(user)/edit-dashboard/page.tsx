import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function DashboardEdit() {
  return (
    <section>
      <aside className="shadow bg-white border border-gray-100 min-w-72 px-4 py-7 fixed left-0 bottom-0 top-0">
        <div>
          <h1 className="text-2xl font-semibold pb-2 px-1">Edit Dashboard</h1>
          <ul className="flex flex-col justify-start gap-2">
            <li className="hover:bg-(--primaryColor)/20 rounded">
              <Link href="./" className="flex items-center gap-1 p-2">
                <svg className="h-6 w-6">
                  <use href="#homeIcon"></use>
                </svg>
                Home
              </Link>
            </li>

            <li className="hover:bg-(--primaryColor)/20 rounded">
              <Link href="./" className="flex items-center gap-1 p-2">
                <svg className="h-6 w-6">
                  <use href="#notificationIcon"></use>
                </svg>
                Notification
              </Link>
            </li>

            <li className="hover:bg-(--primaryColor)/20 rounded">
              <Link href="./" className="flex items-center gap-1 p-2">
                <svg className="h-6 w-6">
                  <use href="#creatIcon"></use>
                </svg>
                Creat
              </Link>
            </li>

            <button className="flex items-center gap-1 border border-white hover:border-gray-400 hover:bg-gray-50 rounded p-2">
              <Link href="">profile</Link>
            </button>
          </ul>
        </div>
      </aside>

      <div className="bg-white shadow p-3 mx-3 ml-76">
        <h2 className="flex items-center p-3 text-xl text-red-600">
          <svg className='w-9 h-9'>
            <use href='#userIcon2'></use>
          </svg>
          Personal Information</h2>
          <div>
            <div className='flex items-center gap-4'>
                <Image src="/images/avatar.svg" height={136} width={136} alt=""></Image>
                <div>
                  <h2 className="text-2xl font-semibold">Misaq Artist</h2>
                  <div className="flex items-center gap-2">
                    Bio:
                    <span className="text-gray-800">Front-end developer and software architecture</span>
                  </div>
                </div>
            </div>
            <form action="" className='flex flex-col justify-center gap-4 py-3 px-4'>
              <div className='flex items-center justify-start gap-7'>
                <label htmlFor="" className='text-lg'>Name</label>
                <input type="text" placeholder='MisaqArtist' className='w-1/4 border-b border-gray-300 py-1 px-2'/>
              </div>
              <div className='flex items-center justify-start gap-7'>
                <label htmlFor="" className='text-lg'>Email</label>
                <input type="text" placeholder='misaqbabakhani777@gmail.com' className='w-1/4 border-b border-gray-300 py-1 px-2'/>
              </div>
              <div className='flex items-center justify-start gap-7'>
                <label htmlFor="" className='text-lg'>Bio</label>
                <textarea rows={2} placeholder='description...' className='w-1/4 ml-5 border-b border-gray-300 py-1 px-2'/>
              </div>
              <div className='flex items-center justify-start'>
                <label htmlFor="" className='text-lg'>Gender</label>
                <div className='flex items-center gap-1 ml-4'>
                  <input type='checkbox'/>
                  <span>Male</span>
                </div>
                <div className='flex items-center gap-1 ml-4'>
                  <input type='checkbox'/>
                  <span>Female</span>
                </div>
                <div className='flex items-center gap-1 ml-4'>
                  <input type='checkbox'/>
                  <span>Other</span>
                </div>
              </div>
              <div className='flex items-center justify-start'>
                <label htmlFor="" className='text-lg'>Social Links</label>
                <div className='flex items-center gap-1 ml-4'>
                  <Image src='images/linkedin.svg' width={22} height={22} alt=""></Image>
                  <span>@misaqArtist021</span>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <button className='text-xl w-full cursor-pointer mt-6 text-red-600 hover:text-white py-2 rounded transition border-2 border-red-600 hover:bg-red-600'>Discard</button>
                <button className='text-xl w-full cursor-pointer mt-6 text-white py-2 rounded transition border-2 border-(--primaryColor) bg-(--primaryColor)/90 hover:bg-(--primaryColor)'>Done</button>
              </div>
            </form>
          </div>
      </div>

      <div className="bg-white shadow p-3 px-7 mx-3 ml-76 my-4">
        <h2 className="flex items-center py-3 text-xl text-red-600">
          <svg className='w-9 h-9'>
            <use href='#locIcon'></use>
          </svg>
          Your Location
        </h2>
        <div className="flex justify-between items-center">
          <form action="" className='w-full'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex flex-col justify-center w-full'>
                <label htmlFor="">Latitude</label>
                <input type="text" placeholder='32.6545' className='w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)'/>
              </div>
              <div className='flex flex-col justify-center w-full'>
                <label htmlFor="">Longitude</label>
                <input type="text" placeholder='32.6545' className='w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)'/>
              </div>
            </div>
            <div className='flex-row-center h-[222px] border border-gray-200 my-3'>
              map
            </div>
            <div className='flex items-center justify-center gap-2'>
              <button className='text-xl w-full cursor-pointer text-red-600 hover:text-white py-2 rounded transition border-2 border-red-600 hover:bg-red-600'>Discard</button>
              <button className='text-xl w-full cursor-pointer text-white py-2 rounded transition border-2 border-(--primaryColor) bg-(--primaryColor)/90 hover:bg-(--primaryColor)'>Change Location</button>
            </div>
          </form>

        </div>
      </div>

      <div className="bg-white shadow p-3 px-7 mx-3 ml-76 my-4">
        <h2 className="flex items-center py-3 text-xl text-red-600">
          <Image src='images/address.svg' height={22} width={22} alt=''></Image>
          Your Address
        </h2>
        <div className="flex justify-between items-center">
          <form action="" className='w-full'>
            <div className='flex flex-col items-center justify-between gap-4 mb-3'>
              <div className='flex items-center justify-between w-full gap-4'>
                <div className='flex flex-col justify-center w-full'>
                  <label htmlFor="">German</label>
                  <input type="text" placeholder='32.6545' className='w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)'/>
                </div>
                <div className='flex flex-col justify-center w-full'>
                  <label htmlFor="">Berlin</label>
                  <input type="text" placeholder='32.6545' className='w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)'/>
                </div>
              </div>
              <div className='flex flex-col justify-center w-full'>
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Street name, building, etc.' className='w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)'/>
              </div>
              <div className='flex flex-col justify-center w-full'>
                <label htmlFor="">Postal Code</label>
                <input type="text" placeholder='0123456789' className='w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)'/>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <button className='text-xl w-full cursor-pointer text-red-600 hover:text-white py-2 rounded transition border-2 border-red-600 hover:bg-red-600'>Discard</button>
              <button className='text-xl w-full cursor-pointer text-white py-2 rounded transition border-2 border-(--primaryColor) bg-(--primaryColor)/90 hover:bg-(--primaryColor)'>Save Address</button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  )
}
