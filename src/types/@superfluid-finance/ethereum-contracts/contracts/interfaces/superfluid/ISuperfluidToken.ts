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
} from "../../../../../common";

export interface ISuperfluidTokenInterface extends utils.Interface {
  functions: {
    "createAgreement(bytes32,bytes32[])": FunctionFragment;
    "getAccountActiveAgreements(address)": FunctionFragment;
    "getAgreementData(address,bytes32,uint256)": FunctionFragment;
    "getAgreementStateSlot(address,address,uint256,uint256)": FunctionFragment;
    "getHost()": FunctionFragment;
    "isAccountCritical(address,uint256)": FunctionFragment;
    "isAccountCriticalNow(address)": FunctionFragment;
    "isAccountSolvent(address,uint256)": FunctionFragment;
    "isAccountSolventNow(address)": FunctionFragment;
    "makeLiquidationPayoutsV2(bytes32,bytes,address,bool,address,uint256,int256)": FunctionFragment;
    "realtimeBalanceOf(address,uint256)": FunctionFragment;
    "realtimeBalanceOfNow(address)": FunctionFragment;
    "settleBalance(address,int256)": FunctionFragment;
    "terminateAgreement(bytes32,uint256)": FunctionFragment;
    "updateAgreementData(bytes32,bytes32[])": FunctionFragment;
    "updateAgreementStateSlot(address,uint256,bytes32[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createAgreement"
      | "getAccountActiveAgreements"
      | "getAgreementData"
      | "getAgreementStateSlot"
      | "getHost"
      | "isAccountCritical"
      | "isAccountCriticalNow"
      | "isAccountSolvent"
      | "isAccountSolventNow"
      | "makeLiquidationPayoutsV2"
      | "realtimeBalanceOf"
      | "realtimeBalanceOfNow"
      | "settleBalance"
      | "terminateAgreement"
      | "updateAgreementData"
      | "updateAgreementStateSlot"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createAgreement",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountActiveAgreements",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreementData",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreementStateSlot",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isAccountCritical",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccountCriticalNow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccountSolvent",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccountSolventNow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "makeLiquidationPayoutsV2",
    values: [
      BytesLike,
      BytesLike,
      string,
      boolean,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOfNow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "settleBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "terminateAgreement",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgreementData",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgreementStateSlot",
    values: [string, BigNumberish, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "createAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountActiveAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreementData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreementStateSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAccountCritical",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccountCriticalNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccountSolvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccountSolventNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeLiquidationPayoutsV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOfNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgreementData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgreementStateSlot",
    data: BytesLike
  ): Result;

  events: {
    "AgreementCreated(address,bytes32,bytes32[])": EventFragment;
    "AgreementLiquidated(address,bytes32,address,address,uint256)": EventFragment;
    "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)": EventFragment;
    "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)": EventFragment;
    "AgreementStateUpdated(address,address,uint256)": EventFragment;
    "AgreementTerminated(address,bytes32)": EventFragment;
    "AgreementUpdated(address,bytes32,bytes32[])": EventFragment;
    "Bailout(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgreementCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgreementLiquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedBy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedV2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgreementStateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgreementTerminated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgreementUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Bailout"): EventFragment;
}

export interface AgreementCreatedEventObject {
  agreementClass: string;
  id: string;
  data: string[];
}
export type AgreementCreatedEvent = TypedEvent<
  [string, string, string[]],
  AgreementCreatedEventObject
>;

export type AgreementCreatedEventFilter =
  TypedEventFilter<AgreementCreatedEvent>;

export interface AgreementLiquidatedEventObject {
  agreementClass: string;
  id: string;
  penaltyAccount: string;
  rewardAccount: string;
  rewardAmount: BigNumber;
}
export type AgreementLiquidatedEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  AgreementLiquidatedEventObject
>;

export type AgreementLiquidatedEventFilter =
  TypedEventFilter<AgreementLiquidatedEvent>;

export interface AgreementLiquidatedByEventObject {
  liquidatorAccount: string;
  agreementClass: string;
  id: string;
  penaltyAccount: string;
  bondAccount: string;
  rewardAmount: BigNumber;
  bailoutAmount: BigNumber;
}
export type AgreementLiquidatedByEvent = TypedEvent<
  [string, string, string, string, string, BigNumber, BigNumber],
  AgreementLiquidatedByEventObject
>;

export type AgreementLiquidatedByEventFilter =
  TypedEventFilter<AgreementLiquidatedByEvent>;

export interface AgreementLiquidatedV2EventObject {
  agreementClass: string;
  id: string;
  liquidatorAccount: string;
  targetAccount: string;
  rewardAccount: string;
  rewardAmount: BigNumber;
  targetAccountBalanceDelta: BigNumber;
  liquidationTypeData: string;
}
export type AgreementLiquidatedV2Event = TypedEvent<
  [string, string, string, string, string, BigNumber, BigNumber, string],
  AgreementLiquidatedV2EventObject
>;

export type AgreementLiquidatedV2EventFilter =
  TypedEventFilter<AgreementLiquidatedV2Event>;

export interface AgreementStateUpdatedEventObject {
  agreementClass: string;
  account: string;
  slotId: BigNumber;
}
export type AgreementStateUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  AgreementStateUpdatedEventObject
>;

export type AgreementStateUpdatedEventFilter =
  TypedEventFilter<AgreementStateUpdatedEvent>;

export interface AgreementTerminatedEventObject {
  agreementClass: string;
  id: string;
}
export type AgreementTerminatedEvent = TypedEvent<
  [string, string],
  AgreementTerminatedEventObject
>;

export type AgreementTerminatedEventFilter =
  TypedEventFilter<AgreementTerminatedEvent>;

export interface AgreementUpdatedEventObject {
  agreementClass: string;
  id: string;
  data: string[];
}
export type AgreementUpdatedEvent = TypedEvent<
  [string, string, string[]],
  AgreementUpdatedEventObject
>;

export type AgreementUpdatedEventFilter =
  TypedEventFilter<AgreementUpdatedEvent>;

export interface BailoutEventObject {
  bailoutAccount: string;
  bailoutAmount: BigNumber;
}
export type BailoutEvent = TypedEvent<[string, BigNumber], BailoutEventObject>;

export type BailoutEventFilter = TypedEventFilter<BailoutEvent>;

export interface ISuperfluidToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISuperfluidTokenInterface;

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
    createAgreement(
      id: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountActiveAgreements(
      account: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { activeAgreements: string[] }>;

    getAgreementData(
      agreementClass: string,
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { data: string[] }>;

    getAgreementStateSlot(
      agreementClass: string,
      account: string,
      slotId: BigNumberish,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { slotData: string[] }>;

    getHost(overrides?: CallOverrides): Promise<[string] & { host: string }>;

    isAccountCritical(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isCritical: boolean }>;

    isAccountCriticalNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isCritical: boolean }>;

    isAccountSolvent(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isSolvent: boolean }>;

    isAccountSolventNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isSolvent: boolean }>;

    makeLiquidationPayoutsV2(
      id: BytesLike,
      liquidationTypeData: BytesLike,
      liquidatorAccount: string,
      useDefaultRewardAccount: boolean,
      targetAccount: string,
      rewardAmount: BigNumberish,
      targetAccountBalanceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    realtimeBalanceOf(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    realtimeBalanceOfNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
        timestamp: BigNumber;
      }
    >;

    settleBalance(
      account: string,
      delta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terminateAgreement(
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAgreementData(
      id: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAgreementStateSlot(
      account: string,
      slotId: BigNumberish,
      slotData: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createAgreement(
    id: BytesLike,
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountActiveAgreements(
    account: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getAgreementData(
    agreementClass: string,
    id: BytesLike,
    dataLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getAgreementStateSlot(
    agreementClass: string,
    account: string,
    slotId: BigNumberish,
    dataLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getHost(overrides?: CallOverrides): Promise<string>;

  isAccountCritical(
    account: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAccountCriticalNow(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAccountSolvent(
    account: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAccountSolventNow(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  makeLiquidationPayoutsV2(
    id: BytesLike,
    liquidationTypeData: BytesLike,
    liquidatorAccount: string,
    useDefaultRewardAccount: boolean,
    targetAccount: string,
    rewardAmount: BigNumberish,
    targetAccountBalanceDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  realtimeBalanceOf(
    account: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      availableBalance: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  realtimeBalanceOfNow(
    account: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      availableBalance: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
      timestamp: BigNumber;
    }
  >;

  settleBalance(
    account: string,
    delta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terminateAgreement(
    id: BytesLike,
    dataLength: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAgreementData(
    id: BytesLike,
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAgreementStateSlot(
    account: string,
    slotId: BigNumberish,
    slotData: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createAgreement(
      id: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAccountActiveAgreements(
      account: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getAgreementData(
      agreementClass: string,
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getAgreementStateSlot(
      agreementClass: string,
      account: string,
      slotId: BigNumberish,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getHost(overrides?: CallOverrides): Promise<string>;

    isAccountCritical(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAccountCriticalNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAccountSolvent(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAccountSolventNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    makeLiquidationPayoutsV2(
      id: BytesLike,
      liquidationTypeData: BytesLike,
      liquidatorAccount: string,
      useDefaultRewardAccount: boolean,
      targetAccount: string,
      rewardAmount: BigNumberish,
      targetAccountBalanceDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    realtimeBalanceOf(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;

    realtimeBalanceOfNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
        timestamp: BigNumber;
      }
    >;

    settleBalance(
      account: string,
      delta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    terminateAgreement(
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAgreementData(
      id: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateAgreementStateSlot(
      account: string,
      slotId: BigNumberish,
      slotData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AgreementCreated(address,bytes32,bytes32[])"(
      agreementClass?: string | null,
      id?: null,
      data?: null
    ): AgreementCreatedEventFilter;
    AgreementCreated(
      agreementClass?: string | null,
      id?: null,
      data?: null
    ): AgreementCreatedEventFilter;

    "AgreementLiquidated(address,bytes32,address,address,uint256)"(
      agreementClass?: string | null,
      id?: null,
      penaltyAccount?: string | null,
      rewardAccount?: string | null,
      rewardAmount?: null
    ): AgreementLiquidatedEventFilter;
    AgreementLiquidated(
      agreementClass?: string | null,
      id?: null,
      penaltyAccount?: string | null,
      rewardAccount?: string | null,
      rewardAmount?: null
    ): AgreementLiquidatedEventFilter;

    "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)"(
      liquidatorAccount?: null,
      agreementClass?: string | null,
      id?: null,
      penaltyAccount?: string | null,
      bondAccount?: string | null,
      rewardAmount?: null,
      bailoutAmount?: null
    ): AgreementLiquidatedByEventFilter;
    AgreementLiquidatedBy(
      liquidatorAccount?: null,
      agreementClass?: string | null,
      id?: null,
      penaltyAccount?: string | null,
      bondAccount?: string | null,
      rewardAmount?: null,
      bailoutAmount?: null
    ): AgreementLiquidatedByEventFilter;

    "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)"(
      agreementClass?: string | null,
      id?: null,
      liquidatorAccount?: string | null,
      targetAccount?: string | null,
      rewardAccount?: null,
      rewardAmount?: null,
      targetAccountBalanceDelta?: null,
      liquidationTypeData?: null
    ): AgreementLiquidatedV2EventFilter;
    AgreementLiquidatedV2(
      agreementClass?: string | null,
      id?: null,
      liquidatorAccount?: string | null,
      targetAccount?: string | null,
      rewardAccount?: null,
      rewardAmount?: null,
      targetAccountBalanceDelta?: null,
      liquidationTypeData?: null
    ): AgreementLiquidatedV2EventFilter;

    "AgreementStateUpdated(address,address,uint256)"(
      agreementClass?: string | null,
      account?: string | null,
      slotId?: null
    ): AgreementStateUpdatedEventFilter;
    AgreementStateUpdated(
      agreementClass?: string | null,
      account?: string | null,
      slotId?: null
    ): AgreementStateUpdatedEventFilter;

    "AgreementTerminated(address,bytes32)"(
      agreementClass?: string | null,
      id?: null
    ): AgreementTerminatedEventFilter;
    AgreementTerminated(
      agreementClass?: string | null,
      id?: null
    ): AgreementTerminatedEventFilter;

    "AgreementUpdated(address,bytes32,bytes32[])"(
      agreementClass?: string | null,
      id?: null,
      data?: null
    ): AgreementUpdatedEventFilter;
    AgreementUpdated(
      agreementClass?: string | null,
      id?: null,
      data?: null
    ): AgreementUpdatedEventFilter;

    "Bailout(address,uint256)"(
      bailoutAccount?: string | null,
      bailoutAmount?: null
    ): BailoutEventFilter;
    Bailout(
      bailoutAccount?: string | null,
      bailoutAmount?: null
    ): BailoutEventFilter;
  };

  estimateGas: {
    createAgreement(
      id: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountActiveAgreements(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAgreementData(
      agreementClass: string,
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAgreementStateSlot(
      agreementClass: string,
      account: string,
      slotId: BigNumberish,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHost(overrides?: CallOverrides): Promise<BigNumber>;

    isAccountCritical(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAccountCriticalNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAccountSolvent(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAccountSolventNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeLiquidationPayoutsV2(
      id: BytesLike,
      liquidationTypeData: BytesLike,
      liquidatorAccount: string,
      useDefaultRewardAccount: boolean,
      targetAccount: string,
      rewardAmount: BigNumberish,
      targetAccountBalanceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    realtimeBalanceOf(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    realtimeBalanceOfNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settleBalance(
      account: string,
      delta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terminateAgreement(
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAgreementData(
      id: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAgreementStateSlot(
      account: string,
      slotId: BigNumberish,
      slotData: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createAgreement(
      id: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountActiveAgreements(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAgreementData(
      agreementClass: string,
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAgreementStateSlot(
      agreementClass: string,
      account: string,
      slotId: BigNumberish,
      dataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAccountCritical(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAccountCriticalNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAccountSolvent(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAccountSolventNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makeLiquidationPayoutsV2(
      id: BytesLike,
      liquidationTypeData: BytesLike,
      liquidatorAccount: string,
      useDefaultRewardAccount: boolean,
      targetAccount: string,
      rewardAmount: BigNumberish,
      targetAccountBalanceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    realtimeBalanceOf(
      account: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    realtimeBalanceOfNow(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    settleBalance(
      account: string,
      delta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terminateAgreement(
      id: BytesLike,
      dataLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAgreementData(
      id: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAgreementStateSlot(
      account: string,
      slotId: BigNumberish,
      slotData: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
