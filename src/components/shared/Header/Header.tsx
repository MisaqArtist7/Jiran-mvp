import Image from "next/image"
import Link from "next/link"
export default function HeaderComponent() {
  return (
    <div className='py-3 px-7 shadow bg-white'>
      <nav className="flex items-center justify-between gap-3 text-gray-800">
        <div className="flex items-center gap-4">
          <Image src='images/Logo.svg' width={77} height={33} alt="" className="w-auto h-auto object-cover" />
          <a href="">Home-feed</a>
          <div>
            <form action="">
              <div className="flex items-center justify-between gap-2 border border-gray-500 rounded-full p-2">
                <svg className="w-5 h-5 text-gray-500">
                  <use href="#searchIcon"></use>
                </svg>
                <input type="text" className="text-[14px]" placeholder="Search for anything..." />
              </div>
            </form>
          </div>
          <ul className="flex items-center justify-center gap-3">
            <li><Link href='./'>Home</Link></li>
            <li><Link href='./'>Post</Link></li>
            <li><Link href='./'>Blogs</Link></li>
          </ul>
        </div>
        <div className="flex-row-center gap-2">
          <Link href='/login' className="border-2 border-(--primaryColor) px-4 py-1 rounded hover:bg-(--primaryColor) hover:text-white transition ">Login</Link>
          <Link href='/register' className="border-2 border-(--primaryColor) bg-(--primaryColor) px-4 py-1 rounded text-white">Sign up</Link>
        </div>
      </nav>
    </div>
  )
}
