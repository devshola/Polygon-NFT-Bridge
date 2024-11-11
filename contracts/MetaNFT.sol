// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract PolygonNFT is ERC721A {

    constructor() ERC721A("PolygonNFT", "MNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmQVQCaW65eFaHJ68hZbqnRF4xz5ifi4KF1qWEqVn5RNgB/";
    }

    function promptDescription() external pure returns (string memory) {
        return "This is the prompt description";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}