import Link from 'next/link'
import Image from 'next/image'
export default function HomeFeedPage() {
  return (
        <section className=''>
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
          <div className="flex flex-col items-start justify-center">
            <h2 className="p-3 text-2xl font-semibold">Info</h2>
            <div className="flex items-center justify-start gap-3">
                <Image src="/images/avatar.svg" height={136} width={136} alt=""></Image>
                <div className="text-lg">
                <h2 className="text-2xl font-semibold">Misaq Artist</h2>
                <h3>Posts: 7</h3>
                <h4>Bio: Front-end developer and software architecture</h4>
                <h5>Social: Telegram: @misaqartist021</h5>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2">
                <button className="flex-row-center px-11 py-1 border-2 border-(--primaryColor) rounded-sm mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">Edit profile</button>
                <button className="flex-row-center px-11 py-1 border-2 border-(--primaryColor) rounded-sm mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">Add post</button>
            </div>
            </div>
        </div>

        <div className="bg-white shadow p-3 mx-3 mt-3 ml-76">
          <h2 className="p-3 text-2xl font-semibold">Posts</h2>
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
              <Image src="/images/post.jpg" width={300} height={300} alt="" className="rounded-xs" />
            </div>
            <div>
              <Image src="/images/post.jpg" width={300} height={300} alt="" className="rounded-xs" />
            </div>
            <div>
              <Image src="/images/post.jpg" width={300} height={300} alt="" className="rounded-xs" />
            </div>
            <div>
              <Image src="/images/post.jpg" width={300} height={300} alt="" className="rounded-xs" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
