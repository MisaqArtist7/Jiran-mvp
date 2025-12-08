'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState(null)
  const [socialLinks, setSocialLinks] = useState([])
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('./register')
      return
    }

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
        console.log("User's data =>", data)
        const userData = data.data
        const userProfile = data.data?.profile_data
        setGender(userProfile?.gender ?? null)
        setUsername(userData?.name ?? '')
        setEmail(userData?.email ?? '')
        setBio(userProfile?.bio ?? '')
        setSocialLinks(
          userProfile?.social_links ? JSON.parse(userProfile.social_links) : []
        )
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [router])

    return (
    <section>
      <div>
        <aside className="shadow bg-white border border-gray-100 min-w-72 px-4 py-7 fixed left-0 bottom-0 top-0">
          <div>
            <h1 className="text-2xl font-semibold pb-2 px-1">Dashboard</h1>
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
          <div className="flex flex-col xl:flex-row justify-between items-center">
            <div className="flex items-center justify-start gap-3">
                <Image src="/images/Avatar.png" height={136} width={136} alt=""></Image>
                <div className="text-lg flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold">{username}</h2>
                  <h3 className="flex items-center gap-2">
                    Gmail:
                    <span className="text-gray-800">{email}</span>
                  </h3>
                  <h3 className="flex items-center gap-1">
                    location:
                    <span className="text-gray-800 flex items-center">
                    <Image src='images/loc.svg' width={22} height={22} alt=""></Image>
                    Berlin, Germany
                    </span>
                  </h3>
                  <h3 className="flex items-center gap-2">
                    Bio:
                    <span className="text-gray-800">{bio}</span>
                  </h3>
                  <h3 className="flex items-center gap-2">
                    Gender:
                    <span className="text-gray-800">{` ${gender === null ? 'It hasn\t been entered' : `${gender}`} `}</span>
                  </h3> 
                  <span className="flex items-center gap-1">Social active media:
                    {Array.isArray(socialLinks) && 
                      socialLinks.map((item) => {
                        console.log(item)
                        return (
                        <div key={item}>
                          {item.platform === "telegram" && 
                          <Link href={item.url} className="flex-row-center gap-1"> 
                            <Image src='images/telegram.svg' height={26} width={26} alt=""></Image>
                            Telegram 
                          </Link>}
                          {item.platform === "instagram" && 
                          <Link href={item.url} className="flex-row-center gap-1"> 
                            <Image src='images/instagram.svg' height={22} width={22} alt=""></Image>
                            instagram 
                          </Link>}
                        </div>
                        )
                      })
                    }
                  </span>
                </div>
            </div>
            <div className="flex items-center justify-center gap-1">
                <Link href='/edit-dashboard' className="flex-row-center px-11 py-1 border border-gray-300 hover:border-(--primaryColor) rounded-sm mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">
                  <svg className="w-5 h-5">
                    <use href="#editIcon"></use>
                  </svg>
                  Edit profile
                </Link>
                <Link href='222' className="flex-row-center px-11 py-1 border border-gray-300 hover:border-(--primaryColor) rounded-sm mt-3 bg-white hover:bg-(--primaryColor) hover:text-white transition ease-in duration-75">
                  <svg className="w-5 h-5">
                    <use href="#shareIcon"></use>
                  </svg>
                  Share profile
                </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center gap-3 mt-5">
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
            <div>
              <Image src="/images/post.jpg" width={300} height={300} alt="" className="rounded-xs" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
