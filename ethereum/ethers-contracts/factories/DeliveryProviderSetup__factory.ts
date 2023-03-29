/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DeliveryProviderSetup,
  DeliveryProviderSetupInterface,
} from "../DeliveryProviderSetup";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FailedToInitializeImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ImplementationAddressIsZero",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610330806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e410a0c614610030575b600080fd5b61004361003e36600461023b565b610045565b005b6001600160a01b03821661006c576040516309e9cf2160e01b815260040160405180910390fd5b6000805462010000600160b01b0319166201000033021790556000805461ffff191661ffff831617905561009f82610156565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b038616916100e2916102ab565b600060405180830381855af49150503d806000811461011d576040519150601f19603f3d011682016040523d82523d6000602084013e610122565b606091505b50915091508161015057806040516385f11c8360e01b815260040161014791906102c7565b60405180910390fd5b50505050565b61015f81610196565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6101fa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610147565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6000806040838503121561024e57600080fd5b82356001600160a01b038116811461026557600080fd5b9150602083013561ffff8116811461027c57600080fd5b809150509250929050565b60005b838110156102a257818101518382015260200161028a565b50506000910152565b600082516102bd818460208701610287565b9190910192915050565b60208152600082518060208401526102e6816040850160208701610287565b601f01601f1916919091016040019291505056fea2646970667358221220a1a244b15be984f381053ca0463a9d8fd036b2ef75ae68cd14bbb5f8df02267064736f6c63430008130033";

type DeliveryProviderSetupConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeliveryProviderSetupConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeliveryProviderSetup__factory extends ContractFactory {
  constructor(...args: DeliveryProviderSetupConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeliveryProviderSetup> {
    return super.deploy(overrides || {}) as Promise<DeliveryProviderSetup>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeliveryProviderSetup {
    return super.attach(address) as DeliveryProviderSetup;
  }
  override connect(signer: Signer): DeliveryProviderSetup__factory {
    return super.connect(signer) as DeliveryProviderSetup__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeliveryProviderSetupInterface {
    return new utils.Interface(_abi) as DeliveryProviderSetupInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeliveryProviderSetup {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DeliveryProviderSetup;
  }
}