import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full">

      <div className="min-h-screen">
        <div className="">

          <div>
            <h1>
              <div className="text-7xl font-light prose">Sustainable Solutions </div>
              <div className="text-4xl font-light prose">for Prosperous Communities.</div>
            </h1>

            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>

            <p className="py-6 text-2xl font-thin prose max-w-xl">Our commitment to sustainability extends beyond words. From the get-go, we are a net zero carbon operation and believe that it is our responsibility to actively work towards assisting our global community of members to become carbon negative by 2030.
            </p>
            <p className="py-6 text-2xl font-thin prose max-w-xl">
              Discover how our smart homes, global sustainable practices, and carbon initiative are driving positive change, empowering individuals and communities to build a more prosperous and sustainable future.
            </p>

          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-12 py-24">
        <div className="">
          <Image src="/img/sustainability/smart-homes.png" alt="Smart Homes" width="275" height="0" />

        </div>
        <div className="">
          <h2 className="text-4xl">Smart Homes</h2>

          <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
          <p>We design and construct smart homes that prioritize sustainability. Our Digital Real Estate is designed to code and is capable of being built on the properties represented via our Digital Real Estate NFTs. By integrating sustainable practices into our designs, we aim to create communities that harmonize with their local and global environments.</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-24">
        <div className="px-12">
          <h2 className="text-4xl">Building Sustainable Communities Worldwide</h2>
          <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
          <p>As advocates for sustainability, we collaborate closely with carbon credit regulators who are not only part of our team but also essential partners. Together, we champion sustainable practices within our portfolio of real estate holdings. By working hand in hand with regulators, we actively contribute to global sustainability efforts, fostering a more prosperous and sustainable future for generations to come.</p>
        </div>
        <div className="w-1/2">
          <Image src="/img/sustainability/communities-worldwide.png" alt="Smart Homes" width="275" height="0" />
        </div>
      </div>

    </div>
  )
}
