'use client'

import { FaGlobeAmericas } from 'react-icons/fa'; // font awesome 5
import { FaPersonArrowUpFromLine, FaRegImage } from "react-icons/fa6"; // font awesome 6
import Image from 'next/image'


export default function LandingHero() {
  return (
    <>

      {/* Hero */}
      <div className="relative hero min-h-screen bg-base-200 rounded-lg">

        <div className="absolute inset-0">
          <Image
            src="/img/backgrounds/portal.png"
            alt="The Erf"
            fill
          />
        </div>

        <div className="relative hero-content px-8">


          <div className="space-y-24">
            <h1 className="text-7xl font-bold">Value Engineering<br /> Empowered by You.</h1>
            <p className="text-3xl w-1/2">Revolutionizing asset registration, facilitating token utility, & fostering real estate development to prevent poverty & build sustainable communities!</p>

            <button className="btn btn-primary btn-lg">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </button>
            <br />

            {/* Stats */}

            <div className="stats shadow mt-48">

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



        </div>


      </div>






      <div className="px-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-14">
        <div className="">
          <h3 className="text-3xl">Innovation</h3>
          <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
          <p>Innovation is at the heart of The Moneyverse. From our technology to our strategies, we relentlessly pursue new ways to empower people and communities financially.</p>
        </div>
        <div className="">
          <h3 className="text-3xl">Sustainability</h3>
          <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
          <p>We develop solutions that allow individuals and institutions to leverage the value of their assets and their cryptocurrency holdings to acquire products, services, & develop sustainable communities. </p>
        </div>
        <div className="">
          <h3 className="text-3xl">Governance</h3>
          <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
          <p>Good governance is fundamental
            to our operations. We uphold the highest standards of ethics, transparency, and accountability in all we do, ensuring our technology serves as a force for good.</p>
        </div>
      </div>


      <div className="card min-h-screen bg-base-200 rounded-lg">
        <div className="">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-12 py-24">
            <div className="">
              <Image src="/img/landing/token-wheel.png" alt="Cryptocurrencies" width="275" height="0" />
            </div>
            <div className="">
              <h2 className="text-4xl">Respect your Value...</h2>
              <h3 className="text-2xl">Monetyz Everything!</h3>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
              <p>Never miss an opportunity to exchange value with our Cross-Currency Token.</p>
              <div className="mt-12">
                <button className="btn btn-sm btn-primary mr-4">Get Started</button>
                <button className="btn btn-sm btn-secondary">Block Explorer</button>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-24">
            <div className="px-12">
              <h2 className="text-4xl">Register Assets</h2>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
              <p>Streamline asset registration for effortless control, ensuring accuracy, compliance, and peace of mind with our intuitive blockchain registration solution. Boost productivity and unlock the full potential of your assets today.</p>
            </div>
            <div className="w-1/2">image</div>
          </div>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-12 py-24">
            <div className="">
              <Image src="/img/landing/mint-money.png" alt="Cryptocurrencies" width="275" height="0" />

            </div>
            <div className="">
              <h2 className="text-4xl">Mint Money!</h2>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
              <p>Deposit Crypto & Register Assets to begin minting MNYV Tokens & NFTs  seamlessly. Decentralized Money Minting made possible via our proprietary monetization solution.</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-24">
            <div className="px-12">
              <h2 className="text-4xl">Build Communities</h2>
              <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
              <p>Ready to build the sustainable community of your dreams? We offer Real Estate in over 11 countries with ocean front views, agricultural land, and lots to develop your dream home on. Ignite the power of community building in The Moneyverse today!</p>
            </div>
            <div className="w-1/2">
              <Image src="/img/landing/build-communities.png" alt="Cryptocurrencies" width="275" height="0" />

            </div>
          </div>

          <div className="hero min-h-screen" style={{ backgroundImage: 'url(/img/landing/circle-wood-concept.jpg)' }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
            </div>
          </div>


          <div className="pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />

                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-primary"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                    </svg>
                    <blockquote className="text-xl font-thin text-white sm:text-2xl ">
                      <p>
                        The Moneyverse is allowing me and my team of International property owners to leverage the value of our portfolio prior to development. We’re grateful to participate with this platform as we explore more ways to monetize our value.
                      </p>
                    </blockquote><br />
                    <figcaption className="mt-12 text-base">
                      <div className="font-semibold text-white">Judith Black</div>
                      <div className="mt-1 text-gray-400">CEO of Big Company</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
