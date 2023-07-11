import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full">

      <nav className="w-full flex justify-center  h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="">


        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>


        {/* <div className="card w-96 bg-white bg-opacity-5 card-bordered border-white border shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p className="text-sm">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div> */}

        <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>


        <button className="btn btn-primary">Request API Access <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
        </button>

        <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>

      </div>
    </div>
  )
}
