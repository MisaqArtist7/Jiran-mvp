'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function HoomFeedPage() {
  const [modal, setModal] = useState(false)
  return (
    <section className="relative ">
      {/* homefeed section */}
      <div className="relative flex justify-between">
        {/* asside section */}
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
        {/* body section */}
        <div className="flex justify-center w-full p-7 ml-72 ">
          {/* posts and profile section */}
          <div>
            {/* profile info */}
            <div className="flex flex-col items-start justify-center bg-amber-500/0">
              <div className="flex items-center justify-start gap-3">
                <Image src="/images/avatar.svg" height={136} width={136} alt=""></Image>
                <div className="text-lg">
                  <h2 className="text-2xl font-semibold">Misaq Artist</h2>
                  <h3>posts: 7</h3>
                  <h4>Front-end developer and software architecture</h4>
                  <h5>Telegram: @misaqartist021</h5>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button className="flex-row-center px-11 py-1 border-2 border-(--primaryColor) rounded-lg mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">Edit profile</button>
                <button className="flex-row-center px-11 py-1 border-2 border-(--primaryColor) rounded-lg mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">Notification</button>
              </div>
            </div>

            {/* post info */}
            <div className="my-11 bg-amber-600/0">
              <div className="flex items-center justify-around gap-11 w-full">
                <button>
                  <svg className="w-8 h-8">
                    <use href="#squareIcon"></use>
                  </svg>
                </button>
                <button>
                  <svg className="w-8 h-8">
                    <use href="#squareIcon"></use>
                  </svg>
                </button>
                <button>
                  <svg className="w-8 h-8">
                    <use href="#squareIcon"></use>
                  </svg>
                </button>
                <button>
                  <svg className="w-8 h-8">
                    <use href="#squareIcon"></use>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 my-3">
                <div>
                  <Image src="/images/post.jpg" width={250} height={250} alt="" className="rounded-xs" />
                </div>
                <div>
                  <Image src="/images/post.jpg" width={250} height={250} alt="" className="rounded-xs" />
                </div>
                <div>
                  <Image src="/images/post.jpg" width={250} height={250} alt="" className="rounded-xs" />
                </div>
                <div>
                  <Image src="/images/post.jpg" width={250} height={250} alt="" className="rounded-xs" />
                </div>
                <div>
                  <Image src="/images/post.jpg" width={250} height={250} alt="" className="rounded-xs" />
                </div>
                <div>
                  <Image src="/images/post.jpg" width={250} height={250} alt="" className="rounded-xs" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* modal button */}
      <div onClick={() => setModal((prevState) => !prevState)}
      className="fixed bottom-7 bg-(--primaryColor) right-7 text-white rounded-full p-3 cursor-pointer">
        <svg className="w-9 h-9">
          <use href="#addIcon"></use>
        </svg>
      </div>

      {/* modal section */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white p-5 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Create Post</h2>
              <button onClick={() => setModal((prevState) => !prevState)}>
                <svg className="w-7 h-7">
                  <use href="#closeIcon"></use>
                </svg>
              </button>
            </div>
            <form action="">
              <input
                type="text"
                placeholder="Title: for example: car"
                className="w-full border-2 border-gray-300 outline-none hover:border-(--primaryColor) p-2 rounded-lg mb-3"
              />

              <textarea
                placeholder="Description..."
                className="w-full border-2 border-gray-300 outline-none hover:border-(--primaryColor) p-2 rounded-lg mb-3"
                rows={3}
              />

              <input
                type="text"
                placeholder="Address..."
                className="w-full border-2 border-gray-300 outline-none hover:border-(--primaryColor) p-2 rounded-lg mb-3"
              />

              <input
                type="file"
                accept="image/*"
                className="mb-3"
              />
              <select className="w-full border-2 border-gray-300 p-2 hover:border-(--primaryColor) rounded-lg mb-4 outline-none " >
                <option value="">Select category</option>
                <option value="stolen">stolen</option>
                <option value="lost">lost</option>
              </select>
            </form>

            <button className="w-full bg-(--primaryColor)/90 hover:bg-(--primaryColor) text-white py-2 rounded-lg cursor-pointer">
              Post
            </button>

          </div>
        </div>
      )}

    </section>
  )
}
