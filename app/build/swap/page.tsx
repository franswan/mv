import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full">


      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">

            <section className="swap">
              <div className="container">
                <div className="swap-wrap">
                  <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="wallet-tab" data-bs-toggle="pill" data-bs-target="#wallet"
                        type="button" role="tab" aria-controls="pills-home" aria-selected="true">Wallet</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="bank-tab" data-bs-toggle="pill" data-bs-target="#bank"
                        type="button" role="tab" aria-controls="bank" aria-selected="false">Bank</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="wallet" role="tabpanel" aria-labelledby="wallet-tab">
                      <div className="wallet-conversion">
                        <div className="wallet-box">
                          <input type="text" readOnly className="form-input" />
                          <span>ETH</span>
                        </div>
                        <button className="conversion-sign">
                          <svg width="73" height="73" viewBox="0 0 73 73" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.5 9.125V63.875" stroke="white" strokeWidth="6" strokeLinecap="round"
                              strokeLinejoin="round" />
                            <path d="M51.7087 48.6665L36.5003 63.8748L21.292 48.6665" stroke="white"
                              strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <div className="wallet-box">
                          <input type="text" readOnly className="form-input" />
                          <span>MNYV</span>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="bank" role="tabpanel" aria-labelledby="bank-tab">
                      <div className="bank-wallet">
                        <div className="choose-bank">
                          <select className="form-select">
                            <option selected>Choose Bank</option>
                            <option value="A">Bank A</option>
                            <option value="B">Bank B</option>
                            <option value="C">Bank C</option>
                            <option value="D">Bank D</option>
                          </select>
                        </div>
                        <div className="input-group">
                          <select className="form-select">
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdraw</option>
                          </select>
                          <div className="amount-w">
                            <div className="input-group">
                              <span className="input-group-text">$</span>
                              <input type="text" className="form-input" placeholder="Amount" />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary reverse-btn">Submit</button>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="confirmtransaction" />
                          <label className="form-check-label" htmlFor="confirmtransaction">
                            Confirm this transaction
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </div>




    </div>
  )
}
