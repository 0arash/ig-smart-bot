
/**
 * Client
**/

import * as runtime from './runtime/binary';
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
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model UserPlan
 * 
 */
export type UserPlan = $Result.DefaultSelection<Prisma.$UserPlanPayload>
/**
 * Model ChatUser
 * 
 */
export type ChatUser = $Result.DefaultSelection<Prisma.$ChatUserPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChatMessageType: {
  TEXT: 'TEXT'
};

export type ChatMessageType = (typeof ChatMessageType)[keyof typeof ChatMessageType]

}

export type ChatMessageType = $Enums.ChatMessageType

export const ChatMessageType: typeof $Enums.ChatMessageType

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.userPlan`: Exposes CRUD operations for the **UserPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPlans
    * const userPlans = await prisma.userPlan.findMany()
    * ```
    */
  get userPlan(): Prisma.UserPlanDelegate<ExtArgs>;

  /**
   * `prisma.chatUser`: Exposes CRUD operations for the **ChatUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatUsers
    * const chatUsers = await prisma.chatUser.findMany()
    * ```
    */
  get chatUser(): Prisma.ChatUserDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Plan: 'Plan',
    UserPlan: 'UserPlan',
    ChatUser: 'ChatUser',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'plan' | 'userPlan' | 'chatUser' | 'chatMessage'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>,
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      UserPlan: {
        payload: Prisma.$UserPlanPayload<ExtArgs>
        fields: Prisma.UserPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>
          }
          findFirst: {
            args: Prisma.UserPlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>
          }
          findMany: {
            args: Prisma.UserPlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>[]
          }
          create: {
            args: Prisma.UserPlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>
          }
          createMany: {
            args: Prisma.UserPlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserPlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>
          }
          update: {
            args: Prisma.UserPlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>
          }
          deleteMany: {
            args: Prisma.UserPlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserPlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserPlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPlanPayload>
          }
          aggregate: {
            args: Prisma.UserPlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserPlan>
          }
          groupBy: {
            args: Prisma.UserPlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPlanCountArgs<ExtArgs>,
            result: $Utils.Optional<UserPlanCountAggregateOutputType> | number
          }
        }
      }
      ChatUser: {
        payload: Prisma.$ChatUserPayload<ExtArgs>
        fields: Prisma.ChatUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findFirst: {
            args: Prisma.ChatUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findMany: {
            args: Prisma.ChatUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          create: {
            args: Prisma.ChatUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          createMany: {
            args: Prisma.ChatUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          update: {
            args: Prisma.ChatUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          deleteMany: {
            args: Prisma.ChatUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          aggregate: {
            args: Prisma.ChatUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatUser>
          }
          groupBy: {
            args: Prisma.ChatUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatUserCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatUserCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    user_plans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_plans?: boolean | UserCountOutputTypeCountUser_plansArgs
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
  export type UserCountOutputTypeCountUser_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanWhereInput
  }



  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    user_plans: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_plans?: boolean | PlanCountOutputTypeCountUser_plansArgs
  }

  // Custom InputTypes

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountUser_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanWhereInput
  }



  /**
   * Count Type UserPlanCountOutputType
   */

  export type UserPlanCountOutputType = {
    chat_users: number
    chat_messages: number
  }

  export type UserPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_users?: boolean | UserPlanCountOutputTypeCountChat_usersArgs
    chat_messages?: boolean | UserPlanCountOutputTypeCountChat_messagesArgs
  }

  // Custom InputTypes

  /**
   * UserPlanCountOutputType without action
   */
  export type UserPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlanCountOutputType
     */
    select?: UserPlanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserPlanCountOutputType without action
   */
  export type UserPlanCountOutputTypeCountChat_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
  }


  /**
   * UserPlanCountOutputType without action
   */
  export type UserPlanCountOutputTypeCountChat_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }



  /**
   * Count Type ChatUserCountOutputType
   */

  export type ChatUserCountOutputType = {
    chat_messages: number
  }

  export type ChatUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_messages?: boolean | ChatUserCountOutputTypeCountChat_messagesArgs
  }

  // Custom InputTypes

  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserCountOutputType
     */
    select?: ChatUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeCountChat_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    code_meli: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    code_meli: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    address: number
    code_meli: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    code_meli?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    code_meli?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    code_meli?: true
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
    id: number
    name: string
    email: string
    password: string
    address: string | null
    code_meli: string | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    code_meli?: boolean
    user_plans?: boolean | User$user_plansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    code_meli?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_plans?: boolean | User$user_plansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user_plans: Prisma.$UserPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      address: string | null
      code_meli: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_plans<T extends User$user_plansArgs<ExtArgs> = {}>(args?: Subset<T, User$user_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly code_meli: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.user_plans
   */
  export type User$user_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    where?: UserPlanWhereInput
    orderBy?: UserPlanOrderByWithRelationInput | UserPlanOrderByWithRelationInput[]
    cursor?: UserPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlanScalarFieldEnum | UserPlanScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    id: number | null
    price: number | null
    days: number | null
  }

  export type PlanSumAggregateOutputType = {
    id: number | null
    price: number | null
    days: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    days: number | null
  }

  export type PlanMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    days: number | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    title: number
    price: number
    days: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    id?: true
    price?: true
    days?: true
  }

  export type PlanSumAggregateInputType = {
    id?: true
    price?: true
    days?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    days?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    days?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    days?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: number
    title: string
    price: number
    days: number
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    days?: boolean
    user_plans?: boolean | Plan$user_plansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    days?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_plans?: boolean | Plan$user_plansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      user_plans: Prisma.$UserPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: number
      days: number
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }


  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
    **/
    create<T extends PlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanCreateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Plans.
     *     @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     *     @example
     *     // Create many Plans
     *     const plan = await prisma.plan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
    **/
    delete<T extends PlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
    **/
    upsert<T extends PlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_plans<T extends Plan$user_plansArgs<ExtArgs> = {}>(args?: Subset<T, Plan$user_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'Int'>
    readonly title: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Int'>
    readonly days: FieldRef<"Plan", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }


  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }


  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }


  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }


  /**
   * Plan.user_plans
   */
  export type Plan$user_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    where?: UserPlanWhereInput
    orderBy?: UserPlanOrderByWithRelationInput | UserPlanOrderByWithRelationInput[]
    cursor?: UserPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlanScalarFieldEnum | UserPlanScalarFieldEnum[]
  }


  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
  }



  /**
   * Model UserPlan
   */

  export type AggregateUserPlan = {
    _count: UserPlanCountAggregateOutputType | null
    _avg: UserPlanAvgAggregateOutputType | null
    _sum: UserPlanSumAggregateOutputType | null
    _min: UserPlanMinAggregateOutputType | null
    _max: UserPlanMaxAggregateOutputType | null
  }

  export type UserPlanAvgAggregateOutputType = {
    id: number | null
    plan_id: number | null
    user_id: number | null
  }

  export type UserPlanSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
    user_id: number | null
  }

  export type UserPlanMinAggregateOutputType = {
    id: number | null
    plan_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type UserPlanMaxAggregateOutputType = {
    id: number | null
    plan_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type UserPlanCountAggregateOutputType = {
    id: number
    plan_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type UserPlanAvgAggregateInputType = {
    id?: true
    plan_id?: true
    user_id?: true
  }

  export type UserPlanSumAggregateInputType = {
    id?: true
    plan_id?: true
    user_id?: true
  }

  export type UserPlanMinAggregateInputType = {
    id?: true
    plan_id?: true
    user_id?: true
    created_at?: true
  }

  export type UserPlanMaxAggregateInputType = {
    id?: true
    plan_id?: true
    user_id?: true
    created_at?: true
  }

  export type UserPlanCountAggregateInputType = {
    id?: true
    plan_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type UserPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlan to aggregate.
     */
    where?: UserPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlanOrderByWithRelationInput | UserPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPlans
    **/
    _count?: true | UserPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPlanMaxAggregateInputType
  }

  export type GetUserPlanAggregateType<T extends UserPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPlan[P]>
      : GetScalarType<T[P], AggregateUserPlan[P]>
  }




  export type UserPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlanWhereInput
    orderBy?: UserPlanOrderByWithAggregationInput | UserPlanOrderByWithAggregationInput[]
    by: UserPlanScalarFieldEnum[] | UserPlanScalarFieldEnum
    having?: UserPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPlanCountAggregateInputType | true
    _avg?: UserPlanAvgAggregateInputType
    _sum?: UserPlanSumAggregateInputType
    _min?: UserPlanMinAggregateInputType
    _max?: UserPlanMaxAggregateInputType
  }

  export type UserPlanGroupByOutputType = {
    id: number
    plan_id: number
    user_id: number
    created_at: Date
    _count: UserPlanCountAggregateOutputType | null
    _avg: UserPlanAvgAggregateOutputType | null
    _sum: UserPlanSumAggregateOutputType | null
    _min: UserPlanMinAggregateOutputType | null
    _max: UserPlanMaxAggregateOutputType | null
  }

  type GetUserPlanGroupByPayload<T extends UserPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPlanGroupByOutputType[P]>
            : GetScalarType<T[P], UserPlanGroupByOutputType[P]>
        }
      >
    >


  export type UserPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan_id?: boolean
    user_id?: boolean
    created_at?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat_users?: boolean | UserPlan$chat_usersArgs<ExtArgs>
    chat_messages?: boolean | UserPlan$chat_messagesArgs<ExtArgs>
    _count?: boolean | UserPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlan"]>

  export type UserPlanSelectScalar = {
    id?: boolean
    plan_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type UserPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat_users?: boolean | UserPlan$chat_usersArgs<ExtArgs>
    chat_messages?: boolean | UserPlan$chat_messagesArgs<ExtArgs>
    _count?: boolean | UserPlanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPlan"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      chat_users: Prisma.$ChatUserPayload<ExtArgs>[]
      chat_messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plan_id: number
      user_id: number
      created_at: Date
    }, ExtArgs["result"]["userPlan"]>
    composites: {}
  }


  type UserPlanGetPayload<S extends boolean | null | undefined | UserPlanDefaultArgs> = $Result.GetResult<Prisma.$UserPlanPayload, S>

  type UserPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPlanCountAggregateInputType | true
    }

  export interface UserPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPlan'], meta: { name: 'UserPlan' } }
    /**
     * Find zero or one UserPlan that matches the filter.
     * @param {UserPlanFindUniqueArgs} args - Arguments to find a UserPlan
     * @example
     * // Get one UserPlan
     * const userPlan = await prisma.userPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserPlanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserPlanFindUniqueArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserPlan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserPlanFindUniqueOrThrowArgs} args - Arguments to find a UserPlan
     * @example
     * // Get one UserPlan
     * const userPlan = await prisma.userPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserPlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanFindFirstArgs} args - Arguments to find a UserPlan
     * @example
     * // Get one UserPlan
     * const userPlan = await prisma.userPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserPlanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPlanFindFirstArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanFindFirstOrThrowArgs} args - Arguments to find a UserPlan
     * @example
     * // Get one UserPlan
     * const userPlan = await prisma.userPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserPlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPlans
     * const userPlans = await prisma.userPlan.findMany()
     * 
     * // Get first 10 UserPlans
     * const userPlans = await prisma.userPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPlanWithIdOnly = await prisma.userPlan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserPlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserPlan.
     * @param {UserPlanCreateArgs} args - Arguments to create a UserPlan.
     * @example
     * // Create one UserPlan
     * const UserPlan = await prisma.userPlan.create({
     *   data: {
     *     // ... data to create a UserPlan
     *   }
     * })
     * 
    **/
    create<T extends UserPlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPlanCreateArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserPlans.
     *     @param {UserPlanCreateManyArgs} args - Arguments to create many UserPlans.
     *     @example
     *     // Create many UserPlans
     *     const userPlan = await prisma.userPlan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserPlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPlan.
     * @param {UserPlanDeleteArgs} args - Arguments to delete one UserPlan.
     * @example
     * // Delete one UserPlan
     * const UserPlan = await prisma.userPlan.delete({
     *   where: {
     *     // ... filter to delete one UserPlan
     *   }
     * })
     * 
    **/
    delete<T extends UserPlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserPlanDeleteArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserPlan.
     * @param {UserPlanUpdateArgs} args - Arguments to update one UserPlan.
     * @example
     * // Update one UserPlan
     * const userPlan = await prisma.userPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserPlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPlanUpdateArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserPlans.
     * @param {UserPlanDeleteManyArgs} args - Arguments to filter UserPlans to delete.
     * @example
     * // Delete a few UserPlans
     * const { count } = await prisma.userPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserPlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPlans
     * const userPlan = await prisma.userPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserPlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserPlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPlan.
     * @param {UserPlanUpsertArgs} args - Arguments to update or create a UserPlan.
     * @example
     * // Update or create a UserPlan
     * const userPlan = await prisma.userPlan.upsert({
     *   create: {
     *     // ... data to create a UserPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPlan we want to update
     *   }
     * })
    **/
    upsert<T extends UserPlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserPlanUpsertArgs<ExtArgs>>
    ): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanCountArgs} args - Arguments to filter UserPlans to count.
     * @example
     * // Count the number of UserPlans
     * const count = await prisma.userPlan.count({
     *   where: {
     *     // ... the filter for the UserPlans we want to count
     *   }
     * })
    **/
    count<T extends UserPlanCountArgs>(
      args?: Subset<T, UserPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPlanAggregateArgs>(args: Subset<T, UserPlanAggregateArgs>): Prisma.PrismaPromise<GetUserPlanAggregateType<T>>

    /**
     * Group by UserPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlanGroupByArgs} args - Group by arguments.
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
      T extends UserPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPlanGroupByArgs['orderBy'] }
        : { orderBy?: UserPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPlan model
   */
  readonly fields: UserPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chat_users<T extends UserPlan$chat_usersArgs<ExtArgs> = {}>(args?: Subset<T, UserPlan$chat_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    chat_messages<T extends UserPlan$chat_messagesArgs<ExtArgs> = {}>(args?: Subset<T, UserPlan$chat_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserPlan model
   */ 
  interface UserPlanFieldRefs {
    readonly id: FieldRef<"UserPlan", 'Int'>
    readonly plan_id: FieldRef<"UserPlan", 'Int'>
    readonly user_id: FieldRef<"UserPlan", 'Int'>
    readonly created_at: FieldRef<"UserPlan", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserPlan findUnique
   */
  export type UserPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * Filter, which UserPlan to fetch.
     */
    where: UserPlanWhereUniqueInput
  }


  /**
   * UserPlan findUniqueOrThrow
   */
  export type UserPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * Filter, which UserPlan to fetch.
     */
    where: UserPlanWhereUniqueInput
  }


  /**
   * UserPlan findFirst
   */
  export type UserPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * Filter, which UserPlan to fetch.
     */
    where?: UserPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlanOrderByWithRelationInput | UserPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlans.
     */
    cursor?: UserPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlans.
     */
    distinct?: UserPlanScalarFieldEnum | UserPlanScalarFieldEnum[]
  }


  /**
   * UserPlan findFirstOrThrow
   */
  export type UserPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * Filter, which UserPlan to fetch.
     */
    where?: UserPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlanOrderByWithRelationInput | UserPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlans.
     */
    cursor?: UserPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlans.
     */
    distinct?: UserPlanScalarFieldEnum | UserPlanScalarFieldEnum[]
  }


  /**
   * UserPlan findMany
   */
  export type UserPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * Filter, which UserPlans to fetch.
     */
    where?: UserPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlanOrderByWithRelationInput | UserPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPlans.
     */
    cursor?: UserPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    distinct?: UserPlanScalarFieldEnum | UserPlanScalarFieldEnum[]
  }


  /**
   * UserPlan create
   */
  export type UserPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPlan.
     */
    data: XOR<UserPlanCreateInput, UserPlanUncheckedCreateInput>
  }


  /**
   * UserPlan createMany
   */
  export type UserPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPlans.
     */
    data: UserPlanCreateManyInput | UserPlanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserPlan update
   */
  export type UserPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPlan.
     */
    data: XOR<UserPlanUpdateInput, UserPlanUncheckedUpdateInput>
    /**
     * Choose, which UserPlan to update.
     */
    where: UserPlanWhereUniqueInput
  }


  /**
   * UserPlan updateMany
   */
  export type UserPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPlans.
     */
    data: XOR<UserPlanUpdateManyMutationInput, UserPlanUncheckedUpdateManyInput>
    /**
     * Filter which UserPlans to update
     */
    where?: UserPlanWhereInput
  }


  /**
   * UserPlan upsert
   */
  export type UserPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPlan to update in case it exists.
     */
    where: UserPlanWhereUniqueInput
    /**
     * In case the UserPlan found by the `where` argument doesn't exist, create a new UserPlan with this data.
     */
    create: XOR<UserPlanCreateInput, UserPlanUncheckedCreateInput>
    /**
     * In case the UserPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPlanUpdateInput, UserPlanUncheckedUpdateInput>
  }


  /**
   * UserPlan delete
   */
  export type UserPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
    /**
     * Filter which UserPlan to delete.
     */
    where: UserPlanWhereUniqueInput
  }


  /**
   * UserPlan deleteMany
   */
  export type UserPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlans to delete
     */
    where?: UserPlanWhereInput
  }


  /**
   * UserPlan.chat_users
   */
  export type UserPlan$chat_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    cursor?: ChatUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }


  /**
   * UserPlan.chat_messages
   */
  export type UserPlan$chat_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * UserPlan without action
   */
  export type UserPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlan
     */
    select?: UserPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPlanInclude<ExtArgs> | null
  }



  /**
   * Model ChatUser
   */

  export type AggregateChatUser = {
    _count: ChatUserCountAggregateOutputType | null
    _avg: ChatUserAvgAggregateOutputType | null
    _sum: ChatUserSumAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  export type ChatUserAvgAggregateOutputType = {
    id: number | null
    user_plan_id: number | null
  }

  export type ChatUserSumAggregateOutputType = {
    id: number | null
    user_plan_id: number | null
  }

  export type ChatUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    user_plan_id: number | null
    created_at: Date | null
  }

  export type ChatUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    user_plan_id: number | null
    created_at: Date | null
  }

  export type ChatUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    user_plan_id: number
    created_at: number
    _all: number
  }


  export type ChatUserAvgAggregateInputType = {
    id?: true
    user_plan_id?: true
  }

  export type ChatUserSumAggregateInputType = {
    id?: true
    user_plan_id?: true
  }

  export type ChatUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    user_plan_id?: true
    created_at?: true
  }

  export type ChatUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    user_plan_id?: true
    created_at?: true
  }

  export type ChatUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    user_plan_id?: true
    created_at?: true
    _all?: true
  }

  export type ChatUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUser to aggregate.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatUsers
    **/
    _count?: true | ChatUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatUserMaxAggregateInputType
  }

  export type GetChatUserAggregateType<T extends ChatUserAggregateArgs> = {
        [P in keyof T & keyof AggregateChatUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatUser[P]>
      : GetScalarType<T[P], AggregateChatUser[P]>
  }




  export type ChatUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithAggregationInput | ChatUserOrderByWithAggregationInput[]
    by: ChatUserScalarFieldEnum[] | ChatUserScalarFieldEnum
    having?: ChatUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatUserCountAggregateInputType | true
    _avg?: ChatUserAvgAggregateInputType
    _sum?: ChatUserSumAggregateInputType
    _min?: ChatUserMinAggregateInputType
    _max?: ChatUserMaxAggregateInputType
  }

  export type ChatUserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    user_plan_id: number
    created_at: Date
    _count: ChatUserCountAggregateOutputType | null
    _avg: ChatUserAvgAggregateOutputType | null
    _sum: ChatUserSumAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  type GetChatUserGroupByPayload<T extends ChatUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
            : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
        }
      >
    >


  export type ChatUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    user_plan_id?: boolean
    created_at?: boolean
    user_plan?: boolean | UserPlanDefaultArgs<ExtArgs>
    chat_messages?: boolean | ChatUser$chat_messagesArgs<ExtArgs>
    _count?: boolean | ChatUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    user_plan_id?: boolean
    created_at?: boolean
  }

  export type ChatUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_plan?: boolean | UserPlanDefaultArgs<ExtArgs>
    chat_messages?: boolean | ChatUser$chat_messagesArgs<ExtArgs>
    _count?: boolean | ChatUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatUser"
    objects: {
      user_plan: Prisma.$UserPlanPayload<ExtArgs>
      chat_messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      user_plan_id: number
      created_at: Date
    }, ExtArgs["result"]["chatUser"]>
    composites: {}
  }


  type ChatUserGetPayload<S extends boolean | null | undefined | ChatUserDefaultArgs> = $Result.GetResult<Prisma.$ChatUserPayload, S>

  type ChatUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatUserCountAggregateInputType | true
    }

  export interface ChatUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatUser'], meta: { name: 'ChatUser' } }
    /**
     * Find zero or one ChatUser that matches the filter.
     * @param {ChatUserFindUniqueArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUserFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatUserFindUniqueOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatUserFindFirstArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatUsers
     * const chatUsers = await prisma.chatUser.findMany()
     * 
     * // Get first 10 ChatUsers
     * const chatUsers = await prisma.chatUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatUser.
     * @param {ChatUserCreateArgs} args - Arguments to create a ChatUser.
     * @example
     * // Create one ChatUser
     * const ChatUser = await prisma.chatUser.create({
     *   data: {
     *     // ... data to create a ChatUser
     *   }
     * })
     * 
    **/
    create<T extends ChatUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUserCreateArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatUsers.
     *     @param {ChatUserCreateManyArgs} args - Arguments to create many ChatUsers.
     *     @example
     *     // Create many ChatUsers
     *     const chatUser = await prisma.chatUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatUser.
     * @param {ChatUserDeleteArgs} args - Arguments to delete one ChatUser.
     * @example
     * // Delete one ChatUser
     * const ChatUser = await prisma.chatUser.delete({
     *   where: {
     *     // ... filter to delete one ChatUser
     *   }
     * })
     * 
    **/
    delete<T extends ChatUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUserDeleteArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatUser.
     * @param {ChatUserUpdateArgs} args - Arguments to update one ChatUser.
     * @example
     * // Update one ChatUser
     * const chatUser = await prisma.chatUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUserUpdateArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatUsers.
     * @param {ChatUserDeleteManyArgs} args - Arguments to filter ChatUsers to delete.
     * @example
     * // Delete a few ChatUsers
     * const { count } = await prisma.chatUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatUsers
     * const chatUser = await prisma.chatUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatUser.
     * @param {ChatUserUpsertArgs} args - Arguments to update or create a ChatUser.
     * @example
     * // Update or create a ChatUser
     * const chatUser = await prisma.chatUser.upsert({
     *   create: {
     *     // ... data to create a ChatUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatUser we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUserUpsertArgs<ExtArgs>>
    ): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserCountArgs} args - Arguments to filter ChatUsers to count.
     * @example
     * // Count the number of ChatUsers
     * const count = await prisma.chatUser.count({
     *   where: {
     *     // ... the filter for the ChatUsers we want to count
     *   }
     * })
    **/
    count<T extends ChatUserCountArgs>(
      args?: Subset<T, ChatUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatUserAggregateArgs>(args: Subset<T, ChatUserAggregateArgs>): Prisma.PrismaPromise<GetChatUserAggregateType<T>>

    /**
     * Group by ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserGroupByArgs} args - Group by arguments.
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
      T extends ChatUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatUserGroupByArgs['orderBy'] }
        : { orderBy?: ChatUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatUser model
   */
  readonly fields: ChatUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_plan<T extends UserPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPlanDefaultArgs<ExtArgs>>): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chat_messages<T extends ChatUser$chat_messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatUser$chat_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatUser model
   */ 
  interface ChatUserFieldRefs {
    readonly id: FieldRef<"ChatUser", 'Int'>
    readonly name: FieldRef<"ChatUser", 'String'>
    readonly email: FieldRef<"ChatUser", 'String'>
    readonly user_plan_id: FieldRef<"ChatUser", 'Int'>
    readonly created_at: FieldRef<"ChatUser", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatUser findUnique
   */
  export type ChatUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }


  /**
   * ChatUser findUniqueOrThrow
   */
  export type ChatUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }


  /**
   * ChatUser findFirst
   */
  export type ChatUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }


  /**
   * ChatUser findFirstOrThrow
   */
  export type ChatUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }


  /**
   * ChatUser findMany
   */
  export type ChatUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUsers to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }


  /**
   * ChatUser create
   */
  export type ChatUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatUser.
     */
    data: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
  }


  /**
   * ChatUser createMany
   */
  export type ChatUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatUser update
   */
  export type ChatUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatUser.
     */
    data: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
    /**
     * Choose, which ChatUser to update.
     */
    where: ChatUserWhereUniqueInput
  }


  /**
   * ChatUser updateMany
   */
  export type ChatUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatUsers.
     */
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatUsers to update
     */
    where?: ChatUserWhereInput
  }


  /**
   * ChatUser upsert
   */
  export type ChatUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatUser to update in case it exists.
     */
    where: ChatUserWhereUniqueInput
    /**
     * In case the ChatUser found by the `where` argument doesn't exist, create a new ChatUser with this data.
     */
    create: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
    /**
     * In case the ChatUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
  }


  /**
   * ChatUser delete
   */
  export type ChatUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter which ChatUser to delete.
     */
    where: ChatUserWhereUniqueInput
  }


  /**
   * ChatUser deleteMany
   */
  export type ChatUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUsers to delete
     */
    where?: ChatUserWhereInput
  }


  /**
   * ChatUser.chat_messages
   */
  export type ChatUser$chat_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * ChatUser without action
   */
  export type ChatUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatUserInclude<ExtArgs> | null
  }



  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    chat_user_id: number | null
    user_plan_id: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    chat_user_id: number | null
    user_plan_id: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    is_user_message: boolean | null
    type: $Enums.ChatMessageType | null
    content: string | null
    chat_user_id: number | null
    user_plan_id: number | null
    created_at: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    is_user_message: boolean | null
    type: $Enums.ChatMessageType | null
    content: string | null
    chat_user_id: number | null
    user_plan_id: number | null
    created_at: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    is_user_message: number
    type: number
    content: number
    chat_user_id: number
    user_plan_id: number
    created_at: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    chat_user_id?: true
    user_plan_id?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    chat_user_id?: true
    user_plan_id?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    is_user_message?: true
    type?: true
    content?: true
    chat_user_id?: true
    user_plan_id?: true
    created_at?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    is_user_message?: true
    type?: true
    content?: true
    chat_user_id?: true
    user_plan_id?: true
    created_at?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    is_user_message?: true
    type?: true
    content?: true
    chat_user_id?: true
    user_plan_id?: true
    created_at?: true
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
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
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
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    is_user_message: boolean
    type: $Enums.ChatMessageType
    content: string
    chat_user_id: number
    user_plan_id: number
    created_at: Date
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
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
    is_user_message?: boolean
    type?: boolean
    content?: boolean
    chat_user_id?: boolean
    user_plan_id?: boolean
    created_at?: boolean
    chat_user?: boolean | ChatUserDefaultArgs<ExtArgs>
    user_plan?: boolean | UserPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    is_user_message?: boolean
    type?: boolean
    content?: boolean
    chat_user_id?: boolean
    user_plan_id?: boolean
    created_at?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_user?: boolean | ChatUserDefaultArgs<ExtArgs>
    user_plan?: boolean | UserPlanDefaultArgs<ExtArgs>
  }


  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      chat_user: Prisma.$ChatUserPayload<ExtArgs>
      user_plan: Prisma.$UserPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      is_user_message: boolean
      type: $Enums.ChatMessageType
      content: string
      chat_user_id: number
      user_plan_id: number
      created_at: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }


  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends ChatMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends ChatMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends ChatMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends ChatMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatMessages.
     *     @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     *     @example
     *     // Create many ChatMessages
     *     const chatMessage = await prisma.chatMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends ChatMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends ChatMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends ChatMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends ChatMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends ChatMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chat_user<T extends ChatUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserDefaultArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user_plan<T extends UserPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPlanDefaultArgs<ExtArgs>>): Prisma__UserPlanClient<$Result.GetResult<Prisma.$UserPlanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly is_user_message: FieldRef<"ChatMessage", 'Boolean'>
    readonly type: FieldRef<"ChatMessage", 'ChatMessageType'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly chat_user_id: FieldRef<"ChatMessage", 'Int'>
    readonly user_plan_id: FieldRef<"ChatMessage", 'Int'>
    readonly created_at: FieldRef<"ChatMessage", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    address: 'address',
    code_meli: 'code_meli'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    days: 'days'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const UserPlanScalarFieldEnum: {
    id: 'id',
    plan_id: 'plan_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type UserPlanScalarFieldEnum = (typeof UserPlanScalarFieldEnum)[keyof typeof UserPlanScalarFieldEnum]


  export const ChatUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    user_plan_id: 'user_plan_id',
    created_at: 'created_at'
  };

  export type ChatUserScalarFieldEnum = (typeof ChatUserScalarFieldEnum)[keyof typeof ChatUserScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    is_user_message: 'is_user_message',
    type: 'type',
    content: 'content',
    chat_user_id: 'chat_user_id',
    user_plan_id: 'user_plan_id',
    created_at: 'created_at'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ChatMessageType'
   */
  export type EnumChatMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatMessageType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    code_meli?: StringNullableFilter<"User"> | string | null
    user_plans?: UserPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    code_meli?: SortOrderInput | SortOrder
    user_plans?: UserPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    code_meli?: StringNullableFilter<"User"> | string | null
    user_plans?: UserPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    code_meli?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    code_meli?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: IntFilter<"Plan"> | number
    title?: StringFilter<"Plan"> | string
    price?: IntFilter<"Plan"> | number
    days?: IntFilter<"Plan"> | number
    user_plans?: UserPlanListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    days?: SortOrder
    user_plans?: UserPlanOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    title?: StringFilter<"Plan"> | string
    price?: IntFilter<"Plan"> | number
    days?: IntFilter<"Plan"> | number
    user_plans?: UserPlanListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    days?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plan"> | number
    title?: StringWithAggregatesFilter<"Plan"> | string
    price?: IntWithAggregatesFilter<"Plan"> | number
    days?: IntWithAggregatesFilter<"Plan"> | number
  }

  export type UserPlanWhereInput = {
    AND?: UserPlanWhereInput | UserPlanWhereInput[]
    OR?: UserPlanWhereInput[]
    NOT?: UserPlanWhereInput | UserPlanWhereInput[]
    id?: IntFilter<"UserPlan"> | number
    plan_id?: IntFilter<"UserPlan"> | number
    user_id?: IntFilter<"UserPlan"> | number
    created_at?: DateTimeFilter<"UserPlan"> | Date | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    chat_users?: ChatUserListRelationFilter
    chat_messages?: ChatMessageListRelationFilter
  }

  export type UserPlanOrderByWithRelationInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    plan?: PlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    chat_users?: ChatUserOrderByRelationAggregateInput
    chat_messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type UserPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserPlanWhereInput | UserPlanWhereInput[]
    OR?: UserPlanWhereInput[]
    NOT?: UserPlanWhereInput | UserPlanWhereInput[]
    plan_id?: IntFilter<"UserPlan"> | number
    user_id?: IntFilter<"UserPlan"> | number
    created_at?: DateTimeFilter<"UserPlan"> | Date | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    chat_users?: ChatUserListRelationFilter
    chat_messages?: ChatMessageListRelationFilter
  }, "id">

  export type UserPlanOrderByWithAggregationInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: UserPlanCountOrderByAggregateInput
    _avg?: UserPlanAvgOrderByAggregateInput
    _max?: UserPlanMaxOrderByAggregateInput
    _min?: UserPlanMinOrderByAggregateInput
    _sum?: UserPlanSumOrderByAggregateInput
  }

  export type UserPlanScalarWhereWithAggregatesInput = {
    AND?: UserPlanScalarWhereWithAggregatesInput | UserPlanScalarWhereWithAggregatesInput[]
    OR?: UserPlanScalarWhereWithAggregatesInput[]
    NOT?: UserPlanScalarWhereWithAggregatesInput | UserPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPlan"> | number
    plan_id?: IntWithAggregatesFilter<"UserPlan"> | number
    user_id?: IntWithAggregatesFilter<"UserPlan"> | number
    created_at?: DateTimeWithAggregatesFilter<"UserPlan"> | Date | string
  }

  export type ChatUserWhereInput = {
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    id?: IntFilter<"ChatUser"> | number
    name?: StringNullableFilter<"ChatUser"> | string | null
    email?: StringNullableFilter<"ChatUser"> | string | null
    user_plan_id?: IntFilter<"ChatUser"> | number
    created_at?: DateTimeFilter<"ChatUser"> | Date | string
    user_plan?: XOR<UserPlanRelationFilter, UserPlanWhereInput>
    chat_messages?: ChatMessageListRelationFilter
  }

  export type ChatUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
    user_plan?: UserPlanOrderByWithRelationInput
    chat_messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    name?: StringNullableFilter<"ChatUser"> | string | null
    email?: StringNullableFilter<"ChatUser"> | string | null
    user_plan_id?: IntFilter<"ChatUser"> | number
    created_at?: DateTimeFilter<"ChatUser"> | Date | string
    user_plan?: XOR<UserPlanRelationFilter, UserPlanWhereInput>
    chat_messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
    _count?: ChatUserCountOrderByAggregateInput
    _avg?: ChatUserAvgOrderByAggregateInput
    _max?: ChatUserMaxOrderByAggregateInput
    _min?: ChatUserMinOrderByAggregateInput
    _sum?: ChatUserSumOrderByAggregateInput
  }

  export type ChatUserScalarWhereWithAggregatesInput = {
    AND?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    OR?: ChatUserScalarWhereWithAggregatesInput[]
    NOT?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatUser"> | number
    name?: StringNullableWithAggregatesFilter<"ChatUser"> | string | null
    email?: StringNullableWithAggregatesFilter<"ChatUser"> | string | null
    user_plan_id?: IntWithAggregatesFilter<"ChatUser"> | number
    created_at?: DateTimeWithAggregatesFilter<"ChatUser"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    is_user_message?: BoolFilter<"ChatMessage"> | boolean
    type?: EnumChatMessageTypeFilter<"ChatMessage"> | $Enums.ChatMessageType
    content?: StringFilter<"ChatMessage"> | string
    chat_user_id?: IntFilter<"ChatMessage"> | number
    user_plan_id?: IntFilter<"ChatMessage"> | number
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
    chat_user?: XOR<ChatUserRelationFilter, ChatUserWhereInput>
    user_plan?: XOR<UserPlanRelationFilter, UserPlanWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    is_user_message?: SortOrder
    type?: SortOrder
    content?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
    chat_user?: ChatUserOrderByWithRelationInput
    user_plan?: UserPlanOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    is_user_message?: BoolFilter<"ChatMessage"> | boolean
    type?: EnumChatMessageTypeFilter<"ChatMessage"> | $Enums.ChatMessageType
    content?: StringFilter<"ChatMessage"> | string
    chat_user_id?: IntFilter<"ChatMessage"> | number
    user_plan_id?: IntFilter<"ChatMessage"> | number
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
    chat_user?: XOR<ChatUserRelationFilter, ChatUserWhereInput>
    user_plan?: XOR<UserPlanRelationFilter, UserPlanWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    is_user_message?: SortOrder
    type?: SortOrder
    content?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    is_user_message?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    type?: EnumChatMessageTypeWithAggregatesFilter<"ChatMessage"> | $Enums.ChatMessageType
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    chat_user_id?: IntWithAggregatesFilter<"ChatMessage"> | number
    user_plan_id?: IntWithAggregatesFilter<"ChatMessage"> | number
    created_at?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    address?: string | null
    code_meli?: string | null
    user_plans?: UserPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    address?: string | null
    code_meli?: string | null
    user_plans?: UserPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code_meli?: NullableStringFieldUpdateOperationsInput | string | null
    user_plans?: UserPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code_meli?: NullableStringFieldUpdateOperationsInput | string | null
    user_plans?: UserPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    address?: string | null
    code_meli?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code_meli?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code_meli?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanCreateInput = {
    title: string
    price: number
    days: number
    user_plans?: UserPlanCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: number
    title: string
    price: number
    days: number
    user_plans?: UserPlanUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    user_plans?: UserPlanUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    user_plans?: UserPlanUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: number
    title: string
    price: number
    days: number
  }

  export type PlanUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
  }

  export type UserPlanCreateInput = {
    created_at?: Date | string
    plan: PlanCreateNestedOneWithoutUser_plansInput
    user: UserCreateNestedOneWithoutUser_plansInput
    chat_users?: ChatUserCreateNestedManyWithoutUser_planInput
    chat_messages?: ChatMessageCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanUncheckedCreateInput = {
    id?: number
    plan_id: number
    user_id: number
    created_at?: Date | string
    chat_users?: ChatUserUncheckedCreateNestedManyWithoutUser_planInput
    chat_messages?: ChatMessageUncheckedCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutUser_plansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_plansNestedInput
    chat_users?: ChatUserUpdateManyWithoutUser_planNestedInput
    chat_messages?: ChatMessageUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_users?: ChatUserUncheckedUpdateManyWithoutUser_planNestedInput
    chat_messages?: ChatMessageUncheckedUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanCreateManyInput = {
    id?: number
    plan_id: number
    user_id: number
    created_at?: Date | string
  }

  export type UserPlanUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateInput = {
    name?: string | null
    email?: string | null
    created_at?: Date | string
    user_plan: UserPlanCreateNestedOneWithoutChat_usersInput
    chat_messages?: ChatMessageCreateNestedManyWithoutChat_userInput
  }

  export type ChatUserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    user_plan_id: number
    created_at?: Date | string
    chat_messages?: ChatMessageUncheckedCreateNestedManyWithoutChat_userInput
  }

  export type ChatUserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_plan?: UserPlanUpdateOneRequiredWithoutChat_usersNestedInput
    chat_messages?: ChatMessageUpdateManyWithoutChat_userNestedInput
  }

  export type ChatUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_messages?: ChatMessageUncheckedUpdateManyWithoutChat_userNestedInput
  }

  export type ChatUserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    user_plan_id: number
    created_at?: Date | string
  }

  export type ChatUserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    created_at?: Date | string
    chat_user: ChatUserCreateNestedOneWithoutChat_messagesInput
    user_plan: UserPlanCreateNestedOneWithoutChat_messagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    chat_user_id: number
    user_plan_id: number
    created_at?: Date | string
  }

  export type ChatMessageUpdateInput = {
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_user?: ChatUserUpdateOneRequiredWithoutChat_messagesNestedInput
    user_plan?: UserPlanUpdateOneRequiredWithoutChat_messagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    chat_user_id?: IntFieldUpdateOperationsInput | number
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    chat_user_id: number
    user_plan_id: number
    created_at?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    chat_user_id?: IntFieldUpdateOperationsInput | number
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserPlanListRelationFilter = {
    every?: UserPlanWhereInput
    some?: UserPlanWhereInput
    none?: UserPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    code_meli?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    code_meli?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    code_meli?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    days?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    days?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    days?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    days?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    days?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatUserListRelationFilter = {
    every?: ChatUserWhereInput
    some?: ChatUserWhereInput
    none?: ChatUserWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPlanCountOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
  }

  export type UserPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserPlanMinOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserPlanSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserPlanRelationFilter = {
    is?: UserPlanWhereInput
    isNot?: UserPlanWhereInput
  }

  export type ChatUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
  }

  export type ChatUserAvgOrderByAggregateInput = {
    id?: SortOrder
    user_plan_id?: SortOrder
  }

  export type ChatUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
  }

  export type ChatUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
  }

  export type ChatUserSumOrderByAggregateInput = {
    id?: SortOrder
    user_plan_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumChatMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[]
    notIn?: $Enums.ChatMessageType[]
    not?: NestedEnumChatMessageTypeFilter<$PrismaModel> | $Enums.ChatMessageType
  }

  export type ChatUserRelationFilter = {
    is?: ChatUserWhereInput
    isNot?: ChatUserWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    is_user_message?: SortOrder
    type?: SortOrder
    content?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    is_user_message?: SortOrder
    type?: SortOrder
    content?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    is_user_message?: SortOrder
    type?: SortOrder
    content?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    chat_user_id?: SortOrder
    user_plan_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumChatMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[]
    notIn?: $Enums.ChatMessageType[]
    not?: NestedEnumChatMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChatMessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumChatMessageTypeFilter<$PrismaModel>
  }

  export type UserPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlanCreateWithoutUserInput, UserPlanUncheckedCreateWithoutUserInput> | UserPlanCreateWithoutUserInput[] | UserPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutUserInput | UserPlanCreateOrConnectWithoutUserInput[]
    createMany?: UserPlanCreateManyUserInputEnvelope
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
  }

  export type UserPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlanCreateWithoutUserInput, UserPlanUncheckedCreateWithoutUserInput> | UserPlanCreateWithoutUserInput[] | UserPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutUserInput | UserPlanCreateOrConnectWithoutUserInput[]
    createMany?: UserPlanCreateManyUserInputEnvelope
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlanCreateWithoutUserInput, UserPlanUncheckedCreateWithoutUserInput> | UserPlanCreateWithoutUserInput[] | UserPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutUserInput | UserPlanCreateOrConnectWithoutUserInput[]
    upsert?: UserPlanUpsertWithWhereUniqueWithoutUserInput | UserPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlanCreateManyUserInputEnvelope
    set?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    disconnect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    delete?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    update?: UserPlanUpdateWithWhereUniqueWithoutUserInput | UserPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlanUpdateManyWithWhereWithoutUserInput | UserPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlanScalarWhereInput | UserPlanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlanCreateWithoutUserInput, UserPlanUncheckedCreateWithoutUserInput> | UserPlanCreateWithoutUserInput[] | UserPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutUserInput | UserPlanCreateOrConnectWithoutUserInput[]
    upsert?: UserPlanUpsertWithWhereUniqueWithoutUserInput | UserPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlanCreateManyUserInputEnvelope
    set?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    disconnect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    delete?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    update?: UserPlanUpdateWithWhereUniqueWithoutUserInput | UserPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlanUpdateManyWithWhereWithoutUserInput | UserPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlanScalarWhereInput | UserPlanScalarWhereInput[]
  }

  export type UserPlanCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserPlanCreateWithoutPlanInput, UserPlanUncheckedCreateWithoutPlanInput> | UserPlanCreateWithoutPlanInput[] | UserPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutPlanInput | UserPlanCreateOrConnectWithoutPlanInput[]
    createMany?: UserPlanCreateManyPlanInputEnvelope
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
  }

  export type UserPlanUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserPlanCreateWithoutPlanInput, UserPlanUncheckedCreateWithoutPlanInput> | UserPlanCreateWithoutPlanInput[] | UserPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutPlanInput | UserPlanCreateOrConnectWithoutPlanInput[]
    createMany?: UserPlanCreateManyPlanInputEnvelope
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
  }

  export type UserPlanUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserPlanCreateWithoutPlanInput, UserPlanUncheckedCreateWithoutPlanInput> | UserPlanCreateWithoutPlanInput[] | UserPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutPlanInput | UserPlanCreateOrConnectWithoutPlanInput[]
    upsert?: UserPlanUpsertWithWhereUniqueWithoutPlanInput | UserPlanUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserPlanCreateManyPlanInputEnvelope
    set?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    disconnect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    delete?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    update?: UserPlanUpdateWithWhereUniqueWithoutPlanInput | UserPlanUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserPlanUpdateManyWithWhereWithoutPlanInput | UserPlanUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserPlanScalarWhereInput | UserPlanScalarWhereInput[]
  }

  export type UserPlanUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserPlanCreateWithoutPlanInput, UserPlanUncheckedCreateWithoutPlanInput> | UserPlanCreateWithoutPlanInput[] | UserPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlanCreateOrConnectWithoutPlanInput | UserPlanCreateOrConnectWithoutPlanInput[]
    upsert?: UserPlanUpsertWithWhereUniqueWithoutPlanInput | UserPlanUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserPlanCreateManyPlanInputEnvelope
    set?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    disconnect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    delete?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    connect?: UserPlanWhereUniqueInput | UserPlanWhereUniqueInput[]
    update?: UserPlanUpdateWithWhereUniqueWithoutPlanInput | UserPlanUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserPlanUpdateManyWithWhereWithoutPlanInput | UserPlanUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserPlanScalarWhereInput | UserPlanScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutUser_plansInput = {
    create?: XOR<PlanCreateWithoutUser_plansInput, PlanUncheckedCreateWithoutUser_plansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutUser_plansInput
    connect?: PlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUser_plansInput = {
    create?: XOR<UserCreateWithoutUser_plansInput, UserUncheckedCreateWithoutUser_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_plansInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUserCreateNestedManyWithoutUser_planInput = {
    create?: XOR<ChatUserCreateWithoutUser_planInput, ChatUserUncheckedCreateWithoutUser_planInput> | ChatUserCreateWithoutUser_planInput[] | ChatUserUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUser_planInput | ChatUserCreateOrConnectWithoutUser_planInput[]
    createMany?: ChatUserCreateManyUser_planInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUser_planInput = {
    create?: XOR<ChatMessageCreateWithoutUser_planInput, ChatMessageUncheckedCreateWithoutUser_planInput> | ChatMessageCreateWithoutUser_planInput[] | ChatMessageUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUser_planInput | ChatMessageCreateOrConnectWithoutUser_planInput[]
    createMany?: ChatMessageCreateManyUser_planInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatUserUncheckedCreateNestedManyWithoutUser_planInput = {
    create?: XOR<ChatUserCreateWithoutUser_planInput, ChatUserUncheckedCreateWithoutUser_planInput> | ChatUserCreateWithoutUser_planInput[] | ChatUserUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUser_planInput | ChatUserCreateOrConnectWithoutUser_planInput[]
    createMany?: ChatUserCreateManyUser_planInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUser_planInput = {
    create?: XOR<ChatMessageCreateWithoutUser_planInput, ChatMessageUncheckedCreateWithoutUser_planInput> | ChatMessageCreateWithoutUser_planInput[] | ChatMessageUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUser_planInput | ChatMessageCreateOrConnectWithoutUser_planInput[]
    createMany?: ChatMessageCreateManyUser_planInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlanUpdateOneRequiredWithoutUser_plansNestedInput = {
    create?: XOR<PlanCreateWithoutUser_plansInput, PlanUncheckedCreateWithoutUser_plansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutUser_plansInput
    upsert?: PlanUpsertWithoutUser_plansInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutUser_plansInput, PlanUpdateWithoutUser_plansInput>, PlanUncheckedUpdateWithoutUser_plansInput>
  }

  export type UserUpdateOneRequiredWithoutUser_plansNestedInput = {
    create?: XOR<UserCreateWithoutUser_plansInput, UserUncheckedCreateWithoutUser_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_plansInput
    upsert?: UserUpsertWithoutUser_plansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_plansInput, UserUpdateWithoutUser_plansInput>, UserUncheckedUpdateWithoutUser_plansInput>
  }

  export type ChatUserUpdateManyWithoutUser_planNestedInput = {
    create?: XOR<ChatUserCreateWithoutUser_planInput, ChatUserUncheckedCreateWithoutUser_planInput> | ChatUserCreateWithoutUser_planInput[] | ChatUserUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUser_planInput | ChatUserCreateOrConnectWithoutUser_planInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutUser_planInput | ChatUserUpsertWithWhereUniqueWithoutUser_planInput[]
    createMany?: ChatUserCreateManyUser_planInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutUser_planInput | ChatUserUpdateWithWhereUniqueWithoutUser_planInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutUser_planInput | ChatUserUpdateManyWithWhereWithoutUser_planInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUser_planNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUser_planInput, ChatMessageUncheckedCreateWithoutUser_planInput> | ChatMessageCreateWithoutUser_planInput[] | ChatMessageUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUser_planInput | ChatMessageCreateOrConnectWithoutUser_planInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUser_planInput | ChatMessageUpsertWithWhereUniqueWithoutUser_planInput[]
    createMany?: ChatMessageCreateManyUser_planInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUser_planInput | ChatMessageUpdateWithWhereUniqueWithoutUser_planInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUser_planInput | ChatMessageUpdateManyWithWhereWithoutUser_planInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatUserUncheckedUpdateManyWithoutUser_planNestedInput = {
    create?: XOR<ChatUserCreateWithoutUser_planInput, ChatUserUncheckedCreateWithoutUser_planInput> | ChatUserCreateWithoutUser_planInput[] | ChatUserUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUser_planInput | ChatUserCreateOrConnectWithoutUser_planInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutUser_planInput | ChatUserUpsertWithWhereUniqueWithoutUser_planInput[]
    createMany?: ChatUserCreateManyUser_planInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutUser_planInput | ChatUserUpdateWithWhereUniqueWithoutUser_planInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutUser_planInput | ChatUserUpdateManyWithWhereWithoutUser_planInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUser_planNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUser_planInput, ChatMessageUncheckedCreateWithoutUser_planInput> | ChatMessageCreateWithoutUser_planInput[] | ChatMessageUncheckedCreateWithoutUser_planInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUser_planInput | ChatMessageCreateOrConnectWithoutUser_planInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUser_planInput | ChatMessageUpsertWithWhereUniqueWithoutUser_planInput[]
    createMany?: ChatMessageCreateManyUser_planInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUser_planInput | ChatMessageUpdateWithWhereUniqueWithoutUser_planInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUser_planInput | ChatMessageUpdateManyWithWhereWithoutUser_planInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserPlanCreateNestedOneWithoutChat_usersInput = {
    create?: XOR<UserPlanCreateWithoutChat_usersInput, UserPlanUncheckedCreateWithoutChat_usersInput>
    connectOrCreate?: UserPlanCreateOrConnectWithoutChat_usersInput
    connect?: UserPlanWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutChat_userInput = {
    create?: XOR<ChatMessageCreateWithoutChat_userInput, ChatMessageUncheckedCreateWithoutChat_userInput> | ChatMessageCreateWithoutChat_userInput[] | ChatMessageUncheckedCreateWithoutChat_userInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChat_userInput | ChatMessageCreateOrConnectWithoutChat_userInput[]
    createMany?: ChatMessageCreateManyChat_userInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChat_userInput = {
    create?: XOR<ChatMessageCreateWithoutChat_userInput, ChatMessageUncheckedCreateWithoutChat_userInput> | ChatMessageCreateWithoutChat_userInput[] | ChatMessageUncheckedCreateWithoutChat_userInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChat_userInput | ChatMessageCreateOrConnectWithoutChat_userInput[]
    createMany?: ChatMessageCreateManyChat_userInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserPlanUpdateOneRequiredWithoutChat_usersNestedInput = {
    create?: XOR<UserPlanCreateWithoutChat_usersInput, UserPlanUncheckedCreateWithoutChat_usersInput>
    connectOrCreate?: UserPlanCreateOrConnectWithoutChat_usersInput
    upsert?: UserPlanUpsertWithoutChat_usersInput
    connect?: UserPlanWhereUniqueInput
    update?: XOR<XOR<UserPlanUpdateToOneWithWhereWithoutChat_usersInput, UserPlanUpdateWithoutChat_usersInput>, UserPlanUncheckedUpdateWithoutChat_usersInput>
  }

  export type ChatMessageUpdateManyWithoutChat_userNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChat_userInput, ChatMessageUncheckedCreateWithoutChat_userInput> | ChatMessageCreateWithoutChat_userInput[] | ChatMessageUncheckedCreateWithoutChat_userInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChat_userInput | ChatMessageCreateOrConnectWithoutChat_userInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChat_userInput | ChatMessageUpsertWithWhereUniqueWithoutChat_userInput[]
    createMany?: ChatMessageCreateManyChat_userInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChat_userInput | ChatMessageUpdateWithWhereUniqueWithoutChat_userInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChat_userInput | ChatMessageUpdateManyWithWhereWithoutChat_userInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChat_userNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChat_userInput, ChatMessageUncheckedCreateWithoutChat_userInput> | ChatMessageCreateWithoutChat_userInput[] | ChatMessageUncheckedCreateWithoutChat_userInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChat_userInput | ChatMessageCreateOrConnectWithoutChat_userInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChat_userInput | ChatMessageUpsertWithWhereUniqueWithoutChat_userInput[]
    createMany?: ChatMessageCreateManyChat_userInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChat_userInput | ChatMessageUpdateWithWhereUniqueWithoutChat_userInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChat_userInput | ChatMessageUpdateManyWithWhereWithoutChat_userInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatUserCreateNestedOneWithoutChat_messagesInput = {
    create?: XOR<ChatUserCreateWithoutChat_messagesInput, ChatUserUncheckedCreateWithoutChat_messagesInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutChat_messagesInput
    connect?: ChatUserWhereUniqueInput
  }

  export type UserPlanCreateNestedOneWithoutChat_messagesInput = {
    create?: XOR<UserPlanCreateWithoutChat_messagesInput, UserPlanUncheckedCreateWithoutChat_messagesInput>
    connectOrCreate?: UserPlanCreateOrConnectWithoutChat_messagesInput
    connect?: UserPlanWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumChatMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChatMessageType
  }

  export type ChatUserUpdateOneRequiredWithoutChat_messagesNestedInput = {
    create?: XOR<ChatUserCreateWithoutChat_messagesInput, ChatUserUncheckedCreateWithoutChat_messagesInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutChat_messagesInput
    upsert?: ChatUserUpsertWithoutChat_messagesInput
    connect?: ChatUserWhereUniqueInput
    update?: XOR<XOR<ChatUserUpdateToOneWithWhereWithoutChat_messagesInput, ChatUserUpdateWithoutChat_messagesInput>, ChatUserUncheckedUpdateWithoutChat_messagesInput>
  }

  export type UserPlanUpdateOneRequiredWithoutChat_messagesNestedInput = {
    create?: XOR<UserPlanCreateWithoutChat_messagesInput, UserPlanUncheckedCreateWithoutChat_messagesInput>
    connectOrCreate?: UserPlanCreateOrConnectWithoutChat_messagesInput
    upsert?: UserPlanUpsertWithoutChat_messagesInput
    connect?: UserPlanWhereUniqueInput
    update?: XOR<XOR<UserPlanUpdateToOneWithWhereWithoutChat_messagesInput, UserPlanUpdateWithoutChat_messagesInput>, UserPlanUncheckedUpdateWithoutChat_messagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumChatMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[]
    notIn?: $Enums.ChatMessageType[]
    not?: NestedEnumChatMessageTypeFilter<$PrismaModel> | $Enums.ChatMessageType
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumChatMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[]
    notIn?: $Enums.ChatMessageType[]
    not?: NestedEnumChatMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChatMessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumChatMessageTypeFilter<$PrismaModel>
  }

  export type UserPlanCreateWithoutUserInput = {
    created_at?: Date | string
    plan: PlanCreateNestedOneWithoutUser_plansInput
    chat_users?: ChatUserCreateNestedManyWithoutUser_planInput
    chat_messages?: ChatMessageCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanUncheckedCreateWithoutUserInput = {
    id?: number
    plan_id: number
    created_at?: Date | string
    chat_users?: ChatUserUncheckedCreateNestedManyWithoutUser_planInput
    chat_messages?: ChatMessageUncheckedCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanCreateOrConnectWithoutUserInput = {
    where: UserPlanWhereUniqueInput
    create: XOR<UserPlanCreateWithoutUserInput, UserPlanUncheckedCreateWithoutUserInput>
  }

  export type UserPlanCreateManyUserInputEnvelope = {
    data: UserPlanCreateManyUserInput | UserPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPlanWhereUniqueInput
    update: XOR<UserPlanUpdateWithoutUserInput, UserPlanUncheckedUpdateWithoutUserInput>
    create: XOR<UserPlanCreateWithoutUserInput, UserPlanUncheckedCreateWithoutUserInput>
  }

  export type UserPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPlanWhereUniqueInput
    data: XOR<UserPlanUpdateWithoutUserInput, UserPlanUncheckedUpdateWithoutUserInput>
  }

  export type UserPlanUpdateManyWithWhereWithoutUserInput = {
    where: UserPlanScalarWhereInput
    data: XOR<UserPlanUpdateManyMutationInput, UserPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPlanScalarWhereInput = {
    AND?: UserPlanScalarWhereInput | UserPlanScalarWhereInput[]
    OR?: UserPlanScalarWhereInput[]
    NOT?: UserPlanScalarWhereInput | UserPlanScalarWhereInput[]
    id?: IntFilter<"UserPlan"> | number
    plan_id?: IntFilter<"UserPlan"> | number
    user_id?: IntFilter<"UserPlan"> | number
    created_at?: DateTimeFilter<"UserPlan"> | Date | string
  }

  export type UserPlanCreateWithoutPlanInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutUser_plansInput
    chat_users?: ChatUserCreateNestedManyWithoutUser_planInput
    chat_messages?: ChatMessageCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanUncheckedCreateWithoutPlanInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    chat_users?: ChatUserUncheckedCreateNestedManyWithoutUser_planInput
    chat_messages?: ChatMessageUncheckedCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanCreateOrConnectWithoutPlanInput = {
    where: UserPlanWhereUniqueInput
    create: XOR<UserPlanCreateWithoutPlanInput, UserPlanUncheckedCreateWithoutPlanInput>
  }

  export type UserPlanCreateManyPlanInputEnvelope = {
    data: UserPlanCreateManyPlanInput | UserPlanCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserPlanUpsertWithWhereUniqueWithoutPlanInput = {
    where: UserPlanWhereUniqueInput
    update: XOR<UserPlanUpdateWithoutPlanInput, UserPlanUncheckedUpdateWithoutPlanInput>
    create: XOR<UserPlanCreateWithoutPlanInput, UserPlanUncheckedCreateWithoutPlanInput>
  }

  export type UserPlanUpdateWithWhereUniqueWithoutPlanInput = {
    where: UserPlanWhereUniqueInput
    data: XOR<UserPlanUpdateWithoutPlanInput, UserPlanUncheckedUpdateWithoutPlanInput>
  }

  export type UserPlanUpdateManyWithWhereWithoutPlanInput = {
    where: UserPlanScalarWhereInput
    data: XOR<UserPlanUpdateManyMutationInput, UserPlanUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanCreateWithoutUser_plansInput = {
    title: string
    price: number
    days: number
  }

  export type PlanUncheckedCreateWithoutUser_plansInput = {
    id?: number
    title: string
    price: number
    days: number
  }

  export type PlanCreateOrConnectWithoutUser_plansInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutUser_plansInput, PlanUncheckedCreateWithoutUser_plansInput>
  }

  export type UserCreateWithoutUser_plansInput = {
    name: string
    email: string
    password: string
    address?: string | null
    code_meli?: string | null
  }

  export type UserUncheckedCreateWithoutUser_plansInput = {
    id?: number
    name: string
    email: string
    password: string
    address?: string | null
    code_meli?: string | null
  }

  export type UserCreateOrConnectWithoutUser_plansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_plansInput, UserUncheckedCreateWithoutUser_plansInput>
  }

  export type ChatUserCreateWithoutUser_planInput = {
    name?: string | null
    email?: string | null
    created_at?: Date | string
    chat_messages?: ChatMessageCreateNestedManyWithoutChat_userInput
  }

  export type ChatUserUncheckedCreateWithoutUser_planInput = {
    id?: number
    name?: string | null
    email?: string | null
    created_at?: Date | string
    chat_messages?: ChatMessageUncheckedCreateNestedManyWithoutChat_userInput
  }

  export type ChatUserCreateOrConnectWithoutUser_planInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutUser_planInput, ChatUserUncheckedCreateWithoutUser_planInput>
  }

  export type ChatUserCreateManyUser_planInputEnvelope = {
    data: ChatUserCreateManyUser_planInput | ChatUserCreateManyUser_planInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUser_planInput = {
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    created_at?: Date | string
    chat_user: ChatUserCreateNestedOneWithoutChat_messagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUser_planInput = {
    id?: number
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    chat_user_id: number
    created_at?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUser_planInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUser_planInput, ChatMessageUncheckedCreateWithoutUser_planInput>
  }

  export type ChatMessageCreateManyUser_planInputEnvelope = {
    data: ChatMessageCreateManyUser_planInput | ChatMessageCreateManyUser_planInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutUser_plansInput = {
    update: XOR<PlanUpdateWithoutUser_plansInput, PlanUncheckedUpdateWithoutUser_plansInput>
    create: XOR<PlanCreateWithoutUser_plansInput, PlanUncheckedCreateWithoutUser_plansInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutUser_plansInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutUser_plansInput, PlanUncheckedUpdateWithoutUser_plansInput>
  }

  export type PlanUpdateWithoutUser_plansInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
  }

  export type PlanUncheckedUpdateWithoutUser_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutUser_plansInput = {
    update: XOR<UserUpdateWithoutUser_plansInput, UserUncheckedUpdateWithoutUser_plansInput>
    create: XOR<UserCreateWithoutUser_plansInput, UserUncheckedCreateWithoutUser_plansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_plansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_plansInput, UserUncheckedUpdateWithoutUser_plansInput>
  }

  export type UserUpdateWithoutUser_plansInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code_meli?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutUser_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code_meli?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatUserUpsertWithWhereUniqueWithoutUser_planInput = {
    where: ChatUserWhereUniqueInput
    update: XOR<ChatUserUpdateWithoutUser_planInput, ChatUserUncheckedUpdateWithoutUser_planInput>
    create: XOR<ChatUserCreateWithoutUser_planInput, ChatUserUncheckedCreateWithoutUser_planInput>
  }

  export type ChatUserUpdateWithWhereUniqueWithoutUser_planInput = {
    where: ChatUserWhereUniqueInput
    data: XOR<ChatUserUpdateWithoutUser_planInput, ChatUserUncheckedUpdateWithoutUser_planInput>
  }

  export type ChatUserUpdateManyWithWhereWithoutUser_planInput = {
    where: ChatUserScalarWhereInput
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyWithoutUser_planInput>
  }

  export type ChatUserScalarWhereInput = {
    AND?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
    OR?: ChatUserScalarWhereInput[]
    NOT?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
    id?: IntFilter<"ChatUser"> | number
    name?: StringNullableFilter<"ChatUser"> | string | null
    email?: StringNullableFilter<"ChatUser"> | string | null
    user_plan_id?: IntFilter<"ChatUser"> | number
    created_at?: DateTimeFilter<"ChatUser"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUser_planInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUser_planInput, ChatMessageUncheckedUpdateWithoutUser_planInput>
    create: XOR<ChatMessageCreateWithoutUser_planInput, ChatMessageUncheckedCreateWithoutUser_planInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUser_planInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUser_planInput, ChatMessageUncheckedUpdateWithoutUser_planInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUser_planInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUser_planInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    is_user_message?: BoolFilter<"ChatMessage"> | boolean
    type?: EnumChatMessageTypeFilter<"ChatMessage"> | $Enums.ChatMessageType
    content?: StringFilter<"ChatMessage"> | string
    chat_user_id?: IntFilter<"ChatMessage"> | number
    user_plan_id?: IntFilter<"ChatMessage"> | number
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type UserPlanCreateWithoutChat_usersInput = {
    created_at?: Date | string
    plan: PlanCreateNestedOneWithoutUser_plansInput
    user: UserCreateNestedOneWithoutUser_plansInput
    chat_messages?: ChatMessageCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanUncheckedCreateWithoutChat_usersInput = {
    id?: number
    plan_id: number
    user_id: number
    created_at?: Date | string
    chat_messages?: ChatMessageUncheckedCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanCreateOrConnectWithoutChat_usersInput = {
    where: UserPlanWhereUniqueInput
    create: XOR<UserPlanCreateWithoutChat_usersInput, UserPlanUncheckedCreateWithoutChat_usersInput>
  }

  export type ChatMessageCreateWithoutChat_userInput = {
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    created_at?: Date | string
    user_plan: UserPlanCreateNestedOneWithoutChat_messagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChat_userInput = {
    id?: number
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    user_plan_id: number
    created_at?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutChat_userInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChat_userInput, ChatMessageUncheckedCreateWithoutChat_userInput>
  }

  export type ChatMessageCreateManyChat_userInputEnvelope = {
    data: ChatMessageCreateManyChat_userInput | ChatMessageCreateManyChat_userInput[]
    skipDuplicates?: boolean
  }

  export type UserPlanUpsertWithoutChat_usersInput = {
    update: XOR<UserPlanUpdateWithoutChat_usersInput, UserPlanUncheckedUpdateWithoutChat_usersInput>
    create: XOR<UserPlanCreateWithoutChat_usersInput, UserPlanUncheckedCreateWithoutChat_usersInput>
    where?: UserPlanWhereInput
  }

  export type UserPlanUpdateToOneWithWhereWithoutChat_usersInput = {
    where?: UserPlanWhereInput
    data: XOR<UserPlanUpdateWithoutChat_usersInput, UserPlanUncheckedUpdateWithoutChat_usersInput>
  }

  export type UserPlanUpdateWithoutChat_usersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutUser_plansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_plansNestedInput
    chat_messages?: ChatMessageUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateWithoutChat_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_messages?: ChatMessageUncheckedUpdateManyWithoutUser_planNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChat_userInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChat_userInput, ChatMessageUncheckedUpdateWithoutChat_userInput>
    create: XOR<ChatMessageCreateWithoutChat_userInput, ChatMessageUncheckedCreateWithoutChat_userInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChat_userInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChat_userInput, ChatMessageUncheckedUpdateWithoutChat_userInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChat_userInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChat_userInput>
  }

  export type ChatUserCreateWithoutChat_messagesInput = {
    name?: string | null
    email?: string | null
    created_at?: Date | string
    user_plan: UserPlanCreateNestedOneWithoutChat_usersInput
  }

  export type ChatUserUncheckedCreateWithoutChat_messagesInput = {
    id?: number
    name?: string | null
    email?: string | null
    user_plan_id: number
    created_at?: Date | string
  }

  export type ChatUserCreateOrConnectWithoutChat_messagesInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutChat_messagesInput, ChatUserUncheckedCreateWithoutChat_messagesInput>
  }

  export type UserPlanCreateWithoutChat_messagesInput = {
    created_at?: Date | string
    plan: PlanCreateNestedOneWithoutUser_plansInput
    user: UserCreateNestedOneWithoutUser_plansInput
    chat_users?: ChatUserCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanUncheckedCreateWithoutChat_messagesInput = {
    id?: number
    plan_id: number
    user_id: number
    created_at?: Date | string
    chat_users?: ChatUserUncheckedCreateNestedManyWithoutUser_planInput
  }

  export type UserPlanCreateOrConnectWithoutChat_messagesInput = {
    where: UserPlanWhereUniqueInput
    create: XOR<UserPlanCreateWithoutChat_messagesInput, UserPlanUncheckedCreateWithoutChat_messagesInput>
  }

  export type ChatUserUpsertWithoutChat_messagesInput = {
    update: XOR<ChatUserUpdateWithoutChat_messagesInput, ChatUserUncheckedUpdateWithoutChat_messagesInput>
    create: XOR<ChatUserCreateWithoutChat_messagesInput, ChatUserUncheckedCreateWithoutChat_messagesInput>
    where?: ChatUserWhereInput
  }

  export type ChatUserUpdateToOneWithWhereWithoutChat_messagesInput = {
    where?: ChatUserWhereInput
    data: XOR<ChatUserUpdateWithoutChat_messagesInput, ChatUserUncheckedUpdateWithoutChat_messagesInput>
  }

  export type ChatUserUpdateWithoutChat_messagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_plan?: UserPlanUpdateOneRequiredWithoutChat_usersNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutChat_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlanUpsertWithoutChat_messagesInput = {
    update: XOR<UserPlanUpdateWithoutChat_messagesInput, UserPlanUncheckedUpdateWithoutChat_messagesInput>
    create: XOR<UserPlanCreateWithoutChat_messagesInput, UserPlanUncheckedCreateWithoutChat_messagesInput>
    where?: UserPlanWhereInput
  }

  export type UserPlanUpdateToOneWithWhereWithoutChat_messagesInput = {
    where?: UserPlanWhereInput
    data: XOR<UserPlanUpdateWithoutChat_messagesInput, UserPlanUncheckedUpdateWithoutChat_messagesInput>
  }

  export type UserPlanUpdateWithoutChat_messagesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutUser_plansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_plansNestedInput
    chat_users?: ChatUserUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateWithoutChat_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_users?: ChatUserUncheckedUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanCreateManyUserInput = {
    id?: number
    plan_id: number
    created_at?: Date | string
  }

  export type UserPlanUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutUser_plansNestedInput
    chat_users?: ChatUserUpdateManyWithoutUser_planNestedInput
    chat_messages?: ChatMessageUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_users?: ChatUserUncheckedUpdateManyWithoutUser_planNestedInput
    chat_messages?: ChatMessageUncheckedUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlanCreateManyPlanInput = {
    id?: number
    user_id: number
    created_at?: Date | string
  }

  export type UserPlanUpdateWithoutPlanInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_plansNestedInput
    chat_users?: ChatUserUpdateManyWithoutUser_planNestedInput
    chat_messages?: ChatMessageUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_users?: ChatUserUncheckedUpdateManyWithoutUser_planNestedInput
    chat_messages?: ChatMessageUncheckedUpdateManyWithoutUser_planNestedInput
  }

  export type UserPlanUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateManyUser_planInput = {
    id?: number
    name?: string | null
    email?: string | null
    created_at?: Date | string
  }

  export type ChatMessageCreateManyUser_planInput = {
    id?: number
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    chat_user_id: number
    created_at?: Date | string
  }

  export type ChatUserUpdateWithoutUser_planInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_messages?: ChatMessageUpdateManyWithoutChat_userNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutUser_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_messages?: ChatMessageUncheckedUpdateManyWithoutChat_userNestedInput
  }

  export type ChatUserUncheckedUpdateManyWithoutUser_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUser_planInput = {
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_user?: ChatUserUpdateOneRequiredWithoutChat_messagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUser_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    chat_user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUser_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    chat_user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChat_userInput = {
    id?: number
    is_user_message: boolean
    type?: $Enums.ChatMessageType
    content: string
    user_plan_id: number
    created_at?: Date | string
  }

  export type ChatMessageUpdateWithoutChat_userInput = {
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_plan?: UserPlanUpdateOneRequiredWithoutChat_messagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChat_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChat_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_user_message?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    content?: StringFieldUpdateOperationsInput | string
    user_plan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPlanCountOutputTypeDefaultArgs instead
     */
    export type UserPlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatUserCountOutputTypeDefaultArgs instead
     */
    export type ChatUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPlanDefaultArgs instead
     */
    export type UserPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatUserDefaultArgs instead
     */
    export type ChatUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>

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