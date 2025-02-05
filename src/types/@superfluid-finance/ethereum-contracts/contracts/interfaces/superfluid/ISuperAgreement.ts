/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export interface ISuperAgreementInterface extends utils.Interface {
  functions: {
    "agreementType()": FunctionFragment;
    "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "agreementType" | "realtimeBalanceOf"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "agreementType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOf",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "agreementType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOf",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISuperAgreement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISuperAgreementInterface;

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
    agreementType(overrides?: CallOverrides): Promise<[string]>;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;
  };

  agreementType(overrides?: CallOverrides): Promise<string>;

  realtimeBalanceOf(
    token: string,
    account: string,
    time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      dynamicBalance: BigNumber;
      deposit: BigNumber;
      owedDeposit: BigNumber;
    }
  >;

  callStatic: {
    agreementType(overrides?: CallOverrides): Promise<string>;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    agreementType(overrides?: CallOverrides): Promise<BigNumber>;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realtimeBalanceOf(
      token: string,
      account: string,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
