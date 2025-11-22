'use client'
import Link from "next/link"
import { useState } from "react"
export default function HoomFeedPage() {
  const [modal, setModal] = useState(false)
  return (
    <section className="relative">
      {/* homefeed section */}
      <div className="flex justify-between">
        {/* asside section */}
        <aside className="shadow bg-white border border-gray-100 w-72 p-4 h-screen">
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
        {/* body section */}
        <div>2</div>
      </div>

      {/* modal button */}
      <div className="fixed bottom-7 bg-(--primaryColor) right-7 text-white rounded-full p-3 cursor-pointer">
        <svg className="w-9 h-9">
          <use href="#addIcon"></use>
        </svg>
      </div>
      {/* modal section */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white p-5 pb-7 rounded-md w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Create Post</h2>
              <button>
                <svg className="w-7 h-7">
                  <use href="#closeIcon"></use>
                </svg>
              </button>
            </div>
            <textarea
              placeholder="Write something..."
              className="w-full border p-2 rounded-lg mb-3"
              rows={3}
            />

            <input
              type="file"
              accept="image/*"
              className="mb-3"
            />

          <select
            className="w-full border p-2 rounded-lg mb-4"
          >
            <option value="">Select category</option>
            <option value="news">News</option>
            <option value="sport">Sport</option>
          </select>

          <button className="w-full bg-(--primaryColor) text-white py-2 rounded-lg cursor-pointer">
            Post
          </button>

          </div>
        </div>
      )}

    </section>
  )
}
