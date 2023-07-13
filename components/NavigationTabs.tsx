import { useState } from 'react';

const tabs = [
  { name: 'Solutions', href: '#', current: true },
  { name: 'Build', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationTabs() {


  const [activeTab, setActiveTab] = useState(tabs.find((tab) => tab.current));

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center">
      <div className="container px-4">


        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block ">
          <div className="">
            <nav className="-mb-px flex" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab === activeTab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium'
                  )}
                  aria-current={tab === activeTab ? 'page' : undefined}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
            <div>
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={classNames(
                    tab === activeTab ? 'block' : 'hidden',
                    'py-4'
                  )}
                >
                  {tab.name === 'Solutions' &&
                    <div>
                      <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow space-y-4">
                          <h3 className="text-slate-100">Products</h3>
                          <ul className='space-y-4'>
                            <li><a className="link" href="/solutions/products/payment-processing">Payment Processing</a></li>
                            <li><a className="link" href="/solutions/products/monetyz-assets">Monetyz Assets</a></li>
                          </ul>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="grid flex-grow">
                          <h3>Applications</h3>
                          <ul>
                            <li><a className="link" href="/solutions/applications/market">Market</a></li>
                            <li><a className="link" href="/solutions/applications/bank">Bank</a></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                  {tab.name === 'Build' &&
                    <div className="flex flex-col w-full lg:flex-row">
                      <div className="grid flex-grow space-y-4">
                        <ul className='space-y-4'>
                          <li><a href="/build/register">Register</a></li>
                          <li><a href="/build/mint">Mint</a></li>
                        </ul>
                      </div>
                      <div className="divider lg:divider-horizontal"></div>
                      <div className="grid flex-grow space-y-4">
                        <ul className='space-y-4'>
                          <li><a href="/build/swap">Swap</a></li>
                          <li><a href="/build/apis">Apis</a></li>
                        </ul>
                      </div>
                    </div>
                  }
                  {tab.name === 'Resources' &&
                    <div className="flex flex-col w-full lg:flex-row">
                      <div className="grid flex-grow space-y-4">
                        <ul className='space-y-4'>
                          <li><a href="/resources/faq">FAQ</a></li>
                          <li><a href="/resources/regulatory-news">Regulatory News</a></li>
                        </ul>
                      </div>
                      <div className="divider lg:divider-horizontal"></div>
                      <div className="grid flex-grow space-y-4">
                        <ul className='space-y-4'>
                          <li><a href="/resources/blog">Blog</a></li>
                          <li><a href="/resources/content-library">Content Library</a></li>
                        </ul>
                      </div>
                    </div>
                  }
                  {tab.name === 'About Us' &&
                    <div className="flex flex-col w-full lg:flex-row">
                      <div className="grid flex-grow space-y-4">
                        <ul className='space-y-4'>
                          <li><a href="/solutions/payment-processing">About The Moneyverse</a></li>
                          <li>Social Impact</li>
                          <li>Sustainability</li>
                          <li>Roadmap</li>
                        </ul>
                      </div>
                      <div className="divider lg:divider-horizontal"></div>
                      <div className="grid flex-grow space-y-4">
                        <ul className='space-y-4'>
                          <li>Contact Us</li>
                          <li>Our Team</li>
                          <li>MNYV Token</li>
                        </ul>
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

    </div>

  )
}
