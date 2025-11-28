import Link from "next/link"
import Image from "next/image"
export default function DashboardPage() {
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
          <h2 className="p-3 text-2xl font-semibold">profile</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-3">
                <Image src="/images/avatar.svg" height={136} width={136} alt=""></Image>
                <div className="text-lg flex flex-col">
                  <h2 className="text-2xl font-semibold">Misaq Artist</h2>
                  <span>Gmail</span>
                  <span className="flex items-center">
                    location:
                    <Image src='images/loc.svg' width={22} height={22} alt=""></Image>
                    Berlin, Germany
                  </span>
                  <span>Bio: Front-end developer and software architecture</span>
                  <span className="flex items-center gap-1">Social active media:
                    <Image src='images/whatsapp.svg' width={22} height={22} alt=""></Image>
                    <Image src='images/linkedin.svg' width={22} height={22} alt=""></Image>
                    <Image src='images/instagram.svg' width={22} height={22} alt=""></Image>
                  </span>
                </div>
            </div>
            <div className="flex items-center justify-center gap-1">
                <button className="flex-row-center px-11 py-1 border border-gray-300 hover:border-(--primaryColor) rounded-sm mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">Edit profile</button>
                <button className="flex-row-center px-11 py-1 border border-gray-300 hover:border-(--primaryColor) rounded-sm mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">Share profile</button>
            </div>
            </div>
        </div>

        <div className="bg-white shadow p-3 mx-3 mt-3 ml-76">
          <h2 className="p-3 text-2xl font-semibold">Posts</h2>
            <div className="flex items-center justify-center gap-33 w-full">
                <button>
                  <Image src='images/all.svg' width={22} height={22} alt=""></Image>
                </button>
                <button>
                  <Image src='images/handshake.svg' width={22} height={22} alt=""></Image>
                </button>
                <button>
                  <Image src='images/bag.svg' width={22} height={22} alt=""></Image>
                </button>
                <button>
                  <Image src='images/star.svg' width={22} height={22} alt=""></Image>
                </button>
                <button>
                  <Image src='images/community.svg' width={22} height={22} alt=""></Image>
                </button>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 mt-7 mb-3">
            <div className="bg-white shadow w-72">
              <h2 className="font-semibold bg-[#1FAF38]/20 p-4 rounded-t text-gray-900 flex items-center gap-1">
                <Image src='images/handshake1.svg' width={22} height={22} alt=""></Image>
                Business
              </h2>
              <p className="text-gray-600 text-sm py-7 pl-3 pr-11 flex text-left">Hiring for Landscaper Position</p>
            </div>
            <div className="bg-white shadow w-72">
              <h2 className="font-semibold bg-[#007BFF]/20 p-4 rounded-t text-gray-900 flex items-center gap-1">
                <Image src='images/bag2.svg' width={22} height={22} alt=""></Image>
                Jobs 
              </h2>
              <p className="text-gray-600 text-sm py-7 pl-3 pr-11 flex text-left">Hiring for Landscaper Position</p>
            </div>
            <div className="bg-white shadow w-72">
              <h2 className="font-semibold bg-[#FFDD55]/20 p-4 rounded-t text-gray-900 flex items-center gap-1">
                <Image src='images/star3.svg' width={22} height={22} alt=""></Image>
                Needs 
              </h2>
              <p className="text-gray-600 text-sm py-7 pl-3 pr-11 flex text-left">Hiring for Landscaper Position</p>
            </div>
            <div className="bg-white shadow w-72">
              <h2 className="font-semibold bg-[#FF6B6B]/20 p-4 rounded-t text-gray-900 flex items-center gap-1">
                <Image src='images/community4.svg' width={22} height={22} alt=""></Image>
                Community 
              </h2>
              <p className="text-gray-600 text-sm py-7 pl-3 pr-11 flex text-left">Hiring for Landscaper Position</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
