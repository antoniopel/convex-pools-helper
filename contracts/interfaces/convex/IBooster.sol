pragma solidity ^0.8.4;

interface IBooster {
    function poolInfo(uint256)
        external
        view
        returns (
            address,
            address,
            address,
            address,
            address,
            bool
        );

    function poolLength() external view returns (uint256);
}
