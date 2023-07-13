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
        <div className="relative hero min-h-screen bg-base-200">

          <div className="absolute inset-0">
            <Image
              src="/img/backgrounds/nodes2.png"
              alt="The Nodes"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className='z-50 p-8 space-y-8'>
            <h1 className="text-7xl font-light prose">Unlock The Power of Cross-Currency&trade; Payments!</h1>

            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>

            <p className="py-6 text-3xl font-thin prose max-w-xl">Simplify value exchange in this connected world with our innovative ISO20022 payment processing solution.</p>

            <a href="/login" className="btn btn-primary">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </a>

          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-8 my-24 ">

        <div className="space-y-4">
          <h2 className="text-5xl font-light prose">Unlock Boundless Potential</h2>
          <div className="h-1 bg-gradient-to-r from-primary to-white w-1/2"></div>
          <p className="text-2xl font-thin prose max-w-xl">Liquidate the current value of your crypto & assets. Benefit from secure, efficient, and interconnected financial transactions, enabling you to transact globally, expand your business, and access a wide range of financial opportunities.</p>
        </div>


        <div className="space-y-4">
          <h2 className="text-5xl font-light prose">Maximize Your Value</h2>
          <div className="h-1 bg-gradient-to-l from-primary to-white w-1/2"></div>
          <p className="text-2xl font-thin prose max-w-xl">Our proven technology empowers individuals, businesses, governments, and financial institutions to leverage the full value of their crypto & assets, while providing enhanced security and efficiency.</p>
        </div>


        <div className="space-y-4">
          <h2 className="text-5xl font-light prose">Designed to <span className="text-grey">mirror</span> the familiar processes
            of traditional banking.</h2>
          <div className="h-1 bg-gradient-to-r from-primary to-white w-1/2"></div>
          <p className="text-2xl font-thin prose max-w-xl">The Moneyverse adheres to international banking standards and provides a wide array of features, empowering you to effortlessly deposit, buy, and exchange ALL lawful forms of money within a secure environment.</p>
        </div>

      </div>

      <div className="divider py-24"></div>

      <div className='card p-12 my-24 border border-white'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-12'>
          <div>
            <h3 className="text-xl">BTC & ETH deposit
              accounts</h3>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
            <p className="text-sm">Exchange your BTC & ETH for MNYV Tokens to buy products and services.</p>
          </div>
          <div>
            <h3 className="text-xl">Altcoin liquidity
              accounts</h3>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
            <p className="text-sm">Exchange your ERC20, BRC20, Altcoins & NFTs for MNYV Tokens to get more done.</p>
          </div>
          <div>
            <h3 className="text-xl">Crypto credit accounts</h3>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
            <p className="text-sm">Access credit facilities using your digital assets as collateral.</p>
          </div>
          <div>
            <h3 className="text-xl">MNYV money
              account</h3>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
            <p className="text-sm">Mint MNYV & manage your Moneyverse Tokens effortlessly.</p>
          </div>
          <div>
            <h3 className="text-xl">MNYV
              Marketplace</h3>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
            <p className="text-sm">Discover products and services spanning various countries & industries that all accept your crypto as payment!</p>
          </div>
          <div>
            <h3 className="text-xl">MNYV payment
              portal</h3>
            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>
            <p className="text-sm">Facilitate easy, secure, and swift payments within the Moneyverse ecosystem.</p>
          </div>

        </div>
      </div>

      <div className="divider"></div>
    </div>
  )
}
