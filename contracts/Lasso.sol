// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import { ISuperfluid } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol"; //"@superfluid-finance/ethereum-monorepo/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { IConstantFlowAgreementV1 } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import { CFAv1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/CFAv1Library.sol";

error FlowRateZero();
error ServiceAlreadyActive(address owner);

error EmptyHandle();

error SubscriptionAlreadyExists(string title);

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

    struct Subscription {
        bool active;
        uint256 date;
        uint256 flowRate;
        string handle;
        address owner;
    }

    CFAv1Library.InitData public cfaV1;

    mapping(address => Service) public services;
    mapping(address => Subscription[]) public subscriptions;

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
        if (services[msg.sender].active == true) revert ServiceAlreadyActive(msg.sender);
        
        services[msg.sender] = Service(true, block.timestamp, 0, _flowRate, _title, _subscriptionType);

        emit ServiceCreated(msg.sender, block.timestamp, _flowRate, _title, _subscriptionType);

        return services[msg.sender];
    }

    function subscribe(
        string calldata _handle,
        address _owner,
    ) external returns (Subscription memory) {
        if (bytes(_handle).length == 0) revert EmptyHandle();

        for (uint i=0; i < subscriptions[msg.sender].length; i++) {
            if(subscriptions[msg.sender][i].owner == _owner && subscriptions[msg.sender][i].active){
                revert SubscriptionAlreadyExists(services[_owner].title);
            }
        }

        cfaV1.createFlow(receiver, token, flowRate);

        subscriptions[msg.sender] = Subscription(true, block.timestamp, services[_owner].flowRate, _handle, _owner);

        emit SubscriptionCreated(msg.sender, block.timestamp, _flowRate, _title, _subscriptionType);

        return subscriptions[msg.sender]
    }

    event ServiceCreated(
        address indexed owner,
        uint256 indexed date,
        uint256 indexed flowRate,
        string title,
        string subscriptionType
    );
}
