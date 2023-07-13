import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { FaGlobeAmericas, FaRegImage } from 'react-icons/fa'
import { FaDiamond, FaPersonArrowUpFromLine } from 'react-icons/fa6'
import Image from 'next/image'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full">


      <div className="relative card min-h-screen bg-base-200">


        <div className="absolute inset-0">
          <Image
            src="/img/backgrounds/nodes2.png"
            alt="The Nodes"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="z-50 py-24 space-y-8">

          <div className="w-full md:w-2/3 px-8">

            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light prose">Monetyz the Value of
              ANY Type of Asset!</h1>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>

            <p className="py-6 text-lg sm:text-2xl">At The Moneyverse, we offer a streamlined asset registration process that empowers you to unlock the full value of your assets..</p>

            <p className="pb-6 text-lg md:text-xl">
              Whether you possess galactical, spiritual, digital, or physical assets, our all-in-one registration system makes it easy for you to protect, tokenize, and liquidate their current value.</p>

            <button className="btn btn-primary">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </button>


          </div>

          <div className="divider py-24"></div>



          <h1 className="px-8 pb-8 text-xl md:text-2xl lg:text-3xl font-light prose">The Process</h1>



          <div className="grid grid-cols-1 md:grid-cols-3 px-8">
            <div>

              <div className="flex flex-row items-center">
                <div className="shrink mr-4">
                  <span className="bg-black border border-white rounded-full h-10 w-10 flex items-center justify-center">1</span>
                </div>
                <div className="text-xl">Identification of Asset</div>
              </div>

              <ul className='my-8'>
                <li><span className="float-left mr-2 h-4 w-4 text-primary"> <FaDiamond /></span>Categorize</li>
                <li><span className="float-left mr-2 h-4 w-4 text-primary"> <FaDiamond /></span>Name</li>
                <li><span className="float-left mr-2 h-4 w-4 text-primary"> <FaDiamond /></span>Describe</li>
              </ul>
            </div>

            <div>

              <div className="flex flex-row items-center">
                <div className="shrink mr-4">
                  <span className="bg-black border border-white rounded-full h-10 w-10 flex items-center justify-center">2</span>
                </div>
                <div className="text-xl">Proof of Ownership</div>
              </div>


              <ul className='my-8 space-y-4'>
                <li className='flex items-center'>
                  <span className="mr-2 h-4 w-4 text-primary flex-shrink-0">
                    <FaDiamond />
                  </span>
                  Upload Image / Video
                </li>
                <li className='flex items-center'>
                  <span className="mr-2 h-4 w-4 text-primary flex-shrink-0">
                    <FaDiamond />
                  </span>
                  Upload Documentation
                </li>
                <li className='flex items-center'>
                  <span className="mr-2 h-4 w-4 text-primary flex-shrink-0">
                    <FaDiamond />
                  </span>
                  Are there other owners?
                </li>
                <li>
                  <ul className='ml-4 text-xs space-y-2'>
                    <li className='flex items-center'>
                      <span className="mr-2 h-4 w-4 text-primary flex-shrink-0">
                        <FaDiamond />
                      </span>
                      How much do they own?
                    </li>
                    <li className='flex items-center'>
                      <span className="mr-2 h-4 w-4 text-primary flex-shrink-0">
                        <FaDiamond />
                      </span>
                      Names and Percentages
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>

              <div className="flex flex-row items-center">
                <div className="shrink mr-4">
                  <span className="bg-black border border-white rounded-full h-10 w-10 flex items-center justify-center">3</span>
                </div>
                <div className="text-xl">Evaluation of Asset</div>
              </div>
              <ul className='my-8'>
                <li><span className="float-left mr-2 text-xs text-primary"> <FaDiamond /></span>Owners Estimated Valuation</li>
                <li><span className="float-left mr-2 h-4 w-4 text-primary"> <FaDiamond /></span>The Money Verse Validation - Level 1</li>
                <li><span className="float-left mr-2 h-4 w-4 text-primary"> <FaDiamond /></span>3rd Party Validation - Level 2</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start">
        <div className="stats shadow my-4 sm:my-24 mx-4 sm:mx-0">
          <div className="stat">
            <div className="stat-figure text-primary text-5xl">
              <FaGlobeAmericas />
            </div>
            <div className="stat-value text-primary">$700M+</div>
            <div className="stat-desc">Tokenized Land</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-5xl">
              <FaPersonArrowUpFromLine />
            </div>
            <div className="stat-value text-secondary">109+</div>
            <div className="stat-desc">Token Holders</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="stat-figure text-secondary text-5xl">
                  <FaRegImage />
                </div>
              </div>
            </div>
            <div className="stat-title">$289M+</div>
            <div className="stat-desc text-secondary">Gems &amp; Art</div>
          </div>
        </div>
      </div>


      {/* Universal Asset Monetization */}

      <div className="card py-48 bg-base-200">

        <div className='w-2/3 px-8'>

          <h1 className='text-5xl'>Universal Asset Monetization</h1>
          <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
          <p>Our patent pending asset monetization process is designed to be simple and comprehensive, unifying the registration experience across the various asset categories. Here's how it works:</p>

        </div>

        <div className="divider"></div>


        <div className='grid grid-cols-3 px-8'>


          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>

      </div>




      <div className="hero min-h-screen bg-none">
        <div className="hero-content text-center">
          <div className="max-w-md">

            <p className="text-3xl">Gain $25 MNYV
              for every $100 USD
              worth of assets registered</p>
            <button className="btn btn-primary mt-12">Get Started</button>
          </div>
        </div>
      </div>

      <div className="divider"></div>

    </div>
  )
}
