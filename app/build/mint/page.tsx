import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full">


      <section className="register bg-mint">
        <div className="container">
          <div className="theme-heading">
            <h1 className="text-4xl font-bold">Mint Anonymously. <br /> Make MNYV.</h1>
            <div className="gradient-divider"></div>
            <p>It's Just that easy.</p>
          </div>

          <div className="timeline ">

            <div className="left_content space-y-6">
              <div className="form-group asset-selection">
                <input type="file" name="assetselection" className="input input-bordered w-full max-w-xs" id="assetselection" />
                <label htmlFor="assetselection">Select your Asset</label>
              </div>
              <div className="form-group">
                <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Estimated Value in USD" />
              </div>
              <div className="form-group">
                <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Our Valuation" />
              </div>
              <div className="quickask">
                <p>Would you like to verify your valuation?</p>
                <div className="accredited-investor-group">
                  <div className="form-group">
                    <input type="radio" name="otherowner" id="yes" />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="form-group">
                    <input type="radio" name="otherowner" id="no" />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <select className="select input-bordered w-full max-w-xs">
                  <option selected>If Yes, Choose an Evaluator</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div className="right_content">
              <h3>Evaluation</h3>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}
