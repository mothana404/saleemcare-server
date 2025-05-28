
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model AIRequest
 * 
 */
export type AIRequest = $Result.DefaultSelection<Prisma.$AIRequestPayload>
/**
 * Model PatientInfo
 * 
 */
export type PatientInfo = $Result.DefaultSelection<Prisma.$PatientInfoPayload>
/**
 * Model DoctorInfo
 * 
 */
export type DoctorInfo = $Result.DefaultSelection<Prisma.$DoctorInfoPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT',
  VISITOR: 'VISITOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AccountType: {
  REGISTERED: 'REGISTERED',
  ANONYMOUS: 'ANONYMOUS'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const DiagnosisStatus: {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};

export type DiagnosisStatus = (typeof DiagnosisStatus)[keyof typeof DiagnosisStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const MessageType: {
  USER: 'USER',
  AI: 'AI',
  SYSTEM: 'SYSTEM'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type DiagnosisStatus = $Enums.DiagnosisStatus

export const DiagnosisStatus: typeof $Enums.DiagnosisStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIRequest`: Exposes CRUD operations for the **AIRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIRequests
    * const aIRequests = await prisma.aIRequest.findMany()
    * ```
    */
  get aIRequest(): Prisma.AIRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientInfo`: Exposes CRUD operations for the **PatientInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientInfos
    * const patientInfos = await prisma.patientInfo.findMany()
    * ```
    */
  get patientInfo(): Prisma.PatientInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorInfo`: Exposes CRUD operations for the **DoctorInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorInfos
    * const doctorInfos = await prisma.doctorInfo.findMany()
    * ```
    */
  get doctorInfo(): Prisma.DoctorInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    AIRequest: 'AIRequest',
    PatientInfo: 'PatientInfo',
    DoctorInfo: 'DoctorInfo',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatSession" | "chatMessage" | "aIRequest" | "patientInfo" | "doctorInfo" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      AIRequest: {
        payload: Prisma.$AIRequestPayload<ExtArgs>
        fields: Prisma.AIRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>
          }
          findFirst: {
            args: Prisma.AIRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>
          }
          findMany: {
            args: Prisma.AIRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>[]
          }
          create: {
            args: Prisma.AIRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>
          }
          createMany: {
            args: Prisma.AIRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>[]
          }
          delete: {
            args: Prisma.AIRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>
          }
          update: {
            args: Prisma.AIRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>
          }
          deleteMany: {
            args: Prisma.AIRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>[]
          }
          upsert: {
            args: Prisma.AIRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRequestPayload>
          }
          aggregate: {
            args: Prisma.AIRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIRequest>
          }
          groupBy: {
            args: Prisma.AIRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AIRequestCountAggregateOutputType> | number
          }
        }
      }
      PatientInfo: {
        payload: Prisma.$PatientInfoPayload<ExtArgs>
        fields: Prisma.PatientInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>
          }
          findFirst: {
            args: Prisma.PatientInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>
          }
          findMany: {
            args: Prisma.PatientInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>[]
          }
          create: {
            args: Prisma.PatientInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>
          }
          createMany: {
            args: Prisma.PatientInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>[]
          }
          delete: {
            args: Prisma.PatientInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>
          }
          update: {
            args: Prisma.PatientInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>
          }
          deleteMany: {
            args: Prisma.PatientInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>[]
          }
          upsert: {
            args: Prisma.PatientInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientInfoPayload>
          }
          aggregate: {
            args: Prisma.PatientInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientInfo>
          }
          groupBy: {
            args: Prisma.PatientInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PatientInfoCountAggregateOutputType> | number
          }
        }
      }
      DoctorInfo: {
        payload: Prisma.$DoctorInfoPayload<ExtArgs>
        fields: Prisma.DoctorInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>
          }
          findFirst: {
            args: Prisma.DoctorInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>
          }
          findMany: {
            args: Prisma.DoctorInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>[]
          }
          create: {
            args: Prisma.DoctorInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>
          }
          createMany: {
            args: Prisma.DoctorInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>[]
          }
          delete: {
            args: Prisma.DoctorInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>
          }
          update: {
            args: Prisma.DoctorInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>
          }
          deleteMany: {
            args: Prisma.DoctorInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>[]
          }
          upsert: {
            args: Prisma.DoctorInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorInfoPayload>
          }
          aggregate: {
            args: Prisma.DoctorInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorInfo>
          }
          groupBy: {
            args: Prisma.DoctorInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorInfoCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorInfoCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
    aIRequest?: AIRequestOmit
    patientInfo?: PatientInfoOmit
    doctorInfo?: DoctorInfoOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
    chatMessages: number
    chatSessions: number
    sentAIRequests: number
    receivedAIData: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    chatSessions?: boolean | UserCountOutputTypeCountChatSessionsArgs
    sentAIRequests?: boolean | UserCountOutputTypeCountSentAIRequestsArgs
    receivedAIData?: boolean | UserCountOutputTypeCountReceivedAIDataArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentAIRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedAIDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIRequestWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    visitCount: number | null
  }

  export type UserSumAggregateOutputType = {
    visitCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    accountType: $Enums.AccountType | null
    userName: string | null
    email: string | null
    password: string | null
    deviceId: string | null
    role: $Enums.UserRole | null
    fcmToken: string | null
    isActive: boolean | null
    lastSeen: Date | null
    visitCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    accountType: $Enums.AccountType | null
    userName: string | null
    email: string | null
    password: string | null
    deviceId: string | null
    role: $Enums.UserRole | null
    fcmToken: string | null
    isActive: boolean | null
    lastSeen: Date | null
    visitCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    accountType: number
    userName: number
    email: number
    password: number
    deviceId: number
    role: number
    fcmToken: number
    isActive: number
    lastSeen: number
    visitCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    visitCount?: true
  }

  export type UserSumAggregateInputType = {
    visitCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    accountType?: true
    userName?: true
    email?: true
    password?: true
    deviceId?: true
    role?: true
    fcmToken?: true
    isActive?: true
    lastSeen?: true
    visitCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    accountType?: true
    userName?: true
    email?: true
    password?: true
    deviceId?: true
    role?: true
    fcmToken?: true
    isActive?: true
    lastSeen?: true
    visitCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    accountType?: true
    userName?: true
    email?: true
    password?: true
    deviceId?: true
    role?: true
    fcmToken?: true
    isActive?: true
    lastSeen?: true
    visitCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    accountType: $Enums.AccountType
    userName: string | null
    email: string | null
    password: string | null
    deviceId: string
    role: $Enums.UserRole
    fcmToken: string
    isActive: boolean
    lastSeen: Date
    visitCount: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountType?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    deviceId?: boolean
    role?: boolean
    fcmToken?: boolean
    isActive?: boolean
    lastSeen?: boolean
    visitCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    patientInfo?: boolean | User$patientInfoArgs<ExtArgs>
    doctorInfo?: boolean | User$doctorInfoArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    sentAIRequests?: boolean | User$sentAIRequestsArgs<ExtArgs>
    receivedAIData?: boolean | User$receivedAIDataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountType?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    deviceId?: boolean
    role?: boolean
    fcmToken?: boolean
    isActive?: boolean
    lastSeen?: boolean
    visitCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountType?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    deviceId?: boolean
    role?: boolean
    fcmToken?: boolean
    isActive?: boolean
    lastSeen?: boolean
    visitCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    accountType?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    deviceId?: boolean
    role?: boolean
    fcmToken?: boolean
    isActive?: boolean
    lastSeen?: boolean
    visitCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountType" | "userName" | "email" | "password" | "deviceId" | "role" | "fcmToken" | "isActive" | "lastSeen" | "visitCount" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    patientInfo?: boolean | User$patientInfoArgs<ExtArgs>
    doctorInfo?: boolean | User$doctorInfoArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    sentAIRequests?: boolean | User$sentAIRequestsArgs<ExtArgs>
    receivedAIData?: boolean | User$receivedAIDataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      patientInfo: Prisma.$PatientInfoPayload<ExtArgs> | null
      doctorInfo: Prisma.$DoctorInfoPayload<ExtArgs> | null
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
      sentAIRequests: Prisma.$AIRequestPayload<ExtArgs>[]
      receivedAIData: Prisma.$AIRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountType: $Enums.AccountType
      userName: string | null
      email: string | null
      password: string | null
      deviceId: string
      role: $Enums.UserRole
      fcmToken: string
      isActive: boolean
      lastSeen: Date
      visitCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientInfo<T extends User$patientInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$patientInfoArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctorInfo<T extends User$doctorInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorInfoArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatSessions<T extends User$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentAIRequests<T extends User$sentAIRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentAIRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedAIData<T extends User$receivedAIDataArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedAIDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly accountType: FieldRef<"User", 'AccountType'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly deviceId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly fcmToken: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly visitCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.patientInfo
   */
  export type User$patientInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    where?: PatientInfoWhereInput
  }

  /**
   * User.doctorInfo
   */
  export type User$doctorInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    where?: DoctorInfoWhereInput
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatSessions
   */
  export type User$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User.sentAIRequests
   */
  export type User$sentAIRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    where?: AIRequestWhereInput
    orderBy?: AIRequestOrderByWithRelationInput | AIRequestOrderByWithRelationInput[]
    cursor?: AIRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIRequestScalarFieldEnum | AIRequestScalarFieldEnum[]
  }

  /**
   * User.receivedAIData
   */
  export type User$receivedAIDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    where?: AIRequestWhereInput
    orderBy?: AIRequestOrderByWithRelationInput | AIRequestOrderByWithRelationInput[]
    cursor?: AIRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIRequestScalarFieldEnum | AIRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly title: FieldRef<"ChatSession", 'String'>
    readonly isActive: FieldRef<"ChatSession", 'Boolean'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    type: $Enums.MessageType | null
    content: string | null
    isDelivered: boolean | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    type: $Enums.MessageType | null
    content: string | null
    isDelivered: boolean | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    type: number
    content: number
    metadata: number
    isDelivered: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    type?: true
    content?: true
    isDelivered?: true
    isRead?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    type?: true
    content?: true
    isDelivered?: true
    isRead?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    type?: true
    content?: true
    metadata?: true
    isDelivered?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    type: $Enums.MessageType
    content: string
    metadata: JsonValue | null
    isDelivered: boolean
    isRead: boolean
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    type?: boolean
    content?: boolean
    metadata?: boolean
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId" | "type" | "content" | "metadata" | "isDelivered" | "isRead" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      session: Prisma.$ChatSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
      type: $Enums.MessageType
      content: string
      metadata: Prisma.JsonValue | null
      isDelivered: boolean
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly type: FieldRef<"ChatMessage", 'MessageType'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly metadata: FieldRef<"ChatMessage", 'Json'>
    readonly isDelivered: FieldRef<"ChatMessage", 'Boolean'>
    readonly isRead: FieldRef<"ChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model AIRequest
   */

  export type AggregateAIRequest = {
    _count: AIRequestCountAggregateOutputType | null
    _min: AIRequestMinAggregateOutputType | null
    _max: AIRequestMaxAggregateOutputType | null
  }

  export type AIRequestMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    dataOne: string | null
    dataTwo: string | null
    dataThree: string | null
    promptText: string | null
    aiResponse: string | null
    isProcessed: boolean | null
    isDelivered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIRequestMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    dataOne: string | null
    dataTwo: string | null
    dataThree: string | null
    promptText: string | null
    aiResponse: string | null
    isProcessed: boolean | null
    isDelivered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIRequestCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    dataOne: number
    dataTwo: number
    dataThree: number
    promptText: number
    aiResponse: number
    isProcessed: number
    isDelivered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIRequestMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    dataOne?: true
    dataTwo?: true
    dataThree?: true
    promptText?: true
    aiResponse?: true
    isProcessed?: true
    isDelivered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIRequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    dataOne?: true
    dataTwo?: true
    dataThree?: true
    promptText?: true
    aiResponse?: true
    isProcessed?: true
    isDelivered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIRequestCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    dataOne?: true
    dataTwo?: true
    dataThree?: true
    promptText?: true
    aiResponse?: true
    isProcessed?: true
    isDelivered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIRequest to aggregate.
     */
    where?: AIRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRequests to fetch.
     */
    orderBy?: AIRequestOrderByWithRelationInput | AIRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIRequests
    **/
    _count?: true | AIRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIRequestMaxAggregateInputType
  }

  export type GetAIRequestAggregateType<T extends AIRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAIRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIRequest[P]>
      : GetScalarType<T[P], AggregateAIRequest[P]>
  }




  export type AIRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIRequestWhereInput
    orderBy?: AIRequestOrderByWithAggregationInput | AIRequestOrderByWithAggregationInput[]
    by: AIRequestScalarFieldEnum[] | AIRequestScalarFieldEnum
    having?: AIRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIRequestCountAggregateInputType | true
    _min?: AIRequestMinAggregateInputType
    _max?: AIRequestMaxAggregateInputType
  }

  export type AIRequestGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string | null
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed: boolean
    isDelivered: boolean
    createdAt: Date
    updatedAt: Date
    _count: AIRequestCountAggregateOutputType | null
    _min: AIRequestMinAggregateOutputType | null
    _max: AIRequestMaxAggregateOutputType | null
  }

  type GetAIRequestGroupByPayload<T extends AIRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AIRequestGroupByOutputType[P]>
        }
      >
    >


  export type AIRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    dataOne?: boolean
    dataTwo?: boolean
    dataThree?: boolean
    promptText?: boolean
    aiResponse?: boolean
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | AIRequest$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["aIRequest"]>

  export type AIRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    dataOne?: boolean
    dataTwo?: boolean
    dataThree?: boolean
    promptText?: boolean
    aiResponse?: boolean
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | AIRequest$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["aIRequest"]>

  export type AIRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    dataOne?: boolean
    dataTwo?: boolean
    dataThree?: boolean
    promptText?: boolean
    aiResponse?: boolean
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | AIRequest$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["aIRequest"]>

  export type AIRequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    dataOne?: boolean
    dataTwo?: boolean
    dataThree?: boolean
    promptText?: boolean
    aiResponse?: boolean
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "dataOne" | "dataTwo" | "dataThree" | "promptText" | "aiResponse" | "isProcessed" | "isDelivered" | "createdAt" | "updatedAt", ExtArgs["result"]["aIRequest"]>
  export type AIRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | AIRequest$receiverArgs<ExtArgs>
  }
  export type AIRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | AIRequest$receiverArgs<ExtArgs>
  }
  export type AIRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | AIRequest$receiverArgs<ExtArgs>
  }

  export type $AIRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIRequest"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string | null
      dataOne: string
      dataTwo: string
      dataThree: string
      promptText: string
      aiResponse: string
      isProcessed: boolean
      isDelivered: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIRequest"]>
    composites: {}
  }

  type AIRequestGetPayload<S extends boolean | null | undefined | AIRequestDefaultArgs> = $Result.GetResult<Prisma.$AIRequestPayload, S>

  type AIRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIRequestCountAggregateInputType | true
    }

  export interface AIRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIRequest'], meta: { name: 'AIRequest' } }
    /**
     * Find zero or one AIRequest that matches the filter.
     * @param {AIRequestFindUniqueArgs} args - Arguments to find a AIRequest
     * @example
     * // Get one AIRequest
     * const aIRequest = await prisma.aIRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIRequestFindUniqueArgs>(args: SelectSubset<T, AIRequestFindUniqueArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIRequestFindUniqueOrThrowArgs} args - Arguments to find a AIRequest
     * @example
     * // Get one AIRequest
     * const aIRequest = await prisma.aIRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AIRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestFindFirstArgs} args - Arguments to find a AIRequest
     * @example
     * // Get one AIRequest
     * const aIRequest = await prisma.aIRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIRequestFindFirstArgs>(args?: SelectSubset<T, AIRequestFindFirstArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestFindFirstOrThrowArgs} args - Arguments to find a AIRequest
     * @example
     * // Get one AIRequest
     * const aIRequest = await prisma.aIRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AIRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIRequests
     * const aIRequests = await prisma.aIRequest.findMany()
     * 
     * // Get first 10 AIRequests
     * const aIRequests = await prisma.aIRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIRequestWithIdOnly = await prisma.aIRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIRequestFindManyArgs>(args?: SelectSubset<T, AIRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIRequest.
     * @param {AIRequestCreateArgs} args - Arguments to create a AIRequest.
     * @example
     * // Create one AIRequest
     * const AIRequest = await prisma.aIRequest.create({
     *   data: {
     *     // ... data to create a AIRequest
     *   }
     * })
     * 
     */
    create<T extends AIRequestCreateArgs>(args: SelectSubset<T, AIRequestCreateArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIRequests.
     * @param {AIRequestCreateManyArgs} args - Arguments to create many AIRequests.
     * @example
     * // Create many AIRequests
     * const aIRequest = await prisma.aIRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIRequestCreateManyArgs>(args?: SelectSubset<T, AIRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIRequests and returns the data saved in the database.
     * @param {AIRequestCreateManyAndReturnArgs} args - Arguments to create many AIRequests.
     * @example
     * // Create many AIRequests
     * const aIRequest = await prisma.aIRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIRequests and only return the `id`
     * const aIRequestWithIdOnly = await prisma.aIRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AIRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIRequest.
     * @param {AIRequestDeleteArgs} args - Arguments to delete one AIRequest.
     * @example
     * // Delete one AIRequest
     * const AIRequest = await prisma.aIRequest.delete({
     *   where: {
     *     // ... filter to delete one AIRequest
     *   }
     * })
     * 
     */
    delete<T extends AIRequestDeleteArgs>(args: SelectSubset<T, AIRequestDeleteArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIRequest.
     * @param {AIRequestUpdateArgs} args - Arguments to update one AIRequest.
     * @example
     * // Update one AIRequest
     * const aIRequest = await prisma.aIRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIRequestUpdateArgs>(args: SelectSubset<T, AIRequestUpdateArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIRequests.
     * @param {AIRequestDeleteManyArgs} args - Arguments to filter AIRequests to delete.
     * @example
     * // Delete a few AIRequests
     * const { count } = await prisma.aIRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIRequestDeleteManyArgs>(args?: SelectSubset<T, AIRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIRequests
     * const aIRequest = await prisma.aIRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIRequestUpdateManyArgs>(args: SelectSubset<T, AIRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIRequests and returns the data updated in the database.
     * @param {AIRequestUpdateManyAndReturnArgs} args - Arguments to update many AIRequests.
     * @example
     * // Update many AIRequests
     * const aIRequest = await prisma.aIRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIRequests and only return the `id`
     * const aIRequestWithIdOnly = await prisma.aIRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AIRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIRequest.
     * @param {AIRequestUpsertArgs} args - Arguments to update or create a AIRequest.
     * @example
     * // Update or create a AIRequest
     * const aIRequest = await prisma.aIRequest.upsert({
     *   create: {
     *     // ... data to create a AIRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIRequest we want to update
     *   }
     * })
     */
    upsert<T extends AIRequestUpsertArgs>(args: SelectSubset<T, AIRequestUpsertArgs<ExtArgs>>): Prisma__AIRequestClient<$Result.GetResult<Prisma.$AIRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestCountArgs} args - Arguments to filter AIRequests to count.
     * @example
     * // Count the number of AIRequests
     * const count = await prisma.aIRequest.count({
     *   where: {
     *     // ... the filter for the AIRequests we want to count
     *   }
     * })
    **/
    count<T extends AIRequestCountArgs>(
      args?: Subset<T, AIRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIRequestAggregateArgs>(args: Subset<T, AIRequestAggregateArgs>): Prisma.PrismaPromise<GetAIRequestAggregateType<T>>

    /**
     * Group by AIRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIRequestGroupByArgs['orderBy'] }
        : { orderBy?: AIRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIRequest model
   */
  readonly fields: AIRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends AIRequest$receiverArgs<ExtArgs> = {}>(args?: Subset<T, AIRequest$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIRequest model
   */
  interface AIRequestFieldRefs {
    readonly id: FieldRef<"AIRequest", 'String'>
    readonly senderId: FieldRef<"AIRequest", 'String'>
    readonly receiverId: FieldRef<"AIRequest", 'String'>
    readonly dataOne: FieldRef<"AIRequest", 'String'>
    readonly dataTwo: FieldRef<"AIRequest", 'String'>
    readonly dataThree: FieldRef<"AIRequest", 'String'>
    readonly promptText: FieldRef<"AIRequest", 'String'>
    readonly aiResponse: FieldRef<"AIRequest", 'String'>
    readonly isProcessed: FieldRef<"AIRequest", 'Boolean'>
    readonly isDelivered: FieldRef<"AIRequest", 'Boolean'>
    readonly createdAt: FieldRef<"AIRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AIRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIRequest findUnique
   */
  export type AIRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * Filter, which AIRequest to fetch.
     */
    where: AIRequestWhereUniqueInput
  }

  /**
   * AIRequest findUniqueOrThrow
   */
  export type AIRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * Filter, which AIRequest to fetch.
     */
    where: AIRequestWhereUniqueInput
  }

  /**
   * AIRequest findFirst
   */
  export type AIRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * Filter, which AIRequest to fetch.
     */
    where?: AIRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRequests to fetch.
     */
    orderBy?: AIRequestOrderByWithRelationInput | AIRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIRequests.
     */
    cursor?: AIRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRequests.
     */
    distinct?: AIRequestScalarFieldEnum | AIRequestScalarFieldEnum[]
  }

  /**
   * AIRequest findFirstOrThrow
   */
  export type AIRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * Filter, which AIRequest to fetch.
     */
    where?: AIRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRequests to fetch.
     */
    orderBy?: AIRequestOrderByWithRelationInput | AIRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIRequests.
     */
    cursor?: AIRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRequests.
     */
    distinct?: AIRequestScalarFieldEnum | AIRequestScalarFieldEnum[]
  }

  /**
   * AIRequest findMany
   */
  export type AIRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * Filter, which AIRequests to fetch.
     */
    where?: AIRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRequests to fetch.
     */
    orderBy?: AIRequestOrderByWithRelationInput | AIRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIRequests.
     */
    cursor?: AIRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRequests.
     */
    skip?: number
    distinct?: AIRequestScalarFieldEnum | AIRequestScalarFieldEnum[]
  }

  /**
   * AIRequest create
   */
  export type AIRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AIRequest.
     */
    data: XOR<AIRequestCreateInput, AIRequestUncheckedCreateInput>
  }

  /**
   * AIRequest createMany
   */
  export type AIRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIRequests.
     */
    data: AIRequestCreateManyInput | AIRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIRequest createManyAndReturn
   */
  export type AIRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AIRequests.
     */
    data: AIRequestCreateManyInput | AIRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIRequest update
   */
  export type AIRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AIRequest.
     */
    data: XOR<AIRequestUpdateInput, AIRequestUncheckedUpdateInput>
    /**
     * Choose, which AIRequest to update.
     */
    where: AIRequestWhereUniqueInput
  }

  /**
   * AIRequest updateMany
   */
  export type AIRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIRequests.
     */
    data: XOR<AIRequestUpdateManyMutationInput, AIRequestUncheckedUpdateManyInput>
    /**
     * Filter which AIRequests to update
     */
    where?: AIRequestWhereInput
    /**
     * Limit how many AIRequests to update.
     */
    limit?: number
  }

  /**
   * AIRequest updateManyAndReturn
   */
  export type AIRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * The data used to update AIRequests.
     */
    data: XOR<AIRequestUpdateManyMutationInput, AIRequestUncheckedUpdateManyInput>
    /**
     * Filter which AIRequests to update
     */
    where?: AIRequestWhereInput
    /**
     * Limit how many AIRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIRequest upsert
   */
  export type AIRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AIRequest to update in case it exists.
     */
    where: AIRequestWhereUniqueInput
    /**
     * In case the AIRequest found by the `where` argument doesn't exist, create a new AIRequest with this data.
     */
    create: XOR<AIRequestCreateInput, AIRequestUncheckedCreateInput>
    /**
     * In case the AIRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIRequestUpdateInput, AIRequestUncheckedUpdateInput>
  }

  /**
   * AIRequest delete
   */
  export type AIRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
    /**
     * Filter which AIRequest to delete.
     */
    where: AIRequestWhereUniqueInput
  }

  /**
   * AIRequest deleteMany
   */
  export type AIRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIRequests to delete
     */
    where?: AIRequestWhereInput
    /**
     * Limit how many AIRequests to delete.
     */
    limit?: number
  }

  /**
   * AIRequest.receiver
   */
  export type AIRequest$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AIRequest without action
   */
  export type AIRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRequest
     */
    select?: AIRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRequest
     */
    omit?: AIRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRequestInclude<ExtArgs> | null
  }


  /**
   * Model PatientInfo
   */

  export type AggregatePatientInfo = {
    _count: PatientInfoCountAggregateOutputType | null
    _min: PatientInfoMinAggregateOutputType | null
    _max: PatientInfoMaxAggregateOutputType | null
  }

  export type PatientInfoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    address: string | null
    medicalHistory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientInfoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    address: string | null
    medicalHistory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientInfoCountAggregateOutputType = {
    id: number
    userId: number
    dateOfBirth: number
    gender: number
    phoneNumber: number
    address: number
    medicalHistory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientInfoMinAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    address?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    address?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientInfoCountAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    address?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientInfo to aggregate.
     */
    where?: PatientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInfos to fetch.
     */
    orderBy?: PatientInfoOrderByWithRelationInput | PatientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientInfos
    **/
    _count?: true | PatientInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientInfoMaxAggregateInputType
  }

  export type GetPatientInfoAggregateType<T extends PatientInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientInfo[P]>
      : GetScalarType<T[P], AggregatePatientInfo[P]>
  }




  export type PatientInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientInfoWhereInput
    orderBy?: PatientInfoOrderByWithAggregationInput | PatientInfoOrderByWithAggregationInput[]
    by: PatientInfoScalarFieldEnum[] | PatientInfoScalarFieldEnum
    having?: PatientInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientInfoCountAggregateInputType | true
    _min?: PatientInfoMinAggregateInputType
    _max?: PatientInfoMaxAggregateInputType
  }

  export type PatientInfoGroupByOutputType = {
    id: string
    userId: string
    dateOfBirth: Date
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    medicalHistory: string
    createdAt: Date
    updatedAt: Date
    _count: PatientInfoCountAggregateOutputType | null
    _min: PatientInfoMinAggregateOutputType | null
    _max: PatientInfoMaxAggregateOutputType | null
  }

  type GetPatientInfoGroupByPayload<T extends PatientInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PatientInfoGroupByOutputType[P]>
        }
      >
    >


  export type PatientInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    address?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientInfo"]>

  export type PatientInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    address?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientInfo"]>

  export type PatientInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    address?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientInfo"]>

  export type PatientInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    address?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateOfBirth" | "gender" | "phoneNumber" | "address" | "medicalHistory" | "createdAt" | "updatedAt", ExtArgs["result"]["patientInfo"]>
  export type PatientInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dateOfBirth: Date
      gender: $Enums.Gender
      phoneNumber: string
      address: string
      medicalHistory: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientInfo"]>
    composites: {}
  }

  type PatientInfoGetPayload<S extends boolean | null | undefined | PatientInfoDefaultArgs> = $Result.GetResult<Prisma.$PatientInfoPayload, S>

  type PatientInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientInfoCountAggregateInputType | true
    }

  export interface PatientInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientInfo'], meta: { name: 'PatientInfo' } }
    /**
     * Find zero or one PatientInfo that matches the filter.
     * @param {PatientInfoFindUniqueArgs} args - Arguments to find a PatientInfo
     * @example
     * // Get one PatientInfo
     * const patientInfo = await prisma.patientInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientInfoFindUniqueArgs>(args: SelectSubset<T, PatientInfoFindUniqueArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientInfoFindUniqueOrThrowArgs} args - Arguments to find a PatientInfo
     * @example
     * // Get one PatientInfo
     * const patientInfo = await prisma.patientInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoFindFirstArgs} args - Arguments to find a PatientInfo
     * @example
     * // Get one PatientInfo
     * const patientInfo = await prisma.patientInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientInfoFindFirstArgs>(args?: SelectSubset<T, PatientInfoFindFirstArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoFindFirstOrThrowArgs} args - Arguments to find a PatientInfo
     * @example
     * // Get one PatientInfo
     * const patientInfo = await prisma.patientInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientInfos
     * const patientInfos = await prisma.patientInfo.findMany()
     * 
     * // Get first 10 PatientInfos
     * const patientInfos = await prisma.patientInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientInfoWithIdOnly = await prisma.patientInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientInfoFindManyArgs>(args?: SelectSubset<T, PatientInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientInfo.
     * @param {PatientInfoCreateArgs} args - Arguments to create a PatientInfo.
     * @example
     * // Create one PatientInfo
     * const PatientInfo = await prisma.patientInfo.create({
     *   data: {
     *     // ... data to create a PatientInfo
     *   }
     * })
     * 
     */
    create<T extends PatientInfoCreateArgs>(args: SelectSubset<T, PatientInfoCreateArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientInfos.
     * @param {PatientInfoCreateManyArgs} args - Arguments to create many PatientInfos.
     * @example
     * // Create many PatientInfos
     * const patientInfo = await prisma.patientInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientInfoCreateManyArgs>(args?: SelectSubset<T, PatientInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientInfos and returns the data saved in the database.
     * @param {PatientInfoCreateManyAndReturnArgs} args - Arguments to create many PatientInfos.
     * @example
     * // Create many PatientInfos
     * const patientInfo = await prisma.patientInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientInfos and only return the `id`
     * const patientInfoWithIdOnly = await prisma.patientInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientInfo.
     * @param {PatientInfoDeleteArgs} args - Arguments to delete one PatientInfo.
     * @example
     * // Delete one PatientInfo
     * const PatientInfo = await prisma.patientInfo.delete({
     *   where: {
     *     // ... filter to delete one PatientInfo
     *   }
     * })
     * 
     */
    delete<T extends PatientInfoDeleteArgs>(args: SelectSubset<T, PatientInfoDeleteArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientInfo.
     * @param {PatientInfoUpdateArgs} args - Arguments to update one PatientInfo.
     * @example
     * // Update one PatientInfo
     * const patientInfo = await prisma.patientInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientInfoUpdateArgs>(args: SelectSubset<T, PatientInfoUpdateArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientInfos.
     * @param {PatientInfoDeleteManyArgs} args - Arguments to filter PatientInfos to delete.
     * @example
     * // Delete a few PatientInfos
     * const { count } = await prisma.patientInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientInfoDeleteManyArgs>(args?: SelectSubset<T, PatientInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientInfos
     * const patientInfo = await prisma.patientInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientInfoUpdateManyArgs>(args: SelectSubset<T, PatientInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientInfos and returns the data updated in the database.
     * @param {PatientInfoUpdateManyAndReturnArgs} args - Arguments to update many PatientInfos.
     * @example
     * // Update many PatientInfos
     * const patientInfo = await prisma.patientInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientInfos and only return the `id`
     * const patientInfoWithIdOnly = await prisma.patientInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientInfo.
     * @param {PatientInfoUpsertArgs} args - Arguments to update or create a PatientInfo.
     * @example
     * // Update or create a PatientInfo
     * const patientInfo = await prisma.patientInfo.upsert({
     *   create: {
     *     // ... data to create a PatientInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientInfo we want to update
     *   }
     * })
     */
    upsert<T extends PatientInfoUpsertArgs>(args: SelectSubset<T, PatientInfoUpsertArgs<ExtArgs>>): Prisma__PatientInfoClient<$Result.GetResult<Prisma.$PatientInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoCountArgs} args - Arguments to filter PatientInfos to count.
     * @example
     * // Count the number of PatientInfos
     * const count = await prisma.patientInfo.count({
     *   where: {
     *     // ... the filter for the PatientInfos we want to count
     *   }
     * })
    **/
    count<T extends PatientInfoCountArgs>(
      args?: Subset<T, PatientInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientInfoAggregateArgs>(args: Subset<T, PatientInfoAggregateArgs>): Prisma.PrismaPromise<GetPatientInfoAggregateType<T>>

    /**
     * Group by PatientInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientInfoGroupByArgs['orderBy'] }
        : { orderBy?: PatientInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientInfo model
   */
  readonly fields: PatientInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientInfo model
   */
  interface PatientInfoFieldRefs {
    readonly id: FieldRef<"PatientInfo", 'String'>
    readonly userId: FieldRef<"PatientInfo", 'String'>
    readonly dateOfBirth: FieldRef<"PatientInfo", 'DateTime'>
    readonly gender: FieldRef<"PatientInfo", 'Gender'>
    readonly phoneNumber: FieldRef<"PatientInfo", 'String'>
    readonly address: FieldRef<"PatientInfo", 'String'>
    readonly medicalHistory: FieldRef<"PatientInfo", 'String'>
    readonly createdAt: FieldRef<"PatientInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientInfo findUnique
   */
  export type PatientInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * Filter, which PatientInfo to fetch.
     */
    where: PatientInfoWhereUniqueInput
  }

  /**
   * PatientInfo findUniqueOrThrow
   */
  export type PatientInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * Filter, which PatientInfo to fetch.
     */
    where: PatientInfoWhereUniqueInput
  }

  /**
   * PatientInfo findFirst
   */
  export type PatientInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * Filter, which PatientInfo to fetch.
     */
    where?: PatientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInfos to fetch.
     */
    orderBy?: PatientInfoOrderByWithRelationInput | PatientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientInfos.
     */
    cursor?: PatientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientInfos.
     */
    distinct?: PatientInfoScalarFieldEnum | PatientInfoScalarFieldEnum[]
  }

  /**
   * PatientInfo findFirstOrThrow
   */
  export type PatientInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * Filter, which PatientInfo to fetch.
     */
    where?: PatientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInfos to fetch.
     */
    orderBy?: PatientInfoOrderByWithRelationInput | PatientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientInfos.
     */
    cursor?: PatientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientInfos.
     */
    distinct?: PatientInfoScalarFieldEnum | PatientInfoScalarFieldEnum[]
  }

  /**
   * PatientInfo findMany
   */
  export type PatientInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * Filter, which PatientInfos to fetch.
     */
    where?: PatientInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientInfos to fetch.
     */
    orderBy?: PatientInfoOrderByWithRelationInput | PatientInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientInfos.
     */
    cursor?: PatientInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientInfos.
     */
    skip?: number
    distinct?: PatientInfoScalarFieldEnum | PatientInfoScalarFieldEnum[]
  }

  /**
   * PatientInfo create
   */
  export type PatientInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientInfo.
     */
    data: XOR<PatientInfoCreateInput, PatientInfoUncheckedCreateInput>
  }

  /**
   * PatientInfo createMany
   */
  export type PatientInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientInfos.
     */
    data: PatientInfoCreateManyInput | PatientInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientInfo createManyAndReturn
   */
  export type PatientInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PatientInfos.
     */
    data: PatientInfoCreateManyInput | PatientInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientInfo update
   */
  export type PatientInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientInfo.
     */
    data: XOR<PatientInfoUpdateInput, PatientInfoUncheckedUpdateInput>
    /**
     * Choose, which PatientInfo to update.
     */
    where: PatientInfoWhereUniqueInput
  }

  /**
   * PatientInfo updateMany
   */
  export type PatientInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientInfos.
     */
    data: XOR<PatientInfoUpdateManyMutationInput, PatientInfoUncheckedUpdateManyInput>
    /**
     * Filter which PatientInfos to update
     */
    where?: PatientInfoWhereInput
    /**
     * Limit how many PatientInfos to update.
     */
    limit?: number
  }

  /**
   * PatientInfo updateManyAndReturn
   */
  export type PatientInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * The data used to update PatientInfos.
     */
    data: XOR<PatientInfoUpdateManyMutationInput, PatientInfoUncheckedUpdateManyInput>
    /**
     * Filter which PatientInfos to update
     */
    where?: PatientInfoWhereInput
    /**
     * Limit how many PatientInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientInfo upsert
   */
  export type PatientInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientInfo to update in case it exists.
     */
    where: PatientInfoWhereUniqueInput
    /**
     * In case the PatientInfo found by the `where` argument doesn't exist, create a new PatientInfo with this data.
     */
    create: XOR<PatientInfoCreateInput, PatientInfoUncheckedCreateInput>
    /**
     * In case the PatientInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientInfoUpdateInput, PatientInfoUncheckedUpdateInput>
  }

  /**
   * PatientInfo delete
   */
  export type PatientInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
    /**
     * Filter which PatientInfo to delete.
     */
    where: PatientInfoWhereUniqueInput
  }

  /**
   * PatientInfo deleteMany
   */
  export type PatientInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientInfos to delete
     */
    where?: PatientInfoWhereInput
    /**
     * Limit how many PatientInfos to delete.
     */
    limit?: number
  }

  /**
   * PatientInfo without action
   */
  export type PatientInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientInfo
     */
    select?: PatientInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientInfo
     */
    omit?: PatientInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInfoInclude<ExtArgs> | null
  }


  /**
   * Model DoctorInfo
   */

  export type AggregateDoctorInfo = {
    _count: DoctorInfoCountAggregateOutputType | null
    _avg: DoctorInfoAvgAggregateOutputType | null
    _sum: DoctorInfoSumAggregateOutputType | null
    _min: DoctorInfoMinAggregateOutputType | null
    _max: DoctorInfoMaxAggregateOutputType | null
  }

  export type DoctorInfoAvgAggregateOutputType = {
    experience: number | null
    consultationFee: Decimal | null
  }

  export type DoctorInfoSumAggregateOutputType = {
    experience: number | null
    consultationFee: Decimal | null
  }

  export type DoctorInfoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    specialization: string | null
    licenseNumber: string | null
    phoneNumber: string | null
    address: string | null
    experience: number | null
    bio: string | null
    consultationFee: Decimal | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorInfoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    specialization: string | null
    licenseNumber: string | null
    phoneNumber: string | null
    address: string | null
    experience: number | null
    bio: string | null
    consultationFee: Decimal | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorInfoCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    specialization: number
    licenseNumber: number
    phoneNumber: number
    address: number
    experience: number
    bio: number
    consultationFee: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorInfoAvgAggregateInputType = {
    experience?: true
    consultationFee?: true
  }

  export type DoctorInfoSumAggregateInputType = {
    experience?: true
    consultationFee?: true
  }

  export type DoctorInfoMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    specialization?: true
    licenseNumber?: true
    phoneNumber?: true
    address?: true
    experience?: true
    bio?: true
    consultationFee?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    specialization?: true
    licenseNumber?: true
    phoneNumber?: true
    address?: true
    experience?: true
    bio?: true
    consultationFee?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorInfoCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    specialization?: true
    licenseNumber?: true
    phoneNumber?: true
    address?: true
    experience?: true
    bio?: true
    consultationFee?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorInfo to aggregate.
     */
    where?: DoctorInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorInfos to fetch.
     */
    orderBy?: DoctorInfoOrderByWithRelationInput | DoctorInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorInfos
    **/
    _count?: true | DoctorInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorInfoMaxAggregateInputType
  }

  export type GetDoctorInfoAggregateType<T extends DoctorInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorInfo[P]>
      : GetScalarType<T[P], AggregateDoctorInfo[P]>
  }




  export type DoctorInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorInfoWhereInput
    orderBy?: DoctorInfoOrderByWithAggregationInput | DoctorInfoOrderByWithAggregationInput[]
    by: DoctorInfoScalarFieldEnum[] | DoctorInfoScalarFieldEnum
    having?: DoctorInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorInfoCountAggregateInputType | true
    _avg?: DoctorInfoAvgAggregateInputType
    _sum?: DoctorInfoSumAggregateInputType
    _min?: DoctorInfoMinAggregateInputType
    _max?: DoctorInfoMaxAggregateInputType
  }

  export type DoctorInfoGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    specialization: string
    licenseNumber: string
    phoneNumber: string
    address: string
    experience: number
    bio: string | null
    consultationFee: Decimal | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: DoctorInfoCountAggregateOutputType | null
    _avg: DoctorInfoAvgAggregateOutputType | null
    _sum: DoctorInfoSumAggregateOutputType | null
    _min: DoctorInfoMinAggregateOutputType | null
    _max: DoctorInfoMaxAggregateOutputType | null
  }

  type GetDoctorInfoGroupByPayload<T extends DoctorInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorInfoGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorInfoGroupByOutputType[P]>
        }
      >
    >


  export type DoctorInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    phoneNumber?: boolean
    address?: boolean
    experience?: boolean
    bio?: boolean
    consultationFee?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorInfo"]>

  export type DoctorInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    phoneNumber?: boolean
    address?: boolean
    experience?: boolean
    bio?: boolean
    consultationFee?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorInfo"]>

  export type DoctorInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    phoneNumber?: boolean
    address?: boolean
    experience?: boolean
    bio?: boolean
    consultationFee?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorInfo"]>

  export type DoctorInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    phoneNumber?: boolean
    address?: boolean
    experience?: boolean
    bio?: boolean
    consultationFee?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "specialization" | "licenseNumber" | "phoneNumber" | "address" | "experience" | "bio" | "consultationFee" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorInfo"]>
  export type DoctorInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      specialization: string
      licenseNumber: string
      phoneNumber: string
      address: string
      experience: number
      bio: string | null
      consultationFee: Prisma.Decimal | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctorInfo"]>
    composites: {}
  }

  type DoctorInfoGetPayload<S extends boolean | null | undefined | DoctorInfoDefaultArgs> = $Result.GetResult<Prisma.$DoctorInfoPayload, S>

  type DoctorInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorInfoCountAggregateInputType | true
    }

  export interface DoctorInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorInfo'], meta: { name: 'DoctorInfo' } }
    /**
     * Find zero or one DoctorInfo that matches the filter.
     * @param {DoctorInfoFindUniqueArgs} args - Arguments to find a DoctorInfo
     * @example
     * // Get one DoctorInfo
     * const doctorInfo = await prisma.doctorInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorInfoFindUniqueArgs>(args: SelectSubset<T, DoctorInfoFindUniqueArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorInfoFindUniqueOrThrowArgs} args - Arguments to find a DoctorInfo
     * @example
     * // Get one DoctorInfo
     * const doctorInfo = await prisma.doctorInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoFindFirstArgs} args - Arguments to find a DoctorInfo
     * @example
     * // Get one DoctorInfo
     * const doctorInfo = await prisma.doctorInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorInfoFindFirstArgs>(args?: SelectSubset<T, DoctorInfoFindFirstArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoFindFirstOrThrowArgs} args - Arguments to find a DoctorInfo
     * @example
     * // Get one DoctorInfo
     * const doctorInfo = await prisma.doctorInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorInfos
     * const doctorInfos = await prisma.doctorInfo.findMany()
     * 
     * // Get first 10 DoctorInfos
     * const doctorInfos = await prisma.doctorInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorInfoWithIdOnly = await prisma.doctorInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorInfoFindManyArgs>(args?: SelectSubset<T, DoctorInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorInfo.
     * @param {DoctorInfoCreateArgs} args - Arguments to create a DoctorInfo.
     * @example
     * // Create one DoctorInfo
     * const DoctorInfo = await prisma.doctorInfo.create({
     *   data: {
     *     // ... data to create a DoctorInfo
     *   }
     * })
     * 
     */
    create<T extends DoctorInfoCreateArgs>(args: SelectSubset<T, DoctorInfoCreateArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorInfos.
     * @param {DoctorInfoCreateManyArgs} args - Arguments to create many DoctorInfos.
     * @example
     * // Create many DoctorInfos
     * const doctorInfo = await prisma.doctorInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorInfoCreateManyArgs>(args?: SelectSubset<T, DoctorInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorInfos and returns the data saved in the database.
     * @param {DoctorInfoCreateManyAndReturnArgs} args - Arguments to create many DoctorInfos.
     * @example
     * // Create many DoctorInfos
     * const doctorInfo = await prisma.doctorInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorInfos and only return the `id`
     * const doctorInfoWithIdOnly = await prisma.doctorInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorInfo.
     * @param {DoctorInfoDeleteArgs} args - Arguments to delete one DoctorInfo.
     * @example
     * // Delete one DoctorInfo
     * const DoctorInfo = await prisma.doctorInfo.delete({
     *   where: {
     *     // ... filter to delete one DoctorInfo
     *   }
     * })
     * 
     */
    delete<T extends DoctorInfoDeleteArgs>(args: SelectSubset<T, DoctorInfoDeleteArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorInfo.
     * @param {DoctorInfoUpdateArgs} args - Arguments to update one DoctorInfo.
     * @example
     * // Update one DoctorInfo
     * const doctorInfo = await prisma.doctorInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorInfoUpdateArgs>(args: SelectSubset<T, DoctorInfoUpdateArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorInfos.
     * @param {DoctorInfoDeleteManyArgs} args - Arguments to filter DoctorInfos to delete.
     * @example
     * // Delete a few DoctorInfos
     * const { count } = await prisma.doctorInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorInfoDeleteManyArgs>(args?: SelectSubset<T, DoctorInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorInfos
     * const doctorInfo = await prisma.doctorInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorInfoUpdateManyArgs>(args: SelectSubset<T, DoctorInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorInfos and returns the data updated in the database.
     * @param {DoctorInfoUpdateManyAndReturnArgs} args - Arguments to update many DoctorInfos.
     * @example
     * // Update many DoctorInfos
     * const doctorInfo = await prisma.doctorInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorInfos and only return the `id`
     * const doctorInfoWithIdOnly = await prisma.doctorInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorInfo.
     * @param {DoctorInfoUpsertArgs} args - Arguments to update or create a DoctorInfo.
     * @example
     * // Update or create a DoctorInfo
     * const doctorInfo = await prisma.doctorInfo.upsert({
     *   create: {
     *     // ... data to create a DoctorInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorInfo we want to update
     *   }
     * })
     */
    upsert<T extends DoctorInfoUpsertArgs>(args: SelectSubset<T, DoctorInfoUpsertArgs<ExtArgs>>): Prisma__DoctorInfoClient<$Result.GetResult<Prisma.$DoctorInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoCountArgs} args - Arguments to filter DoctorInfos to count.
     * @example
     * // Count the number of DoctorInfos
     * const count = await prisma.doctorInfo.count({
     *   where: {
     *     // ... the filter for the DoctorInfos we want to count
     *   }
     * })
    **/
    count<T extends DoctorInfoCountArgs>(
      args?: Subset<T, DoctorInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorInfoAggregateArgs>(args: Subset<T, DoctorInfoAggregateArgs>): Prisma.PrismaPromise<GetDoctorInfoAggregateType<T>>

    /**
     * Group by DoctorInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorInfoGroupByArgs['orderBy'] }
        : { orderBy?: DoctorInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorInfo model
   */
  readonly fields: DoctorInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorInfo model
   */
  interface DoctorInfoFieldRefs {
    readonly id: FieldRef<"DoctorInfo", 'String'>
    readonly userId: FieldRef<"DoctorInfo", 'String'>
    readonly fullName: FieldRef<"DoctorInfo", 'String'>
    readonly specialization: FieldRef<"DoctorInfo", 'String'>
    readonly licenseNumber: FieldRef<"DoctorInfo", 'String'>
    readonly phoneNumber: FieldRef<"DoctorInfo", 'String'>
    readonly address: FieldRef<"DoctorInfo", 'String'>
    readonly experience: FieldRef<"DoctorInfo", 'Int'>
    readonly bio: FieldRef<"DoctorInfo", 'String'>
    readonly consultationFee: FieldRef<"DoctorInfo", 'Decimal'>
    readonly isVerified: FieldRef<"DoctorInfo", 'Boolean'>
    readonly createdAt: FieldRef<"DoctorInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorInfo findUnique
   */
  export type DoctorInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * Filter, which DoctorInfo to fetch.
     */
    where: DoctorInfoWhereUniqueInput
  }

  /**
   * DoctorInfo findUniqueOrThrow
   */
  export type DoctorInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * Filter, which DoctorInfo to fetch.
     */
    where: DoctorInfoWhereUniqueInput
  }

  /**
   * DoctorInfo findFirst
   */
  export type DoctorInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * Filter, which DoctorInfo to fetch.
     */
    where?: DoctorInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorInfos to fetch.
     */
    orderBy?: DoctorInfoOrderByWithRelationInput | DoctorInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorInfos.
     */
    cursor?: DoctorInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorInfos.
     */
    distinct?: DoctorInfoScalarFieldEnum | DoctorInfoScalarFieldEnum[]
  }

  /**
   * DoctorInfo findFirstOrThrow
   */
  export type DoctorInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * Filter, which DoctorInfo to fetch.
     */
    where?: DoctorInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorInfos to fetch.
     */
    orderBy?: DoctorInfoOrderByWithRelationInput | DoctorInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorInfos.
     */
    cursor?: DoctorInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorInfos.
     */
    distinct?: DoctorInfoScalarFieldEnum | DoctorInfoScalarFieldEnum[]
  }

  /**
   * DoctorInfo findMany
   */
  export type DoctorInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * Filter, which DoctorInfos to fetch.
     */
    where?: DoctorInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorInfos to fetch.
     */
    orderBy?: DoctorInfoOrderByWithRelationInput | DoctorInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorInfos.
     */
    cursor?: DoctorInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorInfos.
     */
    skip?: number
    distinct?: DoctorInfoScalarFieldEnum | DoctorInfoScalarFieldEnum[]
  }

  /**
   * DoctorInfo create
   */
  export type DoctorInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorInfo.
     */
    data: XOR<DoctorInfoCreateInput, DoctorInfoUncheckedCreateInput>
  }

  /**
   * DoctorInfo createMany
   */
  export type DoctorInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorInfos.
     */
    data: DoctorInfoCreateManyInput | DoctorInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorInfo createManyAndReturn
   */
  export type DoctorInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorInfos.
     */
    data: DoctorInfoCreateManyInput | DoctorInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorInfo update
   */
  export type DoctorInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorInfo.
     */
    data: XOR<DoctorInfoUpdateInput, DoctorInfoUncheckedUpdateInput>
    /**
     * Choose, which DoctorInfo to update.
     */
    where: DoctorInfoWhereUniqueInput
  }

  /**
   * DoctorInfo updateMany
   */
  export type DoctorInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorInfos.
     */
    data: XOR<DoctorInfoUpdateManyMutationInput, DoctorInfoUncheckedUpdateManyInput>
    /**
     * Filter which DoctorInfos to update
     */
    where?: DoctorInfoWhereInput
    /**
     * Limit how many DoctorInfos to update.
     */
    limit?: number
  }

  /**
   * DoctorInfo updateManyAndReturn
   */
  export type DoctorInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * The data used to update DoctorInfos.
     */
    data: XOR<DoctorInfoUpdateManyMutationInput, DoctorInfoUncheckedUpdateManyInput>
    /**
     * Filter which DoctorInfos to update
     */
    where?: DoctorInfoWhereInput
    /**
     * Limit how many DoctorInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorInfo upsert
   */
  export type DoctorInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorInfo to update in case it exists.
     */
    where: DoctorInfoWhereUniqueInput
    /**
     * In case the DoctorInfo found by the `where` argument doesn't exist, create a new DoctorInfo with this data.
     */
    create: XOR<DoctorInfoCreateInput, DoctorInfoUncheckedCreateInput>
    /**
     * In case the DoctorInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorInfoUpdateInput, DoctorInfoUncheckedUpdateInput>
  }

  /**
   * DoctorInfo delete
   */
  export type DoctorInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
    /**
     * Filter which DoctorInfo to delete.
     */
    where: DoctorInfoWhereUniqueInput
  }

  /**
   * DoctorInfo deleteMany
   */
  export type DoctorInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorInfos to delete
     */
    where?: DoctorInfoWhereInput
    /**
     * Limit how many DoctorInfos to delete.
     */
    limit?: number
  }

  /**
   * DoctorInfo without action
   */
  export type DoctorInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorInfo
     */
    select?: DoctorInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorInfo
     */
    omit?: DoctorInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInfoInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    data: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    data?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    type: string | null
    data: JsonValue | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "data" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      type: string | null
      data: Prisma.JsonValue | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    accountType: 'accountType',
    userName: 'userName',
    email: 'email',
    password: 'password',
    deviceId: 'deviceId',
    role: 'role',
    fcmToken: 'fcmToken',
    isActive: 'isActive',
    lastSeen: 'lastSeen',
    visitCount: 'visitCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    type: 'type',
    content: 'content',
    metadata: 'metadata',
    isDelivered: 'isDelivered',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const AIRequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    dataOne: 'dataOne',
    dataTwo: 'dataTwo',
    dataThree: 'dataThree',
    promptText: 'promptText',
    aiResponse: 'aiResponse',
    isProcessed: 'isProcessed',
    isDelivered: 'isDelivered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIRequestScalarFieldEnum = (typeof AIRequestScalarFieldEnum)[keyof typeof AIRequestScalarFieldEnum]


  export const PatientInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    address: 'address',
    medicalHistory: 'medicalHistory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientInfoScalarFieldEnum = (typeof PatientInfoScalarFieldEnum)[keyof typeof PatientInfoScalarFieldEnum]


  export const DoctorInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    specialization: 'specialization',
    licenseNumber: 'licenseNumber',
    phoneNumber: 'phoneNumber',
    address: 'address',
    experience: 'experience',
    bio: 'bio',
    consultationFee: 'consultationFee',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorInfoScalarFieldEnum = (typeof DoctorInfoScalarFieldEnum)[keyof typeof DoctorInfoScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    data: 'data',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    accountType?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    deviceId?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    fcmToken?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeFilter<"User"> | Date | string
    visitCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notifications?: NotificationListRelationFilter
    patientInfo?: XOR<PatientInfoNullableScalarRelationFilter, PatientInfoWhereInput> | null
    doctorInfo?: XOR<DoctorInfoNullableScalarRelationFilter, DoctorInfoWhereInput> | null
    chatMessages?: ChatMessageListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
    sentAIRequests?: AIRequestListRelationFilter
    receivedAIData?: AIRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    accountType?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    deviceId?: SortOrder
    role?: SortOrder
    fcmToken?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
    patientInfo?: PatientInfoOrderByWithRelationInput
    doctorInfo?: DoctorInfoOrderByWithRelationInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    chatSessions?: ChatSessionOrderByRelationAggregateInput
    sentAIRequests?: AIRequestOrderByRelationAggregateInput
    receivedAIData?: AIRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    deviceId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    accountType?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    fcmToken?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeFilter<"User"> | Date | string
    visitCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notifications?: NotificationListRelationFilter
    patientInfo?: XOR<PatientInfoNullableScalarRelationFilter, PatientInfoWhereInput> | null
    doctorInfo?: XOR<DoctorInfoNullableScalarRelationFilter, DoctorInfoWhereInput> | null
    chatMessages?: ChatMessageListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
    sentAIRequests?: AIRequestListRelationFilter
    receivedAIData?: AIRequestListRelationFilter
  }, "id" | "userName" | "email" | "deviceId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    accountType?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    deviceId?: SortOrder
    role?: SortOrder
    fcmToken?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    accountType?: EnumAccountTypeWithAggregatesFilter<"User"> | $Enums.AccountType
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    deviceId?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    fcmToken?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastSeen?: DateTimeWithAggregatesFilter<"User"> | Date | string
    visitCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    isActive?: BoolFilter<"ChatSession"> | boolean
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    isActive?: BoolFilter<"ChatSession"> | boolean
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    title?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    isActive?: BoolWithAggregatesFilter<"ChatSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    type?: EnumMessageTypeFilter<"ChatMessage"> | $Enums.MessageType
    content?: StringFilter<"ChatMessage"> | string
    metadata?: JsonNullableFilter<"ChatMessage">
    isDelivered?: BoolFilter<"ChatMessage"> | boolean
    isRead?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isDelivered?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    session?: ChatSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    type?: EnumMessageTypeFilter<"ChatMessage"> | $Enums.MessageType
    content?: StringFilter<"ChatMessage"> | string
    metadata?: JsonNullableFilter<"ChatMessage">
    isDelivered?: BoolFilter<"ChatMessage"> | boolean
    isRead?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isDelivered?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"ChatMessage"> | $Enums.MessageType
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    metadata?: JsonNullableWithAggregatesFilter<"ChatMessage">
    isDelivered?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isRead?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type AIRequestWhereInput = {
    AND?: AIRequestWhereInput | AIRequestWhereInput[]
    OR?: AIRequestWhereInput[]
    NOT?: AIRequestWhereInput | AIRequestWhereInput[]
    id?: StringFilter<"AIRequest"> | string
    senderId?: StringFilter<"AIRequest"> | string
    receiverId?: StringNullableFilter<"AIRequest"> | string | null
    dataOne?: StringFilter<"AIRequest"> | string
    dataTwo?: StringFilter<"AIRequest"> | string
    dataThree?: StringFilter<"AIRequest"> | string
    promptText?: StringFilter<"AIRequest"> | string
    aiResponse?: StringFilter<"AIRequest"> | string
    isProcessed?: BoolFilter<"AIRequest"> | boolean
    isDelivered?: BoolFilter<"AIRequest"> | boolean
    createdAt?: DateTimeFilter<"AIRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AIRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AIRequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    dataOne?: SortOrder
    dataTwo?: SortOrder
    dataThree?: SortOrder
    promptText?: SortOrder
    aiResponse?: SortOrder
    isProcessed?: SortOrder
    isDelivered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type AIRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIRequestWhereInput | AIRequestWhereInput[]
    OR?: AIRequestWhereInput[]
    NOT?: AIRequestWhereInput | AIRequestWhereInput[]
    senderId?: StringFilter<"AIRequest"> | string
    receiverId?: StringNullableFilter<"AIRequest"> | string | null
    dataOne?: StringFilter<"AIRequest"> | string
    dataTwo?: StringFilter<"AIRequest"> | string
    dataThree?: StringFilter<"AIRequest"> | string
    promptText?: StringFilter<"AIRequest"> | string
    aiResponse?: StringFilter<"AIRequest"> | string
    isProcessed?: BoolFilter<"AIRequest"> | boolean
    isDelivered?: BoolFilter<"AIRequest"> | boolean
    createdAt?: DateTimeFilter<"AIRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AIRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AIRequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    dataOne?: SortOrder
    dataTwo?: SortOrder
    dataThree?: SortOrder
    promptText?: SortOrder
    aiResponse?: SortOrder
    isProcessed?: SortOrder
    isDelivered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIRequestCountOrderByAggregateInput
    _max?: AIRequestMaxOrderByAggregateInput
    _min?: AIRequestMinOrderByAggregateInput
  }

  export type AIRequestScalarWhereWithAggregatesInput = {
    AND?: AIRequestScalarWhereWithAggregatesInput | AIRequestScalarWhereWithAggregatesInput[]
    OR?: AIRequestScalarWhereWithAggregatesInput[]
    NOT?: AIRequestScalarWhereWithAggregatesInput | AIRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIRequest"> | string
    senderId?: StringWithAggregatesFilter<"AIRequest"> | string
    receiverId?: StringNullableWithAggregatesFilter<"AIRequest"> | string | null
    dataOne?: StringWithAggregatesFilter<"AIRequest"> | string
    dataTwo?: StringWithAggregatesFilter<"AIRequest"> | string
    dataThree?: StringWithAggregatesFilter<"AIRequest"> | string
    promptText?: StringWithAggregatesFilter<"AIRequest"> | string
    aiResponse?: StringWithAggregatesFilter<"AIRequest"> | string
    isProcessed?: BoolWithAggregatesFilter<"AIRequest"> | boolean
    isDelivered?: BoolWithAggregatesFilter<"AIRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AIRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIRequest"> | Date | string
  }

  export type PatientInfoWhereInput = {
    AND?: PatientInfoWhereInput | PatientInfoWhereInput[]
    OR?: PatientInfoWhereInput[]
    NOT?: PatientInfoWhereInput | PatientInfoWhereInput[]
    id?: StringFilter<"PatientInfo"> | string
    userId?: StringFilter<"PatientInfo"> | string
    dateOfBirth?: DateTimeFilter<"PatientInfo"> | Date | string
    gender?: EnumGenderFilter<"PatientInfo"> | $Enums.Gender
    phoneNumber?: StringFilter<"PatientInfo"> | string
    address?: StringFilter<"PatientInfo"> | string
    medicalHistory?: StringFilter<"PatientInfo"> | string
    createdAt?: DateTimeFilter<"PatientInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PatientInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PatientInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PatientInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PatientInfoWhereInput | PatientInfoWhereInput[]
    OR?: PatientInfoWhereInput[]
    NOT?: PatientInfoWhereInput | PatientInfoWhereInput[]
    dateOfBirth?: DateTimeFilter<"PatientInfo"> | Date | string
    gender?: EnumGenderFilter<"PatientInfo"> | $Enums.Gender
    phoneNumber?: StringFilter<"PatientInfo"> | string
    address?: StringFilter<"PatientInfo"> | string
    medicalHistory?: StringFilter<"PatientInfo"> | string
    createdAt?: DateTimeFilter<"PatientInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PatientInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PatientInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientInfoCountOrderByAggregateInput
    _max?: PatientInfoMaxOrderByAggregateInput
    _min?: PatientInfoMinOrderByAggregateInput
  }

  export type PatientInfoScalarWhereWithAggregatesInput = {
    AND?: PatientInfoScalarWhereWithAggregatesInput | PatientInfoScalarWhereWithAggregatesInput[]
    OR?: PatientInfoScalarWhereWithAggregatesInput[]
    NOT?: PatientInfoScalarWhereWithAggregatesInput | PatientInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientInfo"> | string
    userId?: StringWithAggregatesFilter<"PatientInfo"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"PatientInfo"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"PatientInfo"> | $Enums.Gender
    phoneNumber?: StringWithAggregatesFilter<"PatientInfo"> | string
    address?: StringWithAggregatesFilter<"PatientInfo"> | string
    medicalHistory?: StringWithAggregatesFilter<"PatientInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PatientInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientInfo"> | Date | string
  }

  export type DoctorInfoWhereInput = {
    AND?: DoctorInfoWhereInput | DoctorInfoWhereInput[]
    OR?: DoctorInfoWhereInput[]
    NOT?: DoctorInfoWhereInput | DoctorInfoWhereInput[]
    id?: StringFilter<"DoctorInfo"> | string
    userId?: StringFilter<"DoctorInfo"> | string
    fullName?: StringFilter<"DoctorInfo"> | string
    specialization?: StringFilter<"DoctorInfo"> | string
    licenseNumber?: StringFilter<"DoctorInfo"> | string
    phoneNumber?: StringFilter<"DoctorInfo"> | string
    address?: StringFilter<"DoctorInfo"> | string
    experience?: IntFilter<"DoctorInfo"> | number
    bio?: StringNullableFilter<"DoctorInfo"> | string | null
    consultationFee?: DecimalNullableFilter<"DoctorInfo"> | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFilter<"DoctorInfo"> | boolean
    createdAt?: DateTimeFilter<"DoctorInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DoctorInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DoctorInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    licenseNumber?: string
    AND?: DoctorInfoWhereInput | DoctorInfoWhereInput[]
    OR?: DoctorInfoWhereInput[]
    NOT?: DoctorInfoWhereInput | DoctorInfoWhereInput[]
    fullName?: StringFilter<"DoctorInfo"> | string
    specialization?: StringFilter<"DoctorInfo"> | string
    phoneNumber?: StringFilter<"DoctorInfo"> | string
    address?: StringFilter<"DoctorInfo"> | string
    experience?: IntFilter<"DoctorInfo"> | number
    bio?: StringNullableFilter<"DoctorInfo"> | string | null
    consultationFee?: DecimalNullableFilter<"DoctorInfo"> | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFilter<"DoctorInfo"> | boolean
    createdAt?: DateTimeFilter<"DoctorInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "licenseNumber">

  export type DoctorInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorInfoCountOrderByAggregateInput
    _avg?: DoctorInfoAvgOrderByAggregateInput
    _max?: DoctorInfoMaxOrderByAggregateInput
    _min?: DoctorInfoMinOrderByAggregateInput
    _sum?: DoctorInfoSumOrderByAggregateInput
  }

  export type DoctorInfoScalarWhereWithAggregatesInput = {
    AND?: DoctorInfoScalarWhereWithAggregatesInput | DoctorInfoScalarWhereWithAggregatesInput[]
    OR?: DoctorInfoScalarWhereWithAggregatesInput[]
    NOT?: DoctorInfoScalarWhereWithAggregatesInput | DoctorInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorInfo"> | string
    userId?: StringWithAggregatesFilter<"DoctorInfo"> | string
    fullName?: StringWithAggregatesFilter<"DoctorInfo"> | string
    specialization?: StringWithAggregatesFilter<"DoctorInfo"> | string
    licenseNumber?: StringWithAggregatesFilter<"DoctorInfo"> | string
    phoneNumber?: StringWithAggregatesFilter<"DoctorInfo"> | string
    address?: StringWithAggregatesFilter<"DoctorInfo"> | string
    experience?: IntWithAggregatesFilter<"DoctorInfo"> | number
    bio?: StringNullableWithAggregatesFilter<"DoctorInfo"> | string | null
    consultationFee?: DecimalNullableWithAggregatesFilter<"DoctorInfo"> | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolWithAggregatesFilter<"DoctorInfo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DoctorInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorInfo"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringNullableFilter<"Notification"> | string | null
    data?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringNullableFilter<"Notification"> | string | null
    data?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    data?: JsonNullableWithAggregatesFilter<"Notification">
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestCreateInput = {
    id?: string
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentAIRequestsInput
    receiver?: UserCreateNestedOneWithoutReceivedAIDataInput
  }

  export type AIRequestUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId?: string | null
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentAIRequestsNestedInput
    receiver?: UserUpdateOneWithoutReceivedAIDataNestedInput
  }

  export type AIRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestCreateManyInput = {
    id?: string
    senderId: string
    receiverId?: string | null
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientInfoCreateInput = {
    id?: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    medicalHistory: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInfoInput
  }

  export type PatientInfoUncheckedCreateInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    medicalHistory: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientInfoNestedInput
  }

  export type PatientInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientInfoCreateManyInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    medicalHistory: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorInfoCreateInput = {
    id?: string
    fullName: string
    specialization: string
    licenseNumber: string
    phoneNumber: string
    address: string
    experience: number
    bio?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInfoInput
  }

  export type DoctorInfoUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    specialization: string
    licenseNumber: string
    phoneNumber: string
    address: string
    experience: number
    bio?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorInfoNestedInput
  }

  export type DoctorInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorInfoCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    specialization: string
    licenseNumber: string
    phoneNumber: string
    address: string
    experience: number
    bio?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    type?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    type?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PatientInfoNullableScalarRelationFilter = {
    is?: PatientInfoWhereInput | null
    isNot?: PatientInfoWhereInput | null
  }

  export type DoctorInfoNullableScalarRelationFilter = {
    is?: DoctorInfoWhereInput | null
    isNot?: DoctorInfoWhereInput | null
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type AIRequestListRelationFilter = {
    every?: AIRequestWhereInput
    some?: AIRequestWhereInput
    none?: AIRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    accountType?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deviceId?: SortOrder
    role?: SortOrder
    fcmToken?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    visitCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    accountType?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deviceId?: SortOrder
    role?: SortOrder
    fcmToken?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    accountType?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deviceId?: SortOrder
    role?: SortOrder
    fcmToken?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    visitCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    isDelivered?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    isDelivered?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    isDelivered?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AIRequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    dataOne?: SortOrder
    dataTwo?: SortOrder
    dataThree?: SortOrder
    promptText?: SortOrder
    aiResponse?: SortOrder
    isProcessed?: SortOrder
    isDelivered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    dataOne?: SortOrder
    dataTwo?: SortOrder
    dataThree?: SortOrder
    promptText?: SortOrder
    aiResponse?: SortOrder
    isProcessed?: SortOrder
    isDelivered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIRequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    dataOne?: SortOrder
    dataTwo?: SortOrder
    dataThree?: SortOrder
    promptText?: SortOrder
    aiResponse?: SortOrder
    isProcessed?: SortOrder
    isDelivered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type PatientInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DoctorInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    consultationFee?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorInfoAvgOrderByAggregateInput = {
    experience?: SortOrder
    consultationFee?: SortOrder
  }

  export type DoctorInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    consultationFee?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    consultationFee?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorInfoSumOrderByAggregateInput = {
    experience?: SortOrder
    consultationFee?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    data?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PatientInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientInfoCreateWithoutUserInput, PatientInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientInfoCreateOrConnectWithoutUserInput
    connect?: PatientInfoWhereUniqueInput
  }

  export type DoctorInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorInfoCreateWithoutUserInput, DoctorInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorInfoCreateOrConnectWithoutUserInput
    connect?: DoctorInfoWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type AIRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<AIRequestCreateWithoutSenderInput, AIRequestUncheckedCreateWithoutSenderInput> | AIRequestCreateWithoutSenderInput[] | AIRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutSenderInput | AIRequestCreateOrConnectWithoutSenderInput[]
    createMany?: AIRequestCreateManySenderInputEnvelope
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
  }

  export type AIRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<AIRequestCreateWithoutReceiverInput, AIRequestUncheckedCreateWithoutReceiverInput> | AIRequestCreateWithoutReceiverInput[] | AIRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutReceiverInput | AIRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: AIRequestCreateManyReceiverInputEnvelope
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PatientInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientInfoCreateWithoutUserInput, PatientInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientInfoCreateOrConnectWithoutUserInput
    connect?: PatientInfoWhereUniqueInput
  }

  export type DoctorInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorInfoCreateWithoutUserInput, DoctorInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorInfoCreateOrConnectWithoutUserInput
    connect?: DoctorInfoWhereUniqueInput
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type AIRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<AIRequestCreateWithoutSenderInput, AIRequestUncheckedCreateWithoutSenderInput> | AIRequestCreateWithoutSenderInput[] | AIRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutSenderInput | AIRequestCreateOrConnectWithoutSenderInput[]
    createMany?: AIRequestCreateManySenderInputEnvelope
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
  }

  export type AIRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<AIRequestCreateWithoutReceiverInput, AIRequestUncheckedCreateWithoutReceiverInput> | AIRequestCreateWithoutReceiverInput[] | AIRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutReceiverInput | AIRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: AIRequestCreateManyReceiverInputEnvelope
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PatientInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientInfoCreateWithoutUserInput, PatientInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientInfoCreateOrConnectWithoutUserInput
    upsert?: PatientInfoUpsertWithoutUserInput
    disconnect?: PatientInfoWhereInput | boolean
    delete?: PatientInfoWhereInput | boolean
    connect?: PatientInfoWhereUniqueInput
    update?: XOR<XOR<PatientInfoUpdateToOneWithWhereWithoutUserInput, PatientInfoUpdateWithoutUserInput>, PatientInfoUncheckedUpdateWithoutUserInput>
  }

  export type DoctorInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorInfoCreateWithoutUserInput, DoctorInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorInfoCreateOrConnectWithoutUserInput
    upsert?: DoctorInfoUpsertWithoutUserInput
    disconnect?: DoctorInfoWhereInput | boolean
    delete?: DoctorInfoWhereInput | boolean
    connect?: DoctorInfoWhereUniqueInput
    update?: XOR<XOR<DoctorInfoUpdateToOneWithWhereWithoutUserInput, DoctorInfoUpdateWithoutUserInput>, DoctorInfoUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type AIRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<AIRequestCreateWithoutSenderInput, AIRequestUncheckedCreateWithoutSenderInput> | AIRequestCreateWithoutSenderInput[] | AIRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutSenderInput | AIRequestCreateOrConnectWithoutSenderInput[]
    upsert?: AIRequestUpsertWithWhereUniqueWithoutSenderInput | AIRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: AIRequestCreateManySenderInputEnvelope
    set?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    disconnect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    delete?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    update?: AIRequestUpdateWithWhereUniqueWithoutSenderInput | AIRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: AIRequestUpdateManyWithWhereWithoutSenderInput | AIRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: AIRequestScalarWhereInput | AIRequestScalarWhereInput[]
  }

  export type AIRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<AIRequestCreateWithoutReceiverInput, AIRequestUncheckedCreateWithoutReceiverInput> | AIRequestCreateWithoutReceiverInput[] | AIRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutReceiverInput | AIRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: AIRequestUpsertWithWhereUniqueWithoutReceiverInput | AIRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: AIRequestCreateManyReceiverInputEnvelope
    set?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    disconnect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    delete?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    update?: AIRequestUpdateWithWhereUniqueWithoutReceiverInput | AIRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: AIRequestUpdateManyWithWhereWithoutReceiverInput | AIRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: AIRequestScalarWhereInput | AIRequestScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PatientInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientInfoCreateWithoutUserInput, PatientInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientInfoCreateOrConnectWithoutUserInput
    upsert?: PatientInfoUpsertWithoutUserInput
    disconnect?: PatientInfoWhereInput | boolean
    delete?: PatientInfoWhereInput | boolean
    connect?: PatientInfoWhereUniqueInput
    update?: XOR<XOR<PatientInfoUpdateToOneWithWhereWithoutUserInput, PatientInfoUpdateWithoutUserInput>, PatientInfoUncheckedUpdateWithoutUserInput>
  }

  export type DoctorInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorInfoCreateWithoutUserInput, DoctorInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorInfoCreateOrConnectWithoutUserInput
    upsert?: DoctorInfoUpsertWithoutUserInput
    disconnect?: DoctorInfoWhereInput | boolean
    delete?: DoctorInfoWhereInput | boolean
    connect?: DoctorInfoWhereUniqueInput
    update?: XOR<XOR<DoctorInfoUpdateToOneWithWhereWithoutUserInput, DoctorInfoUpdateWithoutUserInput>, DoctorInfoUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type AIRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<AIRequestCreateWithoutSenderInput, AIRequestUncheckedCreateWithoutSenderInput> | AIRequestCreateWithoutSenderInput[] | AIRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutSenderInput | AIRequestCreateOrConnectWithoutSenderInput[]
    upsert?: AIRequestUpsertWithWhereUniqueWithoutSenderInput | AIRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: AIRequestCreateManySenderInputEnvelope
    set?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    disconnect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    delete?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    update?: AIRequestUpdateWithWhereUniqueWithoutSenderInput | AIRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: AIRequestUpdateManyWithWhereWithoutSenderInput | AIRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: AIRequestScalarWhereInput | AIRequestScalarWhereInput[]
  }

  export type AIRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<AIRequestCreateWithoutReceiverInput, AIRequestUncheckedCreateWithoutReceiverInput> | AIRequestCreateWithoutReceiverInput[] | AIRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: AIRequestCreateOrConnectWithoutReceiverInput | AIRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: AIRequestUpsertWithWhereUniqueWithoutReceiverInput | AIRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: AIRequestCreateManyReceiverInputEnvelope
    set?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    disconnect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    delete?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    connect?: AIRequestWhereUniqueInput | AIRequestWhereUniqueInput[]
    update?: AIRequestUpdateWithWhereUniqueWithoutReceiverInput | AIRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: AIRequestUpdateManyWithWhereWithoutReceiverInput | AIRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: AIRequestScalarWhereInput | AIRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    upsert?: UserUpsertWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatSessionsInput, UserUpdateWithoutChatSessionsInput>, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserCreateNestedOneWithoutSentAIRequestsInput = {
    create?: XOR<UserCreateWithoutSentAIRequestsInput, UserUncheckedCreateWithoutSentAIRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentAIRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedAIDataInput = {
    create?: XOR<UserCreateWithoutReceivedAIDataInput, UserUncheckedCreateWithoutReceivedAIDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedAIDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentAIRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentAIRequestsInput, UserUncheckedCreateWithoutSentAIRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentAIRequestsInput
    upsert?: UserUpsertWithoutSentAIRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentAIRequestsInput, UserUpdateWithoutSentAIRequestsInput>, UserUncheckedUpdateWithoutSentAIRequestsInput>
  }

  export type UserUpdateOneWithoutReceivedAIDataNestedInput = {
    create?: XOR<UserCreateWithoutReceivedAIDataInput, UserUncheckedCreateWithoutReceivedAIDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedAIDataInput
    upsert?: UserUpsertWithoutReceivedAIDataInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedAIDataInput, UserUpdateWithoutReceivedAIDataInput>, UserUncheckedUpdateWithoutReceivedAIDataInput>
  }

  export type UserCreateNestedOneWithoutPatientInfoInput = {
    create?: XOR<UserCreateWithoutPatientInfoInput, UserUncheckedCreateWithoutPatientInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInfoInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneRequiredWithoutPatientInfoNestedInput = {
    create?: XOR<UserCreateWithoutPatientInfoInput, UserUncheckedCreateWithoutPatientInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInfoInput
    upsert?: UserUpsertWithoutPatientInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInfoInput, UserUpdateWithoutPatientInfoInput>, UserUncheckedUpdateWithoutPatientInfoInput>
  }

  export type UserCreateNestedOneWithoutDoctorInfoInput = {
    create?: XOR<UserCreateWithoutDoctorInfoInput, UserUncheckedCreateWithoutDoctorInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInfoInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutDoctorInfoNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInfoInput, UserUncheckedCreateWithoutDoctorInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInfoInput
    upsert?: UserUpsertWithoutDoctorInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInfoInput, UserUpdateWithoutDoctorInfoInput>, UserUncheckedUpdateWithoutDoctorInfoInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PatientInfoCreateWithoutUserInput = {
    id?: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    medicalHistory: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientInfoUncheckedCreateWithoutUserInput = {
    id?: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    medicalHistory: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientInfoCreateOrConnectWithoutUserInput = {
    where: PatientInfoWhereUniqueInput
    create: XOR<PatientInfoCreateWithoutUserInput, PatientInfoUncheckedCreateWithoutUserInput>
  }

  export type DoctorInfoCreateWithoutUserInput = {
    id?: string
    fullName: string
    specialization: string
    licenseNumber: string
    phoneNumber: string
    address: string
    experience: number
    bio?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorInfoUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    specialization: string
    licenseNumber: string
    phoneNumber: string
    address: string
    experience: number
    bio?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorInfoCreateOrConnectWithoutUserInput = {
    where: DoctorInfoWhereUniqueInput
    create: XOR<DoctorInfoCreateWithoutUserInput, DoctorInfoUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutUserInput = {
    id?: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AIRequestCreateWithoutSenderInput = {
    id?: string
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver?: UserCreateNestedOneWithoutReceivedAIDataInput
  }

  export type AIRequestUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId?: string | null
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIRequestCreateOrConnectWithoutSenderInput = {
    where: AIRequestWhereUniqueInput
    create: XOR<AIRequestCreateWithoutSenderInput, AIRequestUncheckedCreateWithoutSenderInput>
  }

  export type AIRequestCreateManySenderInputEnvelope = {
    data: AIRequestCreateManySenderInput | AIRequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type AIRequestCreateWithoutReceiverInput = {
    id?: string
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentAIRequestsInput
  }

  export type AIRequestUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIRequestCreateOrConnectWithoutReceiverInput = {
    where: AIRequestWhereUniqueInput
    create: XOR<AIRequestCreateWithoutReceiverInput, AIRequestUncheckedCreateWithoutReceiverInput>
  }

  export type AIRequestCreateManyReceiverInputEnvelope = {
    data: AIRequestCreateManyReceiverInput | AIRequestCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringNullableFilter<"Notification"> | string | null
    data?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type PatientInfoUpsertWithoutUserInput = {
    update: XOR<PatientInfoUpdateWithoutUserInput, PatientInfoUncheckedUpdateWithoutUserInput>
    create: XOR<PatientInfoCreateWithoutUserInput, PatientInfoUncheckedCreateWithoutUserInput>
    where?: PatientInfoWhereInput
  }

  export type PatientInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientInfoWhereInput
    data: XOR<PatientInfoUpdateWithoutUserInput, PatientInfoUncheckedUpdateWithoutUserInput>
  }

  export type PatientInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorInfoUpsertWithoutUserInput = {
    update: XOR<DoctorInfoUpdateWithoutUserInput, DoctorInfoUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorInfoCreateWithoutUserInput, DoctorInfoUncheckedCreateWithoutUserInput>
    where?: DoctorInfoWhereInput
  }

  export type DoctorInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorInfoWhereInput
    data: XOR<DoctorInfoUpdateWithoutUserInput, DoctorInfoUncheckedUpdateWithoutUserInput>
  }

  export type DoctorInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    type?: EnumMessageTypeFilter<"ChatMessage"> | $Enums.MessageType
    content?: StringFilter<"ChatMessage"> | string
    metadata?: JsonNullableFilter<"ChatMessage">
    isDelivered?: BoolFilter<"ChatMessage"> | boolean
    isRead?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    isActive?: BoolFilter<"ChatSession"> | boolean
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type AIRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: AIRequestWhereUniqueInput
    update: XOR<AIRequestUpdateWithoutSenderInput, AIRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<AIRequestCreateWithoutSenderInput, AIRequestUncheckedCreateWithoutSenderInput>
  }

  export type AIRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: AIRequestWhereUniqueInput
    data: XOR<AIRequestUpdateWithoutSenderInput, AIRequestUncheckedUpdateWithoutSenderInput>
  }

  export type AIRequestUpdateManyWithWhereWithoutSenderInput = {
    where: AIRequestScalarWhereInput
    data: XOR<AIRequestUpdateManyMutationInput, AIRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type AIRequestScalarWhereInput = {
    AND?: AIRequestScalarWhereInput | AIRequestScalarWhereInput[]
    OR?: AIRequestScalarWhereInput[]
    NOT?: AIRequestScalarWhereInput | AIRequestScalarWhereInput[]
    id?: StringFilter<"AIRequest"> | string
    senderId?: StringFilter<"AIRequest"> | string
    receiverId?: StringNullableFilter<"AIRequest"> | string | null
    dataOne?: StringFilter<"AIRequest"> | string
    dataTwo?: StringFilter<"AIRequest"> | string
    dataThree?: StringFilter<"AIRequest"> | string
    promptText?: StringFilter<"AIRequest"> | string
    aiResponse?: StringFilter<"AIRequest"> | string
    isProcessed?: BoolFilter<"AIRequest"> | boolean
    isDelivered?: BoolFilter<"AIRequest"> | boolean
    createdAt?: DateTimeFilter<"AIRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AIRequest"> | Date | string
  }

  export type AIRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: AIRequestWhereUniqueInput
    update: XOR<AIRequestUpdateWithoutReceiverInput, AIRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<AIRequestCreateWithoutReceiverInput, AIRequestUncheckedCreateWithoutReceiverInput>
  }

  export type AIRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: AIRequestWhereUniqueInput
    data: XOR<AIRequestUpdateWithoutReceiverInput, AIRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type AIRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: AIRequestScalarWhereInput
    data: XOR<AIRequestUpdateManyMutationInput, AIRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutChatSessionsInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutChatSessionsInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutChatSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatSessionsInput = {
    update: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type UserUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentAIRequestsInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentAIRequestsInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentAIRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentAIRequestsInput, UserUncheckedCreateWithoutSentAIRequestsInput>
  }

  export type UserCreateWithoutReceivedAIDataInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedAIDataInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedAIDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedAIDataInput, UserUncheckedCreateWithoutReceivedAIDataInput>
  }

  export type UserUpsertWithoutSentAIRequestsInput = {
    update: XOR<UserUpdateWithoutSentAIRequestsInput, UserUncheckedUpdateWithoutSentAIRequestsInput>
    create: XOR<UserCreateWithoutSentAIRequestsInput, UserUncheckedCreateWithoutSentAIRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentAIRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentAIRequestsInput, UserUncheckedUpdateWithoutSentAIRequestsInput>
  }

  export type UserUpdateWithoutSentAIRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentAIRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedAIDataInput = {
    update: XOR<UserUpdateWithoutReceivedAIDataInput, UserUncheckedUpdateWithoutReceivedAIDataInput>
    create: XOR<UserCreateWithoutReceivedAIDataInput, UserUncheckedCreateWithoutReceivedAIDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedAIDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedAIDataInput, UserUncheckedUpdateWithoutReceivedAIDataInput>
  }

  export type UserUpdateWithoutReceivedAIDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedAIDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutPatientInfoInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutPatientInfoInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutPatientInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInfoInput, UserUncheckedCreateWithoutPatientInfoInput>
  }

  export type UserUpsertWithoutPatientInfoInput = {
    update: XOR<UserUpdateWithoutPatientInfoInput, UserUncheckedUpdateWithoutPatientInfoInput>
    create: XOR<UserCreateWithoutPatientInfoInput, UserUncheckedCreateWithoutPatientInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInfoInput, UserUncheckedUpdateWithoutPatientInfoInput>
  }

  export type UserUpdateWithoutPatientInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutDoctorInfoInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutDoctorInfoInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutDoctorInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInfoInput, UserUncheckedCreateWithoutDoctorInfoInput>
  }

  export type UserUpsertWithoutDoctorInfoInput = {
    update: XOR<UserUpdateWithoutDoctorInfoInput, UserUncheckedUpdateWithoutDoctorInfoInput>
    create: XOR<UserCreateWithoutDoctorInfoInput, UserUncheckedCreateWithoutDoctorInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInfoInput, UserUncheckedUpdateWithoutDoctorInfoInput>
  }

  export type UserUpdateWithoutDoctorInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    patientInfo?: PatientInfoCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    accountType?: $Enums.AccountType
    userName?: string | null
    email?: string | null
    password?: string | null
    deviceId: string
    role?: $Enums.UserRole
    fcmToken: string
    isActive?: boolean
    lastSeen?: Date | string
    visitCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    patientInfo?: PatientInfoUncheckedCreateNestedOneWithoutUserInput
    doctorInfo?: DoctorInfoUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    sentAIRequests?: AIRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedAIData?: AIRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientInfo?: PatientInfoUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fcmToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientInfo?: PatientInfoUncheckedUpdateOneWithoutUserNestedInput
    doctorInfo?: DoctorInfoUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    sentAIRequests?: AIRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedAIData?: AIRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    sessionId: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatSessionCreateManyUserInput = {
    id?: string
    title?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIRequestCreateManySenderInput = {
    id?: string
    receiverId?: string | null
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIRequestCreateManyReceiverInput = {
    id?: string
    senderId: string
    dataOne: string
    dataTwo: string
    dataThree: string
    promptText: string
    aiResponse: string
    isProcessed?: boolean
    isDelivered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneWithoutReceivedAIDataNestedInput
  }

  export type AIRequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentAIRequestsNestedInput
  }

  export type AIRequestUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    dataOne?: StringFieldUpdateOperationsInput | string
    dataTwo?: StringFieldUpdateOperationsInput | string
    dataThree?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    userId: string
    type: $Enums.MessageType
    content: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: boolean
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}