import React, { useRef } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { withdrawCoins } from "../utils";
import { useSelector } from "react-redux";
import { ethers } from "ethers";

function Withdraw() {
	const tokensToWithdraw = useRef();
	const { signer } = useSelector((state) => state.web3Api);

	const userDetails = useLoaderData();

	// console.log("(Date.now() / 1000) , (ethers.toNumber(userDetails[1])", (Date.now() / 1000) ,(ethers.toNumber(userDetails[1])));

	const handleWithdraw = async (e) => {
		e.preventDefault();
		console.log(
			tokensToWithdraw.current.value,
			typeof Number(tokensToWithdraw.current.value)
		);
		const res = await withdrawCoins({
			tokenAmount: Number(tokensToWithdraw.current.value),
		});
		if (res) {
			console.log("Tokens withdraw successfully");
		}
	};

	function formatUnixTimestamp() {
		const temp = ethers.toNumber(userDetails[1]);
		if(!temp) return  "0 minutes";
		const seconds = (Date.now()/1000) - temp;
		const days = Math.floor(seconds / (60 * 60 * 24));
		const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
		const minutes = Math.floor((seconds % (60 * 60)) / 60);

		const daysString = days > 0 ? `${days} days` : "";
		const hoursString = hours > 0 ? `${hours} hours` : "";
		const minutesString = minutes > 0 ? `${minutes} minutes` : "";

		const result = [daysString, hoursString, minutesString].join(" : ");

		return result || "0 minutes";
	}

	return (
		<section>
			<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
				<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
					<div className="mb-2 flex justify-center">
						<span className="w-20">
							<img
								src="https://img.freepik.com/free-vector/flat-design-crypto-mining-logo-template_23-2149409054.jpg?t=st=1698559799~exp=1698560399~hmac=02efc8967937811259bbfea12251e2ebe0e0d7762de1bfd029b10bf6577ef238"
								alt="this application logo"
							/>
						</span>
					</div>
					<h2 className="text-center text-2xl font-bold leading-tight text-black">
						Withdraw your MyCoin Tokens
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600 ">
						Want to stack more tokens
						<NavLink
							to={"/stack"}
							className={"border-b-2 text-blue-400 border-blue-400"}
						>
							{" "}
							click here
						</NavLink>
					</p>
					<form onSubmit={(e) => handleWithdraw(e)} className="mt-8">
						<div className="space-y-5">
							<div>
								<label
									htmlFor=""
									className="text-base font-medium text-gray-900"
								>
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
			{/*  user details. */}
			{userDetails ? (
				<div className="overflow-x-auto w-full flex flex-col justify-center items-center">
					<h2 className="text-center text-2xl font-bold leading-tight text-black my-3">
						Account Details
					</h2>
					<table className="divide-y-2 w-11/12 md:w-8/12 divide-gray-200 bg-white text-sm border-2 border-black">
						<thead className="bg-slate-200 text-left">
							<tr>
								<th className="px-4 py-2 font-medium text-gray-900">Address</th>
								<th className="px-4 py-2 font-medium text-gray-900">
									Stacked Tokens
								</th>
								<th className="px-4 py-2 font-medium text-gray-900">Time</th>
							</tr>
						</thead>

						<tbody className="">
							<tr className="">
								<td className="px-4 py-2 font-medium text-gray-900">
									{`${[...signer.address].slice(0, 5).join("")}...${[
										...signer.address,
									]
										.slice(37, 42)
										.join("")}`}
								</td>
								<td className="px-4 py-2 text-gray-700">
									{`${ethers.toNumber(userDetails[0]) / 1000} MTK`}
								</td>
								<td className="px-4 py-2 text-gray-700"> {formatUnixTimestamp()}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			) : (
				<></>
			)}
		</section>
	);
}

export default Withdraw;
