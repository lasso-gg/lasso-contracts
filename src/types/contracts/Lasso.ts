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
} from "../common";

export declare namespace Lasso {
  export type ServiceStruct = {
    active: boolean;
    date: BigNumberish;
    subscribersAmount: BigNumberish;
    flowRate: BigNumberish;
    title: string;
    subscriptionType: string;
  };

  export type ServiceStructOutput = [
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    active: boolean;
    date: BigNumber;
    subscribersAmount: BigNumber;
    flowRate: BigNumber;
    title: string;
    subscriptionType: string;
  };
}

export interface LassoInterface extends utils.Interface {
  functions: {
    "cfaV1()": FunctionFragment;
    "createService(string,string,uint256)": FunctionFragment;
    "services(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "cfaV1" | "createService" | "services"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cfaV1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createService",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "services", values: [string]): string;

  decodeFunctionResult(functionFragment: "cfaV1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "services", data: BytesLike): Result;

  events: {
    "ServiceCreated(address,uint256,uint256,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ServiceCreated"): EventFragment;
}

export interface ServiceCreatedEventObject {
  owner: string;
  date: BigNumber;
  flowRate: BigNumber;
  title: string;
  subscriptionType: string;
}
export type ServiceCreatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string],
  ServiceCreatedEventObject
>;

export type ServiceCreatedEventFilter = TypedEventFilter<ServiceCreatedEvent>;

export interface Lasso extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LassoInterface;

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
    cfaV1(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; cfa: string }>;

    createService(
      _title: string,
      _subscriptionType: string,
      _flowRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    services(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, string, string] & {
        active: boolean;
        date: BigNumber;
        subscribersAmount: BigNumber;
        flowRate: BigNumber;
        title: string;
        subscriptionType: string;
      }
    >;
  };

  cfaV1(
    overrides?: CallOverrides
  ): Promise<[string, string] & { host: string; cfa: string }>;

  createService(
    _title: string,
    _subscriptionType: string,
    _flowRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  services(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber, string, string] & {
      active: boolean;
      date: BigNumber;
      subscribersAmount: BigNumber;
      flowRate: BigNumber;
      title: string;
      subscriptionType: string;
    }
  >;

  callStatic: {
    cfaV1(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; cfa: string }>;

    createService(
      _title: string,
      _subscriptionType: string,
      _flowRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Lasso.ServiceStructOutput>;

    services(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, string, string] & {
        active: boolean;
        date: BigNumber;
        subscribersAmount: BigNumber;
        flowRate: BigNumber;
        title: string;
        subscriptionType: string;
      }
    >;
  };

  filters: {
    "ServiceCreated(address,uint256,uint256,string,string)"(
      owner?: string | null,
      date?: BigNumberish | null,
      flowRate?: BigNumberish | null,
      title?: null,
      subscriptionType?: null
    ): ServiceCreatedEventFilter;
    ServiceCreated(
      owner?: string | null,
      date?: BigNumberish | null,
      flowRate?: BigNumberish | null,
      title?: null,
      subscriptionType?: null
    ): ServiceCreatedEventFilter;
  };

  estimateGas: {
    cfaV1(overrides?: CallOverrides): Promise<BigNumber>;

    createService(
      _title: string,
      _subscriptionType: string,
      _flowRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    services(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cfaV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createService(
      _title: string,
      _subscriptionType: string,
      _flowRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    services(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
