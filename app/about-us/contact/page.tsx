'use client'

export default async function Index() {
  return (

    <>

      <div className="">
        <div className="">

          <div>
            <h1>
              <div className="text-7xl font-light prose">Contact
              </div>
              <div className="text-4xl font-light prose">The Moneyverse.</div>
            </h1>

            <div className="h-1 bg-gradient-to-r from-primary to-white my-4 w-3/4"></div>

            <p className="py-6 text-2xl font-thin prose max-w-xl">Fill out the form to get in touch with a member of our sales team. If your organization is a possible fit for one of our solutions, we will respond shortly.
            </p>


          </div>
        </div>
      </div>


      <div className="space-y-4">
        <div>
          <input type="text" placeholder="First Name *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Last Name *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Business Email Address *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Job Title *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Organization *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Organization Type *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Solution Interest *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Phone Number (Optional)" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <input type="text" placeholder="Country *" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <textarea className="textarea textarea-bordered" placeholder="Message *"></textarea>
        </div>
        <button className="btn btn-primary">Contact Us</button>
      </div>

    </>
  )
}
