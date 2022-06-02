// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import { ISuperfluid } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol"; //"@superfluid-finance/ethereum-monorepo/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { IConstantFlowAgreementV1 } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import { CFAv1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/CFAv1Library.sol";

error FlowRateZero();
error ServiceActive(address owner);

contract Lasso {
    using CFAv1Library for CFAv1Library.InitData;

    struct Service {
        bool active;
        uint256 date;
        uint256 subscribersAmount;
        uint256 flowRate;
        string title;
        string subscriptionType;
    }

    CFAv1Library.InitData public cfaV1;

    mapping(address => Service) public services;

    constructor(ISuperfluid host) {
        cfaV1 = CFAv1Library.InitData(
            host,
            IConstantFlowAgreementV1(
                address(host.getAgreementClass(keccak256("org.superfluid-finance.agreements.ConstantFlowAgreement.v1")))
            )
        );
    }

    function createService(
        string calldata _title,
        string calldata _subscriptionType,
        uint256 _flowRate
    ) external returns (Service memory) {
        if (_flowRate == 0) revert FlowRateZero();
        if (services[msg.sender].active == true) revert ServiceActive(msg.sender);

        services[msg.sender] = Service(true, block.timestamp, 0, _flowRate, _title, _subscriptionType);

        return services[msg.sender];
    }

    event ServiceCreated(
        address indexed owner,
        uint256 indexed date,
        uint256 indexed flowRate,
        string title,
        string subscriptionType
    );
}
