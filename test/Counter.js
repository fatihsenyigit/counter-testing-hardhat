const { expect } = require("chai");

describe("Counter", async ()=> {
    let counter;
    const initialNumber= 4; 

    beforeEach(async()=>{
        const Counter = await hre.ethers.getContractFactory("Counter");
        counter = await Counter.deploy(initialNumber);
        
    })

    it ("should set the right number", async ()=> {
        
        expect (await counter.number()).to.equal(initialNumber)
    })

    it("should increment the number correctly", async()=>{
        
        await counter.increment()
        expect (await counter.number()).to.equal(initialNumber + 1 )
    })

    it("should revert the increment for inproper parameter", async()=>{
        while((await counter.number())<5){
            await counter.increment();
        }
        
        expect (await counter.number()).to.be.revertedWith("cannot be more than 5")
    })
})