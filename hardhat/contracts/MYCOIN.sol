// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MYCOIN is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("MYCOIN", "MCN") ERC20Permit("MYCOIN") {
        _mint(msg.sender, 1000000 * (10 ** decimals()));
    }
    
    function decimals() public view virtual override returns (uint8) {
  return 3;
}
}