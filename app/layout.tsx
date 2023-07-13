import './globals.css'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'The Money Verse',
  description: 'Revolutionizing asset registration, facilitating token utility, & fostering real estate development to prevent poverty & build sustainable communities!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="moneyverse" lang="en" className="bg-purple">

      <body className="bg-base-100">

        <div className="md:container md:mx-auto px-8 lg:px-4">
          <div className=' bg-black bg-opacity-80'>
            <div>
              <Navigation />
            </div>
          </div>
          <main className="min-h-screen pt-24">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  )
}
