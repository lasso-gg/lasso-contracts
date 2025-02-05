/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface IERC777Interface extends utils.Interface {
  functions: {
    "authorizeOperator(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256,bytes)": FunctionFragment;
    "defaultOperators()": FunctionFragment;
    "granularity()": FunctionFragment;
    "isOperatorFor(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
    "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
    "revokeOperator(address)": FunctionFragment;
    "send(address,uint256,bytes)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorizeOperator"
      | "balanceOf"
      | "burn"
      | "defaultOperators"
      | "granularity"
      | "isOperatorFor"
      | "name"
      | "operatorBurn"
      | "operatorSend"
      | "revokeOperator"
      | "send"
      | "symbol"
      | "totalSupply"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorizeOperator",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultOperators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorFor",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operatorBurn",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorSend",
    values: [string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedOperator(address,address)": EventFragment;
    "Burned(address,address,uint256,bytes,bytes)": EventFragment;
    "Minted(address,address,uint256,bytes,bytes)": EventFragment;
    "RevokedOperator(address,address)": EventFragment;
    "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
}

export interface AuthorizedOperatorEventObject {
  operator: string;
  tokenHolder: string;
}
export type AuthorizedOperatorEvent = TypedEvent<
  [string, string],
  AuthorizedOperatorEventObject
>;

export type AuthorizedOperatorEventFilter =
  TypedEventFilter<AuthorizedOperatorEvent>;

export interface BurnedEventObject {
  operator: string;
  from: string;
  amount: BigNumber;
  data: string;
  operatorData: string;
}
export type BurnedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  BurnedEventObject
>;

export type BurnedEventFilter = TypedEventFilter<BurnedEvent>;

export interface MintedEventObject {
  operator: string;
  to: string;
  amount: BigNumber;
  data: string;
  operatorData: string;
}
export type MintedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  MintedEventObject
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

export interface RevokedOperatorEventObject {
  operator: string;
  tokenHolder: string;
}
export type RevokedOperatorEvent = TypedEvent<
  [string, string],
  RevokedOperatorEventObject
>;

export type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;

export interface SentEventObject {
  operator: string;
  from: string;
  to: string;
  amount: BigNumber;
  data: string;
  operatorData: string;
}
export type SentEvent = TypedEvent<
  [string, string, string, BigNumber, string, string],
  SentEventObject
>;

export type SentEventFilter = TypedEventFilter<SentEvent>;

export interface IERC777 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC777Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authorizeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;

    granularity(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  authorizeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  defaultOperators(overrides?: CallOverrides): Promise<string[]>;

  granularity(overrides?: CallOverrides): Promise<BigNumber>;

  isOperatorFor(
    operator: string,
    tokenHolder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  operatorBurn(
    account: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  operatorSend(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  send(
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    authorizeOperator(
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    defaultOperators(overrides?: CallOverrides): Promise<string[]>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AuthorizedOperator(address,address)"(
      operator?: string | null,
      tokenHolder?: string | null
    ): AuthorizedOperatorEventFilter;
    AuthorizedOperator(
      operator?: string | null,
      tokenHolder?: string | null
    ): AuthorizedOperatorEventFilter;

    "Burned(address,address,uint256,bytes,bytes)"(
      operator?: string | null,
      from?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): BurnedEventFilter;
    Burned(
      operator?: string | null,
      from?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): BurnedEventFilter;

    "Minted(address,address,uint256,bytes,bytes)"(
      operator?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): MintedEventFilter;
    Minted(
      operator?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): MintedEventFilter;

    "RevokedOperator(address,address)"(
      operator?: string | null,
      tokenHolder?: string | null
    ): RevokedOperatorEventFilter;
    RevokedOperator(
      operator?: string | null,
      tokenHolder?: string | null
    ): RevokedOperatorEventFilter;

    "Sent(address,address,address,uint256,bytes,bytes)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): SentEventFilter;
    Sent(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): SentEventFilter;
  };

  estimateGas: {
    authorizeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
