// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract Bank{
    struct Info{
        uint amount;
        uint time;
    }

    address reword;
    address mycoin;
    address owner;
    uint public remainingReword;

    mapping(address => Info) public depositors;

    constructor(address _mycoin, address _reword){
        reword = _reword;
        mycoin = _mycoin;
        owner = msg.sender; 
    }


    function deposit(uint256 amount) public {
        require(amount > 0, "amount must be greater then 0");
        require(remainingReword > 0 , "There is no reword left in the contract");
        //require(IERC20(mycoin).balanceOf(msg.sender) >= amount, "not enough token in your account"); 
        // uint coinDecimals = IERC20(mycoin).decimals();  // as its 3 so i used directly 3.

        // IERC20(mycoin).approve(address(this), amount * (10 ** 3));

        IERC20(mycoin).transferFrom(msg.sender, address(this) , 1000 * (10 ** 3) );
        Info memory temp = Info((amount* 1000), block.timestamp);
        depositors[msg.sender] = temp; //  1000 => (10 ** 3);
        //todo: emit a deposit event

    }

    function withdraw(uint256 amount) public {
        require(amount > 0, "amount must be greater than 0");
        Info storage personDetails = depositors[msg.sender];
        require((amount * 1000) <= personDetails.amount , "You don't have enough tokens to withdraw");

        // calculate reword 
        uint x = ((amount * 1000) * 5)/100;
        uint y = (block.timestamp - personDetails.time) / (3600 * 24);
        uint totalReword = x * y;

        // send the mycoin first
        IERC20(mycoin).transfer(msg.sender, amount);
        personDetails.amount -= amount;

        // send the reword token as Reword.
        if(remainingReword < totalReword){
            IERC20(reword).transfer(msg.sender, remainingReword);
            remainingReword -= remainingReword;
        }else{
            IERC20(reword).transfer(msg.sender, totalReword);
            remainingReword -= totalReword;
        }
    }

    modifier onlyOwner() {
        require(msg.sender == owner , "only owner can call this function");
        _;
    }
    
    function depositRewordToken(uint amount) public onlyOwner {
        // IERC20(reword).approve(address(this), amount * (10**3));
        IERC20(reword).transferFrom(msg.sender,address(this) , amount * (10**3));
        remainingReword += amount * 1000;

    }


    function seeDetails(address _peer) public view returns(Info memory){
        return depositors[_peer];
    }
}