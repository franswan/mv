import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { FaFileUpload } from 'react-icons/fa'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full">

      <div className='w-1/2'>
        <h1 className='text-5xl'>Register Assets.<br /> Make MNYV.</h1>
        <div className="h-1 bg-gradient-to-r from-primary to-white my-4"></div>
        <p>It's just that easy</p>
      </div>

      <div className='divider'></div>

      <div className='grid grid-cols-2'>

        <div className='space-y-6'>
          <div>
            <input type="text" placeholder="Asset Class here" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <input type="text" placeholder="Name of Asset (sub-class)" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <textarea className="textarea textarea-bordered" placeholder="Description (Optional)"></textarea>
          </div>


        </div>

        <div className=''>
          <h2 className='text-3xl'>1. Identify Your Asset</h2>
        </div>

      </div>


      <div className='divider'></div>


      <div className='grid grid-cols-2'>

        <div className='space-y-6'>
          <div>
            <div className="form-control w-full max-w-xs">
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt">*PNG, JPG Supported</span>
              </label>
            </div>
          </div>

          <div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

          </div>

          <div>
            <input type="text" placeholder="Wallet Type" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <input type="text" placeholder="Wallet Address" className="input input-bordered w-full max-w-xs" />
          </div>

          <p>Not registered? Sign Up Here (Optional)</p>

          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Yes</span>
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
              </label>
            </div>
          </div>

          <div>
            <input type="text" placeholder="Wallet Address" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <input type="text" placeholder="Wallet Address" className="input input-bordered w-full max-w-xs" />
          </div>

        </div>


        <div className=''>
          <h2 className='text-3xl'>2. Proof of Ownership</h2>
        </div>



      </div>


      <div className='divider'></div>

      <div className='grid grid-cols-2'>
        <div className='space-y-6'>
          <div>
            <input type="text" placeholder="Name of Asset" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <input type="text" placeholder="Estimated Value in USD" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <input type="text" placeholder="Our Valuation" className="input input-bordered w-full max-w-xs" />
          </div>
          <p>Would you like to verify your valuation?</p>

          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Yes</span>
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
              </label>
            </div>
          </div>

          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>If Yes</option>
            <option>Fran Solo</option>
            <option>Greedo</option>
          </select>

        </div>
        <div>Evaluation</div>
      </div>



      <div className='divider'></div>

      <div className='grid grid-cols-2'>
        <div className='space-y-6'>
          <div>
            <input type="text" placeholder="Value of Asset" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <input type="text" placeholder="MNYV you'll receive" className="input input-bordered w-full max-w-xs" />
          </div>

          <p>Would you like to mint a NFT as well?</p>

          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Yes</span>
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
              </label>
            </div>
          </div>


        </div>
        <div>4. Mint MNYV</div>
      </div>


      <button className="mt-8 btn btn-primary">Submit</button>






    </div>
  )
}
