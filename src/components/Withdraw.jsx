import React, { useRef } from 'react'
import {NavLink} from 'react-router-dom'
import { withdrawCoins } from '../utils'

function Withdraw() {
  const tokensToWithdraw = useRef();

  const handleWithdraw = async (e)=>{
    e.preventDefault();
    console.log(tokensToWithdraw.current.value, typeof Number(tokensToWithdraw.current.value))
    const res = await withdrawCoins({tokenAmount : Number(tokensToWithdraw.current.value)});
    if(res){
      console.log("Tokens withdraw successfully");
    }
  }

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
          <span className='w-20'>
        <img src="https://img.freepik.com/free-vector/flat-design-crypto-mining-logo-template_23-2149409054.jpg?t=st=1698559799~exp=1698560399~hmac=02efc8967937811259bbfea12251e2ebe0e0d7762de1bfd029b10bf6577ef238" alt="this application logo" />
      </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Withdraw your MyCoin Tokens
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Want to stack more tokens
            <NavLink to={"/stack"} className={"border-b-2 text-blue-400 border-blue-400"}> click here</NavLink>
          </p>
          <form onSubmit={(e)=>handleWithdraw(e)} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  Enter myCoin Token Amount
                </label>
                <div className="mt-2">
                  <input
                  ref={tokensToWithdraw}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="tokens amount"
                  ></input>
                </div>
              </div>
                
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Withdraw Tokens
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  )
}

export default Withdraw