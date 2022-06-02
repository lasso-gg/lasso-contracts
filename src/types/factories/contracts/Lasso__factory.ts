/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lasso, LassoInterface } from "../../contracts/Lasso";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FlowRateZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ServiceAlreadyActive",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "flowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "subscriptionType",
        type: "string",
      },
    ],
    name: "ServiceCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "cfaV1",
    outputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract IConstantFlowAgreementV1",
        name: "cfa",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_subscriptionType",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_flowRate",
        type: "uint256",
      },
    ],
    name: "createService",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "subscribersAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "flowRate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "subscriptionType",
            type: "string",
          },
        ],
        internalType: "struct Lasso.Service",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "services",
    outputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subscribersAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "flowRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "subscriptionType",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a07380380610a0783398101604081905261002f91610121565b6040805180820182526001600160a01b0383168082529151635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201529091602083019163b6d200de90602401602060405180830381865afa1580156100a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c89190610121565b6001600160a01b039081169091528151600080546001600160a01b031990811692841692909217905560209092015160018054909316911617905550610145565b6001600160a01b038116811461011e57600080fd5b50565b60006020828403121561013357600080fd5b815161013e81610109565b9392505050565b6108b3806101546000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636d966d01146100465780637b15f1b614610074578063d3112b2e14610094575b600080fd5b61005961005436600461061f565b6100ce565b60405161006b9695949392919061069c565b60405180910390f35b610087610082366004610731565b61021b565b60405161006b91906107a5565b6000546001546100ae916001600160a01b03908116911682565b604080516001600160a01b0393841681529290911660208301520161006b565b60026020819052600091825260409091208054600182015492820154600383015460048401805460ff9094169594929391929161010a90610811565b80601f016020809104026020016040519081016040528092919081815260200182805461013690610811565b80156101835780601f1061015857610100808354040283529160200191610183565b820191906000526020600020905b81548152906001019060200180831161016657829003601f168201915b50505050509080600501805461019890610811565b80601f01602080910402602001604051908101604052809291908181526020018280546101c490610811565b80156102115780601f106101e657610100808354040283529160200191610211565b820191906000526020600020905b8154815290600101906020018083116101f457829003601f168201915b5050505050905086565b6102566040518060c0016040528060001515815260200160008152602001600081526020016000815260200160608152602001606081525090565b81600003610276576040516299cbe360e21b815260040160405180910390fd5b3360009081526002602052604090205460ff1615156001036102b15760405163685e895960e11b815233600482015260240160405180910390fd5b6040518060c001604052806001151581526020014281526020016000815260200183815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8801819004810282018101909252868152918101919087908790819084018382808284376000920182905250939094525050338152600260208181526040928390208551815460ff1916901515178155858201516001820155928501519183019190915560608401516003830155608084015180519293506103a49260048501929190910190610586565b5060a082015180516103c0916005840191602090910190610586565b509050508142336001600160a01b03167fbe6682f1076fa1bd5010d6909d133623c97a04c32d0654044bbfd7ccf589d4c6898989896040516104059493929190610874565b60405180910390a433600090815260026020818152604092839020835160c081018552815460ff161515815260018201549281019290925291820154928101929092526003810154606083015260048101805460808401919061046790610811565b80601f016020809104026020016040519081016040528092919081815260200182805461049390610811565b80156104e05780601f106104b5576101008083540402835291602001916104e0565b820191906000526020600020905b8154815290600101906020018083116104c357829003601f168201915b505050505081526020016005820180546104f990610811565b80601f016020809104026020016040519081016040528092919081815260200182805461052590610811565b80156105725780601f1061054757610100808354040283529160200191610572565b820191906000526020600020905b81548152906001019060200180831161055557829003601f168201915b505050505081525050905095945050505050565b82805461059290610811565b90600052602060002090601f0160209004810192826105b457600085556105fa565b82601f106105cd57805160ff19168380011785556105fa565b828001600101855582156105fa579182015b828111156105fa5782518255916020019190600101906105df565b5061060692915061060a565b5090565b5b80821115610606576000815560010161060b565b60006020828403121561063157600080fd5b81356001600160a01b038116811461064857600080fd5b9392505050565b6000815180845260005b8181101561067557602081850181015186830182015201610659565b81811115610687576000602083870101525b50601f01601f19169290920160200192915050565b861515815285602082015284604082015283606082015260c0608082015260006106c960c083018561064f565b82810360a08401526106db818561064f565b9998505050505050505050565b60008083601f8401126106fa57600080fd5b50813567ffffffffffffffff81111561071257600080fd5b60208301915083602082850101111561072a57600080fd5b9250929050565b60008060008060006060868803121561074957600080fd5b853567ffffffffffffffff8082111561076157600080fd5b61076d89838a016106e8565b9097509550602088013591508082111561078657600080fd5b50610793888289016106e8565b96999598509660400135949350505050565b602081528151151560208201526020820151604082015260408201516060820152606082015160808201526000608083015160c060a08401526107eb60e084018261064f565b905060a0840151601f198483030160c0850152610808828261064f565b95945050505050565b600181811c9082168061082557607f821691505b60208210810361084557634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60408152600061088860408301868861084b565b828103602084015261089b81858761084b565b97965050505050505056fea164736f6c634300080d000a";

type LassoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LassoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lasso__factory extends ContractFactory {
  constructor(...args: LassoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    host: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lasso> {
    return super.deploy(host, overrides || {}) as Promise<Lasso>;
  }
  override getDeployTransaction(
    host: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(host, overrides || {});
  }
  override attach(address: string): Lasso {
    return super.attach(address) as Lasso;
  }
  override connect(signer: Signer): Lasso__factory {
    return super.connect(signer) as Lasso__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LassoInterface {
    return new utils.Interface(_abi) as LassoInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lasso {
    return new Contract(address, _abi, signerOrProvider) as Lasso;
  }
}
