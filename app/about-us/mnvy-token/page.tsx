import Image from 'next/image'

export default async function Index() {
  return (

    <>
      <div className="w-full">

        <div className=" min-h-screen">
          <div className="">

            <div>
              <h1>
                <div className="text-7xl font-light prose">MNYV</div>
                <div className="text-4xl font-light prose">A Cross-Currency Stable Coin</div>
              </h1>

              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>

              <p className="py-6 text-2xl font-thin prose max-w-xl">The Moneyverse created MNYV Tokens to serve as a medium of exchange for our global membership base. As the stored value of registered assets on our platform, MNYV is a Stable Coin that can be used to purchase various products and services listed in our Marketplace.
              </p>

              <button className="btn btn-primary">Buy MNYV <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              </button>
            </div>
          </div>



        </div>
        <div className='divider'></div>

        <div className="grid grid-cols-2">
          <div>
            <Image src="/img/mnvy-token/mnvy-token-diamond-cloud.png" alt="MNVY Token" width="275" height="0" />
          </div>
          <div>Token price comparrison chart</div>
        </div>


        <div className='card p-12 my-24 border border-white'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-12'>
            <div>
              <h3 className="text-xl">ISO20022<br />
                Compatible</h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
              <p className="text-sm">The Moneyverse Token has ISO20022 compatible financial messaging capabilities.</p>
            </div>
            <div>
              <h3 className="text-xl">A Trusted
                Store of Value</h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
              <p className="text-sm">The Moneyverse team is dedicated to ensuring MNYV is utilized as a trusted store of value.</p>
            </div>
            <div>
              <h3 className="text-xl">Total supply pegged by Registered Assets</h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
              <p className="text-sm">All MNYV Tokens in circulation are the result of our members registering valuable assets.</p>
            </div>
            <div>
              <h3 className="text-xl">Price per unit
                Pegged by KWT Dinar</h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
              <p className="text-sm">We’ve elected to peg each unit of MNYV token to the KWT Dinar (The world’s most stable fiat currency).</p>
            </div>
            <div>
              <h3 className="text-xl">Cross-Currency
                Clearing Capabilities </h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
              <p className="text-sm">MNYV Token allows for cross currency clearing and settlement of value-based transactions.</p>
            </div>
            <div>
              <h3 className="text-xl">The Stable Coin that
                prevents global poverty.</h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
              <p className="text-sm">MNYV’s unique Tokenomics allows our members to execute innovative poverty prevention solutions.</p>
            </div>

          </div>
        </div>


        <div className='divider'></div>



        <div className='grid grid-cols-2 my-24'>
          <div>
            <Image src="/img/mnvy-token/token-presale.png" alt="MNVY Token" width="275" height="0" />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl">MNYV Token</h1>
            <h2 className="text-3xl text-secondary">Presale</h2>
            <p className="">Exchange any crypto for MNYV Tokens with
              zero exchange fees. </p>
            <p className="">Buy MNYV before its listed on exchanges!</p>
            <button className="btn btn-primary">Buy MNYV</button>
          </div>
        </div>


        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Gain <span className="text-primary">$25 MNYV</span>
              </h1>
              <p className="py-6 text-2xl">for every $100 USD
                worth of assets registered</p>
              <button className="btn btn-primary">Mint MNYV</button>
            </div>
          </div>
        </div>

      </div>

    </>
  )

}
