import Image from "next/image"
import Link from "next/link"
export default function HoomFeedPage() {
  return (
    <section className="relative">
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
    </section>
  )
}
