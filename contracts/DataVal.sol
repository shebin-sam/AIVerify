pragma solidity ^0.8.0;

contract DataVal {
    struct HashData {
        string username;
        string data;
        bytes32 Hash;
    }

    HashData[] public hashData;

    function storeHashData(string memory _username, string memory _data) public returns(bytes32){
        bytes32 hash = keccak256(bytes(_data));
        HashData memory newHashData = HashData(_username, _data, hash);
        hashData.push(newHashData);
        return hash ;
    }

    function searchData(string memory _data) public view returns (bool) {
        for (uint256 i = 0; i < hashData.length; i++) {
            if (keccak256(abi.encodePacked(hashData[i].data)) == keccak256(abi.encodePacked(_data))) {
                return true;
            }
        }
        return false;
    }
}