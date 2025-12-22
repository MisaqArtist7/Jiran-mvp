"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function CreatPostPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchData = async () => {
      try {
        const response = await fetch('https://jiran-api.com/api/v1/auth/show', 
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          })
        if (!response.ok) throw new Error('Something went wrong')
          const data = await response.json()
          const userData = data.data
          setLatitude(String(userData['loc-lat'])) 
          setLongitude(String(userData['loc-lng']))
          console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  const handleSubmit = async () => {
    const token = localStorage.getItem('token')
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', description)
    formData.append('latitude', latitude)
    formData.append('longitude', longitude)
    try {
      const sendData = async () => {
        const response = await fetch('https://jiran-api.com/api/v1/create-post', 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: formData
          })
        if(!response.ok) throw new Error('something went wrong')
        }
        sendData()
      } catch(error) {
        console.log(error)
      }
  }

  return (
    <section>
      <div>
        <aside className="shadow bg-white border border-gray-100 min-w-72 px-4 py-7 fixed left-0 bottom-0 top-0">
          <div>
            <h1 className="text-2xl font-semibold pb-2 px-1">Home Feed || Jiran</h1>
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
          <form onSubmit={handleSubmit}>
            <legend className="p-3 text-2xl font-semibold">Add post</legend>

            <div className="flex items-center justify-between w-full gap-4">

              {/* left side */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <label className="text-xl">Title:</label>
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)"
                    placeholder="for example: car"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xl">Description:</label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="for example: my car is blue and the model is BMW..."
                    className="w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor)"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xl">Category:</label>
                  <form action="">
                    <select name="" id="" className="w-full p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor) cursor-pointer">
                      <option value="" className="">Public</option>
                      <option value="" className="">Buying and selling</option>
                      <option value="" className="">Services</option>
                      <option value="" className="">Events</option>
                    </select>
                  </form>
                </div>
              </div>

              {/* right side — image preview */}
              <div className="w-full flex-col-center gap-1">
                
                <div className="w-full h-48  overflow-hidden">
                  {preview ? (
                    <Image src={preview} width={202} height={202} alt="preview" className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-gray-500 flex-row-center h-full w-full">No picture has chosen yet</span>
                  )}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  className="block flex-row-center p-2 rounded border-2 border-gray-200 hover:border-(--primaryColor) my-3 cursor-alias"
                />
              </div>

            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="text-xl w-full cursor-pointer mt-6  hover:text-white py-2 rounded-md transition border-2 border-red-600 hover:bg-red-600">Cancel</button>
              <button className="text-xl w-full cursor-pointer mt-6  hover:text-white py-2 rounded-md transition border-2 border-(--primaryColor) hover:bg-(--primaryColor)">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
