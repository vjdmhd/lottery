/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Lottery } from "./lottery";
import { Params } from "./params";

export const protobufPackage = "vjdmhd.lottery.lottery";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCurrentLotteryRequest {
}

export interface QueryGetLotteryRequest {
  id: number;
}

export interface QueryGetLotteryResponse {
  lottery: Lottery | undefined;
}

export interface QueryAllLotteryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLotteryResponse {
  lottery: Lottery[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCurrentLotteryRequest(): QueryGetCurrentLotteryRequest {
  return {};
}

export const QueryGetCurrentLotteryRequest = {
  encode(_: QueryGetCurrentLotteryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentLotteryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentLotteryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetCurrentLotteryRequest {
    return {};
  },

  toJSON(_: QueryGetCurrentLotteryRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentLotteryRequest>, I>>(_: I): QueryGetCurrentLotteryRequest {
    const message = createBaseQueryGetCurrentLotteryRequest();
    return message;
  },
};

function createBaseQueryGetLotteryRequest(): QueryGetLotteryRequest {
  return { id: 0 };
}

export const QueryGetLotteryRequest = {
  encode(message: QueryGetLotteryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLotteryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLotteryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLotteryRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetLotteryRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLotteryRequest>, I>>(object: I): QueryGetLotteryRequest {
    const message = createBaseQueryGetLotteryRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetLotteryResponse(): QueryGetLotteryResponse {
  return { lottery: undefined };
}

export const QueryGetLotteryResponse = {
  encode(message: QueryGetLotteryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lottery !== undefined) {
      Lottery.encode(message.lottery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLotteryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLotteryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lottery = Lottery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLotteryResponse {
    return { lottery: isSet(object.lottery) ? Lottery.fromJSON(object.lottery) : undefined };
  },

  toJSON(message: QueryGetLotteryResponse): unknown {
    const obj: any = {};
    message.lottery !== undefined && (obj.lottery = message.lottery ? Lottery.toJSON(message.lottery) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLotteryResponse>, I>>(object: I): QueryGetLotteryResponse {
    const message = createBaseQueryGetLotteryResponse();
    message.lottery = (object.lottery !== undefined && object.lottery !== null)
      ? Lottery.fromPartial(object.lottery)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLotteryRequest(): QueryAllLotteryRequest {
  return { pagination: undefined };
}

export const QueryAllLotteryRequest = {
  encode(message: QueryAllLotteryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLotteryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLotteryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLotteryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllLotteryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLotteryRequest>, I>>(object: I): QueryAllLotteryRequest {
    const message = createBaseQueryAllLotteryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLotteryResponse(): QueryAllLotteryResponse {
  return { lottery: [], pagination: undefined };
}

export const QueryAllLotteryResponse = {
  encode(message: QueryAllLotteryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lottery) {
      Lottery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLotteryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLotteryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lottery.push(Lottery.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLotteryResponse {
    return {
      lottery: Array.isArray(object?.lottery) ? object.lottery.map((e: any) => Lottery.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllLotteryResponse): unknown {
    const obj: any = {};
    if (message.lottery) {
      obj.lottery = message.lottery.map((e) => e ? Lottery.toJSON(e) : undefined);
    } else {
      obj.lottery = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLotteryResponse>, I>>(object: I): QueryAllLotteryResponse {
    const message = createBaseQueryAllLotteryResponse();
    message.lottery = object.lottery?.map((e) => Lottery.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Lottery by index. */
  Lottery(request: QueryGetLotteryRequest): Promise<QueryGetLotteryResponse>;
  /** Queries the current Lottery. */
  CurrentLottery(request: QueryGetCurrentLotteryRequest): Promise<QueryGetLotteryResponse>;
  /** Queries a list of Lottery items. */
  LotteryAll(request: QueryAllLotteryRequest): Promise<QueryAllLotteryResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Lottery = this.Lottery.bind(this);
    this.CurrentLottery = this.CurrentLottery.bind(this);
    this.LotteryAll = this.LotteryAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("vjdmhd.lottery.lottery.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Lottery(request: QueryGetLotteryRequest): Promise<QueryGetLotteryResponse> {
    const data = QueryGetLotteryRequest.encode(request).finish();
    const promise = this.rpc.request("vjdmhd.lottery.lottery.Query", "Lottery", data);
    return promise.then((data) => QueryGetLotteryResponse.decode(new _m0.Reader(data)));
  }

  CurrentLottery(request: QueryGetCurrentLotteryRequest): Promise<QueryGetLotteryResponse> {
    const data = QueryGetCurrentLotteryRequest.encode(request).finish();
    const promise = this.rpc.request("vjdmhd.lottery.lottery.Query", "CurrentLottery", data);
    return promise.then((data) => QueryGetLotteryResponse.decode(new _m0.Reader(data)));
  }

  LotteryAll(request: QueryAllLotteryRequest): Promise<QueryAllLotteryResponse> {
    const data = QueryAllLotteryRequest.encode(request).finish();
    const promise = this.rpc.request("vjdmhd.lottery.lottery.Query", "LotteryAll", data);
    return promise.then((data) => QueryAllLotteryResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
