'use client'

const people = [
  {
    name: 'Kiel Mansa',
    role: 'Chairman of the Board',
    imageUrl: '/img/team/kiel-mansa.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Janet D Powell',
    role: 'Executive Secretary',
    imageUrl: '/img/team/janet-d-powell.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alex Johnson',
    role: 'Head of Sales Operations',
    imageUrl: '/img/team/alex-johnson.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Anibal Suriel',
    role: 'Cryptocurrency Attorney',
    imageUrl: '/img/team/anibal-suriel.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Belkis Cano',
    role: 'Architect',
    imageUrl: '/img/team/belkis-cano.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Binaya Tripathi',
    role: 'Tech Outreach Coordinator',
    imageUrl: '/img/team/binaya-tripathi.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Blowski Benzo',
    role: 'Community Ambassador',
    imageUrl: '/img/team/blowski-benzo.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Charmeka Hobbs',
    role: 'Mineral Wealth Manager',
    imageUrl: '/img/team/charmeka-hobbs.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Dan Major',
    role: 'Chief Executive Officer',
    imageUrl: '/img/team/dan-major.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Ezekiel Pereira',
    role: 'Chief Operating Officer',
    imageUrl: '/img/team/ezekiel-pereira .jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Hosnield Zamora',
    role: 'Architect',
    imageUrl: '/img/team/hosnield-zamora.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Janos Zsikla',
    role: 'Token Administration',
    imageUrl: '/img/team/janos-zsikla.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Jaquann Little',
    role: 'Community Ambassador',
    imageUrl: '/img/team/jaquann-little.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Jeffrey Thorpe',
    role: 'Head of Property Acquisition',
    imageUrl: '/img/team/jeffrey-thorpe.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Jergun Guevara',
    role: 'Natural Resources',
    imageUrl: '/img/team/jergun-guevara.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Jorge Vega',
    role: 'Real Estate Project Mng',
    imageUrl: '/img/team/jorge-vega.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Keon Powell',
    role: 'Community Ambassador',
    imageUrl: '/img/team/keon-powell.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'María Caballero',
    role: 'Forestry & Ecology',
    imageUrl: '/img/team/maría-caballero.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Max Deluca',
    role: 'Director of Blockchain R&D',
    imageUrl: '/img/team/max-deluca.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Myron D Winston',
    role: 'Community Ambassador',
    imageUrl: '/img/team/myron-d-winston.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Noel Rennson',
    role: 'Chief Marketing Officer',
    imageUrl: '/img/team/noel-rennson.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Roger Mena',
    role: 'International Law',
    imageUrl: '/img/team/roger-mena.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Ryan Harricharan',
    role: 'Lead UX Designer',
    imageUrl: '/img/team/ryan-harricharan.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Sebastian Sanchez',
    role: 'Agriculture & Forestry ',
    imageUrl: '/img/team/sebastian-sanchez.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Sebastiano Fulmari',
    role: 'Real Estate Consultation',
    imageUrl: '/img/team/sebastiano-fulmari.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Spencer Levine',
    role: 'Chief Financial Officer',
    imageUrl: '/img/team/spencer-levine.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Tearra Caldwell',
    role: 'Graphic Design Specialist',
    imageUrl: '/img/team/tearra-caldwell.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Zane Carrey',
    role: 'Chief Technology Officer',
    imageUrl: '/img/team/zane-carrey.jpg',
    twitterUrl: '',
    linkedinUrl: '',
  },
]

// console.log(people);

export default function Team() {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className=" w-full rounded-md object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">{person.name}</h3>
                <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
                <p className="text-primary">{person.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  )
}
