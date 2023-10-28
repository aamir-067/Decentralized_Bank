const { expect } = require("chai");
describe("AllTests", ()=>{
    let mycoin, reword, bank, owner, adr1,adr2, fee = 5;
    beforeEach(async ()=>{
        const contract1 = await ethers.getContractFactory("Bank");
        const contract2 = await ethers.getContractFactory("MYCOIN");
        const contract3 = await ethers.getContractFactory("REWARD");
        mycoin = await contract2.deploy(); 
        reword = await contract3.deploy(); 
        bank = await contract1.deploy(mycoin.target, reword.target); 
        [owner, adr1, adr2] = await ethers.getSigners();
    })

    describe("tokens", ()=>{
        it("Should set the currect supply and send it to the owner of the contract", async()=>{
            const myCoins = await mycoin.balanceOf(owner.address);
            const rewordCoins = await reword.balanceOf(owner.address);

            expect(ethers.toNumber(myCoins)).to.equal(1000000000);
            expect(ethers.toNumber(rewordCoins)).to.equal(1000000000);
        });

        it("Should set the right decimals", async () =>{
            const coinsDecimals = await mycoin.decimals();
            const rewordDecimals = await reword.decimals();
            expect(coinsDecimals).to.equal(3n);
            expect(rewordDecimals).to.equal(3n);
        });

        it("should able to send accurate tokens to other addresses", async ()=>{
            const initBalance = await mycoin.balanceOf(owner.address);
            await mycoin.transfer(adr1.address, 100 * (10 ** 3));
            await mycoin.transfer(adr2.address, 100 * (10 ** 3));


            expect(ethers.toNumber(await mycoin.balanceOf(adr1.address))).to.equal(100 * (10 ** 3), "address one amount not sent successfully");
            expect(ethers.toNumber(await mycoin.balanceOf(adr2.address))).to.equal(100 * (10 ** 3), "address two amount not sent successfully");
            expect(ethers.toNumber(await mycoin.balanceOf(owner.address))).to.equal(ethers.toNumber(initBalance) - 2 * (100 * (10 ** 3)), "balance not updated correctly");
        });

    })

    describe("bank", ()=>{

        it("Should be able to send reword tokens", async ()=>{
            const initBalance = await reword.balanceOf(bank.target);
            await reword.approve(bank.target, 1000 * (10**3));
            await bank.depositRewordToken(1000);
            const afterBalance = await reword.balanceOf(bank.target);
            expect(ethers.toNumber(afterBalance)).to.equal(ethers.toNumber(initBalance) + 1000 * (10 ** 3));
        });

        it("should able to send the balance to the bank for stacking ", async()=>{

            // await reword.transfer(bank.target, 10000 * (10 ** 3));
            await reword.approve(bank.target, 1000 * (10**3));
            await bank.depositRewordToken(1000);

            const initBalance = await mycoin.balanceOf(bank.target);  // 0

            await mycoin.transfer(adr1.address, 1000 * (10 ** 3));
            await bank.connect(adr1);
            await mycoin.connect(adr1);
            await mycoin.approve(bank.target, 1000 * (10 ** 3));
            await bank.deposit(1000);

            const afterBalance = await mycoin.balanceOf(bank.target);  // 1000000n
            // const depositorDetails = await bank.depositors(adr1.address);   // 1000  timestamp

            expect(initBalance).to.equal(0n);
            expect(afterBalance).to.equal(1000000n);
            expect(depositorDetails[0]).to.equal(100000n);
            expect(depositorDetails[1]).lessThanOrEqual(Date.now()/100);
        });

        it("can withdraw the tokens with the correct amount of reword tokens.", async()=>{
            // send reword token to the  bank contract
            await reword.approve(bank.target, 1000 * (10**3));
            await bank.depositRewordToken(1000);


            // deposit tokens
            const depositTokens  = 1000000;
            await mycoin.transfer(adr1.address, 1000000 * (10 ** 3));
            await bank.connect(adr1);
            await mycoin.connect(adr1);
            await mycoin.approve(bank.target, 1000000 * (10 ** 3));
            await bank.deposit(1000000);


            // calculate the reword.
            // contract will do this.

            // withdraw the tokens.
            await bank.withdraw(depositTokens);
            const afterBalance = await mycoin.balanceOf(adr1.address);
            const rewordTokens = await reword.balanceOf(adr1.address);
            console.log('reword ==> ',rewordTokens);
            expect(ethers.toNumber(afterBalance)).to.equal(depositTokens * (10 ** 3));
            expect(rewordTokens).greaterThan(0n);

        })
    })
})