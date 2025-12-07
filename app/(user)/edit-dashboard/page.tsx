  'use client'
  import Image from 'next/image'
  import Link from 'next/link'
  import { useEffect, useState } from 'react'
  import { useRouter } from "next/navigation"

  export default function DashboardEdit() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [newBio, setNewBio] = useState('')
    const [enteredGender, setEnteredGender] = useState<string>('');
    const options = ['Male', 'Female'];
    // Social links states for each platform
    const [telegramId, setTelegramId] = useState('')
    const [instagramId, setInstagramId] = useState('')

    useEffect(() => {
      const token = localStorage.getItem("token")
      if (!token) router.push("/register")

      const fetchData = async () => {
        try {
          const response = await fetch('https://jiran-api.com/api/v1/auth/show', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          })
          if (!response.ok) {
            const errorBody = await response.json();
            console.log(errorBody);
            return;
          }
          const data = await response.json()
          const userData = data.data
          const userProfile = data.data.profile_data

          setName(userData.name)
          setBio(userProfile.bio)
          setNewBio(userProfile.bio)
          setEnteredGender(userProfile.gender || '')
          setTelegramId(userProfile.social_links?.find((l: any) => l.platform === 'telegram')?.url || '')
          setInstagramId(userProfile.social_links?.find((l: any) => l.platform === 'instagram')?.url || '')
        } catch(error) {
          console.log(error)
        }
      }

      fetchData()
    }, [router])

    const handleSubmit = async (e: React.FormEvent) => {
      const token = localStorage.getItem('token')

      if (!enteredGender) {
        alert("Please select a gender")
        return
    }

      // Build social_links array
      const socialLinks = []
      if (telegramId) socialLinks.push({ platform: 'telegram', url: `https://t.me/${telegramId}` })
      if (instagramId) socialLinks.push({ platform: 'instagram', url: `https://instagram.com/${instagramId}` })

      const payload = {
      bio: newBio,
      gender: enteredGender.toLowerCase(),
      social_links: [
        telegramId ? { platform: 'telegram', url: telegramId } : null,
        instagramId ? { platform: 'instagram', url: instagramId } : null
      ].filter(Boolean)
    }

        try {
          const response = await fetch('https://jiran-api.com/api/v1/auth/edit-profile', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}` 
            },
            body: JSON.stringify(payload)
          })

        if (!response.ok) {
          const errorBody = await response.json()
          console.log(errorBody)
          return 
        }
        
        const data = await response.json()
        console.log("Profile updated successfully", data)
        setBio(newBio)
      } catch(error) {
        console.log(error)
      }
   }
      
      return (
      <section>
        <aside className="shadow bg-white border border-gray-100 min-w-72 px-4 py-7 fixed left-0 bottom-0 top-0">
          <div>
            <h1 className="text-2xl font-semibold pb-2 px-1">Edit Dashboard</h1>
            <ul className="flex flex-col justify-start gap-2">
              <li className="hover:bg-(--primaryColor)/20 rounded">
                <Link href="./" className="flex items-center gap-1 p-2">
                  <svg className="h-6 w-6"><use href="#homeIcon"></use></svg>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="bg-white shadow p-3 mx-3 ml-76">
          <h2 className="flex items-center p-3 text-xl text-red-600">
            <svg className='w-9 h-9'><use href='#userIcon2'></use></svg>
            Personal Information
          </h2>
          <div className='flex items-center gap-4'>
            <Image src="/images/Avatar.png" height={136} width={136} alt="Avatar" className='hover:cursor-pointer'/>
            <div>
              <h2 className="text-2xl font-semibold">{name}</h2>
              <div className="flex items-center gap-2">
                Bio: <span className="text-gray-800">{bio}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 py-3 px-4'>
            {/* Bio */}
            <div className='flex items-center justify-start gap-7'>
              <label className='text-lg'>Bio</label>
              <textarea
                rows={2}
                value={newBio}    
                placeholder='Write something here...'
                onChange={(e) => setNewBio(e.target.value)}
                className='w-1/4 ml-5 border-b border-gray-300 py-1 px-2'
              />
            </div>

            {/* Gender */}
            <div className='flex items-center gap-4'>
              <label className='text-lg'>Gender</label>
              {options.map((option) => (
                <div key={option} className='flex items-center gap-1'>
                  <input
                    type='radio'
                    name='gender'
                    value={option}
                    checked={enteredGender === option}
                    onChange={(e) => setEnteredGender(e.target.value)}
                  />
                  <span>{option}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='flex flex-col gap-2'>
              <label className='text-lg'>Social Links</label>

              {/* Telegram */}
              <div className='flex items-center justify-start gap-4 ml-4 mt-1'>
                <span>Telegram</span>
                <input
                  type="text"
                  placeholder="Enter your telegram id"
                  value={telegramId}
                  onChange={(e) => setTelegramId(e.target.value)}
                  className='w-md p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor) ml-3'
                />
              </div>

              {/* Instagram */}
              <div className='flex items-center justify-start gap-4 ml-4 mt-1'>
                <span>Instagram</span>
                <input
                  type="text"
                  placeholder="Enter your instagram id"
                  value={instagramId}
                  onChange={(e) => setInstagramId(e.target.value)}
                  className='w-md p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor) ml-2'
                />
              </div>
            </div>

            {/* Submit */}
            <div className='flex items-center justify-center gap-2'>
              <button type="button" className='text-xl w-full mt-6 text-red-600 hover:text-white py-2 rounded transition border-2 border-red-600 hover:bg-red-600'>Discard</button>
              <button type="submit" className='text-xl w-full mt-6 text-white py-2 rounded transition border-2 border-(--primaryColor) bg-(--primaryColor)/90 hover:bg-(--primaryColor)'>Done</button>
            </div>
          </form>
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
      </section>
    )
  }
