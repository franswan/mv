'use client'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoutButton from './LogoutButton'
import NavigationTabs from './NavigationTabs'
import Image from 'next/image'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <>
      <Disclosure as="nav" className="pt-8">
        {({ open }) => (
          <>
            <div className="mx-auto">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">

                  {/* Open the modal using ID.showModal() method */}
                  <button className="btn btn-ghost border-1 border-white rounded mr-4 hidden sm:block" onClick={() => window.nav_tabs_modal.showModal()}>
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  </button>


                  <a href="/">
                    <Image src={'/img/brand/logo.svg'} alt={'The Money Verse'} width="50" height="50" />
                    {/* <svg height="35" viewBox="0 0 306 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.7344 0H54.1095L44.7686 18.1398L48.5459 24.6038C50.1788 21.3895 51.9286 17.8595 53.2145 14.9432H53.3935C53.5725 19.2644 53.9269 24.2739 54.2812 28.4212L54.9059 35.6268C55.0886 35.9567 55.2676 36.2831 55.4466 36.6095C55.7023 32.6999 56.0384 29.0528 56.2466 26.9312L58.8147 0.975639L58.7307 0L58.7344 0Z" fill="url(#paint0_linear_0_1)" />
                        <path d="M9.01209 0H4.38727L4.01465 4.37796L6.24669 26.9312C6.55721 29.7765 6.8458 33.1965 7.05403 36.4641C7.33532 35.939 7.62391 35.4033 7.91982 34.8569L8.47874 28.4212C8.83309 24.7067 9.1911 19.6086 9.36644 15.1171H9.54545C10.8971 18.0263 12.4424 21.3115 13.9219 24.3271L18.006 17.4267L9.01209 0Z" fill="url(#paint1_linear_0_1)" />
                        <path d="M39.702 32.5223L38.8984 34.0833C36.4069 38.9225 33.7402 44.2761 31.7821 48.9414H31.6031C29.5574 44.2761 26.6203 38.6635 24.3079 34.1684L23.3581 32.3271L19.2593 39.2701L29.9994 59.9963H32.7575L43.5049 38.9863L39.6984 32.5187L39.702 32.5223Z" fill="url(#paint2_linear_0_1)" />
                        <path d="M6.21382 56.8457L6.16633 57.385H5.896L6.21382 56.8457Z" fill="#9747FF" />
                        <path d="M56.9631 56.3127L56.9627 56.3122L44.5678 35.2419L44.1368 35.4954L44.5678 35.2419L40.7649 28.7779L40.7649 28.7778L40.2682 27.9337C40.2681 27.9336 40.2681 27.9335 40.268 27.9335C37.4267 23.0991 34.3857 17.7576 32.1598 13.1129L32.0238 12.8289H31.7089H31.5044H31.1957L31.0574 13.1049C28.9262 17.3576 25.9484 22.4077 23.428 26.6821C23.1947 27.0778 22.9654 27.4668 22.741 27.8479C22.7409 27.848 22.7408 27.8481 22.7408 27.8482L22.3029 28.5889L22.3026 28.5893L18.2039 35.5358L18.2038 35.5359L5.78327 56.5919L5.78318 56.5921L5.61041 56.8852H0.826229L0.50208 53.5613L3.50344 18.4513L4.58388 29.3574L4.58442 29.3624C4.9888 33.0667 5.3971 38.1542 5.59753 42.6311L5.61891 43.1087H6.09703H6.3016H6.60184L6.74294 42.8437C6.85398 42.6352 6.96584 42.4248 7.07854 42.2129C7.41516 41.5798 7.75933 40.9325 8.11188 40.277L8.11218 40.2764C10.1356 36.5023 12.3589 32.4461 14.2515 29.3073L14.2534 29.3042L14.9731 28.0909L14.9733 28.0905L19.0721 21.1652L29.9592 2.77051H32.5362L43.7087 21.8865L43.7088 21.8866L47.4897 28.3577L47.4898 28.3577L48.0414 29.3014L48.042 29.3025C50.0268 32.6784 52.6658 37.1673 54.7202 41.0267C55.0843 41.7127 55.4299 42.3768 55.7496 43.0084L55.8884 43.2826H56.1957H56.4003H56.8772L56.8997 42.8062C57.1038 38.496 57.5085 33.4954 57.9135 29.3532L59.3386 14.9566L62.5652 51.9772L62.0774 56.8817H57.2967L56.9631 56.3127Z" fill="url(#paint3_linear_0_1)" stroke="url(#paint4_linear_0_1)" />
                        <path d="M86.6112 8.96192V17.8988H85.0403V8.4333H81V7H90.6515V8.4333H87.1555C86.7573 8.5078 86.3445 8.50781 85.928 8.50781" fill="white" />
                        <path d="M92.292 7H93.8628V11.4667C93.8628 11.825 93.7825 12.2755 93.6875 12.6197L93.7204 12.6339C93.8153 12.2897 93.9432 11.8392 94.1551 11.5447C94.8747 10.4555 96.0949 9.98723 97.2967 9.98723C99.4119 9.98723 100.438 11.7611 100.438 13.8011V17.8952H98.8676V13.8011C98.8676 12.3536 98.1625 11.3886 96.8145 11.3886C95.9634 11.3886 93.8665 12.0414 93.8665 14.986V17.8988H92.2956V7H92.292Z" fill="white" />
                        <path d="M101.633 14.0029C101.633 11.3101 103.653 10.001 106.024 10.0187C108.38 10.0329 110.287 11.3101 110.287 14.0029C110.287 14.2193 110.287 14.237 110.254 14.4393H103.266C103.507 15.979 104.581 16.7595 106.053 16.7418C107.288 16.7276 108.267 16.3515 108.712 15.202L110.155 15.3901C109.545 17.2739 107.912 17.9728 106.02 17.9906C103.649 18.0048 101.629 16.6992 101.629 14.0064L101.633 14.0029ZM103.269 14.4393C103.51 13.5984 103.894 13.5062 104.665 13.5062H108.8C108.577 11.9168 107.518 11.2321 106.06 11.2179C104.632 11.2037 103.112 12.2609 103.273 14.4393H103.269Z" fill="white" />
                        <path d="M200.358 16.4541H204.599L213.695 42.5586C213.816 42.9134 213.86 43.4704 213.86 43.8642H213.94C213.94 43.4669 214.021 42.9134 214.145 42.5586L223.241 16.4541H227.522L217.202 44.1835H210.678L200.358 16.4541Z" fill="white" />
                        <path d="M217.374 44.4216H210.506L200.011 16.2168H204.778L213.922 42.4597L223.065 16.2168H227.873L217.378 44.4216H217.374ZM214.185 43.9462H217.031L227.172 16.6922H223.413L214.371 42.6335C214.261 42.9493 214.181 43.4815 214.181 43.8646V43.9462H214.185ZM210.849 43.9462H213.615V43.8646C213.615 43.4815 213.575 42.9564 213.465 42.6335L204.427 16.6922H200.708L210.849 43.9462Z" fill="white" />
                        <path d="M224.75 34.2786C224.75 27.4243 229.889 24.1 235.924 24.139C241.919 24.178 246.774 27.4278 246.774 34.2786C246.774 34.832 246.774 34.8746 246.694 35.389H228.91C229.52 39.3093 232.257 41.2925 236.008 41.2499C239.15 41.2109 241.638 40.2601 242.778 37.3297L246.449 37.8051C244.9 42.5981 240.739 44.3826 235.924 44.4217C229.889 44.4607 224.75 41.1329 224.75 34.2821V34.2786ZM228.91 35.389C229.52 33.2497 230.499 33.012 232.458 33.012H242.982C242.412 28.9711 239.72 27.2291 236.008 27.1901C232.377 27.1511 228.505 29.8438 228.91 35.389Z" fill="white" />
                        <path d="M254.117 24.7389H262.314V28.3151L255.421 28.3541C253.138 28.3541 252.688 28.5882 252.688 31.2704V44.1807H248.692V29.947C248.692 26.4454 250.405 24.7354 254.117 24.7354V24.7389Z" fill="white" />
                        <path d="M266.72 37.8047C267.085 40.4584 269.208 41.3702 272.839 41.3702C276.715 41.3702 278.793 40.3413 278.793 37.7656C278.793 34.0405 263.213 37.606 263.213 30.2408C263.213 24.536 270.351 24.0996 272.879 24.0996C276.061 24.0996 281.65 25.0504 282.26 29.4461L278.629 29.9605C278.22 27.7822 276.346 27.1472 272.795 27.1472C269.244 27.1472 267.206 27.8603 267.206 30.3543C267.206 34.1576 282.786 30.592 282.786 37.8402C282.786 43.8998 275.323 44.4142 272.751 44.4142C270.384 44.4142 263.33 43.7401 262.84 38.4717L266.716 37.7976L266.72 37.8047Z" fill="white" />
                        <path d="M283.89 34.2786C283.89 27.4243 289.03 24.1 295.064 24.139C301.059 24.178 305.914 27.4278 305.914 34.2786C305.914 34.832 305.914 34.8746 305.834 35.389H288.051C288.661 39.3093 291.397 41.2925 295.149 41.2499C298.29 41.2109 300.778 40.2601 301.918 37.3297L305.589 37.8051C304.04 42.5981 299.879 44.3826 295.064 44.4217C289.03 44.4607 283.89 41.1329 283.89 34.2821V34.2786ZM288.051 35.389C288.661 33.2497 289.64 33.012 291.598 33.012H302.122C301.552 28.9711 298.86 27.2291 295.149 27.1901C291.517 27.1511 287.645 29.8438 288.051 35.389Z" fill="white" />
                        <path d="M107.156 21.9217H107.076C106.751 23.4686 106.097 25.4872 105.443 26.9525L98.5896 44.184H93.6141L86.7609 26.9525C86.107 25.4872 85.4567 23.465 85.1279 21.9217H85.0476C85.011 23.5502 85.6576 44.184 85.6576 44.184H81.6611V21.2051H87.6559L95.8133 42.2789C95.9776 42.6762 96.058 43.2297 96.058 43.6661H96.1384C96.1384 43.2297 96.2187 42.6762 96.3831 42.2789L104.541 21.2051H110.535V44.184H106.539L107.149 21.9217H107.156Z" fill="white" />
                        <path d="M110.787 44.4221H106.294L106.864 23.7386C106.524 24.8916 106.097 26.0908 105.669 27.0451L98.7614 44.4186H93.4498L86.5382 27.0345C86.1034 26.0588 85.6614 24.8207 85.318 23.6357C85.4276 28.929 85.9025 43.9964 85.9098 44.1702L85.9171 44.415H81.4238V20.9678H87.8314L96.0508 42.1977C96.0728 42.2473 96.091 42.297 96.1056 42.3502C96.1239 42.297 96.1422 42.2438 96.1641 42.1941L104.38 20.9713H110.787V44.4257V44.4221ZM106.798 43.9467H110.298V21.4432H104.716L96.6171 42.3644C96.4783 42.705 96.3869 43.2123 96.3869 43.6665V43.9042H95.817V43.6665C95.817 43.2123 95.7294 42.7015 95.5906 42.368L87.488 21.4432H81.906V43.9467H85.4057C85.329 41.5059 84.7664 23.4583 84.8029 21.915V21.6844H85.329L85.3692 21.8725C85.6943 23.4122 86.3446 25.4167 86.9838 26.8571L93.7786 43.9467H98.4181L105.209 26.8677C105.856 25.4202 106.502 23.4157 106.827 21.876L106.868 21.688H107.401L106.791 43.9503L106.798 43.9467Z" fill="white" />
                        <path d="M112.172 34.2786C112.172 27.4243 117.392 24.1 123.431 24.139C129.509 24.178 134.73 27.4278 134.73 34.2786C134.73 41.1293 129.509 44.4181 123.431 44.4181C117.352 44.4181 112.172 41.1293 112.172 34.2786ZM116.168 34.2786C116.168 38.912 119.39 41.0938 123.427 41.0938C127.464 41.0938 130.73 38.8375 130.73 34.2786C130.73 29.7197 127.303 27.4668 123.427 27.4243C119.675 27.3852 116.168 29.8013 116.168 34.2786Z" fill="white" />
                        <path d="M136.359 24.8523H140.356V28.4569C140.356 29.248 140.191 30.3194 140.031 31.1106L140.111 31.1496C140.275 30.3585 140.52 29.287 140.926 28.5739C142.599 25.4448 145.536 24.0576 148.268 24.0576C153.408 24.0576 155.122 28.8507 155.122 34.0801V44.1806H151.125V34.0801C151.125 30.3159 149.697 27.9389 146.924 27.9389C144.846 27.9389 140.356 29.3651 140.356 36.7729V44.1806H136.359V24.8488V24.8523Z" fill="white" />
                        <path d="M156.794 34.2786C156.794 27.4243 161.934 24.1 167.969 24.139C173.964 24.178 178.819 27.4278 178.819 34.2786C178.819 34.832 178.819 34.8746 178.739 35.389H160.955C161.565 39.3093 164.302 41.2925 168.053 41.2499C171.195 41.2109 173.683 40.2601 174.822 37.3297L178.494 37.8051C176.945 42.5981 172.784 44.3826 167.969 44.4217C161.934 44.4607 156.794 41.1329 156.794 34.2821V34.2786ZM160.955 35.389C161.565 33.2497 162.544 33.012 164.502 33.012H175.027C174.457 28.9711 171.765 27.2291 168.053 27.1901C164.422 27.1511 160.55 29.8438 160.955 35.389Z" fill="white" />
                        <path d="M178.004 24.7389H182.286L187.546 37.5641C187.912 38.3837 188.076 39.558 188.076 40.4201H188.156C188.156 39.558 188.361 38.3872 188.726 37.5641L194.031 24.7389H198.312L188.971 47.0686C187.338 51.4466 183.995 52.5428 181.752 52.5428H178.121V49.4527H180.2C181.219 49.4527 183.992 48.8673 184.81 46.7138L185.87 43.5847L177.997 24.7354L178.004 24.7389Z" fill="white" />
                        <defs>
                          <linearGradient id="paint0_linear_0_1" x1="51.7916" y1="0" x2="51.7916" y2="36.6095" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F9E26E" />
                            <stop offset="0.484375" stop-color="#CFB145" stop-opacity="0.515625" />
                            <stop offset="1" stop-color="#FBEE7D" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_0_1" x1="11.0103" y1="0" x2="11.0103" y2="36.4641" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F9E26E" />
                            <stop offset="0.484375" stop-color="#CFB145" stop-opacity="0.515625" />
                            <stop offset="1" stop-color="#FBEE7D" />
                          </linearGradient>
                          <linearGradient id="paint2_linear_0_1" x1="31.3821" y1="32.3271" x2="31.3821" y2="59.9963" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F9E26E" />
                            <stop offset="0.484375" stop-color="#CFB145" stop-opacity="0.515625" />
                            <stop offset="1" stop-color="#FBEE7D" />
                          </linearGradient>
                          <linearGradient id="paint3_linear_0_1" x1="31.5336" y1="2.27051" x2="31.5336" y2="57.3852" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9747FF" />
                            <stop offset="0.494792" stop-color="#6C1ED2" />
                            <stop offset="1" stop-color="#9747FF" />
                          </linearGradient>
                          <linearGradient id="paint4_linear_0_1" x1="31.5336" y1="2.27051" x2="31.5336" y2="57.3852" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9747FF" />
                            <stop offset="0.5" stop-color="#6C1ED2" />
                            <stop offset="1" stop-color="#9747FF" />
                          </linearGradient>
                        </defs>
                      </svg> */}
                  </a>



                  <div className="hidden sm:ml-6 sm:block">
                    <div className="">
                      <dialog id="nav_tabs_modal" className="modal bg-transparent modal-top top-24">
                        <form method="dialog" className="modal-box">
                          <NavigationTabs />
                        </form>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">


                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-base-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-white'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-white'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <LogoutButton />
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="btn btn-ghost inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Solutions
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Build
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Resources
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </Disclosure.Button>
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">Josh</div>
                    <div className="text-sm font-medium text-gray-400">fran@boringprotocol.io</div>
                  </div>

                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="dropdown">
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </>
  )
}
