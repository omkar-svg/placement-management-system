
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentSkill
 * 
 */
export type StudentSkill = $Result.DefaultSelection<Prisma.$StudentSkillPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model PlacementDrive
 * 
 */
export type PlacementDrive = $Result.DefaultSelection<Prisma.$PlacementDrivePayload>
/**
 * Model EligibilityCriteria
 * 
 */
export type EligibilityCriteria = $Result.DefaultSelection<Prisma.$EligibilityCriteriaPayload>
/**
 * Model EligibleBranch
 * 
 */
export type EligibleBranch = $Result.DefaultSelection<Prisma.$EligibleBranchPayload>
/**
 * Model PlacementStatus
 * 
 */
export type PlacementStatus = $Result.DefaultSelection<Prisma.$PlacementStatusPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TPO: 'TPO',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DriveStatus: {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED'
};

export type DriveStatus = (typeof DriveStatus)[keyof typeof DriveStatus]


export const StudentStatus: {
  ELIGIBLE: 'ELIGIBLE',
  SHORTLISTED: 'SHORTLISTED',
  INTERVIEW_SCHEDULED: 'INTERVIEW_SCHEDULED',
  SELECTED: 'SELECTED',
  REJECTED: 'REJECTED',
  OFFER_ACCEPTED: 'OFFER_ACCEPTED'
};

export type StudentStatus = (typeof StudentStatus)[keyof typeof StudentStatus]


export const NotificationType: {
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  COMPANY: 'COMPANY',
  DRIVE: 'DRIVE',
  REMINDER: 'REMINDER'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DriveStatus = $Enums.DriveStatus

export const DriveStatus: typeof $Enums.DriveStatus

export type StudentStatus = $Enums.StudentStatus

export const StudentStatus: typeof $Enums.StudentStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSkill`: Exposes CRUD operations for the **StudentSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSkills
    * const studentSkills = await prisma.studentSkill.findMany()
    * ```
    */
  get studentSkill(): Prisma.StudentSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placementDrive`: Exposes CRUD operations for the **PlacementDrive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlacementDrives
    * const placementDrives = await prisma.placementDrive.findMany()
    * ```
    */
  get placementDrive(): Prisma.PlacementDriveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eligibilityCriteria`: Exposes CRUD operations for the **EligibilityCriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EligibilityCriteria
    * const eligibilityCriteria = await prisma.eligibilityCriteria.findMany()
    * ```
    */
  get eligibilityCriteria(): Prisma.EligibilityCriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eligibleBranch`: Exposes CRUD operations for the **EligibleBranch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EligibleBranches
    * const eligibleBranches = await prisma.eligibleBranch.findMany()
    * ```
    */
  get eligibleBranch(): Prisma.EligibleBranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placementStatus`: Exposes CRUD operations for the **PlacementStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlacementStatuses
    * const placementStatuses = await prisma.placementStatus.findMany()
    * ```
    */
  get placementStatus(): Prisma.PlacementStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Student: 'Student',
    StudentSkill: 'StudentSkill',
    Company: 'Company',
    PlacementDrive: 'PlacementDrive',
    EligibilityCriteria: 'EligibilityCriteria',
    EligibleBranch: 'EligibleBranch',
    PlacementStatus: 'PlacementStatus',
    Notification: 'Notification',
    Resume: 'Resume'
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
      modelProps: "user" | "student" | "studentSkill" | "company" | "placementDrive" | "eligibilityCriteria" | "eligibleBranch" | "placementStatus" | "notification" | "resume"
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
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentSkill: {
        payload: Prisma.$StudentSkillPayload<ExtArgs>
        fields: Prisma.StudentSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          findFirst: {
            args: Prisma.StudentSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          findMany: {
            args: Prisma.StudentSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>[]
          }
          create: {
            args: Prisma.StudentSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          createMany: {
            args: Prisma.StudentSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          update: {
            args: Prisma.StudentSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          deleteMany: {
            args: Prisma.StudentSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSkillPayload>
          }
          aggregate: {
            args: Prisma.StudentSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSkill>
          }
          groupBy: {
            args: Prisma.StudentSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSkillCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSkillCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      PlacementDrive: {
        payload: Prisma.$PlacementDrivePayload<ExtArgs>
        fields: Prisma.PlacementDriveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacementDriveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacementDriveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>
          }
          findFirst: {
            args: Prisma.PlacementDriveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacementDriveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>
          }
          findMany: {
            args: Prisma.PlacementDriveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>[]
          }
          create: {
            args: Prisma.PlacementDriveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>
          }
          createMany: {
            args: Prisma.PlacementDriveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlacementDriveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>
          }
          update: {
            args: Prisma.PlacementDriveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>
          }
          deleteMany: {
            args: Prisma.PlacementDriveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacementDriveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlacementDriveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementDrivePayload>
          }
          aggregate: {
            args: Prisma.PlacementDriveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacementDrive>
          }
          groupBy: {
            args: Prisma.PlacementDriveGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementDriveGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacementDriveCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementDriveCountAggregateOutputType> | number
          }
        }
      }
      EligibilityCriteria: {
        payload: Prisma.$EligibilityCriteriaPayload<ExtArgs>
        fields: Prisma.EligibilityCriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EligibilityCriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EligibilityCriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          findFirst: {
            args: Prisma.EligibilityCriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EligibilityCriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          findMany: {
            args: Prisma.EligibilityCriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>[]
          }
          create: {
            args: Prisma.EligibilityCriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          createMany: {
            args: Prisma.EligibilityCriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EligibilityCriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          update: {
            args: Prisma.EligibilityCriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          deleteMany: {
            args: Prisma.EligibilityCriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EligibilityCriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EligibilityCriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityCriteriaPayload>
          }
          aggregate: {
            args: Prisma.EligibilityCriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEligibilityCriteria>
          }
          groupBy: {
            args: Prisma.EligibilityCriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EligibilityCriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EligibilityCriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<EligibilityCriteriaCountAggregateOutputType> | number
          }
        }
      }
      EligibleBranch: {
        payload: Prisma.$EligibleBranchPayload<ExtArgs>
        fields: Prisma.EligibleBranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EligibleBranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EligibleBranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>
          }
          findFirst: {
            args: Prisma.EligibleBranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EligibleBranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>
          }
          findMany: {
            args: Prisma.EligibleBranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>[]
          }
          create: {
            args: Prisma.EligibleBranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>
          }
          createMany: {
            args: Prisma.EligibleBranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EligibleBranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>
          }
          update: {
            args: Prisma.EligibleBranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>
          }
          deleteMany: {
            args: Prisma.EligibleBranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EligibleBranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EligibleBranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibleBranchPayload>
          }
          aggregate: {
            args: Prisma.EligibleBranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEligibleBranch>
          }
          groupBy: {
            args: Prisma.EligibleBranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<EligibleBranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.EligibleBranchCountArgs<ExtArgs>
            result: $Utils.Optional<EligibleBranchCountAggregateOutputType> | number
          }
        }
      }
      PlacementStatus: {
        payload: Prisma.$PlacementStatusPayload<ExtArgs>
        fields: Prisma.PlacementStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacementStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacementStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>
          }
          findFirst: {
            args: Prisma.PlacementStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacementStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>
          }
          findMany: {
            args: Prisma.PlacementStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>[]
          }
          create: {
            args: Prisma.PlacementStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>
          }
          createMany: {
            args: Prisma.PlacementStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlacementStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>
          }
          update: {
            args: Prisma.PlacementStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>
          }
          deleteMany: {
            args: Prisma.PlacementStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacementStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlacementStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementStatusPayload>
          }
          aggregate: {
            args: Prisma.PlacementStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacementStatus>
          }
          groupBy: {
            args: Prisma.PlacementStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacementStatusCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementStatusCountAggregateOutputType> | number
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
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    student?: StudentOmit
    studentSkill?: StudentSkillOmit
    company?: CompanyOmit
    placementDrive?: PlacementDriveOmit
    eligibilityCriteria?: EligibilityCriteriaOmit
    eligibleBranch?: EligibleBranchOmit
    placementStatus?: PlacementStatusOmit
    notification?: NotificationOmit
    resume?: ResumeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    drives: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drives?: boolean | UserCountOutputTypeCountDrivesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementDriveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    skills: number
    placementStatuses: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | StudentCountOutputTypeCountSkillsArgs
    placementStatuses?: boolean | StudentCountOutputTypeCountPlacementStatusesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSkillWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPlacementStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementStatusWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    drives: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drives?: boolean | CompanyCountOutputTypeCountDrivesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementDriveWhereInput
  }


  /**
   * Count Type PlacementDriveCountOutputType
   */

  export type PlacementDriveCountOutputType = {
    placementStatuses: number
  }

  export type PlacementDriveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placementStatuses?: boolean | PlacementDriveCountOutputTypeCountPlacementStatusesArgs
  }

  // Custom InputTypes
  /**
   * PlacementDriveCountOutputType without action
   */
  export type PlacementDriveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDriveCountOutputType
     */
    select?: PlacementDriveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlacementDriveCountOutputType without action
   */
  export type PlacementDriveCountOutputTypeCountPlacementStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementStatusWhereInput
  }


  /**
   * Count Type EligibilityCriteriaCountOutputType
   */

  export type EligibilityCriteriaCountOutputType = {
    eligibleBranches: number
  }

  export type EligibilityCriteriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibleBranches?: boolean | EligibilityCriteriaCountOutputTypeCountEligibleBranchesArgs
  }

  // Custom InputTypes
  /**
   * EligibilityCriteriaCountOutputType without action
   */
  export type EligibilityCriteriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteriaCountOutputType
     */
    select?: EligibilityCriteriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EligibilityCriteriaCountOutputType without action
   */
  export type EligibilityCriteriaCountOutputTypeCountEligibleBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EligibleBranchWhereInput
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
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
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
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
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
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    drives?: boolean | User$drivesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    drives?: boolean | User$drivesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      drives: Prisma.$PlacementDrivePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
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
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    drives<T extends User$drivesArgs<ExtArgs> = {}>(args?: Subset<T, User$drivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.drives
   */
  export type User$drivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    where?: PlacementDriveWhereInput
    orderBy?: PlacementDriveOrderByWithRelationInput | PlacementDriveOrderByWithRelationInput[]
    cursor?: PlacementDriveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementDriveScalarFieldEnum | PlacementDriveScalarFieldEnum[]
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
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    graduationYear: number | null
    cgpa: number | null
    activeBacklogs: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    graduationYear: number | null
    cgpa: number | null
    activeBacklogs: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    prn: string | null
    branch: string | null
    year: number | null
    graduationYear: number | null
    cgpa: number | null
    activeBacklogs: number | null
    phone: string | null
    linkedin: string | null
    github: string | null
    portfolio: string | null
    profileCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    prn: string | null
    branch: string | null
    year: number | null
    graduationYear: number | null
    cgpa: number | null
    activeBacklogs: number | null
    phone: string | null
    linkedin: string | null
    github: string | null
    portfolio: string | null
    profileCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    prn: number
    branch: number
    year: number
    graduationYear: number
    cgpa: number
    activeBacklogs: number
    phone: number
    linkedin: number
    github: number
    portfolio: number
    profileCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    graduationYear?: true
    cgpa?: true
    activeBacklogs?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    graduationYear?: true
    cgpa?: true
    activeBacklogs?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    prn?: true
    branch?: true
    year?: true
    graduationYear?: true
    cgpa?: true
    activeBacklogs?: true
    phone?: true
    linkedin?: true
    github?: true
    portfolio?: true
    profileCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    prn?: true
    branch?: true
    year?: true
    graduationYear?: true
    cgpa?: true
    activeBacklogs?: true
    phone?: true
    linkedin?: true
    github?: true
    portfolio?: true
    profileCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    prn?: true
    branch?: true
    year?: true
    graduationYear?: true
    cgpa?: true
    activeBacklogs?: true
    phone?: true
    linkedin?: true
    github?: true
    portfolio?: true
    profileCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    userId: number
    prn: string
    branch: string
    year: number
    graduationYear: number | null
    cgpa: number
    activeBacklogs: number
    phone: string
    linkedin: string | null
    github: string | null
    portfolio: string | null
    profileCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prn?: boolean
    branch?: boolean
    year?: boolean
    graduationYear?: boolean
    cgpa?: boolean
    activeBacklogs?: boolean
    phone?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    profileCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | Student$resumeArgs<ExtArgs>
    skills?: boolean | Student$skillsArgs<ExtArgs>
    placementStatuses?: boolean | Student$placementStatusesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    prn?: boolean
    branch?: boolean
    year?: boolean
    graduationYear?: boolean
    cgpa?: boolean
    activeBacklogs?: boolean
    phone?: boolean
    linkedin?: boolean
    github?: boolean
    portfolio?: boolean
    profileCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "prn" | "branch" | "year" | "graduationYear" | "cgpa" | "activeBacklogs" | "phone" | "linkedin" | "github" | "portfolio" | "profileCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | Student$resumeArgs<ExtArgs>
    skills?: boolean | Student$skillsArgs<ExtArgs>
    placementStatuses?: boolean | Student$placementStatusesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs> | null
      skills: Prisma.$StudentSkillPayload<ExtArgs>[]
      placementStatuses: Prisma.$PlacementStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      prn: string
      branch: string
      year: number
      graduationYear: number | null
      cgpa: number
      activeBacklogs: number
      phone: string
      linkedin: string | null
      github: string | null
      portfolio: string | null
      profileCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends Student$resumeArgs<ExtArgs> = {}>(args?: Subset<T, Student$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skills<T extends Student$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Student$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    placementStatuses<T extends Student$placementStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Student$placementStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly userId: FieldRef<"Student", 'Int'>
    readonly prn: FieldRef<"Student", 'String'>
    readonly branch: FieldRef<"Student", 'String'>
    readonly year: FieldRef<"Student", 'Int'>
    readonly graduationYear: FieldRef<"Student", 'Int'>
    readonly cgpa: FieldRef<"Student", 'Float'>
    readonly activeBacklogs: FieldRef<"Student", 'Int'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly linkedin: FieldRef<"Student", 'String'>
    readonly github: FieldRef<"Student", 'String'>
    readonly portfolio: FieldRef<"Student", 'String'>
    readonly profileCompleted: FieldRef<"Student", 'Boolean'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.resume
   */
  export type Student$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * Student.skills
   */
  export type Student$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    where?: StudentSkillWhereInput
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    cursor?: StudentSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * Student.placementStatuses
   */
  export type Student$placementStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    where?: PlacementStatusWhereInput
    orderBy?: PlacementStatusOrderByWithRelationInput | PlacementStatusOrderByWithRelationInput[]
    cursor?: PlacementStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementStatusScalarFieldEnum | PlacementStatusScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model StudentSkill
   */

  export type AggregateStudentSkill = {
    _count: StudentSkillCountAggregateOutputType | null
    _avg: StudentSkillAvgAggregateOutputType | null
    _sum: StudentSkillSumAggregateOutputType | null
    _min: StudentSkillMinAggregateOutputType | null
    _max: StudentSkillMaxAggregateOutputType | null
  }

  export type StudentSkillAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type StudentSkillSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type StudentSkillMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    skillName: string | null
  }

  export type StudentSkillMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    skillName: string | null
  }

  export type StudentSkillCountAggregateOutputType = {
    id: number
    studentId: number
    skillName: number
    _all: number
  }


  export type StudentSkillAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type StudentSkillSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type StudentSkillMinAggregateInputType = {
    id?: true
    studentId?: true
    skillName?: true
  }

  export type StudentSkillMaxAggregateInputType = {
    id?: true
    studentId?: true
    skillName?: true
  }

  export type StudentSkillCountAggregateInputType = {
    id?: true
    studentId?: true
    skillName?: true
    _all?: true
  }

  export type StudentSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSkill to aggregate.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSkills
    **/
    _count?: true | StudentSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSkillMaxAggregateInputType
  }

  export type GetStudentSkillAggregateType<T extends StudentSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSkill[P]>
      : GetScalarType<T[P], AggregateStudentSkill[P]>
  }




  export type StudentSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSkillWhereInput
    orderBy?: StudentSkillOrderByWithAggregationInput | StudentSkillOrderByWithAggregationInput[]
    by: StudentSkillScalarFieldEnum[] | StudentSkillScalarFieldEnum
    having?: StudentSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSkillCountAggregateInputType | true
    _avg?: StudentSkillAvgAggregateInputType
    _sum?: StudentSkillSumAggregateInputType
    _min?: StudentSkillMinAggregateInputType
    _max?: StudentSkillMaxAggregateInputType
  }

  export type StudentSkillGroupByOutputType = {
    id: number
    studentId: number
    skillName: string
    _count: StudentSkillCountAggregateOutputType | null
    _avg: StudentSkillAvgAggregateOutputType | null
    _sum: StudentSkillSumAggregateOutputType | null
    _min: StudentSkillMinAggregateOutputType | null
    _max: StudentSkillMaxAggregateOutputType | null
  }

  type GetStudentSkillGroupByPayload<T extends StudentSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSkillGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSkillGroupByOutputType[P]>
        }
      >
    >


  export type StudentSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skillName?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>



  export type StudentSkillSelectScalar = {
    id?: boolean
    studentId?: boolean
    skillName?: boolean
  }

  export type StudentSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "skillName", ExtArgs["result"]["studentSkill"]>
  export type StudentSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSkill"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      skillName: string
    }, ExtArgs["result"]["studentSkill"]>
    composites: {}
  }

  type StudentSkillGetPayload<S extends boolean | null | undefined | StudentSkillDefaultArgs> = $Result.GetResult<Prisma.$StudentSkillPayload, S>

  type StudentSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSkillCountAggregateInputType | true
    }

  export interface StudentSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSkill'], meta: { name: 'StudentSkill' } }
    /**
     * Find zero or one StudentSkill that matches the filter.
     * @param {StudentSkillFindUniqueArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSkillFindUniqueArgs>(args: SelectSubset<T, StudentSkillFindUniqueArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSkillFindUniqueOrThrowArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillFindFirstArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSkillFindFirstArgs>(args?: SelectSubset<T, StudentSkillFindFirstArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillFindFirstOrThrowArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSkills
     * const studentSkills = await prisma.studentSkill.findMany()
     * 
     * // Get first 10 StudentSkills
     * const studentSkills = await prisma.studentSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSkillWithIdOnly = await prisma.studentSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentSkillFindManyArgs>(args?: SelectSubset<T, StudentSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSkill.
     * @param {StudentSkillCreateArgs} args - Arguments to create a StudentSkill.
     * @example
     * // Create one StudentSkill
     * const StudentSkill = await prisma.studentSkill.create({
     *   data: {
     *     // ... data to create a StudentSkill
     *   }
     * })
     * 
     */
    create<T extends StudentSkillCreateArgs>(args: SelectSubset<T, StudentSkillCreateArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSkills.
     * @param {StudentSkillCreateManyArgs} args - Arguments to create many StudentSkills.
     * @example
     * // Create many StudentSkills
     * const studentSkill = await prisma.studentSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSkillCreateManyArgs>(args?: SelectSubset<T, StudentSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentSkill.
     * @param {StudentSkillDeleteArgs} args - Arguments to delete one StudentSkill.
     * @example
     * // Delete one StudentSkill
     * const StudentSkill = await prisma.studentSkill.delete({
     *   where: {
     *     // ... filter to delete one StudentSkill
     *   }
     * })
     * 
     */
    delete<T extends StudentSkillDeleteArgs>(args: SelectSubset<T, StudentSkillDeleteArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSkill.
     * @param {StudentSkillUpdateArgs} args - Arguments to update one StudentSkill.
     * @example
     * // Update one StudentSkill
     * const studentSkill = await prisma.studentSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSkillUpdateArgs>(args: SelectSubset<T, StudentSkillUpdateArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSkills.
     * @param {StudentSkillDeleteManyArgs} args - Arguments to filter StudentSkills to delete.
     * @example
     * // Delete a few StudentSkills
     * const { count } = await prisma.studentSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSkillDeleteManyArgs>(args?: SelectSubset<T, StudentSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSkills
     * const studentSkill = await prisma.studentSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSkillUpdateManyArgs>(args: SelectSubset<T, StudentSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentSkill.
     * @param {StudentSkillUpsertArgs} args - Arguments to update or create a StudentSkill.
     * @example
     * // Update or create a StudentSkill
     * const studentSkill = await prisma.studentSkill.upsert({
     *   create: {
     *     // ... data to create a StudentSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSkill we want to update
     *   }
     * })
     */
    upsert<T extends StudentSkillUpsertArgs>(args: SelectSubset<T, StudentSkillUpsertArgs<ExtArgs>>): Prisma__StudentSkillClient<$Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillCountArgs} args - Arguments to filter StudentSkills to count.
     * @example
     * // Count the number of StudentSkills
     * const count = await prisma.studentSkill.count({
     *   where: {
     *     // ... the filter for the StudentSkills we want to count
     *   }
     * })
    **/
    count<T extends StudentSkillCountArgs>(
      args?: Subset<T, StudentSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentSkillAggregateArgs>(args: Subset<T, StudentSkillAggregateArgs>): Prisma.PrismaPromise<GetStudentSkillAggregateType<T>>

    /**
     * Group by StudentSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillGroupByArgs} args - Group by arguments.
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
      T extends StudentSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSkillGroupByArgs['orderBy'] }
        : { orderBy?: StudentSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSkill model
   */
  readonly fields: StudentSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentSkill model
   */
  interface StudentSkillFieldRefs {
    readonly id: FieldRef<"StudentSkill", 'Int'>
    readonly studentId: FieldRef<"StudentSkill", 'Int'>
    readonly skillName: FieldRef<"StudentSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentSkill findUnique
   */
  export type StudentSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill findUniqueOrThrow
   */
  export type StudentSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill findFirst
   */
  export type StudentSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSkills.
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSkills.
     */
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * StudentSkill findFirstOrThrow
   */
  export type StudentSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkill to fetch.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSkills.
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSkills.
     */
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * StudentSkill findMany
   */
  export type StudentSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter, which StudentSkills to fetch.
     */
    where?: StudentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSkills to fetch.
     */
    orderBy?: StudentSkillOrderByWithRelationInput | StudentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSkills.
     */
    cursor?: StudentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSkills.
     */
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * StudentSkill create
   */
  export type StudentSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSkill.
     */
    data: XOR<StudentSkillCreateInput, StudentSkillUncheckedCreateInput>
  }

  /**
   * StudentSkill createMany
   */
  export type StudentSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSkills.
     */
    data: StudentSkillCreateManyInput | StudentSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSkill update
   */
  export type StudentSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSkill.
     */
    data: XOR<StudentSkillUpdateInput, StudentSkillUncheckedUpdateInput>
    /**
     * Choose, which StudentSkill to update.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill updateMany
   */
  export type StudentSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSkills.
     */
    data: XOR<StudentSkillUpdateManyMutationInput, StudentSkillUncheckedUpdateManyInput>
    /**
     * Filter which StudentSkills to update
     */
    where?: StudentSkillWhereInput
    /**
     * Limit how many StudentSkills to update.
     */
    limit?: number
  }

  /**
   * StudentSkill upsert
   */
  export type StudentSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSkill to update in case it exists.
     */
    where: StudentSkillWhereUniqueInput
    /**
     * In case the StudentSkill found by the `where` argument doesn't exist, create a new StudentSkill with this data.
     */
    create: XOR<StudentSkillCreateInput, StudentSkillUncheckedCreateInput>
    /**
     * In case the StudentSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSkillUpdateInput, StudentSkillUncheckedUpdateInput>
  }

  /**
   * StudentSkill delete
   */
  export type StudentSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
    /**
     * Filter which StudentSkill to delete.
     */
    where: StudentSkillWhereUniqueInput
  }

  /**
   * StudentSkill deleteMany
   */
  export type StudentSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSkills to delete
     */
    where?: StudentSkillWhereInput
    /**
     * Limit how many StudentSkills to delete.
     */
    limit?: number
  }

  /**
   * StudentSkill without action
   */
  export type StudentSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSkill
     */
    select?: StudentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSkill
     */
    omit?: StudentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSkillInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    about: string | null
    location: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    about: string | null
    location: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    companyName: number
    about: number
    location: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    companyName?: true
    about?: true
    location?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    companyName?: true
    about?: true
    location?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    companyName?: true
    about?: true
    location?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    companyName: string
    about: string
    location: string
    website: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    about?: boolean
    location?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drives?: boolean | Company$drivesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type CompanySelectScalar = {
    id?: boolean
    companyName?: boolean
    about?: boolean
    location?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "about" | "location" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drives?: boolean | Company$drivesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      drives: Prisma.$PlacementDrivePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      about: string
      location: string
      website: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drives<T extends Company$drivesArgs<ExtArgs> = {}>(args?: Subset<T, Company$drivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly companyName: FieldRef<"Company", 'String'>
    readonly about: FieldRef<"Company", 'String'>
    readonly location: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.drives
   */
  export type Company$drivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    where?: PlacementDriveWhereInput
    orderBy?: PlacementDriveOrderByWithRelationInput | PlacementDriveOrderByWithRelationInput[]
    cursor?: PlacementDriveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementDriveScalarFieldEnum | PlacementDriveScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model PlacementDrive
   */

  export type AggregatePlacementDrive = {
    _count: PlacementDriveCountAggregateOutputType | null
    _avg: PlacementDriveAvgAggregateOutputType | null
    _sum: PlacementDriveSumAggregateOutputType | null
    _min: PlacementDriveMinAggregateOutputType | null
    _max: PlacementDriveMaxAggregateOutputType | null
  }

  export type PlacementDriveAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    createdBy: number | null
  }

  export type PlacementDriveSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    createdBy: number | null
  }

  export type PlacementDriveMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    createdBy: number | null
    role: string | null
    package: string | null
    driveDate: Date | null
    venue: string | null
    deadline: Date | null
    jobType: string | null
    description: string | null
    hiringProcess: string | null
    status: $Enums.DriveStatus | null
    createdAt: Date | null
  }

  export type PlacementDriveMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    createdBy: number | null
    role: string | null
    package: string | null
    driveDate: Date | null
    venue: string | null
    deadline: Date | null
    jobType: string | null
    description: string | null
    hiringProcess: string | null
    status: $Enums.DriveStatus | null
    createdAt: Date | null
  }

  export type PlacementDriveCountAggregateOutputType = {
    id: number
    companyId: number
    createdBy: number
    role: number
    package: number
    driveDate: number
    venue: number
    deadline: number
    jobType: number
    description: number
    hiringProcess: number
    status: number
    createdAt: number
    _all: number
  }


  export type PlacementDriveAvgAggregateInputType = {
    id?: true
    companyId?: true
    createdBy?: true
  }

  export type PlacementDriveSumAggregateInputType = {
    id?: true
    companyId?: true
    createdBy?: true
  }

  export type PlacementDriveMinAggregateInputType = {
    id?: true
    companyId?: true
    createdBy?: true
    role?: true
    package?: true
    driveDate?: true
    venue?: true
    deadline?: true
    jobType?: true
    description?: true
    hiringProcess?: true
    status?: true
    createdAt?: true
  }

  export type PlacementDriveMaxAggregateInputType = {
    id?: true
    companyId?: true
    createdBy?: true
    role?: true
    package?: true
    driveDate?: true
    venue?: true
    deadline?: true
    jobType?: true
    description?: true
    hiringProcess?: true
    status?: true
    createdAt?: true
  }

  export type PlacementDriveCountAggregateInputType = {
    id?: true
    companyId?: true
    createdBy?: true
    role?: true
    package?: true
    driveDate?: true
    venue?: true
    deadline?: true
    jobType?: true
    description?: true
    hiringProcess?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PlacementDriveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlacementDrive to aggregate.
     */
    where?: PlacementDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementDrives to fetch.
     */
    orderBy?: PlacementDriveOrderByWithRelationInput | PlacementDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacementDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlacementDrives
    **/
    _count?: true | PlacementDriveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacementDriveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacementDriveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementDriveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementDriveMaxAggregateInputType
  }

  export type GetPlacementDriveAggregateType<T extends PlacementDriveAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacementDrive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacementDrive[P]>
      : GetScalarType<T[P], AggregatePlacementDrive[P]>
  }




  export type PlacementDriveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementDriveWhereInput
    orderBy?: PlacementDriveOrderByWithAggregationInput | PlacementDriveOrderByWithAggregationInput[]
    by: PlacementDriveScalarFieldEnum[] | PlacementDriveScalarFieldEnum
    having?: PlacementDriveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementDriveCountAggregateInputType | true
    _avg?: PlacementDriveAvgAggregateInputType
    _sum?: PlacementDriveSumAggregateInputType
    _min?: PlacementDriveMinAggregateInputType
    _max?: PlacementDriveMaxAggregateInputType
  }

  export type PlacementDriveGroupByOutputType = {
    id: number
    companyId: number
    createdBy: number
    role: string
    package: string
    driveDate: Date
    venue: string
    deadline: Date
    jobType: string
    description: string
    hiringProcess: string
    status: $Enums.DriveStatus
    createdAt: Date
    _count: PlacementDriveCountAggregateOutputType | null
    _avg: PlacementDriveAvgAggregateOutputType | null
    _sum: PlacementDriveSumAggregateOutputType | null
    _min: PlacementDriveMinAggregateOutputType | null
    _max: PlacementDriveMaxAggregateOutputType | null
  }

  type GetPlacementDriveGroupByPayload<T extends PlacementDriveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementDriveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementDriveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementDriveGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementDriveGroupByOutputType[P]>
        }
      >
    >


  export type PlacementDriveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    createdBy?: boolean
    role?: boolean
    package?: boolean
    driveDate?: boolean
    venue?: boolean
    deadline?: boolean
    jobType?: boolean
    description?: boolean
    hiringProcess?: boolean
    status?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    eligibility?: boolean | PlacementDrive$eligibilityArgs<ExtArgs>
    placementStatuses?: boolean | PlacementDrive$placementStatusesArgs<ExtArgs>
    _count?: boolean | PlacementDriveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placementDrive"]>



  export type PlacementDriveSelectScalar = {
    id?: boolean
    companyId?: boolean
    createdBy?: boolean
    role?: boolean
    package?: boolean
    driveDate?: boolean
    venue?: boolean
    deadline?: boolean
    jobType?: boolean
    description?: boolean
    hiringProcess?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PlacementDriveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "createdBy" | "role" | "package" | "driveDate" | "venue" | "deadline" | "jobType" | "description" | "hiringProcess" | "status" | "createdAt", ExtArgs["result"]["placementDrive"]>
  export type PlacementDriveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    eligibility?: boolean | PlacementDrive$eligibilityArgs<ExtArgs>
    placementStatuses?: boolean | PlacementDrive$placementStatusesArgs<ExtArgs>
    _count?: boolean | PlacementDriveCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlacementDrivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlacementDrive"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      eligibility: Prisma.$EligibilityCriteriaPayload<ExtArgs> | null
      placementStatuses: Prisma.$PlacementStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      createdBy: number
      role: string
      package: string
      driveDate: Date
      venue: string
      deadline: Date
      jobType: string
      description: string
      hiringProcess: string
      status: $Enums.DriveStatus
      createdAt: Date
    }, ExtArgs["result"]["placementDrive"]>
    composites: {}
  }

  type PlacementDriveGetPayload<S extends boolean | null | undefined | PlacementDriveDefaultArgs> = $Result.GetResult<Prisma.$PlacementDrivePayload, S>

  type PlacementDriveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacementDriveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementDriveCountAggregateInputType | true
    }

  export interface PlacementDriveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlacementDrive'], meta: { name: 'PlacementDrive' } }
    /**
     * Find zero or one PlacementDrive that matches the filter.
     * @param {PlacementDriveFindUniqueArgs} args - Arguments to find a PlacementDrive
     * @example
     * // Get one PlacementDrive
     * const placementDrive = await prisma.placementDrive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacementDriveFindUniqueArgs>(args: SelectSubset<T, PlacementDriveFindUniqueArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlacementDrive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacementDriveFindUniqueOrThrowArgs} args - Arguments to find a PlacementDrive
     * @example
     * // Get one PlacementDrive
     * const placementDrive = await prisma.placementDrive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacementDriveFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacementDriveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlacementDrive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveFindFirstArgs} args - Arguments to find a PlacementDrive
     * @example
     * // Get one PlacementDrive
     * const placementDrive = await prisma.placementDrive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacementDriveFindFirstArgs>(args?: SelectSubset<T, PlacementDriveFindFirstArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlacementDrive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveFindFirstOrThrowArgs} args - Arguments to find a PlacementDrive
     * @example
     * // Get one PlacementDrive
     * const placementDrive = await prisma.placementDrive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacementDriveFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacementDriveFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlacementDrives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlacementDrives
     * const placementDrives = await prisma.placementDrive.findMany()
     * 
     * // Get first 10 PlacementDrives
     * const placementDrives = await prisma.placementDrive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placementDriveWithIdOnly = await prisma.placementDrive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacementDriveFindManyArgs>(args?: SelectSubset<T, PlacementDriveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlacementDrive.
     * @param {PlacementDriveCreateArgs} args - Arguments to create a PlacementDrive.
     * @example
     * // Create one PlacementDrive
     * const PlacementDrive = await prisma.placementDrive.create({
     *   data: {
     *     // ... data to create a PlacementDrive
     *   }
     * })
     * 
     */
    create<T extends PlacementDriveCreateArgs>(args: SelectSubset<T, PlacementDriveCreateArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlacementDrives.
     * @param {PlacementDriveCreateManyArgs} args - Arguments to create many PlacementDrives.
     * @example
     * // Create many PlacementDrives
     * const placementDrive = await prisma.placementDrive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacementDriveCreateManyArgs>(args?: SelectSubset<T, PlacementDriveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlacementDrive.
     * @param {PlacementDriveDeleteArgs} args - Arguments to delete one PlacementDrive.
     * @example
     * // Delete one PlacementDrive
     * const PlacementDrive = await prisma.placementDrive.delete({
     *   where: {
     *     // ... filter to delete one PlacementDrive
     *   }
     * })
     * 
     */
    delete<T extends PlacementDriveDeleteArgs>(args: SelectSubset<T, PlacementDriveDeleteArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlacementDrive.
     * @param {PlacementDriveUpdateArgs} args - Arguments to update one PlacementDrive.
     * @example
     * // Update one PlacementDrive
     * const placementDrive = await prisma.placementDrive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacementDriveUpdateArgs>(args: SelectSubset<T, PlacementDriveUpdateArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlacementDrives.
     * @param {PlacementDriveDeleteManyArgs} args - Arguments to filter PlacementDrives to delete.
     * @example
     * // Delete a few PlacementDrives
     * const { count } = await prisma.placementDrive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacementDriveDeleteManyArgs>(args?: SelectSubset<T, PlacementDriveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlacementDrives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlacementDrives
     * const placementDrive = await prisma.placementDrive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacementDriveUpdateManyArgs>(args: SelectSubset<T, PlacementDriveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlacementDrive.
     * @param {PlacementDriveUpsertArgs} args - Arguments to update or create a PlacementDrive.
     * @example
     * // Update or create a PlacementDrive
     * const placementDrive = await prisma.placementDrive.upsert({
     *   create: {
     *     // ... data to create a PlacementDrive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlacementDrive we want to update
     *   }
     * })
     */
    upsert<T extends PlacementDriveUpsertArgs>(args: SelectSubset<T, PlacementDriveUpsertArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlacementDrives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveCountArgs} args - Arguments to filter PlacementDrives to count.
     * @example
     * // Count the number of PlacementDrives
     * const count = await prisma.placementDrive.count({
     *   where: {
     *     // ... the filter for the PlacementDrives we want to count
     *   }
     * })
    **/
    count<T extends PlacementDriveCountArgs>(
      args?: Subset<T, PlacementDriveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementDriveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlacementDrive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlacementDriveAggregateArgs>(args: Subset<T, PlacementDriveAggregateArgs>): Prisma.PrismaPromise<GetPlacementDriveAggregateType<T>>

    /**
     * Group by PlacementDrive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementDriveGroupByArgs} args - Group by arguments.
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
      T extends PlacementDriveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacementDriveGroupByArgs['orderBy'] }
        : { orderBy?: PlacementDriveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlacementDriveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementDriveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlacementDrive model
   */
  readonly fields: PlacementDriveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlacementDrive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacementDriveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eligibility<T extends PlacementDrive$eligibilityArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDrive$eligibilityArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    placementStatuses<T extends PlacementDrive$placementStatusesArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDrive$placementStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlacementDrive model
   */
  interface PlacementDriveFieldRefs {
    readonly id: FieldRef<"PlacementDrive", 'Int'>
    readonly companyId: FieldRef<"PlacementDrive", 'Int'>
    readonly createdBy: FieldRef<"PlacementDrive", 'Int'>
    readonly role: FieldRef<"PlacementDrive", 'String'>
    readonly package: FieldRef<"PlacementDrive", 'String'>
    readonly driveDate: FieldRef<"PlacementDrive", 'DateTime'>
    readonly venue: FieldRef<"PlacementDrive", 'String'>
    readonly deadline: FieldRef<"PlacementDrive", 'DateTime'>
    readonly jobType: FieldRef<"PlacementDrive", 'String'>
    readonly description: FieldRef<"PlacementDrive", 'String'>
    readonly hiringProcess: FieldRef<"PlacementDrive", 'String'>
    readonly status: FieldRef<"PlacementDrive", 'DriveStatus'>
    readonly createdAt: FieldRef<"PlacementDrive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlacementDrive findUnique
   */
  export type PlacementDriveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * Filter, which PlacementDrive to fetch.
     */
    where: PlacementDriveWhereUniqueInput
  }

  /**
   * PlacementDrive findUniqueOrThrow
   */
  export type PlacementDriveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * Filter, which PlacementDrive to fetch.
     */
    where: PlacementDriveWhereUniqueInput
  }

  /**
   * PlacementDrive findFirst
   */
  export type PlacementDriveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * Filter, which PlacementDrive to fetch.
     */
    where?: PlacementDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementDrives to fetch.
     */
    orderBy?: PlacementDriveOrderByWithRelationInput | PlacementDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlacementDrives.
     */
    cursor?: PlacementDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlacementDrives.
     */
    distinct?: PlacementDriveScalarFieldEnum | PlacementDriveScalarFieldEnum[]
  }

  /**
   * PlacementDrive findFirstOrThrow
   */
  export type PlacementDriveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * Filter, which PlacementDrive to fetch.
     */
    where?: PlacementDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementDrives to fetch.
     */
    orderBy?: PlacementDriveOrderByWithRelationInput | PlacementDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlacementDrives.
     */
    cursor?: PlacementDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlacementDrives.
     */
    distinct?: PlacementDriveScalarFieldEnum | PlacementDriveScalarFieldEnum[]
  }

  /**
   * PlacementDrive findMany
   */
  export type PlacementDriveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * Filter, which PlacementDrives to fetch.
     */
    where?: PlacementDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementDrives to fetch.
     */
    orderBy?: PlacementDriveOrderByWithRelationInput | PlacementDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlacementDrives.
     */
    cursor?: PlacementDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementDrives.
     */
    skip?: number
    distinct?: PlacementDriveScalarFieldEnum | PlacementDriveScalarFieldEnum[]
  }

  /**
   * PlacementDrive create
   */
  export type PlacementDriveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * The data needed to create a PlacementDrive.
     */
    data: XOR<PlacementDriveCreateInput, PlacementDriveUncheckedCreateInput>
  }

  /**
   * PlacementDrive createMany
   */
  export type PlacementDriveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlacementDrives.
     */
    data: PlacementDriveCreateManyInput | PlacementDriveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlacementDrive update
   */
  export type PlacementDriveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * The data needed to update a PlacementDrive.
     */
    data: XOR<PlacementDriveUpdateInput, PlacementDriveUncheckedUpdateInput>
    /**
     * Choose, which PlacementDrive to update.
     */
    where: PlacementDriveWhereUniqueInput
  }

  /**
   * PlacementDrive updateMany
   */
  export type PlacementDriveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlacementDrives.
     */
    data: XOR<PlacementDriveUpdateManyMutationInput, PlacementDriveUncheckedUpdateManyInput>
    /**
     * Filter which PlacementDrives to update
     */
    where?: PlacementDriveWhereInput
    /**
     * Limit how many PlacementDrives to update.
     */
    limit?: number
  }

  /**
   * PlacementDrive upsert
   */
  export type PlacementDriveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * The filter to search for the PlacementDrive to update in case it exists.
     */
    where: PlacementDriveWhereUniqueInput
    /**
     * In case the PlacementDrive found by the `where` argument doesn't exist, create a new PlacementDrive with this data.
     */
    create: XOR<PlacementDriveCreateInput, PlacementDriveUncheckedCreateInput>
    /**
     * In case the PlacementDrive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacementDriveUpdateInput, PlacementDriveUncheckedUpdateInput>
  }

  /**
   * PlacementDrive delete
   */
  export type PlacementDriveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
    /**
     * Filter which PlacementDrive to delete.
     */
    where: PlacementDriveWhereUniqueInput
  }

  /**
   * PlacementDrive deleteMany
   */
  export type PlacementDriveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlacementDrives to delete
     */
    where?: PlacementDriveWhereInput
    /**
     * Limit how many PlacementDrives to delete.
     */
    limit?: number
  }

  /**
   * PlacementDrive.eligibility
   */
  export type PlacementDrive$eligibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    where?: EligibilityCriteriaWhereInput
  }

  /**
   * PlacementDrive.placementStatuses
   */
  export type PlacementDrive$placementStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    where?: PlacementStatusWhereInput
    orderBy?: PlacementStatusOrderByWithRelationInput | PlacementStatusOrderByWithRelationInput[]
    cursor?: PlacementStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementStatusScalarFieldEnum | PlacementStatusScalarFieldEnum[]
  }

  /**
   * PlacementDrive without action
   */
  export type PlacementDriveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementDrive
     */
    select?: PlacementDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementDrive
     */
    omit?: PlacementDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementDriveInclude<ExtArgs> | null
  }


  /**
   * Model EligibilityCriteria
   */

  export type AggregateEligibilityCriteria = {
    _count: EligibilityCriteriaCountAggregateOutputType | null
    _avg: EligibilityCriteriaAvgAggregateOutputType | null
    _sum: EligibilityCriteriaSumAggregateOutputType | null
    _min: EligibilityCriteriaMinAggregateOutputType | null
    _max: EligibilityCriteriaMaxAggregateOutputType | null
  }

  export type EligibilityCriteriaAvgAggregateOutputType = {
    id: number | null
    driveId: number | null
    minCGPA: number | null
    maxBacklogs: number | null
    graduationYear: number | null
  }

  export type EligibilityCriteriaSumAggregateOutputType = {
    id: number | null
    driveId: number | null
    minCGPA: number | null
    maxBacklogs: number | null
    graduationYear: number | null
  }

  export type EligibilityCriteriaMinAggregateOutputType = {
    id: number | null
    driveId: number | null
    minCGPA: number | null
    maxBacklogs: number | null
    graduationYear: number | null
  }

  export type EligibilityCriteriaMaxAggregateOutputType = {
    id: number | null
    driveId: number | null
    minCGPA: number | null
    maxBacklogs: number | null
    graduationYear: number | null
  }

  export type EligibilityCriteriaCountAggregateOutputType = {
    id: number
    driveId: number
    minCGPA: number
    maxBacklogs: number
    graduationYear: number
    _all: number
  }


  export type EligibilityCriteriaAvgAggregateInputType = {
    id?: true
    driveId?: true
    minCGPA?: true
    maxBacklogs?: true
    graduationYear?: true
  }

  export type EligibilityCriteriaSumAggregateInputType = {
    id?: true
    driveId?: true
    minCGPA?: true
    maxBacklogs?: true
    graduationYear?: true
  }

  export type EligibilityCriteriaMinAggregateInputType = {
    id?: true
    driveId?: true
    minCGPA?: true
    maxBacklogs?: true
    graduationYear?: true
  }

  export type EligibilityCriteriaMaxAggregateInputType = {
    id?: true
    driveId?: true
    minCGPA?: true
    maxBacklogs?: true
    graduationYear?: true
  }

  export type EligibilityCriteriaCountAggregateInputType = {
    id?: true
    driveId?: true
    minCGPA?: true
    maxBacklogs?: true
    graduationYear?: true
    _all?: true
  }

  export type EligibilityCriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibilityCriteria to aggregate.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EligibilityCriteria
    **/
    _count?: true | EligibilityCriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EligibilityCriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EligibilityCriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EligibilityCriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EligibilityCriteriaMaxAggregateInputType
  }

  export type GetEligibilityCriteriaAggregateType<T extends EligibilityCriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateEligibilityCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEligibilityCriteria[P]>
      : GetScalarType<T[P], AggregateEligibilityCriteria[P]>
  }




  export type EligibilityCriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EligibilityCriteriaWhereInput
    orderBy?: EligibilityCriteriaOrderByWithAggregationInput | EligibilityCriteriaOrderByWithAggregationInput[]
    by: EligibilityCriteriaScalarFieldEnum[] | EligibilityCriteriaScalarFieldEnum
    having?: EligibilityCriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EligibilityCriteriaCountAggregateInputType | true
    _avg?: EligibilityCriteriaAvgAggregateInputType
    _sum?: EligibilityCriteriaSumAggregateInputType
    _min?: EligibilityCriteriaMinAggregateInputType
    _max?: EligibilityCriteriaMaxAggregateInputType
  }

  export type EligibilityCriteriaGroupByOutputType = {
    id: number
    driveId: number
    minCGPA: number | null
    maxBacklogs: number | null
    graduationYear: number | null
    _count: EligibilityCriteriaCountAggregateOutputType | null
    _avg: EligibilityCriteriaAvgAggregateOutputType | null
    _sum: EligibilityCriteriaSumAggregateOutputType | null
    _min: EligibilityCriteriaMinAggregateOutputType | null
    _max: EligibilityCriteriaMaxAggregateOutputType | null
  }

  type GetEligibilityCriteriaGroupByPayload<T extends EligibilityCriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EligibilityCriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EligibilityCriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EligibilityCriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], EligibilityCriteriaGroupByOutputType[P]>
        }
      >
    >


  export type EligibilityCriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driveId?: boolean
    minCGPA?: boolean
    maxBacklogs?: boolean
    graduationYear?: boolean
    drive?: boolean | PlacementDriveDefaultArgs<ExtArgs>
    eligibleBranches?: boolean | EligibilityCriteria$eligibleBranchesArgs<ExtArgs>
    _count?: boolean | EligibilityCriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eligibilityCriteria"]>



  export type EligibilityCriteriaSelectScalar = {
    id?: boolean
    driveId?: boolean
    minCGPA?: boolean
    maxBacklogs?: boolean
    graduationYear?: boolean
  }

  export type EligibilityCriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driveId" | "minCGPA" | "maxBacklogs" | "graduationYear", ExtArgs["result"]["eligibilityCriteria"]>
  export type EligibilityCriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drive?: boolean | PlacementDriveDefaultArgs<ExtArgs>
    eligibleBranches?: boolean | EligibilityCriteria$eligibleBranchesArgs<ExtArgs>
    _count?: boolean | EligibilityCriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EligibilityCriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EligibilityCriteria"
    objects: {
      drive: Prisma.$PlacementDrivePayload<ExtArgs>
      eligibleBranches: Prisma.$EligibleBranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      driveId: number
      minCGPA: number | null
      maxBacklogs: number | null
      graduationYear: number | null
    }, ExtArgs["result"]["eligibilityCriteria"]>
    composites: {}
  }

  type EligibilityCriteriaGetPayload<S extends boolean | null | undefined | EligibilityCriteriaDefaultArgs> = $Result.GetResult<Prisma.$EligibilityCriteriaPayload, S>

  type EligibilityCriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EligibilityCriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EligibilityCriteriaCountAggregateInputType | true
    }

  export interface EligibilityCriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EligibilityCriteria'], meta: { name: 'EligibilityCriteria' } }
    /**
     * Find zero or one EligibilityCriteria that matches the filter.
     * @param {EligibilityCriteriaFindUniqueArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EligibilityCriteriaFindUniqueArgs>(args: SelectSubset<T, EligibilityCriteriaFindUniqueArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EligibilityCriteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EligibilityCriteriaFindUniqueOrThrowArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EligibilityCriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, EligibilityCriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibilityCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaFindFirstArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EligibilityCriteriaFindFirstArgs>(args?: SelectSubset<T, EligibilityCriteriaFindFirstArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibilityCriteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaFindFirstOrThrowArgs} args - Arguments to find a EligibilityCriteria
     * @example
     * // Get one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EligibilityCriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, EligibilityCriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EligibilityCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findMany()
     * 
     * // Get first 10 EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eligibilityCriteriaWithIdOnly = await prisma.eligibilityCriteria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EligibilityCriteriaFindManyArgs>(args?: SelectSubset<T, EligibilityCriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EligibilityCriteria.
     * @param {EligibilityCriteriaCreateArgs} args - Arguments to create a EligibilityCriteria.
     * @example
     * // Create one EligibilityCriteria
     * const EligibilityCriteria = await prisma.eligibilityCriteria.create({
     *   data: {
     *     // ... data to create a EligibilityCriteria
     *   }
     * })
     * 
     */
    create<T extends EligibilityCriteriaCreateArgs>(args: SelectSubset<T, EligibilityCriteriaCreateArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EligibilityCriteria.
     * @param {EligibilityCriteriaCreateManyArgs} args - Arguments to create many EligibilityCriteria.
     * @example
     * // Create many EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EligibilityCriteriaCreateManyArgs>(args?: SelectSubset<T, EligibilityCriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EligibilityCriteria.
     * @param {EligibilityCriteriaDeleteArgs} args - Arguments to delete one EligibilityCriteria.
     * @example
     * // Delete one EligibilityCriteria
     * const EligibilityCriteria = await prisma.eligibilityCriteria.delete({
     *   where: {
     *     // ... filter to delete one EligibilityCriteria
     *   }
     * })
     * 
     */
    delete<T extends EligibilityCriteriaDeleteArgs>(args: SelectSubset<T, EligibilityCriteriaDeleteArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EligibilityCriteria.
     * @param {EligibilityCriteriaUpdateArgs} args - Arguments to update one EligibilityCriteria.
     * @example
     * // Update one EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EligibilityCriteriaUpdateArgs>(args: SelectSubset<T, EligibilityCriteriaUpdateArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EligibilityCriteria.
     * @param {EligibilityCriteriaDeleteManyArgs} args - Arguments to filter EligibilityCriteria to delete.
     * @example
     * // Delete a few EligibilityCriteria
     * const { count } = await prisma.eligibilityCriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EligibilityCriteriaDeleteManyArgs>(args?: SelectSubset<T, EligibilityCriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EligibilityCriteriaUpdateManyArgs>(args: SelectSubset<T, EligibilityCriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EligibilityCriteria.
     * @param {EligibilityCriteriaUpsertArgs} args - Arguments to update or create a EligibilityCriteria.
     * @example
     * // Update or create a EligibilityCriteria
     * const eligibilityCriteria = await prisma.eligibilityCriteria.upsert({
     *   create: {
     *     // ... data to create a EligibilityCriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EligibilityCriteria we want to update
     *   }
     * })
     */
    upsert<T extends EligibilityCriteriaUpsertArgs>(args: SelectSubset<T, EligibilityCriteriaUpsertArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaCountArgs} args - Arguments to filter EligibilityCriteria to count.
     * @example
     * // Count the number of EligibilityCriteria
     * const count = await prisma.eligibilityCriteria.count({
     *   where: {
     *     // ... the filter for the EligibilityCriteria we want to count
     *   }
     * })
    **/
    count<T extends EligibilityCriteriaCountArgs>(
      args?: Subset<T, EligibilityCriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EligibilityCriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EligibilityCriteriaAggregateArgs>(args: Subset<T, EligibilityCriteriaAggregateArgs>): Prisma.PrismaPromise<GetEligibilityCriteriaAggregateType<T>>

    /**
     * Group by EligibilityCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityCriteriaGroupByArgs} args - Group by arguments.
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
      T extends EligibilityCriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EligibilityCriteriaGroupByArgs['orderBy'] }
        : { orderBy?: EligibilityCriteriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EligibilityCriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEligibilityCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EligibilityCriteria model
   */
  readonly fields: EligibilityCriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EligibilityCriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EligibilityCriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drive<T extends PlacementDriveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDriveDefaultArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eligibleBranches<T extends EligibilityCriteria$eligibleBranchesArgs<ExtArgs> = {}>(args?: Subset<T, EligibilityCriteria$eligibleBranchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EligibilityCriteria model
   */
  interface EligibilityCriteriaFieldRefs {
    readonly id: FieldRef<"EligibilityCriteria", 'Int'>
    readonly driveId: FieldRef<"EligibilityCriteria", 'Int'>
    readonly minCGPA: FieldRef<"EligibilityCriteria", 'Float'>
    readonly maxBacklogs: FieldRef<"EligibilityCriteria", 'Int'>
    readonly graduationYear: FieldRef<"EligibilityCriteria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EligibilityCriteria findUnique
   */
  export type EligibilityCriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria findUniqueOrThrow
   */
  export type EligibilityCriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria findFirst
   */
  export type EligibilityCriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibilityCriteria.
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibilityCriteria.
     */
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria findFirstOrThrow
   */
  export type EligibilityCriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibilityCriteria.
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibilityCriteria.
     */
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria findMany
   */
  export type EligibilityCriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityCriteria to fetch.
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityCriteria to fetch.
     */
    orderBy?: EligibilityCriteriaOrderByWithRelationInput | EligibilityCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EligibilityCriteria.
     */
    cursor?: EligibilityCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityCriteria.
     */
    skip?: number
    distinct?: EligibilityCriteriaScalarFieldEnum | EligibilityCriteriaScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria create
   */
  export type EligibilityCriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a EligibilityCriteria.
     */
    data: XOR<EligibilityCriteriaCreateInput, EligibilityCriteriaUncheckedCreateInput>
  }

  /**
   * EligibilityCriteria createMany
   */
  export type EligibilityCriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EligibilityCriteria.
     */
    data: EligibilityCriteriaCreateManyInput | EligibilityCriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EligibilityCriteria update
   */
  export type EligibilityCriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a EligibilityCriteria.
     */
    data: XOR<EligibilityCriteriaUpdateInput, EligibilityCriteriaUncheckedUpdateInput>
    /**
     * Choose, which EligibilityCriteria to update.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria updateMany
   */
  export type EligibilityCriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EligibilityCriteria.
     */
    data: XOR<EligibilityCriteriaUpdateManyMutationInput, EligibilityCriteriaUncheckedUpdateManyInput>
    /**
     * Filter which EligibilityCriteria to update
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * Limit how many EligibilityCriteria to update.
     */
    limit?: number
  }

  /**
   * EligibilityCriteria upsert
   */
  export type EligibilityCriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the EligibilityCriteria to update in case it exists.
     */
    where: EligibilityCriteriaWhereUniqueInput
    /**
     * In case the EligibilityCriteria found by the `where` argument doesn't exist, create a new EligibilityCriteria with this data.
     */
    create: XOR<EligibilityCriteriaCreateInput, EligibilityCriteriaUncheckedCreateInput>
    /**
     * In case the EligibilityCriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EligibilityCriteriaUpdateInput, EligibilityCriteriaUncheckedUpdateInput>
  }

  /**
   * EligibilityCriteria delete
   */
  export type EligibilityCriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
    /**
     * Filter which EligibilityCriteria to delete.
     */
    where: EligibilityCriteriaWhereUniqueInput
  }

  /**
   * EligibilityCriteria deleteMany
   */
  export type EligibilityCriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibilityCriteria to delete
     */
    where?: EligibilityCriteriaWhereInput
    /**
     * Limit how many EligibilityCriteria to delete.
     */
    limit?: number
  }

  /**
   * EligibilityCriteria.eligibleBranches
   */
  export type EligibilityCriteria$eligibleBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    where?: EligibleBranchWhereInput
    orderBy?: EligibleBranchOrderByWithRelationInput | EligibleBranchOrderByWithRelationInput[]
    cursor?: EligibleBranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EligibleBranchScalarFieldEnum | EligibleBranchScalarFieldEnum[]
  }

  /**
   * EligibilityCriteria without action
   */
  export type EligibilityCriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityCriteria
     */
    select?: EligibilityCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityCriteria
     */
    omit?: EligibilityCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityCriteriaInclude<ExtArgs> | null
  }


  /**
   * Model EligibleBranch
   */

  export type AggregateEligibleBranch = {
    _count: EligibleBranchCountAggregateOutputType | null
    _avg: EligibleBranchAvgAggregateOutputType | null
    _sum: EligibleBranchSumAggregateOutputType | null
    _min: EligibleBranchMinAggregateOutputType | null
    _max: EligibleBranchMaxAggregateOutputType | null
  }

  export type EligibleBranchAvgAggregateOutputType = {
    id: number | null
    eligibilityId: number | null
  }

  export type EligibleBranchSumAggregateOutputType = {
    id: number | null
    eligibilityId: number | null
  }

  export type EligibleBranchMinAggregateOutputType = {
    id: number | null
    eligibilityId: number | null
    branch: string | null
  }

  export type EligibleBranchMaxAggregateOutputType = {
    id: number | null
    eligibilityId: number | null
    branch: string | null
  }

  export type EligibleBranchCountAggregateOutputType = {
    id: number
    eligibilityId: number
    branch: number
    _all: number
  }


  export type EligibleBranchAvgAggregateInputType = {
    id?: true
    eligibilityId?: true
  }

  export type EligibleBranchSumAggregateInputType = {
    id?: true
    eligibilityId?: true
  }

  export type EligibleBranchMinAggregateInputType = {
    id?: true
    eligibilityId?: true
    branch?: true
  }

  export type EligibleBranchMaxAggregateInputType = {
    id?: true
    eligibilityId?: true
    branch?: true
  }

  export type EligibleBranchCountAggregateInputType = {
    id?: true
    eligibilityId?: true
    branch?: true
    _all?: true
  }

  export type EligibleBranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibleBranch to aggregate.
     */
    where?: EligibleBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibleBranches to fetch.
     */
    orderBy?: EligibleBranchOrderByWithRelationInput | EligibleBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EligibleBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibleBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibleBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EligibleBranches
    **/
    _count?: true | EligibleBranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EligibleBranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EligibleBranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EligibleBranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EligibleBranchMaxAggregateInputType
  }

  export type GetEligibleBranchAggregateType<T extends EligibleBranchAggregateArgs> = {
        [P in keyof T & keyof AggregateEligibleBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEligibleBranch[P]>
      : GetScalarType<T[P], AggregateEligibleBranch[P]>
  }




  export type EligibleBranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EligibleBranchWhereInput
    orderBy?: EligibleBranchOrderByWithAggregationInput | EligibleBranchOrderByWithAggregationInput[]
    by: EligibleBranchScalarFieldEnum[] | EligibleBranchScalarFieldEnum
    having?: EligibleBranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EligibleBranchCountAggregateInputType | true
    _avg?: EligibleBranchAvgAggregateInputType
    _sum?: EligibleBranchSumAggregateInputType
    _min?: EligibleBranchMinAggregateInputType
    _max?: EligibleBranchMaxAggregateInputType
  }

  export type EligibleBranchGroupByOutputType = {
    id: number
    eligibilityId: number
    branch: string
    _count: EligibleBranchCountAggregateOutputType | null
    _avg: EligibleBranchAvgAggregateOutputType | null
    _sum: EligibleBranchSumAggregateOutputType | null
    _min: EligibleBranchMinAggregateOutputType | null
    _max: EligibleBranchMaxAggregateOutputType | null
  }

  type GetEligibleBranchGroupByPayload<T extends EligibleBranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EligibleBranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EligibleBranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EligibleBranchGroupByOutputType[P]>
            : GetScalarType<T[P], EligibleBranchGroupByOutputType[P]>
        }
      >
    >


  export type EligibleBranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eligibilityId?: boolean
    branch?: boolean
    eligibility?: boolean | EligibilityCriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eligibleBranch"]>



  export type EligibleBranchSelectScalar = {
    id?: boolean
    eligibilityId?: boolean
    branch?: boolean
  }

  export type EligibleBranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eligibilityId" | "branch", ExtArgs["result"]["eligibleBranch"]>
  export type EligibleBranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibility?: boolean | EligibilityCriteriaDefaultArgs<ExtArgs>
  }

  export type $EligibleBranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EligibleBranch"
    objects: {
      eligibility: Prisma.$EligibilityCriteriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eligibilityId: number
      branch: string
    }, ExtArgs["result"]["eligibleBranch"]>
    composites: {}
  }

  type EligibleBranchGetPayload<S extends boolean | null | undefined | EligibleBranchDefaultArgs> = $Result.GetResult<Prisma.$EligibleBranchPayload, S>

  type EligibleBranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EligibleBranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EligibleBranchCountAggregateInputType | true
    }

  export interface EligibleBranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EligibleBranch'], meta: { name: 'EligibleBranch' } }
    /**
     * Find zero or one EligibleBranch that matches the filter.
     * @param {EligibleBranchFindUniqueArgs} args - Arguments to find a EligibleBranch
     * @example
     * // Get one EligibleBranch
     * const eligibleBranch = await prisma.eligibleBranch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EligibleBranchFindUniqueArgs>(args: SelectSubset<T, EligibleBranchFindUniqueArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EligibleBranch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EligibleBranchFindUniqueOrThrowArgs} args - Arguments to find a EligibleBranch
     * @example
     * // Get one EligibleBranch
     * const eligibleBranch = await prisma.eligibleBranch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EligibleBranchFindUniqueOrThrowArgs>(args: SelectSubset<T, EligibleBranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibleBranch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchFindFirstArgs} args - Arguments to find a EligibleBranch
     * @example
     * // Get one EligibleBranch
     * const eligibleBranch = await prisma.eligibleBranch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EligibleBranchFindFirstArgs>(args?: SelectSubset<T, EligibleBranchFindFirstArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibleBranch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchFindFirstOrThrowArgs} args - Arguments to find a EligibleBranch
     * @example
     * // Get one EligibleBranch
     * const eligibleBranch = await prisma.eligibleBranch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EligibleBranchFindFirstOrThrowArgs>(args?: SelectSubset<T, EligibleBranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EligibleBranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EligibleBranches
     * const eligibleBranches = await prisma.eligibleBranch.findMany()
     * 
     * // Get first 10 EligibleBranches
     * const eligibleBranches = await prisma.eligibleBranch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eligibleBranchWithIdOnly = await prisma.eligibleBranch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EligibleBranchFindManyArgs>(args?: SelectSubset<T, EligibleBranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EligibleBranch.
     * @param {EligibleBranchCreateArgs} args - Arguments to create a EligibleBranch.
     * @example
     * // Create one EligibleBranch
     * const EligibleBranch = await prisma.eligibleBranch.create({
     *   data: {
     *     // ... data to create a EligibleBranch
     *   }
     * })
     * 
     */
    create<T extends EligibleBranchCreateArgs>(args: SelectSubset<T, EligibleBranchCreateArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EligibleBranches.
     * @param {EligibleBranchCreateManyArgs} args - Arguments to create many EligibleBranches.
     * @example
     * // Create many EligibleBranches
     * const eligibleBranch = await prisma.eligibleBranch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EligibleBranchCreateManyArgs>(args?: SelectSubset<T, EligibleBranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EligibleBranch.
     * @param {EligibleBranchDeleteArgs} args - Arguments to delete one EligibleBranch.
     * @example
     * // Delete one EligibleBranch
     * const EligibleBranch = await prisma.eligibleBranch.delete({
     *   where: {
     *     // ... filter to delete one EligibleBranch
     *   }
     * })
     * 
     */
    delete<T extends EligibleBranchDeleteArgs>(args: SelectSubset<T, EligibleBranchDeleteArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EligibleBranch.
     * @param {EligibleBranchUpdateArgs} args - Arguments to update one EligibleBranch.
     * @example
     * // Update one EligibleBranch
     * const eligibleBranch = await prisma.eligibleBranch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EligibleBranchUpdateArgs>(args: SelectSubset<T, EligibleBranchUpdateArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EligibleBranches.
     * @param {EligibleBranchDeleteManyArgs} args - Arguments to filter EligibleBranches to delete.
     * @example
     * // Delete a few EligibleBranches
     * const { count } = await prisma.eligibleBranch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EligibleBranchDeleteManyArgs>(args?: SelectSubset<T, EligibleBranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EligibleBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EligibleBranches
     * const eligibleBranch = await prisma.eligibleBranch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EligibleBranchUpdateManyArgs>(args: SelectSubset<T, EligibleBranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EligibleBranch.
     * @param {EligibleBranchUpsertArgs} args - Arguments to update or create a EligibleBranch.
     * @example
     * // Update or create a EligibleBranch
     * const eligibleBranch = await prisma.eligibleBranch.upsert({
     *   create: {
     *     // ... data to create a EligibleBranch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EligibleBranch we want to update
     *   }
     * })
     */
    upsert<T extends EligibleBranchUpsertArgs>(args: SelectSubset<T, EligibleBranchUpsertArgs<ExtArgs>>): Prisma__EligibleBranchClient<$Result.GetResult<Prisma.$EligibleBranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EligibleBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchCountArgs} args - Arguments to filter EligibleBranches to count.
     * @example
     * // Count the number of EligibleBranches
     * const count = await prisma.eligibleBranch.count({
     *   where: {
     *     // ... the filter for the EligibleBranches we want to count
     *   }
     * })
    **/
    count<T extends EligibleBranchCountArgs>(
      args?: Subset<T, EligibleBranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EligibleBranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EligibleBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EligibleBranchAggregateArgs>(args: Subset<T, EligibleBranchAggregateArgs>): Prisma.PrismaPromise<GetEligibleBranchAggregateType<T>>

    /**
     * Group by EligibleBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibleBranchGroupByArgs} args - Group by arguments.
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
      T extends EligibleBranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EligibleBranchGroupByArgs['orderBy'] }
        : { orderBy?: EligibleBranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EligibleBranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEligibleBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EligibleBranch model
   */
  readonly fields: EligibleBranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EligibleBranch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EligibleBranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eligibility<T extends EligibilityCriteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EligibilityCriteriaDefaultArgs<ExtArgs>>): Prisma__EligibilityCriteriaClient<$Result.GetResult<Prisma.$EligibilityCriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EligibleBranch model
   */
  interface EligibleBranchFieldRefs {
    readonly id: FieldRef<"EligibleBranch", 'Int'>
    readonly eligibilityId: FieldRef<"EligibleBranch", 'Int'>
    readonly branch: FieldRef<"EligibleBranch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EligibleBranch findUnique
   */
  export type EligibleBranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * Filter, which EligibleBranch to fetch.
     */
    where: EligibleBranchWhereUniqueInput
  }

  /**
   * EligibleBranch findUniqueOrThrow
   */
  export type EligibleBranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * Filter, which EligibleBranch to fetch.
     */
    where: EligibleBranchWhereUniqueInput
  }

  /**
   * EligibleBranch findFirst
   */
  export type EligibleBranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * Filter, which EligibleBranch to fetch.
     */
    where?: EligibleBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibleBranches to fetch.
     */
    orderBy?: EligibleBranchOrderByWithRelationInput | EligibleBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibleBranches.
     */
    cursor?: EligibleBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibleBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibleBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibleBranches.
     */
    distinct?: EligibleBranchScalarFieldEnum | EligibleBranchScalarFieldEnum[]
  }

  /**
   * EligibleBranch findFirstOrThrow
   */
  export type EligibleBranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * Filter, which EligibleBranch to fetch.
     */
    where?: EligibleBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibleBranches to fetch.
     */
    orderBy?: EligibleBranchOrderByWithRelationInput | EligibleBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibleBranches.
     */
    cursor?: EligibleBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibleBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibleBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibleBranches.
     */
    distinct?: EligibleBranchScalarFieldEnum | EligibleBranchScalarFieldEnum[]
  }

  /**
   * EligibleBranch findMany
   */
  export type EligibleBranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * Filter, which EligibleBranches to fetch.
     */
    where?: EligibleBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibleBranches to fetch.
     */
    orderBy?: EligibleBranchOrderByWithRelationInput | EligibleBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EligibleBranches.
     */
    cursor?: EligibleBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibleBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibleBranches.
     */
    skip?: number
    distinct?: EligibleBranchScalarFieldEnum | EligibleBranchScalarFieldEnum[]
  }

  /**
   * EligibleBranch create
   */
  export type EligibleBranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * The data needed to create a EligibleBranch.
     */
    data: XOR<EligibleBranchCreateInput, EligibleBranchUncheckedCreateInput>
  }

  /**
   * EligibleBranch createMany
   */
  export type EligibleBranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EligibleBranches.
     */
    data: EligibleBranchCreateManyInput | EligibleBranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EligibleBranch update
   */
  export type EligibleBranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * The data needed to update a EligibleBranch.
     */
    data: XOR<EligibleBranchUpdateInput, EligibleBranchUncheckedUpdateInput>
    /**
     * Choose, which EligibleBranch to update.
     */
    where: EligibleBranchWhereUniqueInput
  }

  /**
   * EligibleBranch updateMany
   */
  export type EligibleBranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EligibleBranches.
     */
    data: XOR<EligibleBranchUpdateManyMutationInput, EligibleBranchUncheckedUpdateManyInput>
    /**
     * Filter which EligibleBranches to update
     */
    where?: EligibleBranchWhereInput
    /**
     * Limit how many EligibleBranches to update.
     */
    limit?: number
  }

  /**
   * EligibleBranch upsert
   */
  export type EligibleBranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * The filter to search for the EligibleBranch to update in case it exists.
     */
    where: EligibleBranchWhereUniqueInput
    /**
     * In case the EligibleBranch found by the `where` argument doesn't exist, create a new EligibleBranch with this data.
     */
    create: XOR<EligibleBranchCreateInput, EligibleBranchUncheckedCreateInput>
    /**
     * In case the EligibleBranch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EligibleBranchUpdateInput, EligibleBranchUncheckedUpdateInput>
  }

  /**
   * EligibleBranch delete
   */
  export type EligibleBranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
    /**
     * Filter which EligibleBranch to delete.
     */
    where: EligibleBranchWhereUniqueInput
  }

  /**
   * EligibleBranch deleteMany
   */
  export type EligibleBranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibleBranches to delete
     */
    where?: EligibleBranchWhereInput
    /**
     * Limit how many EligibleBranches to delete.
     */
    limit?: number
  }

  /**
   * EligibleBranch without action
   */
  export type EligibleBranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibleBranch
     */
    select?: EligibleBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibleBranch
     */
    omit?: EligibleBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibleBranchInclude<ExtArgs> | null
  }


  /**
   * Model PlacementStatus
   */

  export type AggregatePlacementStatus = {
    _count: PlacementStatusCountAggregateOutputType | null
    _avg: PlacementStatusAvgAggregateOutputType | null
    _sum: PlacementStatusSumAggregateOutputType | null
    _min: PlacementStatusMinAggregateOutputType | null
    _max: PlacementStatusMaxAggregateOutputType | null
  }

  export type PlacementStatusAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    driveId: number | null
  }

  export type PlacementStatusSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    driveId: number | null
  }

  export type PlacementStatusMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    driveId: number | null
    status: $Enums.StudentStatus | null
    remarks: string | null
    updatedAt: Date | null
  }

  export type PlacementStatusMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    driveId: number | null
    status: $Enums.StudentStatus | null
    remarks: string | null
    updatedAt: Date | null
  }

  export type PlacementStatusCountAggregateOutputType = {
    id: number
    studentId: number
    driveId: number
    status: number
    remarks: number
    updatedAt: number
    _all: number
  }


  export type PlacementStatusAvgAggregateInputType = {
    id?: true
    studentId?: true
    driveId?: true
  }

  export type PlacementStatusSumAggregateInputType = {
    id?: true
    studentId?: true
    driveId?: true
  }

  export type PlacementStatusMinAggregateInputType = {
    id?: true
    studentId?: true
    driveId?: true
    status?: true
    remarks?: true
    updatedAt?: true
  }

  export type PlacementStatusMaxAggregateInputType = {
    id?: true
    studentId?: true
    driveId?: true
    status?: true
    remarks?: true
    updatedAt?: true
  }

  export type PlacementStatusCountAggregateInputType = {
    id?: true
    studentId?: true
    driveId?: true
    status?: true
    remarks?: true
    updatedAt?: true
    _all?: true
  }

  export type PlacementStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlacementStatus to aggregate.
     */
    where?: PlacementStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementStatuses to fetch.
     */
    orderBy?: PlacementStatusOrderByWithRelationInput | PlacementStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacementStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlacementStatuses
    **/
    _count?: true | PlacementStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacementStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacementStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementStatusMaxAggregateInputType
  }

  export type GetPlacementStatusAggregateType<T extends PlacementStatusAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacementStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacementStatus[P]>
      : GetScalarType<T[P], AggregatePlacementStatus[P]>
  }




  export type PlacementStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementStatusWhereInput
    orderBy?: PlacementStatusOrderByWithAggregationInput | PlacementStatusOrderByWithAggregationInput[]
    by: PlacementStatusScalarFieldEnum[] | PlacementStatusScalarFieldEnum
    having?: PlacementStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementStatusCountAggregateInputType | true
    _avg?: PlacementStatusAvgAggregateInputType
    _sum?: PlacementStatusSumAggregateInputType
    _min?: PlacementStatusMinAggregateInputType
    _max?: PlacementStatusMaxAggregateInputType
  }

  export type PlacementStatusGroupByOutputType = {
    id: number
    studentId: number
    driveId: number
    status: $Enums.StudentStatus
    remarks: string | null
    updatedAt: Date
    _count: PlacementStatusCountAggregateOutputType | null
    _avg: PlacementStatusAvgAggregateOutputType | null
    _sum: PlacementStatusSumAggregateOutputType | null
    _min: PlacementStatusMinAggregateOutputType | null
    _max: PlacementStatusMaxAggregateOutputType | null
  }

  type GetPlacementStatusGroupByPayload<T extends PlacementStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementStatusGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementStatusGroupByOutputType[P]>
        }
      >
    >


  export type PlacementStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    driveId?: boolean
    status?: boolean
    remarks?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    drive?: boolean | PlacementDriveDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placementStatus"]>



  export type PlacementStatusSelectScalar = {
    id?: boolean
    studentId?: boolean
    driveId?: boolean
    status?: boolean
    remarks?: boolean
    updatedAt?: boolean
  }

  export type PlacementStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "driveId" | "status" | "remarks" | "updatedAt", ExtArgs["result"]["placementStatus"]>
  export type PlacementStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    drive?: boolean | PlacementDriveDefaultArgs<ExtArgs>
  }

  export type $PlacementStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlacementStatus"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      drive: Prisma.$PlacementDrivePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      driveId: number
      status: $Enums.StudentStatus
      remarks: string | null
      updatedAt: Date
    }, ExtArgs["result"]["placementStatus"]>
    composites: {}
  }

  type PlacementStatusGetPayload<S extends boolean | null | undefined | PlacementStatusDefaultArgs> = $Result.GetResult<Prisma.$PlacementStatusPayload, S>

  type PlacementStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacementStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementStatusCountAggregateInputType | true
    }

  export interface PlacementStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlacementStatus'], meta: { name: 'PlacementStatus' } }
    /**
     * Find zero or one PlacementStatus that matches the filter.
     * @param {PlacementStatusFindUniqueArgs} args - Arguments to find a PlacementStatus
     * @example
     * // Get one PlacementStatus
     * const placementStatus = await prisma.placementStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacementStatusFindUniqueArgs>(args: SelectSubset<T, PlacementStatusFindUniqueArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlacementStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacementStatusFindUniqueOrThrowArgs} args - Arguments to find a PlacementStatus
     * @example
     * // Get one PlacementStatus
     * const placementStatus = await prisma.placementStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacementStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacementStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlacementStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusFindFirstArgs} args - Arguments to find a PlacementStatus
     * @example
     * // Get one PlacementStatus
     * const placementStatus = await prisma.placementStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacementStatusFindFirstArgs>(args?: SelectSubset<T, PlacementStatusFindFirstArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlacementStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusFindFirstOrThrowArgs} args - Arguments to find a PlacementStatus
     * @example
     * // Get one PlacementStatus
     * const placementStatus = await prisma.placementStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacementStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacementStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlacementStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlacementStatuses
     * const placementStatuses = await prisma.placementStatus.findMany()
     * 
     * // Get first 10 PlacementStatuses
     * const placementStatuses = await prisma.placementStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placementStatusWithIdOnly = await prisma.placementStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacementStatusFindManyArgs>(args?: SelectSubset<T, PlacementStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlacementStatus.
     * @param {PlacementStatusCreateArgs} args - Arguments to create a PlacementStatus.
     * @example
     * // Create one PlacementStatus
     * const PlacementStatus = await prisma.placementStatus.create({
     *   data: {
     *     // ... data to create a PlacementStatus
     *   }
     * })
     * 
     */
    create<T extends PlacementStatusCreateArgs>(args: SelectSubset<T, PlacementStatusCreateArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlacementStatuses.
     * @param {PlacementStatusCreateManyArgs} args - Arguments to create many PlacementStatuses.
     * @example
     * // Create many PlacementStatuses
     * const placementStatus = await prisma.placementStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacementStatusCreateManyArgs>(args?: SelectSubset<T, PlacementStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlacementStatus.
     * @param {PlacementStatusDeleteArgs} args - Arguments to delete one PlacementStatus.
     * @example
     * // Delete one PlacementStatus
     * const PlacementStatus = await prisma.placementStatus.delete({
     *   where: {
     *     // ... filter to delete one PlacementStatus
     *   }
     * })
     * 
     */
    delete<T extends PlacementStatusDeleteArgs>(args: SelectSubset<T, PlacementStatusDeleteArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlacementStatus.
     * @param {PlacementStatusUpdateArgs} args - Arguments to update one PlacementStatus.
     * @example
     * // Update one PlacementStatus
     * const placementStatus = await prisma.placementStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacementStatusUpdateArgs>(args: SelectSubset<T, PlacementStatusUpdateArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlacementStatuses.
     * @param {PlacementStatusDeleteManyArgs} args - Arguments to filter PlacementStatuses to delete.
     * @example
     * // Delete a few PlacementStatuses
     * const { count } = await prisma.placementStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacementStatusDeleteManyArgs>(args?: SelectSubset<T, PlacementStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlacementStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlacementStatuses
     * const placementStatus = await prisma.placementStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacementStatusUpdateManyArgs>(args: SelectSubset<T, PlacementStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlacementStatus.
     * @param {PlacementStatusUpsertArgs} args - Arguments to update or create a PlacementStatus.
     * @example
     * // Update or create a PlacementStatus
     * const placementStatus = await prisma.placementStatus.upsert({
     *   create: {
     *     // ... data to create a PlacementStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlacementStatus we want to update
     *   }
     * })
     */
    upsert<T extends PlacementStatusUpsertArgs>(args: SelectSubset<T, PlacementStatusUpsertArgs<ExtArgs>>): Prisma__PlacementStatusClient<$Result.GetResult<Prisma.$PlacementStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlacementStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusCountArgs} args - Arguments to filter PlacementStatuses to count.
     * @example
     * // Count the number of PlacementStatuses
     * const count = await prisma.placementStatus.count({
     *   where: {
     *     // ... the filter for the PlacementStatuses we want to count
     *   }
     * })
    **/
    count<T extends PlacementStatusCountArgs>(
      args?: Subset<T, PlacementStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlacementStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlacementStatusAggregateArgs>(args: Subset<T, PlacementStatusAggregateArgs>): Prisma.PrismaPromise<GetPlacementStatusAggregateType<T>>

    /**
     * Group by PlacementStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementStatusGroupByArgs} args - Group by arguments.
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
      T extends PlacementStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacementStatusGroupByArgs['orderBy'] }
        : { orderBy?: PlacementStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlacementStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlacementStatus model
   */
  readonly fields: PlacementStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlacementStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacementStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drive<T extends PlacementDriveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacementDriveDefaultArgs<ExtArgs>>): Prisma__PlacementDriveClient<$Result.GetResult<Prisma.$PlacementDrivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlacementStatus model
   */
  interface PlacementStatusFieldRefs {
    readonly id: FieldRef<"PlacementStatus", 'Int'>
    readonly studentId: FieldRef<"PlacementStatus", 'Int'>
    readonly driveId: FieldRef<"PlacementStatus", 'Int'>
    readonly status: FieldRef<"PlacementStatus", 'StudentStatus'>
    readonly remarks: FieldRef<"PlacementStatus", 'String'>
    readonly updatedAt: FieldRef<"PlacementStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlacementStatus findUnique
   */
  export type PlacementStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlacementStatus to fetch.
     */
    where: PlacementStatusWhereUniqueInput
  }

  /**
   * PlacementStatus findUniqueOrThrow
   */
  export type PlacementStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlacementStatus to fetch.
     */
    where: PlacementStatusWhereUniqueInput
  }

  /**
   * PlacementStatus findFirst
   */
  export type PlacementStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlacementStatus to fetch.
     */
    where?: PlacementStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementStatuses to fetch.
     */
    orderBy?: PlacementStatusOrderByWithRelationInput | PlacementStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlacementStatuses.
     */
    cursor?: PlacementStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlacementStatuses.
     */
    distinct?: PlacementStatusScalarFieldEnum | PlacementStatusScalarFieldEnum[]
  }

  /**
   * PlacementStatus findFirstOrThrow
   */
  export type PlacementStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlacementStatus to fetch.
     */
    where?: PlacementStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementStatuses to fetch.
     */
    orderBy?: PlacementStatusOrderByWithRelationInput | PlacementStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlacementStatuses.
     */
    cursor?: PlacementStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlacementStatuses.
     */
    distinct?: PlacementStatusScalarFieldEnum | PlacementStatusScalarFieldEnum[]
  }

  /**
   * PlacementStatus findMany
   */
  export type PlacementStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * Filter, which PlacementStatuses to fetch.
     */
    where?: PlacementStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlacementStatuses to fetch.
     */
    orderBy?: PlacementStatusOrderByWithRelationInput | PlacementStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlacementStatuses.
     */
    cursor?: PlacementStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlacementStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlacementStatuses.
     */
    skip?: number
    distinct?: PlacementStatusScalarFieldEnum | PlacementStatusScalarFieldEnum[]
  }

  /**
   * PlacementStatus create
   */
  export type PlacementStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a PlacementStatus.
     */
    data: XOR<PlacementStatusCreateInput, PlacementStatusUncheckedCreateInput>
  }

  /**
   * PlacementStatus createMany
   */
  export type PlacementStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlacementStatuses.
     */
    data: PlacementStatusCreateManyInput | PlacementStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlacementStatus update
   */
  export type PlacementStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a PlacementStatus.
     */
    data: XOR<PlacementStatusUpdateInput, PlacementStatusUncheckedUpdateInput>
    /**
     * Choose, which PlacementStatus to update.
     */
    where: PlacementStatusWhereUniqueInput
  }

  /**
   * PlacementStatus updateMany
   */
  export type PlacementStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlacementStatuses.
     */
    data: XOR<PlacementStatusUpdateManyMutationInput, PlacementStatusUncheckedUpdateManyInput>
    /**
     * Filter which PlacementStatuses to update
     */
    where?: PlacementStatusWhereInput
    /**
     * Limit how many PlacementStatuses to update.
     */
    limit?: number
  }

  /**
   * PlacementStatus upsert
   */
  export type PlacementStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the PlacementStatus to update in case it exists.
     */
    where: PlacementStatusWhereUniqueInput
    /**
     * In case the PlacementStatus found by the `where` argument doesn't exist, create a new PlacementStatus with this data.
     */
    create: XOR<PlacementStatusCreateInput, PlacementStatusUncheckedCreateInput>
    /**
     * In case the PlacementStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacementStatusUpdateInput, PlacementStatusUncheckedUpdateInput>
  }

  /**
   * PlacementStatus delete
   */
  export type PlacementStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
    /**
     * Filter which PlacementStatus to delete.
     */
    where: PlacementStatusWhereUniqueInput
  }

  /**
   * PlacementStatus deleteMany
   */
  export type PlacementStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlacementStatuses to delete
     */
    where?: PlacementStatusWhereInput
    /**
     * Limit how many PlacementStatuses to delete.
     */
    limit?: number
  }

  /**
   * PlacementStatus without action
   */
  export type PlacementStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacementStatus
     */
    select?: PlacementStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlacementStatus
     */
    omit?: PlacementStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementStatusInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
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
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
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
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    type: $Enums.NotificationType
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
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
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      type: $Enums.NotificationType
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
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
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
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ResumeSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    resumeUrl: string | null
    uploadedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    resumeUrl: string | null
    uploadedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    studentId: number
    resumeUrl: number
    uploadedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ResumeSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    studentId?: true
    resumeUrl?: true
    uploadedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    studentId?: true
    resumeUrl?: true
    uploadedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    studentId?: true
    resumeUrl?: true
    uploadedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: number
    studentId: number
    resumeUrl: string
    uploadedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    resumeUrl?: boolean
    uploadedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>



  export type ResumeSelectScalar = {
    id?: boolean
    studentId?: boolean
    resumeUrl?: boolean
    uploadedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "resumeUrl" | "uploadedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      resumeUrl: string
      uploadedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'Int'>
    readonly studentId: FieldRef<"Resume", 'Int'>
    readonly resumeUrl: FieldRef<"Resume", 'String'>
    readonly uploadedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
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
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    prn: 'prn',
    branch: 'branch',
    year: 'year',
    graduationYear: 'graduationYear',
    cgpa: 'cgpa',
    activeBacklogs: 'activeBacklogs',
    phone: 'phone',
    linkedin: 'linkedin',
    github: 'github',
    portfolio: 'portfolio',
    profileCompleted: 'profileCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentSkillScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    skillName: 'skillName'
  };

  export type StudentSkillScalarFieldEnum = (typeof StudentSkillScalarFieldEnum)[keyof typeof StudentSkillScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    about: 'about',
    location: 'location',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const PlacementDriveScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    createdBy: 'createdBy',
    role: 'role',
    package: 'package',
    driveDate: 'driveDate',
    venue: 'venue',
    deadline: 'deadline',
    jobType: 'jobType',
    description: 'description',
    hiringProcess: 'hiringProcess',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PlacementDriveScalarFieldEnum = (typeof PlacementDriveScalarFieldEnum)[keyof typeof PlacementDriveScalarFieldEnum]


  export const EligibilityCriteriaScalarFieldEnum: {
    id: 'id',
    driveId: 'driveId',
    minCGPA: 'minCGPA',
    maxBacklogs: 'maxBacklogs',
    graduationYear: 'graduationYear'
  };

  export type EligibilityCriteriaScalarFieldEnum = (typeof EligibilityCriteriaScalarFieldEnum)[keyof typeof EligibilityCriteriaScalarFieldEnum]


  export const EligibleBranchScalarFieldEnum: {
    id: 'id',
    eligibilityId: 'eligibilityId',
    branch: 'branch'
  };

  export type EligibleBranchScalarFieldEnum = (typeof EligibleBranchScalarFieldEnum)[keyof typeof EligibleBranchScalarFieldEnum]


  export const PlacementStatusScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    driveId: 'driveId',
    status: 'status',
    remarks: 'remarks',
    updatedAt: 'updatedAt'
  };

  export type PlacementStatusScalarFieldEnum = (typeof PlacementStatusScalarFieldEnum)[keyof typeof PlacementStatusScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    resumeUrl: 'resumeUrl',
    uploadedAt: 'uploadedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const StudentOrderByRelevanceFieldEnum: {
    prn: 'prn',
    branch: 'branch',
    phone: 'phone',
    linkedin: 'linkedin',
    github: 'github',
    portfolio: 'portfolio'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const StudentSkillOrderByRelevanceFieldEnum: {
    skillName: 'skillName'
  };

  export type StudentSkillOrderByRelevanceFieldEnum = (typeof StudentSkillOrderByRelevanceFieldEnum)[keyof typeof StudentSkillOrderByRelevanceFieldEnum]


  export const CompanyOrderByRelevanceFieldEnum: {
    companyName: 'companyName',
    about: 'about',
    location: 'location',
    website: 'website'
  };

  export type CompanyOrderByRelevanceFieldEnum = (typeof CompanyOrderByRelevanceFieldEnum)[keyof typeof CompanyOrderByRelevanceFieldEnum]


  export const PlacementDriveOrderByRelevanceFieldEnum: {
    role: 'role',
    package: 'package',
    venue: 'venue',
    jobType: 'jobType',
    description: 'description',
    hiringProcess: 'hiringProcess'
  };

  export type PlacementDriveOrderByRelevanceFieldEnum = (typeof PlacementDriveOrderByRelevanceFieldEnum)[keyof typeof PlacementDriveOrderByRelevanceFieldEnum]


  export const EligibleBranchOrderByRelevanceFieldEnum: {
    branch: 'branch'
  };

  export type EligibleBranchOrderByRelevanceFieldEnum = (typeof EligibleBranchOrderByRelevanceFieldEnum)[keyof typeof EligibleBranchOrderByRelevanceFieldEnum]


  export const PlacementStatusOrderByRelevanceFieldEnum: {
    remarks: 'remarks'
  };

  export type PlacementStatusOrderByRelevanceFieldEnum = (typeof PlacementStatusOrderByRelevanceFieldEnum)[keyof typeof PlacementStatusOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    title: 'title',
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const ResumeOrderByRelevanceFieldEnum: {
    resumeUrl: 'resumeUrl'
  };

  export type ResumeOrderByRelevanceFieldEnum = (typeof ResumeOrderByRelevanceFieldEnum)[keyof typeof ResumeOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DriveStatus'
   */
  export type EnumDriveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriveStatus'>
    


  /**
   * Reference to a field of type 'StudentStatus'
   */
  export type EnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    
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
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    drives?: PlacementDriveListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    drives?: PlacementDriveOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    drives?: PlacementDriveListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    prn?: StringFilter<"Student"> | string
    branch?: StringFilter<"Student"> | string
    year?: IntFilter<"Student"> | number
    graduationYear?: IntNullableFilter<"Student"> | number | null
    cgpa?: FloatFilter<"Student"> | number
    activeBacklogs?: IntFilter<"Student"> | number
    phone?: StringFilter<"Student"> | string
    linkedin?: StringNullableFilter<"Student"> | string | null
    github?: StringNullableFilter<"Student"> | string | null
    portfolio?: StringNullableFilter<"Student"> | string | null
    profileCompleted?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    skills?: StudentSkillListRelationFilter
    placementStatuses?: PlacementStatusListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    prn?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrderInput | SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    profileCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
    skills?: StudentSkillOrderByRelationAggregateInput
    placementStatuses?: PlacementStatusOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    prn?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    branch?: StringFilter<"Student"> | string
    year?: IntFilter<"Student"> | number
    graduationYear?: IntNullableFilter<"Student"> | number | null
    cgpa?: FloatFilter<"Student"> | number
    activeBacklogs?: IntFilter<"Student"> | number
    phone?: StringFilter<"Student"> | string
    linkedin?: StringNullableFilter<"Student"> | string | null
    github?: StringNullableFilter<"Student"> | string | null
    portfolio?: StringNullableFilter<"Student"> | string | null
    profileCompleted?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    skills?: StudentSkillListRelationFilter
    placementStatuses?: PlacementStatusListRelationFilter
  }, "id" | "userId" | "prn">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    prn?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrderInput | SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    profileCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    userId?: IntWithAggregatesFilter<"Student"> | number
    prn?: StringWithAggregatesFilter<"Student"> | string
    branch?: StringWithAggregatesFilter<"Student"> | string
    year?: IntWithAggregatesFilter<"Student"> | number
    graduationYear?: IntNullableWithAggregatesFilter<"Student"> | number | null
    cgpa?: FloatWithAggregatesFilter<"Student"> | number
    activeBacklogs?: IntWithAggregatesFilter<"Student"> | number
    phone?: StringWithAggregatesFilter<"Student"> | string
    linkedin?: StringNullableWithAggregatesFilter<"Student"> | string | null
    github?: StringNullableWithAggregatesFilter<"Student"> | string | null
    portfolio?: StringNullableWithAggregatesFilter<"Student"> | string | null
    profileCompleted?: BoolWithAggregatesFilter<"Student"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StudentSkillWhereInput = {
    AND?: StudentSkillWhereInput | StudentSkillWhereInput[]
    OR?: StudentSkillWhereInput[]
    NOT?: StudentSkillWhereInput | StudentSkillWhereInput[]
    id?: IntFilter<"StudentSkill"> | number
    studentId?: IntFilter<"StudentSkill"> | number
    skillName?: StringFilter<"StudentSkill"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentSkillOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillName?: SortOrder
    student?: StudentOrderByWithRelationInput
    _relevance?: StudentSkillOrderByRelevanceInput
  }

  export type StudentSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_skillName?: StudentSkillStudentIdSkillNameCompoundUniqueInput
    AND?: StudentSkillWhereInput | StudentSkillWhereInput[]
    OR?: StudentSkillWhereInput[]
    NOT?: StudentSkillWhereInput | StudentSkillWhereInput[]
    studentId?: IntFilter<"StudentSkill"> | number
    skillName?: StringFilter<"StudentSkill"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId_skillName">

  export type StudentSkillOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillName?: SortOrder
    _count?: StudentSkillCountOrderByAggregateInput
    _avg?: StudentSkillAvgOrderByAggregateInput
    _max?: StudentSkillMaxOrderByAggregateInput
    _min?: StudentSkillMinOrderByAggregateInput
    _sum?: StudentSkillSumOrderByAggregateInput
  }

  export type StudentSkillScalarWhereWithAggregatesInput = {
    AND?: StudentSkillScalarWhereWithAggregatesInput | StudentSkillScalarWhereWithAggregatesInput[]
    OR?: StudentSkillScalarWhereWithAggregatesInput[]
    NOT?: StudentSkillScalarWhereWithAggregatesInput | StudentSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentSkill"> | number
    studentId?: IntWithAggregatesFilter<"StudentSkill"> | number
    skillName?: StringWithAggregatesFilter<"StudentSkill"> | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    companyName?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    location?: StringFilter<"Company"> | string
    website?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    drives?: PlacementDriveListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    about?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drives?: PlacementDriveOrderByRelationAggregateInput
    _relevance?: CompanyOrderByRelevanceInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    companyName?: StringFilter<"Company"> | string
    about?: StringFilter<"Company"> | string
    location?: StringFilter<"Company"> | string
    website?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    drives?: PlacementDriveListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    about?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    companyName?: StringWithAggregatesFilter<"Company"> | string
    about?: StringWithAggregatesFilter<"Company"> | string
    location?: StringWithAggregatesFilter<"Company"> | string
    website?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type PlacementDriveWhereInput = {
    AND?: PlacementDriveWhereInput | PlacementDriveWhereInput[]
    OR?: PlacementDriveWhereInput[]
    NOT?: PlacementDriveWhereInput | PlacementDriveWhereInput[]
    id?: IntFilter<"PlacementDrive"> | number
    companyId?: IntFilter<"PlacementDrive"> | number
    createdBy?: IntFilter<"PlacementDrive"> | number
    role?: StringFilter<"PlacementDrive"> | string
    package?: StringFilter<"PlacementDrive"> | string
    driveDate?: DateTimeFilter<"PlacementDrive"> | Date | string
    venue?: StringFilter<"PlacementDrive"> | string
    deadline?: DateTimeFilter<"PlacementDrive"> | Date | string
    jobType?: StringFilter<"PlacementDrive"> | string
    description?: StringFilter<"PlacementDrive"> | string
    hiringProcess?: StringFilter<"PlacementDrive"> | string
    status?: EnumDriveStatusFilter<"PlacementDrive"> | $Enums.DriveStatus
    createdAt?: DateTimeFilter<"PlacementDrive"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    eligibility?: XOR<EligibilityCriteriaNullableScalarRelationFilter, EligibilityCriteriaWhereInput> | null
    placementStatuses?: PlacementStatusListRelationFilter
  }

  export type PlacementDriveOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    role?: SortOrder
    package?: SortOrder
    driveDate?: SortOrder
    venue?: SortOrder
    deadline?: SortOrder
    jobType?: SortOrder
    description?: SortOrder
    hiringProcess?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    eligibility?: EligibilityCriteriaOrderByWithRelationInput
    placementStatuses?: PlacementStatusOrderByRelationAggregateInput
    _relevance?: PlacementDriveOrderByRelevanceInput
  }

  export type PlacementDriveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlacementDriveWhereInput | PlacementDriveWhereInput[]
    OR?: PlacementDriveWhereInput[]
    NOT?: PlacementDriveWhereInput | PlacementDriveWhereInput[]
    companyId?: IntFilter<"PlacementDrive"> | number
    createdBy?: IntFilter<"PlacementDrive"> | number
    role?: StringFilter<"PlacementDrive"> | string
    package?: StringFilter<"PlacementDrive"> | string
    driveDate?: DateTimeFilter<"PlacementDrive"> | Date | string
    venue?: StringFilter<"PlacementDrive"> | string
    deadline?: DateTimeFilter<"PlacementDrive"> | Date | string
    jobType?: StringFilter<"PlacementDrive"> | string
    description?: StringFilter<"PlacementDrive"> | string
    hiringProcess?: StringFilter<"PlacementDrive"> | string
    status?: EnumDriveStatusFilter<"PlacementDrive"> | $Enums.DriveStatus
    createdAt?: DateTimeFilter<"PlacementDrive"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    eligibility?: XOR<EligibilityCriteriaNullableScalarRelationFilter, EligibilityCriteriaWhereInput> | null
    placementStatuses?: PlacementStatusListRelationFilter
  }, "id">

  export type PlacementDriveOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    role?: SortOrder
    package?: SortOrder
    driveDate?: SortOrder
    venue?: SortOrder
    deadline?: SortOrder
    jobType?: SortOrder
    description?: SortOrder
    hiringProcess?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PlacementDriveCountOrderByAggregateInput
    _avg?: PlacementDriveAvgOrderByAggregateInput
    _max?: PlacementDriveMaxOrderByAggregateInput
    _min?: PlacementDriveMinOrderByAggregateInput
    _sum?: PlacementDriveSumOrderByAggregateInput
  }

  export type PlacementDriveScalarWhereWithAggregatesInput = {
    AND?: PlacementDriveScalarWhereWithAggregatesInput | PlacementDriveScalarWhereWithAggregatesInput[]
    OR?: PlacementDriveScalarWhereWithAggregatesInput[]
    NOT?: PlacementDriveScalarWhereWithAggregatesInput | PlacementDriveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlacementDrive"> | number
    companyId?: IntWithAggregatesFilter<"PlacementDrive"> | number
    createdBy?: IntWithAggregatesFilter<"PlacementDrive"> | number
    role?: StringWithAggregatesFilter<"PlacementDrive"> | string
    package?: StringWithAggregatesFilter<"PlacementDrive"> | string
    driveDate?: DateTimeWithAggregatesFilter<"PlacementDrive"> | Date | string
    venue?: StringWithAggregatesFilter<"PlacementDrive"> | string
    deadline?: DateTimeWithAggregatesFilter<"PlacementDrive"> | Date | string
    jobType?: StringWithAggregatesFilter<"PlacementDrive"> | string
    description?: StringWithAggregatesFilter<"PlacementDrive"> | string
    hiringProcess?: StringWithAggregatesFilter<"PlacementDrive"> | string
    status?: EnumDriveStatusWithAggregatesFilter<"PlacementDrive"> | $Enums.DriveStatus
    createdAt?: DateTimeWithAggregatesFilter<"PlacementDrive"> | Date | string
  }

  export type EligibilityCriteriaWhereInput = {
    AND?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    OR?: EligibilityCriteriaWhereInput[]
    NOT?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    id?: IntFilter<"EligibilityCriteria"> | number
    driveId?: IntFilter<"EligibilityCriteria"> | number
    minCGPA?: FloatNullableFilter<"EligibilityCriteria"> | number | null
    maxBacklogs?: IntNullableFilter<"EligibilityCriteria"> | number | null
    graduationYear?: IntNullableFilter<"EligibilityCriteria"> | number | null
    drive?: XOR<PlacementDriveScalarRelationFilter, PlacementDriveWhereInput>
    eligibleBranches?: EligibleBranchListRelationFilter
  }

  export type EligibilityCriteriaOrderByWithRelationInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrderInput | SortOrder
    maxBacklogs?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    drive?: PlacementDriveOrderByWithRelationInput
    eligibleBranches?: EligibleBranchOrderByRelationAggregateInput
  }

  export type EligibilityCriteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    driveId?: number
    AND?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    OR?: EligibilityCriteriaWhereInput[]
    NOT?: EligibilityCriteriaWhereInput | EligibilityCriteriaWhereInput[]
    minCGPA?: FloatNullableFilter<"EligibilityCriteria"> | number | null
    maxBacklogs?: IntNullableFilter<"EligibilityCriteria"> | number | null
    graduationYear?: IntNullableFilter<"EligibilityCriteria"> | number | null
    drive?: XOR<PlacementDriveScalarRelationFilter, PlacementDriveWhereInput>
    eligibleBranches?: EligibleBranchListRelationFilter
  }, "id" | "driveId">

  export type EligibilityCriteriaOrderByWithAggregationInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrderInput | SortOrder
    maxBacklogs?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    _count?: EligibilityCriteriaCountOrderByAggregateInput
    _avg?: EligibilityCriteriaAvgOrderByAggregateInput
    _max?: EligibilityCriteriaMaxOrderByAggregateInput
    _min?: EligibilityCriteriaMinOrderByAggregateInput
    _sum?: EligibilityCriteriaSumOrderByAggregateInput
  }

  export type EligibilityCriteriaScalarWhereWithAggregatesInput = {
    AND?: EligibilityCriteriaScalarWhereWithAggregatesInput | EligibilityCriteriaScalarWhereWithAggregatesInput[]
    OR?: EligibilityCriteriaScalarWhereWithAggregatesInput[]
    NOT?: EligibilityCriteriaScalarWhereWithAggregatesInput | EligibilityCriteriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EligibilityCriteria"> | number
    driveId?: IntWithAggregatesFilter<"EligibilityCriteria"> | number
    minCGPA?: FloatNullableWithAggregatesFilter<"EligibilityCriteria"> | number | null
    maxBacklogs?: IntNullableWithAggregatesFilter<"EligibilityCriteria"> | number | null
    graduationYear?: IntNullableWithAggregatesFilter<"EligibilityCriteria"> | number | null
  }

  export type EligibleBranchWhereInput = {
    AND?: EligibleBranchWhereInput | EligibleBranchWhereInput[]
    OR?: EligibleBranchWhereInput[]
    NOT?: EligibleBranchWhereInput | EligibleBranchWhereInput[]
    id?: IntFilter<"EligibleBranch"> | number
    eligibilityId?: IntFilter<"EligibleBranch"> | number
    branch?: StringFilter<"EligibleBranch"> | string
    eligibility?: XOR<EligibilityCriteriaScalarRelationFilter, EligibilityCriteriaWhereInput>
  }

  export type EligibleBranchOrderByWithRelationInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
    branch?: SortOrder
    eligibility?: EligibilityCriteriaOrderByWithRelationInput
    _relevance?: EligibleBranchOrderByRelevanceInput
  }

  export type EligibleBranchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eligibilityId_branch?: EligibleBranchEligibilityIdBranchCompoundUniqueInput
    AND?: EligibleBranchWhereInput | EligibleBranchWhereInput[]
    OR?: EligibleBranchWhereInput[]
    NOT?: EligibleBranchWhereInput | EligibleBranchWhereInput[]
    eligibilityId?: IntFilter<"EligibleBranch"> | number
    branch?: StringFilter<"EligibleBranch"> | string
    eligibility?: XOR<EligibilityCriteriaScalarRelationFilter, EligibilityCriteriaWhereInput>
  }, "id" | "eligibilityId_branch">

  export type EligibleBranchOrderByWithAggregationInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
    branch?: SortOrder
    _count?: EligibleBranchCountOrderByAggregateInput
    _avg?: EligibleBranchAvgOrderByAggregateInput
    _max?: EligibleBranchMaxOrderByAggregateInput
    _min?: EligibleBranchMinOrderByAggregateInput
    _sum?: EligibleBranchSumOrderByAggregateInput
  }

  export type EligibleBranchScalarWhereWithAggregatesInput = {
    AND?: EligibleBranchScalarWhereWithAggregatesInput | EligibleBranchScalarWhereWithAggregatesInput[]
    OR?: EligibleBranchScalarWhereWithAggregatesInput[]
    NOT?: EligibleBranchScalarWhereWithAggregatesInput | EligibleBranchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EligibleBranch"> | number
    eligibilityId?: IntWithAggregatesFilter<"EligibleBranch"> | number
    branch?: StringWithAggregatesFilter<"EligibleBranch"> | string
  }

  export type PlacementStatusWhereInput = {
    AND?: PlacementStatusWhereInput | PlacementStatusWhereInput[]
    OR?: PlacementStatusWhereInput[]
    NOT?: PlacementStatusWhereInput | PlacementStatusWhereInput[]
    id?: IntFilter<"PlacementStatus"> | number
    studentId?: IntFilter<"PlacementStatus"> | number
    driveId?: IntFilter<"PlacementStatus"> | number
    status?: EnumStudentStatusFilter<"PlacementStatus"> | $Enums.StudentStatus
    remarks?: StringNullableFilter<"PlacementStatus"> | string | null
    updatedAt?: DateTimeFilter<"PlacementStatus"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    drive?: XOR<PlacementDriveScalarRelationFilter, PlacementDriveWhereInput>
  }

  export type PlacementStatusOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    drive?: PlacementDriveOrderByWithRelationInput
    _relevance?: PlacementStatusOrderByRelevanceInput
  }

  export type PlacementStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_driveId?: PlacementStatusStudentIdDriveIdCompoundUniqueInput
    AND?: PlacementStatusWhereInput | PlacementStatusWhereInput[]
    OR?: PlacementStatusWhereInput[]
    NOT?: PlacementStatusWhereInput | PlacementStatusWhereInput[]
    studentId?: IntFilter<"PlacementStatus"> | number
    driveId?: IntFilter<"PlacementStatus"> | number
    status?: EnumStudentStatusFilter<"PlacementStatus"> | $Enums.StudentStatus
    remarks?: StringNullableFilter<"PlacementStatus"> | string | null
    updatedAt?: DateTimeFilter<"PlacementStatus"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    drive?: XOR<PlacementDriveScalarRelationFilter, PlacementDriveWhereInput>
  }, "id" | "studentId_driveId">

  export type PlacementStatusOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PlacementStatusCountOrderByAggregateInput
    _avg?: PlacementStatusAvgOrderByAggregateInput
    _max?: PlacementStatusMaxOrderByAggregateInput
    _min?: PlacementStatusMinOrderByAggregateInput
    _sum?: PlacementStatusSumOrderByAggregateInput
  }

  export type PlacementStatusScalarWhereWithAggregatesInput = {
    AND?: PlacementStatusScalarWhereWithAggregatesInput | PlacementStatusScalarWhereWithAggregatesInput[]
    OR?: PlacementStatusScalarWhereWithAggregatesInput[]
    NOT?: PlacementStatusScalarWhereWithAggregatesInput | PlacementStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlacementStatus"> | number
    studentId?: IntWithAggregatesFilter<"PlacementStatus"> | number
    driveId?: IntWithAggregatesFilter<"PlacementStatus"> | number
    status?: EnumStudentStatusWithAggregatesFilter<"PlacementStatus"> | $Enums.StudentStatus
    remarks?: StringNullableWithAggregatesFilter<"PlacementStatus"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PlacementStatus"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: IntFilter<"Resume"> | number
    studentId?: IntFilter<"Resume"> | number
    resumeUrl?: StringFilter<"Resume"> | string
    uploadedAt?: DateTimeFilter<"Resume"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    resumeUrl?: SortOrder
    uploadedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    _relevance?: ResumeOrderByRelevanceInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId?: number
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    resumeUrl?: StringFilter<"Resume"> | string
    uploadedAt?: DateTimeFilter<"Resume"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    resumeUrl?: SortOrder
    uploadedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resume"> | number
    studentId?: IntWithAggregatesFilter<"Resume"> | number
    resumeUrl?: StringWithAggregatesFilter<"Resume"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    drives?: PlacementDriveCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    drives?: PlacementDriveUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    drives?: PlacementDriveUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    drives?: PlacementDriveUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    resume?: ResumeCreateNestedOneWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    userId: number
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    resume?: ResumeUpdateOneWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    userId: number
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSkillCreateInput = {
    skillName: string
    student: StudentCreateNestedOneWithoutSkillsInput
  }

  export type StudentSkillUncheckedCreateInput = {
    id?: number
    studentId: number
    skillName: string
  }

  export type StudentSkillUpdateInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type StudentSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillCreateManyInput = {
    id?: number
    studentId: number
    skillName: string
  }

  export type StudentSkillUpdateManyMutationInput = {
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateInput = {
    companyName: string
    about: string
    location: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drives?: PlacementDriveCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    companyName: string
    about: string
    location: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drives?: PlacementDriveUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drives?: PlacementDriveUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drives?: PlacementDriveUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    companyName: string
    about: string
    location: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementDriveCreateInput = {
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutDrivesInput
    creator: UserCreateNestedOneWithoutDrivesInput
    eligibility?: EligibilityCriteriaCreateNestedOneWithoutDriveInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveUncheckedCreateInput = {
    id?: number
    companyId: number
    createdBy: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    eligibility?: EligibilityCriteriaUncheckedCreateNestedOneWithoutDriveInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDrivesNestedInput
    creator?: UserUpdateOneRequiredWithoutDrivesNestedInput
    eligibility?: EligibilityCriteriaUpdateOneWithoutDriveNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: EligibilityCriteriaUncheckedUpdateOneWithoutDriveNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveCreateManyInput = {
    id?: number
    companyId: number
    createdBy: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
  }

  export type PlacementDriveUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementDriveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibilityCriteriaCreateInput = {
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
    drive: PlacementDriveCreateNestedOneWithoutEligibilityInput
    eligibleBranches?: EligibleBranchCreateNestedManyWithoutEligibilityInput
  }

  export type EligibilityCriteriaUncheckedCreateInput = {
    id?: number
    driveId: number
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
    eligibleBranches?: EligibleBranchUncheckedCreateNestedManyWithoutEligibilityInput
  }

  export type EligibilityCriteriaUpdateInput = {
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    drive?: PlacementDriveUpdateOneRequiredWithoutEligibilityNestedInput
    eligibleBranches?: EligibleBranchUpdateManyWithoutEligibilityNestedInput
  }

  export type EligibilityCriteriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    eligibleBranches?: EligibleBranchUncheckedUpdateManyWithoutEligibilityNestedInput
  }

  export type EligibilityCriteriaCreateManyInput = {
    id?: number
    driveId: number
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
  }

  export type EligibilityCriteriaUpdateManyMutationInput = {
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EligibilityCriteriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EligibleBranchCreateInput = {
    branch: string
    eligibility: EligibilityCriteriaCreateNestedOneWithoutEligibleBranchesInput
  }

  export type EligibleBranchUncheckedCreateInput = {
    id?: number
    eligibilityId: number
    branch: string
  }

  export type EligibleBranchUpdateInput = {
    branch?: StringFieldUpdateOperationsInput | string
    eligibility?: EligibilityCriteriaUpdateOneRequiredWithoutEligibleBranchesNestedInput
  }

  export type EligibleBranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eligibilityId?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
  }

  export type EligibleBranchCreateManyInput = {
    id?: number
    eligibilityId: number
    branch: string
  }

  export type EligibleBranchUpdateManyMutationInput = {
    branch?: StringFieldUpdateOperationsInput | string
  }

  export type EligibleBranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eligibilityId?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
  }

  export type PlacementStatusCreateInput = {
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutPlacementStatusesInput
    drive: PlacementDriveCreateNestedOneWithoutPlacementStatusesInput
  }

  export type PlacementStatusUncheckedCreateInput = {
    id?: number
    studentId: number
    driveId: number
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
  }

  export type PlacementStatusUpdateInput = {
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPlacementStatusesNestedInput
    drive?: PlacementDriveUpdateOneRequiredWithoutPlacementStatusesNestedInput
  }

  export type PlacementStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementStatusCreateManyInput = {
    id?: number
    studentId: number
    driveId: number
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
  }

  export type PlacementStatusUpdateManyMutationInput = {
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    type: $Enums.NotificationType
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    type: $Enums.NotificationType
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    type: $Enums.NotificationType
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    resumeUrl: string
    uploadedAt?: Date | string
    student: StudentCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: number
    studentId: number
    resumeUrl: string
    uploadedAt?: Date | string
  }

  export type ResumeUpdateInput = {
    resumeUrl?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    resumeUrl?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyInput = {
    id?: number
    studentId: number
    resumeUrl: string
    uploadedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    resumeUrl?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    resumeUrl?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type PlacementDriveListRelationFilter = {
    every?: PlacementDriveWhereInput
    some?: PlacementDriveWhereInput
    none?: PlacementDriveWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PlacementDriveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type StudentSkillListRelationFilter = {
    every?: StudentSkillWhereInput
    some?: StudentSkillWhereInput
    none?: StudentSkillWhereInput
  }

  export type PlacementStatusListRelationFilter = {
    every?: PlacementStatusWhereInput
    some?: PlacementStatusWhereInput
    none?: PlacementStatusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlacementStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prn?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    profileCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prn?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    profileCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prn?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
    phone?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    profileCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    graduationYear?: SortOrder
    cgpa?: SortOrder
    activeBacklogs?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentSkillOrderByRelevanceInput = {
    fields: StudentSkillOrderByRelevanceFieldEnum | StudentSkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentSkillStudentIdSkillNameCompoundUniqueInput = {
    studentId: number
    skillName: string
  }

  export type StudentSkillCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillName?: SortOrder
  }

  export type StudentSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type StudentSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillName?: SortOrder
  }

  export type StudentSkillMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillName?: SortOrder
  }

  export type StudentSkillSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type CompanyOrderByRelevanceInput = {
    fields: CompanyOrderByRelevanceFieldEnum | CompanyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    about?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    about?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    about?: SortOrder
    location?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDriveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriveStatus | EnumDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriveStatus[]
    notIn?: $Enums.DriveStatus[]
    not?: NestedEnumDriveStatusFilter<$PrismaModel> | $Enums.DriveStatus
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type EligibilityCriteriaNullableScalarRelationFilter = {
    is?: EligibilityCriteriaWhereInput | null
    isNot?: EligibilityCriteriaWhereInput | null
  }

  export type PlacementDriveOrderByRelevanceInput = {
    fields: PlacementDriveOrderByRelevanceFieldEnum | PlacementDriveOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlacementDriveCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    role?: SortOrder
    package?: SortOrder
    driveDate?: SortOrder
    venue?: SortOrder
    deadline?: SortOrder
    jobType?: SortOrder
    description?: SortOrder
    hiringProcess?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PlacementDriveAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
  }

  export type PlacementDriveMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    role?: SortOrder
    package?: SortOrder
    driveDate?: SortOrder
    venue?: SortOrder
    deadline?: SortOrder
    jobType?: SortOrder
    description?: SortOrder
    hiringProcess?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PlacementDriveMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
    role?: SortOrder
    package?: SortOrder
    driveDate?: SortOrder
    venue?: SortOrder
    deadline?: SortOrder
    jobType?: SortOrder
    description?: SortOrder
    hiringProcess?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PlacementDriveSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumDriveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriveStatus | EnumDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriveStatus[]
    notIn?: $Enums.DriveStatus[]
    not?: NestedEnumDriveStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriveStatusFilter<$PrismaModel>
    _max?: NestedEnumDriveStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PlacementDriveScalarRelationFilter = {
    is?: PlacementDriveWhereInput
    isNot?: PlacementDriveWhereInput
  }

  export type EligibleBranchListRelationFilter = {
    every?: EligibleBranchWhereInput
    some?: EligibleBranchWhereInput
    none?: EligibleBranchWhereInput
  }

  export type EligibleBranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EligibilityCriteriaCountOrderByAggregateInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrder
    maxBacklogs?: SortOrder
    graduationYear?: SortOrder
  }

  export type EligibilityCriteriaAvgOrderByAggregateInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrder
    maxBacklogs?: SortOrder
    graduationYear?: SortOrder
  }

  export type EligibilityCriteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrder
    maxBacklogs?: SortOrder
    graduationYear?: SortOrder
  }

  export type EligibilityCriteriaMinOrderByAggregateInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrder
    maxBacklogs?: SortOrder
    graduationYear?: SortOrder
  }

  export type EligibilityCriteriaSumOrderByAggregateInput = {
    id?: SortOrder
    driveId?: SortOrder
    minCGPA?: SortOrder
    maxBacklogs?: SortOrder
    graduationYear?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EligibilityCriteriaScalarRelationFilter = {
    is?: EligibilityCriteriaWhereInput
    isNot?: EligibilityCriteriaWhereInput
  }

  export type EligibleBranchOrderByRelevanceInput = {
    fields: EligibleBranchOrderByRelevanceFieldEnum | EligibleBranchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EligibleBranchEligibilityIdBranchCompoundUniqueInput = {
    eligibilityId: number
    branch: string
  }

  export type EligibleBranchCountOrderByAggregateInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
    branch?: SortOrder
  }

  export type EligibleBranchAvgOrderByAggregateInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
  }

  export type EligibleBranchMaxOrderByAggregateInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
    branch?: SortOrder
  }

  export type EligibleBranchMinOrderByAggregateInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
    branch?: SortOrder
  }

  export type EligibleBranchSumOrderByAggregateInput = {
    id?: SortOrder
    eligibilityId?: SortOrder
  }

  export type EnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[]
    notIn?: $Enums.StudentStatus[]
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type PlacementStatusOrderByRelevanceInput = {
    fields: PlacementStatusOrderByRelevanceFieldEnum | PlacementStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlacementStatusStudentIdDriveIdCompoundUniqueInput = {
    studentId: number
    driveId: number
  }

  export type PlacementStatusCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlacementStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
  }

  export type PlacementStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlacementStatusMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlacementStatusSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    driveId?: SortOrder
  }

  export type EnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[]
    notIn?: $Enums.StudentStatus[]
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type ResumeOrderByRelevanceInput = {
    fields: ResumeOrderByRelevanceFieldEnum | ResumeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    resumeUrl?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    resumeUrl?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    resumeUrl?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type PlacementDriveCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PlacementDriveCreateWithoutCreatorInput, PlacementDriveUncheckedCreateWithoutCreatorInput> | PlacementDriveCreateWithoutCreatorInput[] | PlacementDriveUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCreatorInput | PlacementDriveCreateOrConnectWithoutCreatorInput[]
    createMany?: PlacementDriveCreateManyCreatorInputEnvelope
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type PlacementDriveUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PlacementDriveCreateWithoutCreatorInput, PlacementDriveUncheckedCreateWithoutCreatorInput> | PlacementDriveCreateWithoutCreatorInput[] | PlacementDriveUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCreatorInput | PlacementDriveCreateOrConnectWithoutCreatorInput[]
    createMany?: PlacementDriveCreateManyCreatorInputEnvelope
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type PlacementDriveUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PlacementDriveCreateWithoutCreatorInput, PlacementDriveUncheckedCreateWithoutCreatorInput> | PlacementDriveCreateWithoutCreatorInput[] | PlacementDriveUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCreatorInput | PlacementDriveCreateOrConnectWithoutCreatorInput[]
    upsert?: PlacementDriveUpsertWithWhereUniqueWithoutCreatorInput | PlacementDriveUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PlacementDriveCreateManyCreatorInputEnvelope
    set?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    disconnect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    delete?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    update?: PlacementDriveUpdateWithWhereUniqueWithoutCreatorInput | PlacementDriveUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PlacementDriveUpdateManyWithWhereWithoutCreatorInput | PlacementDriveUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PlacementDriveScalarWhereInput | PlacementDriveScalarWhereInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type PlacementDriveUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PlacementDriveCreateWithoutCreatorInput, PlacementDriveUncheckedCreateWithoutCreatorInput> | PlacementDriveCreateWithoutCreatorInput[] | PlacementDriveUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCreatorInput | PlacementDriveCreateOrConnectWithoutCreatorInput[]
    upsert?: PlacementDriveUpsertWithWhereUniqueWithoutCreatorInput | PlacementDriveUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PlacementDriveCreateManyCreatorInputEnvelope
    set?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    disconnect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    delete?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    update?: PlacementDriveUpdateWithWhereUniqueWithoutCreatorInput | PlacementDriveUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PlacementDriveUpdateManyWithWhereWithoutCreatorInput | PlacementDriveUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PlacementDriveScalarWhereInput | PlacementDriveScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutStudentInput = {
    create?: XOR<ResumeCreateWithoutStudentInput, ResumeUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutStudentInput
    connect?: ResumeWhereUniqueInput
  }

  export type StudentSkillCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
  }

  export type PlacementStatusCreateNestedManyWithoutStudentInput = {
    create?: XOR<PlacementStatusCreateWithoutStudentInput, PlacementStatusUncheckedCreateWithoutStudentInput> | PlacementStatusCreateWithoutStudentInput[] | PlacementStatusUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutStudentInput | PlacementStatusCreateOrConnectWithoutStudentInput[]
    createMany?: PlacementStatusCreateManyStudentInputEnvelope
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<ResumeCreateWithoutStudentInput, ResumeUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutStudentInput
    connect?: ResumeWhereUniqueInput
  }

  export type StudentSkillUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
  }

  export type PlacementStatusUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PlacementStatusCreateWithoutStudentInput, PlacementStatusUncheckedCreateWithoutStudentInput> | PlacementStatusCreateWithoutStudentInput[] | PlacementStatusUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutStudentInput | PlacementStatusCreateOrConnectWithoutStudentInput[]
    createMany?: PlacementStatusCreateManyStudentInputEnvelope
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type ResumeUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ResumeCreateWithoutStudentInput, ResumeUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutStudentInput
    upsert?: ResumeUpsertWithoutStudentInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutStudentInput, ResumeUpdateWithoutStudentInput>, ResumeUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSkillUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSkillUpsertWithWhereUniqueWithoutStudentInput | StudentSkillUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    set?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    disconnect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    delete?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    update?: StudentSkillUpdateWithWhereUniqueWithoutStudentInput | StudentSkillUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSkillUpdateManyWithWhereWithoutStudentInput | StudentSkillUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
  }

  export type PlacementStatusUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PlacementStatusCreateWithoutStudentInput, PlacementStatusUncheckedCreateWithoutStudentInput> | PlacementStatusCreateWithoutStudentInput[] | PlacementStatusUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutStudentInput | PlacementStatusCreateOrConnectWithoutStudentInput[]
    upsert?: PlacementStatusUpsertWithWhereUniqueWithoutStudentInput | PlacementStatusUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PlacementStatusCreateManyStudentInputEnvelope
    set?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    disconnect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    delete?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    update?: PlacementStatusUpdateWithWhereUniqueWithoutStudentInput | PlacementStatusUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PlacementStatusUpdateManyWithWhereWithoutStudentInput | PlacementStatusUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PlacementStatusScalarWhereInput | PlacementStatusScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ResumeCreateWithoutStudentInput, ResumeUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutStudentInput
    upsert?: ResumeUpsertWithoutStudentInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutStudentInput, ResumeUpdateWithoutStudentInput>, ResumeUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSkillUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput> | StudentSkillCreateWithoutStudentInput[] | StudentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSkillCreateOrConnectWithoutStudentInput | StudentSkillCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSkillUpsertWithWhereUniqueWithoutStudentInput | StudentSkillUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSkillCreateManyStudentInputEnvelope
    set?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    disconnect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    delete?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    connect?: StudentSkillWhereUniqueInput | StudentSkillWhereUniqueInput[]
    update?: StudentSkillUpdateWithWhereUniqueWithoutStudentInput | StudentSkillUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSkillUpdateManyWithWhereWithoutStudentInput | StudentSkillUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
  }

  export type PlacementStatusUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PlacementStatusCreateWithoutStudentInput, PlacementStatusUncheckedCreateWithoutStudentInput> | PlacementStatusCreateWithoutStudentInput[] | PlacementStatusUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutStudentInput | PlacementStatusCreateOrConnectWithoutStudentInput[]
    upsert?: PlacementStatusUpsertWithWhereUniqueWithoutStudentInput | PlacementStatusUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PlacementStatusCreateManyStudentInputEnvelope
    set?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    disconnect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    delete?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    update?: PlacementStatusUpdateWithWhereUniqueWithoutStudentInput | PlacementStatusUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PlacementStatusUpdateManyWithWhereWithoutStudentInput | PlacementStatusUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PlacementStatusScalarWhereInput | PlacementStatusScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSkillsInput = {
    create?: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSkillsInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSkillsInput
    upsert?: StudentUpsertWithoutSkillsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSkillsInput, StudentUpdateWithoutSkillsInput>, StudentUncheckedUpdateWithoutSkillsInput>
  }

  export type PlacementDriveCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PlacementDriveCreateWithoutCompanyInput, PlacementDriveUncheckedCreateWithoutCompanyInput> | PlacementDriveCreateWithoutCompanyInput[] | PlacementDriveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCompanyInput | PlacementDriveCreateOrConnectWithoutCompanyInput[]
    createMany?: PlacementDriveCreateManyCompanyInputEnvelope
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
  }

  export type PlacementDriveUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PlacementDriveCreateWithoutCompanyInput, PlacementDriveUncheckedCreateWithoutCompanyInput> | PlacementDriveCreateWithoutCompanyInput[] | PlacementDriveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCompanyInput | PlacementDriveCreateOrConnectWithoutCompanyInput[]
    createMany?: PlacementDriveCreateManyCompanyInputEnvelope
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
  }

  export type PlacementDriveUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PlacementDriveCreateWithoutCompanyInput, PlacementDriveUncheckedCreateWithoutCompanyInput> | PlacementDriveCreateWithoutCompanyInput[] | PlacementDriveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCompanyInput | PlacementDriveCreateOrConnectWithoutCompanyInput[]
    upsert?: PlacementDriveUpsertWithWhereUniqueWithoutCompanyInput | PlacementDriveUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PlacementDriveCreateManyCompanyInputEnvelope
    set?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    disconnect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    delete?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    update?: PlacementDriveUpdateWithWhereUniqueWithoutCompanyInput | PlacementDriveUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PlacementDriveUpdateManyWithWhereWithoutCompanyInput | PlacementDriveUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PlacementDriveScalarWhereInput | PlacementDriveScalarWhereInput[]
  }

  export type PlacementDriveUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PlacementDriveCreateWithoutCompanyInput, PlacementDriveUncheckedCreateWithoutCompanyInput> | PlacementDriveCreateWithoutCompanyInput[] | PlacementDriveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutCompanyInput | PlacementDriveCreateOrConnectWithoutCompanyInput[]
    upsert?: PlacementDriveUpsertWithWhereUniqueWithoutCompanyInput | PlacementDriveUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PlacementDriveCreateManyCompanyInputEnvelope
    set?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    disconnect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    delete?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    connect?: PlacementDriveWhereUniqueInput | PlacementDriveWhereUniqueInput[]
    update?: PlacementDriveUpdateWithWhereUniqueWithoutCompanyInput | PlacementDriveUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PlacementDriveUpdateManyWithWhereWithoutCompanyInput | PlacementDriveUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PlacementDriveScalarWhereInput | PlacementDriveScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutDrivesInput = {
    create?: XOR<CompanyCreateWithoutDrivesInput, CompanyUncheckedCreateWithoutDrivesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDrivesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDrivesInput = {
    create?: XOR<UserCreateWithoutDrivesInput, UserUncheckedCreateWithoutDrivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrivesInput
    connect?: UserWhereUniqueInput
  }

  export type EligibilityCriteriaCreateNestedOneWithoutDriveInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutDriveInput, EligibilityCriteriaUncheckedCreateWithoutDriveInput>
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutDriveInput
    connect?: EligibilityCriteriaWhereUniqueInput
  }

  export type PlacementStatusCreateNestedManyWithoutDriveInput = {
    create?: XOR<PlacementStatusCreateWithoutDriveInput, PlacementStatusUncheckedCreateWithoutDriveInput> | PlacementStatusCreateWithoutDriveInput[] | PlacementStatusUncheckedCreateWithoutDriveInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutDriveInput | PlacementStatusCreateOrConnectWithoutDriveInput[]
    createMany?: PlacementStatusCreateManyDriveInputEnvelope
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
  }

  export type EligibilityCriteriaUncheckedCreateNestedOneWithoutDriveInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutDriveInput, EligibilityCriteriaUncheckedCreateWithoutDriveInput>
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutDriveInput
    connect?: EligibilityCriteriaWhereUniqueInput
  }

  export type PlacementStatusUncheckedCreateNestedManyWithoutDriveInput = {
    create?: XOR<PlacementStatusCreateWithoutDriveInput, PlacementStatusUncheckedCreateWithoutDriveInput> | PlacementStatusCreateWithoutDriveInput[] | PlacementStatusUncheckedCreateWithoutDriveInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutDriveInput | PlacementStatusCreateOrConnectWithoutDriveInput[]
    createMany?: PlacementStatusCreateManyDriveInputEnvelope
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
  }

  export type EnumDriveStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriveStatus
  }

  export type CompanyUpdateOneRequiredWithoutDrivesNestedInput = {
    create?: XOR<CompanyCreateWithoutDrivesInput, CompanyUncheckedCreateWithoutDrivesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDrivesInput
    upsert?: CompanyUpsertWithoutDrivesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutDrivesInput, CompanyUpdateWithoutDrivesInput>, CompanyUncheckedUpdateWithoutDrivesInput>
  }

  export type UserUpdateOneRequiredWithoutDrivesNestedInput = {
    create?: XOR<UserCreateWithoutDrivesInput, UserUncheckedCreateWithoutDrivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrivesInput
    upsert?: UserUpsertWithoutDrivesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDrivesInput, UserUpdateWithoutDrivesInput>, UserUncheckedUpdateWithoutDrivesInput>
  }

  export type EligibilityCriteriaUpdateOneWithoutDriveNestedInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutDriveInput, EligibilityCriteriaUncheckedCreateWithoutDriveInput>
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutDriveInput
    upsert?: EligibilityCriteriaUpsertWithoutDriveInput
    disconnect?: EligibilityCriteriaWhereInput | boolean
    delete?: EligibilityCriteriaWhereInput | boolean
    connect?: EligibilityCriteriaWhereUniqueInput
    update?: XOR<XOR<EligibilityCriteriaUpdateToOneWithWhereWithoutDriveInput, EligibilityCriteriaUpdateWithoutDriveInput>, EligibilityCriteriaUncheckedUpdateWithoutDriveInput>
  }

  export type PlacementStatusUpdateManyWithoutDriveNestedInput = {
    create?: XOR<PlacementStatusCreateWithoutDriveInput, PlacementStatusUncheckedCreateWithoutDriveInput> | PlacementStatusCreateWithoutDriveInput[] | PlacementStatusUncheckedCreateWithoutDriveInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutDriveInput | PlacementStatusCreateOrConnectWithoutDriveInput[]
    upsert?: PlacementStatusUpsertWithWhereUniqueWithoutDriveInput | PlacementStatusUpsertWithWhereUniqueWithoutDriveInput[]
    createMany?: PlacementStatusCreateManyDriveInputEnvelope
    set?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    disconnect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    delete?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    update?: PlacementStatusUpdateWithWhereUniqueWithoutDriveInput | PlacementStatusUpdateWithWhereUniqueWithoutDriveInput[]
    updateMany?: PlacementStatusUpdateManyWithWhereWithoutDriveInput | PlacementStatusUpdateManyWithWhereWithoutDriveInput[]
    deleteMany?: PlacementStatusScalarWhereInput | PlacementStatusScalarWhereInput[]
  }

  export type EligibilityCriteriaUncheckedUpdateOneWithoutDriveNestedInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutDriveInput, EligibilityCriteriaUncheckedCreateWithoutDriveInput>
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutDriveInput
    upsert?: EligibilityCriteriaUpsertWithoutDriveInput
    disconnect?: EligibilityCriteriaWhereInput | boolean
    delete?: EligibilityCriteriaWhereInput | boolean
    connect?: EligibilityCriteriaWhereUniqueInput
    update?: XOR<XOR<EligibilityCriteriaUpdateToOneWithWhereWithoutDriveInput, EligibilityCriteriaUpdateWithoutDriveInput>, EligibilityCriteriaUncheckedUpdateWithoutDriveInput>
  }

  export type PlacementStatusUncheckedUpdateManyWithoutDriveNestedInput = {
    create?: XOR<PlacementStatusCreateWithoutDriveInput, PlacementStatusUncheckedCreateWithoutDriveInput> | PlacementStatusCreateWithoutDriveInput[] | PlacementStatusUncheckedCreateWithoutDriveInput[]
    connectOrCreate?: PlacementStatusCreateOrConnectWithoutDriveInput | PlacementStatusCreateOrConnectWithoutDriveInput[]
    upsert?: PlacementStatusUpsertWithWhereUniqueWithoutDriveInput | PlacementStatusUpsertWithWhereUniqueWithoutDriveInput[]
    createMany?: PlacementStatusCreateManyDriveInputEnvelope
    set?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    disconnect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    delete?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    connect?: PlacementStatusWhereUniqueInput | PlacementStatusWhereUniqueInput[]
    update?: PlacementStatusUpdateWithWhereUniqueWithoutDriveInput | PlacementStatusUpdateWithWhereUniqueWithoutDriveInput[]
    updateMany?: PlacementStatusUpdateManyWithWhereWithoutDriveInput | PlacementStatusUpdateManyWithWhereWithoutDriveInput[]
    deleteMany?: PlacementStatusScalarWhereInput | PlacementStatusScalarWhereInput[]
  }

  export type PlacementDriveCreateNestedOneWithoutEligibilityInput = {
    create?: XOR<PlacementDriveCreateWithoutEligibilityInput, PlacementDriveUncheckedCreateWithoutEligibilityInput>
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutEligibilityInput
    connect?: PlacementDriveWhereUniqueInput
  }

  export type EligibleBranchCreateNestedManyWithoutEligibilityInput = {
    create?: XOR<EligibleBranchCreateWithoutEligibilityInput, EligibleBranchUncheckedCreateWithoutEligibilityInput> | EligibleBranchCreateWithoutEligibilityInput[] | EligibleBranchUncheckedCreateWithoutEligibilityInput[]
    connectOrCreate?: EligibleBranchCreateOrConnectWithoutEligibilityInput | EligibleBranchCreateOrConnectWithoutEligibilityInput[]
    createMany?: EligibleBranchCreateManyEligibilityInputEnvelope
    connect?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
  }

  export type EligibleBranchUncheckedCreateNestedManyWithoutEligibilityInput = {
    create?: XOR<EligibleBranchCreateWithoutEligibilityInput, EligibleBranchUncheckedCreateWithoutEligibilityInput> | EligibleBranchCreateWithoutEligibilityInput[] | EligibleBranchUncheckedCreateWithoutEligibilityInput[]
    connectOrCreate?: EligibleBranchCreateOrConnectWithoutEligibilityInput | EligibleBranchCreateOrConnectWithoutEligibilityInput[]
    createMany?: EligibleBranchCreateManyEligibilityInputEnvelope
    connect?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlacementDriveUpdateOneRequiredWithoutEligibilityNestedInput = {
    create?: XOR<PlacementDriveCreateWithoutEligibilityInput, PlacementDriveUncheckedCreateWithoutEligibilityInput>
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutEligibilityInput
    upsert?: PlacementDriveUpsertWithoutEligibilityInput
    connect?: PlacementDriveWhereUniqueInput
    update?: XOR<XOR<PlacementDriveUpdateToOneWithWhereWithoutEligibilityInput, PlacementDriveUpdateWithoutEligibilityInput>, PlacementDriveUncheckedUpdateWithoutEligibilityInput>
  }

  export type EligibleBranchUpdateManyWithoutEligibilityNestedInput = {
    create?: XOR<EligibleBranchCreateWithoutEligibilityInput, EligibleBranchUncheckedCreateWithoutEligibilityInput> | EligibleBranchCreateWithoutEligibilityInput[] | EligibleBranchUncheckedCreateWithoutEligibilityInput[]
    connectOrCreate?: EligibleBranchCreateOrConnectWithoutEligibilityInput | EligibleBranchCreateOrConnectWithoutEligibilityInput[]
    upsert?: EligibleBranchUpsertWithWhereUniqueWithoutEligibilityInput | EligibleBranchUpsertWithWhereUniqueWithoutEligibilityInput[]
    createMany?: EligibleBranchCreateManyEligibilityInputEnvelope
    set?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    disconnect?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    delete?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    connect?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    update?: EligibleBranchUpdateWithWhereUniqueWithoutEligibilityInput | EligibleBranchUpdateWithWhereUniqueWithoutEligibilityInput[]
    updateMany?: EligibleBranchUpdateManyWithWhereWithoutEligibilityInput | EligibleBranchUpdateManyWithWhereWithoutEligibilityInput[]
    deleteMany?: EligibleBranchScalarWhereInput | EligibleBranchScalarWhereInput[]
  }

  export type EligibleBranchUncheckedUpdateManyWithoutEligibilityNestedInput = {
    create?: XOR<EligibleBranchCreateWithoutEligibilityInput, EligibleBranchUncheckedCreateWithoutEligibilityInput> | EligibleBranchCreateWithoutEligibilityInput[] | EligibleBranchUncheckedCreateWithoutEligibilityInput[]
    connectOrCreate?: EligibleBranchCreateOrConnectWithoutEligibilityInput | EligibleBranchCreateOrConnectWithoutEligibilityInput[]
    upsert?: EligibleBranchUpsertWithWhereUniqueWithoutEligibilityInput | EligibleBranchUpsertWithWhereUniqueWithoutEligibilityInput[]
    createMany?: EligibleBranchCreateManyEligibilityInputEnvelope
    set?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    disconnect?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    delete?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    connect?: EligibleBranchWhereUniqueInput | EligibleBranchWhereUniqueInput[]
    update?: EligibleBranchUpdateWithWhereUniqueWithoutEligibilityInput | EligibleBranchUpdateWithWhereUniqueWithoutEligibilityInput[]
    updateMany?: EligibleBranchUpdateManyWithWhereWithoutEligibilityInput | EligibleBranchUpdateManyWithWhereWithoutEligibilityInput[]
    deleteMany?: EligibleBranchScalarWhereInput | EligibleBranchScalarWhereInput[]
  }

  export type EligibilityCriteriaCreateNestedOneWithoutEligibleBranchesInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutEligibleBranchesInput, EligibilityCriteriaUncheckedCreateWithoutEligibleBranchesInput>
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutEligibleBranchesInput
    connect?: EligibilityCriteriaWhereUniqueInput
  }

  export type EligibilityCriteriaUpdateOneRequiredWithoutEligibleBranchesNestedInput = {
    create?: XOR<EligibilityCriteriaCreateWithoutEligibleBranchesInput, EligibilityCriteriaUncheckedCreateWithoutEligibleBranchesInput>
    connectOrCreate?: EligibilityCriteriaCreateOrConnectWithoutEligibleBranchesInput
    upsert?: EligibilityCriteriaUpsertWithoutEligibleBranchesInput
    connect?: EligibilityCriteriaWhereUniqueInput
    update?: XOR<XOR<EligibilityCriteriaUpdateToOneWithWhereWithoutEligibleBranchesInput, EligibilityCriteriaUpdateWithoutEligibleBranchesInput>, EligibilityCriteriaUncheckedUpdateWithoutEligibleBranchesInput>
  }

  export type StudentCreateNestedOneWithoutPlacementStatusesInput = {
    create?: XOR<StudentCreateWithoutPlacementStatusesInput, StudentUncheckedCreateWithoutPlacementStatusesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPlacementStatusesInput
    connect?: StudentWhereUniqueInput
  }

  export type PlacementDriveCreateNestedOneWithoutPlacementStatusesInput = {
    create?: XOR<PlacementDriveCreateWithoutPlacementStatusesInput, PlacementDriveUncheckedCreateWithoutPlacementStatusesInput>
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutPlacementStatusesInput
    connect?: PlacementDriveWhereUniqueInput
  }

  export type EnumStudentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentStatus
  }

  export type StudentUpdateOneRequiredWithoutPlacementStatusesNestedInput = {
    create?: XOR<StudentCreateWithoutPlacementStatusesInput, StudentUncheckedCreateWithoutPlacementStatusesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPlacementStatusesInput
    upsert?: StudentUpsertWithoutPlacementStatusesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPlacementStatusesInput, StudentUpdateWithoutPlacementStatusesInput>, StudentUncheckedUpdateWithoutPlacementStatusesInput>
  }

  export type PlacementDriveUpdateOneRequiredWithoutPlacementStatusesNestedInput = {
    create?: XOR<PlacementDriveCreateWithoutPlacementStatusesInput, PlacementDriveUncheckedCreateWithoutPlacementStatusesInput>
    connectOrCreate?: PlacementDriveCreateOrConnectWithoutPlacementStatusesInput
    upsert?: PlacementDriveUpsertWithoutPlacementStatusesInput
    connect?: PlacementDriveWhereUniqueInput
    update?: XOR<XOR<PlacementDriveUpdateToOneWithWhereWithoutPlacementStatusesInput, PlacementDriveUpdateWithoutPlacementStatusesInput>, PlacementDriveUncheckedUpdateWithoutPlacementStatusesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type StudentCreateNestedOneWithoutResumeInput = {
    create?: XOR<StudentCreateWithoutResumeInput, StudentUncheckedCreateWithoutResumeInput>
    connectOrCreate?: StudentCreateOrConnectWithoutResumeInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutResumeNestedInput = {
    create?: XOR<StudentCreateWithoutResumeInput, StudentUncheckedCreateWithoutResumeInput>
    connectOrCreate?: StudentCreateOrConnectWithoutResumeInput
    upsert?: StudentUpsertWithoutResumeInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutResumeInput, StudentUpdateWithoutResumeInput>, StudentUncheckedUpdateWithoutResumeInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDriveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriveStatus | EnumDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriveStatus[]
    notIn?: $Enums.DriveStatus[]
    not?: NestedEnumDriveStatusFilter<$PrismaModel> | $Enums.DriveStatus
  }

  export type NestedEnumDriveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriveStatus | EnumDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriveStatus[]
    notIn?: $Enums.DriveStatus[]
    not?: NestedEnumDriveStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriveStatusFilter<$PrismaModel>
    _max?: NestedEnumDriveStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[]
    notIn?: $Enums.StudentStatus[]
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[]
    notIn?: $Enums.StudentStatus[]
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeCreateNestedOneWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type PlacementDriveCreateWithoutCreatorInput = {
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutDrivesInput
    eligibility?: EligibilityCriteriaCreateNestedOneWithoutDriveInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveUncheckedCreateWithoutCreatorInput = {
    id?: number
    companyId: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    eligibility?: EligibilityCriteriaUncheckedCreateNestedOneWithoutDriveInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveCreateOrConnectWithoutCreatorInput = {
    where: PlacementDriveWhereUniqueInput
    create: XOR<PlacementDriveCreateWithoutCreatorInput, PlacementDriveUncheckedCreateWithoutCreatorInput>
  }

  export type PlacementDriveCreateManyCreatorInputEnvelope = {
    data: PlacementDriveCreateManyCreatorInput | PlacementDriveCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    type: $Enums.NotificationType
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    type: $Enums.NotificationType
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

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PlacementDriveUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PlacementDriveWhereUniqueInput
    update: XOR<PlacementDriveUpdateWithoutCreatorInput, PlacementDriveUncheckedUpdateWithoutCreatorInput>
    create: XOR<PlacementDriveCreateWithoutCreatorInput, PlacementDriveUncheckedCreateWithoutCreatorInput>
  }

  export type PlacementDriveUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PlacementDriveWhereUniqueInput
    data: XOR<PlacementDriveUpdateWithoutCreatorInput, PlacementDriveUncheckedUpdateWithoutCreatorInput>
  }

  export type PlacementDriveUpdateManyWithWhereWithoutCreatorInput = {
    where: PlacementDriveScalarWhereInput
    data: XOR<PlacementDriveUpdateManyMutationInput, PlacementDriveUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PlacementDriveScalarWhereInput = {
    AND?: PlacementDriveScalarWhereInput | PlacementDriveScalarWhereInput[]
    OR?: PlacementDriveScalarWhereInput[]
    NOT?: PlacementDriveScalarWhereInput | PlacementDriveScalarWhereInput[]
    id?: IntFilter<"PlacementDrive"> | number
    companyId?: IntFilter<"PlacementDrive"> | number
    createdBy?: IntFilter<"PlacementDrive"> | number
    role?: StringFilter<"PlacementDrive"> | string
    package?: StringFilter<"PlacementDrive"> | string
    driveDate?: DateTimeFilter<"PlacementDrive"> | Date | string
    venue?: StringFilter<"PlacementDrive"> | string
    deadline?: DateTimeFilter<"PlacementDrive"> | Date | string
    jobType?: StringFilter<"PlacementDrive"> | string
    description?: StringFilter<"PlacementDrive"> | string
    hiringProcess?: StringFilter<"PlacementDrive"> | string
    status?: EnumDriveStatusFilter<"PlacementDrive"> | $Enums.DriveStatus
    createdAt?: DateTimeFilter<"PlacementDrive"> | Date | string
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
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutStudentInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    drives?: PlacementDriveCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    drives?: PlacementDriveUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type ResumeCreateWithoutStudentInput = {
    resumeUrl: string
    uploadedAt?: Date | string
  }

  export type ResumeUncheckedCreateWithoutStudentInput = {
    id?: number
    resumeUrl: string
    uploadedAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutStudentInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutStudentInput, ResumeUncheckedCreateWithoutStudentInput>
  }

  export type StudentSkillCreateWithoutStudentInput = {
    skillName: string
  }

  export type StudentSkillUncheckedCreateWithoutStudentInput = {
    id?: number
    skillName: string
  }

  export type StudentSkillCreateOrConnectWithoutStudentInput = {
    where: StudentSkillWhereUniqueInput
    create: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput>
  }

  export type StudentSkillCreateManyStudentInputEnvelope = {
    data: StudentSkillCreateManyStudentInput | StudentSkillCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PlacementStatusCreateWithoutStudentInput = {
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
    drive: PlacementDriveCreateNestedOneWithoutPlacementStatusesInput
  }

  export type PlacementStatusUncheckedCreateWithoutStudentInput = {
    id?: number
    driveId: number
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
  }

  export type PlacementStatusCreateOrConnectWithoutStudentInput = {
    where: PlacementStatusWhereUniqueInput
    create: XOR<PlacementStatusCreateWithoutStudentInput, PlacementStatusUncheckedCreateWithoutStudentInput>
  }

  export type PlacementStatusCreateManyStudentInputEnvelope = {
    data: PlacementStatusCreateManyStudentInput | PlacementStatusCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drives?: PlacementDriveUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drives?: PlacementDriveUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutStudentInput = {
    update: XOR<ResumeUpdateWithoutStudentInput, ResumeUncheckedUpdateWithoutStudentInput>
    create: XOR<ResumeCreateWithoutStudentInput, ResumeUncheckedCreateWithoutStudentInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutStudentInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutStudentInput, ResumeUncheckedUpdateWithoutStudentInput>
  }

  export type ResumeUpdateWithoutStudentInput = {
    resumeUrl?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    resumeUrl?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSkillUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSkillWhereUniqueInput
    update: XOR<StudentSkillUpdateWithoutStudentInput, StudentSkillUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSkillCreateWithoutStudentInput, StudentSkillUncheckedCreateWithoutStudentInput>
  }

  export type StudentSkillUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSkillWhereUniqueInput
    data: XOR<StudentSkillUpdateWithoutStudentInput, StudentSkillUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSkillUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSkillScalarWhereInput
    data: XOR<StudentSkillUpdateManyMutationInput, StudentSkillUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentSkillScalarWhereInput = {
    AND?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
    OR?: StudentSkillScalarWhereInput[]
    NOT?: StudentSkillScalarWhereInput | StudentSkillScalarWhereInput[]
    id?: IntFilter<"StudentSkill"> | number
    studentId?: IntFilter<"StudentSkill"> | number
    skillName?: StringFilter<"StudentSkill"> | string
  }

  export type PlacementStatusUpsertWithWhereUniqueWithoutStudentInput = {
    where: PlacementStatusWhereUniqueInput
    update: XOR<PlacementStatusUpdateWithoutStudentInput, PlacementStatusUncheckedUpdateWithoutStudentInput>
    create: XOR<PlacementStatusCreateWithoutStudentInput, PlacementStatusUncheckedCreateWithoutStudentInput>
  }

  export type PlacementStatusUpdateWithWhereUniqueWithoutStudentInput = {
    where: PlacementStatusWhereUniqueInput
    data: XOR<PlacementStatusUpdateWithoutStudentInput, PlacementStatusUncheckedUpdateWithoutStudentInput>
  }

  export type PlacementStatusUpdateManyWithWhereWithoutStudentInput = {
    where: PlacementStatusScalarWhereInput
    data: XOR<PlacementStatusUpdateManyMutationInput, PlacementStatusUncheckedUpdateManyWithoutStudentInput>
  }

  export type PlacementStatusScalarWhereInput = {
    AND?: PlacementStatusScalarWhereInput | PlacementStatusScalarWhereInput[]
    OR?: PlacementStatusScalarWhereInput[]
    NOT?: PlacementStatusScalarWhereInput | PlacementStatusScalarWhereInput[]
    id?: IntFilter<"PlacementStatus"> | number
    studentId?: IntFilter<"PlacementStatus"> | number
    driveId?: IntFilter<"PlacementStatus"> | number
    status?: EnumStudentStatusFilter<"PlacementStatus"> | $Enums.StudentStatus
    remarks?: StringNullableFilter<"PlacementStatus"> | string | null
    updatedAt?: DateTimeFilter<"PlacementStatus"> | Date | string
  }

  export type StudentCreateWithoutSkillsInput = {
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    resume?: ResumeCreateNestedOneWithoutStudentInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSkillsInput = {
    id?: number
    userId: number
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutStudentInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSkillsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
  }

  export type StudentUpsertWithoutSkillsInput = {
    update: XOR<StudentUpdateWithoutSkillsInput, StudentUncheckedUpdateWithoutSkillsInput>
    create: XOR<StudentCreateWithoutSkillsInput, StudentUncheckedCreateWithoutSkillsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSkillsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSkillsInput, StudentUncheckedUpdateWithoutSkillsInput>
  }

  export type StudentUpdateWithoutSkillsInput = {
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    resume?: ResumeUpdateOneWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PlacementDriveCreateWithoutCompanyInput = {
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutDrivesInput
    eligibility?: EligibilityCriteriaCreateNestedOneWithoutDriveInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveUncheckedCreateWithoutCompanyInput = {
    id?: number
    createdBy: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    eligibility?: EligibilityCriteriaUncheckedCreateNestedOneWithoutDriveInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveCreateOrConnectWithoutCompanyInput = {
    where: PlacementDriveWhereUniqueInput
    create: XOR<PlacementDriveCreateWithoutCompanyInput, PlacementDriveUncheckedCreateWithoutCompanyInput>
  }

  export type PlacementDriveCreateManyCompanyInputEnvelope = {
    data: PlacementDriveCreateManyCompanyInput | PlacementDriveCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type PlacementDriveUpsertWithWhereUniqueWithoutCompanyInput = {
    where: PlacementDriveWhereUniqueInput
    update: XOR<PlacementDriveUpdateWithoutCompanyInput, PlacementDriveUncheckedUpdateWithoutCompanyInput>
    create: XOR<PlacementDriveCreateWithoutCompanyInput, PlacementDriveUncheckedCreateWithoutCompanyInput>
  }

  export type PlacementDriveUpdateWithWhereUniqueWithoutCompanyInput = {
    where: PlacementDriveWhereUniqueInput
    data: XOR<PlacementDriveUpdateWithoutCompanyInput, PlacementDriveUncheckedUpdateWithoutCompanyInput>
  }

  export type PlacementDriveUpdateManyWithWhereWithoutCompanyInput = {
    where: PlacementDriveScalarWhereInput
    data: XOR<PlacementDriveUpdateManyMutationInput, PlacementDriveUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyCreateWithoutDrivesInput = {
    companyName: string
    about: string
    location: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutDrivesInput = {
    id?: number
    companyName: string
    about: string
    location: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutDrivesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutDrivesInput, CompanyUncheckedCreateWithoutDrivesInput>
  }

  export type UserCreateWithoutDrivesInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrivesInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrivesInput, UserUncheckedCreateWithoutDrivesInput>
  }

  export type EligibilityCriteriaCreateWithoutDriveInput = {
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
    eligibleBranches?: EligibleBranchCreateNestedManyWithoutEligibilityInput
  }

  export type EligibilityCriteriaUncheckedCreateWithoutDriveInput = {
    id?: number
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
    eligibleBranches?: EligibleBranchUncheckedCreateNestedManyWithoutEligibilityInput
  }

  export type EligibilityCriteriaCreateOrConnectWithoutDriveInput = {
    where: EligibilityCriteriaWhereUniqueInput
    create: XOR<EligibilityCriteriaCreateWithoutDriveInput, EligibilityCriteriaUncheckedCreateWithoutDriveInput>
  }

  export type PlacementStatusCreateWithoutDriveInput = {
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutPlacementStatusesInput
  }

  export type PlacementStatusUncheckedCreateWithoutDriveInput = {
    id?: number
    studentId: number
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
  }

  export type PlacementStatusCreateOrConnectWithoutDriveInput = {
    where: PlacementStatusWhereUniqueInput
    create: XOR<PlacementStatusCreateWithoutDriveInput, PlacementStatusUncheckedCreateWithoutDriveInput>
  }

  export type PlacementStatusCreateManyDriveInputEnvelope = {
    data: PlacementStatusCreateManyDriveInput | PlacementStatusCreateManyDriveInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutDrivesInput = {
    update: XOR<CompanyUpdateWithoutDrivesInput, CompanyUncheckedUpdateWithoutDrivesInput>
    create: XOR<CompanyCreateWithoutDrivesInput, CompanyUncheckedCreateWithoutDrivesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutDrivesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutDrivesInput, CompanyUncheckedUpdateWithoutDrivesInput>
  }

  export type CompanyUpdateWithoutDrivesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutDrivesInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDrivesInput = {
    update: XOR<UserUpdateWithoutDrivesInput, UserUncheckedUpdateWithoutDrivesInput>
    create: XOR<UserCreateWithoutDrivesInput, UserUncheckedCreateWithoutDrivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDrivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDrivesInput, UserUncheckedUpdateWithoutDrivesInput>
  }

  export type UserUpdateWithoutDrivesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrivesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EligibilityCriteriaUpsertWithoutDriveInput = {
    update: XOR<EligibilityCriteriaUpdateWithoutDriveInput, EligibilityCriteriaUncheckedUpdateWithoutDriveInput>
    create: XOR<EligibilityCriteriaCreateWithoutDriveInput, EligibilityCriteriaUncheckedCreateWithoutDriveInput>
    where?: EligibilityCriteriaWhereInput
  }

  export type EligibilityCriteriaUpdateToOneWithWhereWithoutDriveInput = {
    where?: EligibilityCriteriaWhereInput
    data: XOR<EligibilityCriteriaUpdateWithoutDriveInput, EligibilityCriteriaUncheckedUpdateWithoutDriveInput>
  }

  export type EligibilityCriteriaUpdateWithoutDriveInput = {
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    eligibleBranches?: EligibleBranchUpdateManyWithoutEligibilityNestedInput
  }

  export type EligibilityCriteriaUncheckedUpdateWithoutDriveInput = {
    id?: IntFieldUpdateOperationsInput | number
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    eligibleBranches?: EligibleBranchUncheckedUpdateManyWithoutEligibilityNestedInput
  }

  export type PlacementStatusUpsertWithWhereUniqueWithoutDriveInput = {
    where: PlacementStatusWhereUniqueInput
    update: XOR<PlacementStatusUpdateWithoutDriveInput, PlacementStatusUncheckedUpdateWithoutDriveInput>
    create: XOR<PlacementStatusCreateWithoutDriveInput, PlacementStatusUncheckedCreateWithoutDriveInput>
  }

  export type PlacementStatusUpdateWithWhereUniqueWithoutDriveInput = {
    where: PlacementStatusWhereUniqueInput
    data: XOR<PlacementStatusUpdateWithoutDriveInput, PlacementStatusUncheckedUpdateWithoutDriveInput>
  }

  export type PlacementStatusUpdateManyWithWhereWithoutDriveInput = {
    where: PlacementStatusScalarWhereInput
    data: XOR<PlacementStatusUpdateManyMutationInput, PlacementStatusUncheckedUpdateManyWithoutDriveInput>
  }

  export type PlacementDriveCreateWithoutEligibilityInput = {
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutDrivesInput
    creator: UserCreateNestedOneWithoutDrivesInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveUncheckedCreateWithoutEligibilityInput = {
    id?: number
    companyId: number
    createdBy: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutDriveInput
  }

  export type PlacementDriveCreateOrConnectWithoutEligibilityInput = {
    where: PlacementDriveWhereUniqueInput
    create: XOR<PlacementDriveCreateWithoutEligibilityInput, PlacementDriveUncheckedCreateWithoutEligibilityInput>
  }

  export type EligibleBranchCreateWithoutEligibilityInput = {
    branch: string
  }

  export type EligibleBranchUncheckedCreateWithoutEligibilityInput = {
    id?: number
    branch: string
  }

  export type EligibleBranchCreateOrConnectWithoutEligibilityInput = {
    where: EligibleBranchWhereUniqueInput
    create: XOR<EligibleBranchCreateWithoutEligibilityInput, EligibleBranchUncheckedCreateWithoutEligibilityInput>
  }

  export type EligibleBranchCreateManyEligibilityInputEnvelope = {
    data: EligibleBranchCreateManyEligibilityInput | EligibleBranchCreateManyEligibilityInput[]
    skipDuplicates?: boolean
  }

  export type PlacementDriveUpsertWithoutEligibilityInput = {
    update: XOR<PlacementDriveUpdateWithoutEligibilityInput, PlacementDriveUncheckedUpdateWithoutEligibilityInput>
    create: XOR<PlacementDriveCreateWithoutEligibilityInput, PlacementDriveUncheckedCreateWithoutEligibilityInput>
    where?: PlacementDriveWhereInput
  }

  export type PlacementDriveUpdateToOneWithWhereWithoutEligibilityInput = {
    where?: PlacementDriveWhereInput
    data: XOR<PlacementDriveUpdateWithoutEligibilityInput, PlacementDriveUncheckedUpdateWithoutEligibilityInput>
  }

  export type PlacementDriveUpdateWithoutEligibilityInput = {
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDrivesNestedInput
    creator?: UserUpdateOneRequiredWithoutDrivesNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateWithoutEligibilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutDriveNestedInput
  }

  export type EligibleBranchUpsertWithWhereUniqueWithoutEligibilityInput = {
    where: EligibleBranchWhereUniqueInput
    update: XOR<EligibleBranchUpdateWithoutEligibilityInput, EligibleBranchUncheckedUpdateWithoutEligibilityInput>
    create: XOR<EligibleBranchCreateWithoutEligibilityInput, EligibleBranchUncheckedCreateWithoutEligibilityInput>
  }

  export type EligibleBranchUpdateWithWhereUniqueWithoutEligibilityInput = {
    where: EligibleBranchWhereUniqueInput
    data: XOR<EligibleBranchUpdateWithoutEligibilityInput, EligibleBranchUncheckedUpdateWithoutEligibilityInput>
  }

  export type EligibleBranchUpdateManyWithWhereWithoutEligibilityInput = {
    where: EligibleBranchScalarWhereInput
    data: XOR<EligibleBranchUpdateManyMutationInput, EligibleBranchUncheckedUpdateManyWithoutEligibilityInput>
  }

  export type EligibleBranchScalarWhereInput = {
    AND?: EligibleBranchScalarWhereInput | EligibleBranchScalarWhereInput[]
    OR?: EligibleBranchScalarWhereInput[]
    NOT?: EligibleBranchScalarWhereInput | EligibleBranchScalarWhereInput[]
    id?: IntFilter<"EligibleBranch"> | number
    eligibilityId?: IntFilter<"EligibleBranch"> | number
    branch?: StringFilter<"EligibleBranch"> | string
  }

  export type EligibilityCriteriaCreateWithoutEligibleBranchesInput = {
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
    drive: PlacementDriveCreateNestedOneWithoutEligibilityInput
  }

  export type EligibilityCriteriaUncheckedCreateWithoutEligibleBranchesInput = {
    id?: number
    driveId: number
    minCGPA?: number | null
    maxBacklogs?: number | null
    graduationYear?: number | null
  }

  export type EligibilityCriteriaCreateOrConnectWithoutEligibleBranchesInput = {
    where: EligibilityCriteriaWhereUniqueInput
    create: XOR<EligibilityCriteriaCreateWithoutEligibleBranchesInput, EligibilityCriteriaUncheckedCreateWithoutEligibleBranchesInput>
  }

  export type EligibilityCriteriaUpsertWithoutEligibleBranchesInput = {
    update: XOR<EligibilityCriteriaUpdateWithoutEligibleBranchesInput, EligibilityCriteriaUncheckedUpdateWithoutEligibleBranchesInput>
    create: XOR<EligibilityCriteriaCreateWithoutEligibleBranchesInput, EligibilityCriteriaUncheckedCreateWithoutEligibleBranchesInput>
    where?: EligibilityCriteriaWhereInput
  }

  export type EligibilityCriteriaUpdateToOneWithWhereWithoutEligibleBranchesInput = {
    where?: EligibilityCriteriaWhereInput
    data: XOR<EligibilityCriteriaUpdateWithoutEligibleBranchesInput, EligibilityCriteriaUncheckedUpdateWithoutEligibleBranchesInput>
  }

  export type EligibilityCriteriaUpdateWithoutEligibleBranchesInput = {
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    drive?: PlacementDriveUpdateOneRequiredWithoutEligibilityNestedInput
  }

  export type EligibilityCriteriaUncheckedUpdateWithoutEligibleBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    minCGPA?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBacklogs?: NullableIntFieldUpdateOperationsInput | number | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentCreateWithoutPlacementStatusesInput = {
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    resume?: ResumeCreateNestedOneWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPlacementStatusesInput = {
    id?: number
    userId: number
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeUncheckedCreateNestedOneWithoutStudentInput
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPlacementStatusesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPlacementStatusesInput, StudentUncheckedCreateWithoutPlacementStatusesInput>
  }

  export type PlacementDriveCreateWithoutPlacementStatusesInput = {
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutDrivesInput
    creator: UserCreateNestedOneWithoutDrivesInput
    eligibility?: EligibilityCriteriaCreateNestedOneWithoutDriveInput
  }

  export type PlacementDriveUncheckedCreateWithoutPlacementStatusesInput = {
    id?: number
    companyId: number
    createdBy: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
    eligibility?: EligibilityCriteriaUncheckedCreateNestedOneWithoutDriveInput
  }

  export type PlacementDriveCreateOrConnectWithoutPlacementStatusesInput = {
    where: PlacementDriveWhereUniqueInput
    create: XOR<PlacementDriveCreateWithoutPlacementStatusesInput, PlacementDriveUncheckedCreateWithoutPlacementStatusesInput>
  }

  export type StudentUpsertWithoutPlacementStatusesInput = {
    update: XOR<StudentUpdateWithoutPlacementStatusesInput, StudentUncheckedUpdateWithoutPlacementStatusesInput>
    create: XOR<StudentCreateWithoutPlacementStatusesInput, StudentUncheckedCreateWithoutPlacementStatusesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPlacementStatusesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPlacementStatusesInput, StudentUncheckedUpdateWithoutPlacementStatusesInput>
  }

  export type StudentUpdateWithoutPlacementStatusesInput = {
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    resume?: ResumeUpdateOneWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPlacementStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateOneWithoutStudentNestedInput
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PlacementDriveUpsertWithoutPlacementStatusesInput = {
    update: XOR<PlacementDriveUpdateWithoutPlacementStatusesInput, PlacementDriveUncheckedUpdateWithoutPlacementStatusesInput>
    create: XOR<PlacementDriveCreateWithoutPlacementStatusesInput, PlacementDriveUncheckedCreateWithoutPlacementStatusesInput>
    where?: PlacementDriveWhereInput
  }

  export type PlacementDriveUpdateToOneWithWhereWithoutPlacementStatusesInput = {
    where?: PlacementDriveWhereInput
    data: XOR<PlacementDriveUpdateWithoutPlacementStatusesInput, PlacementDriveUncheckedUpdateWithoutPlacementStatusesInput>
  }

  export type PlacementDriveUpdateWithoutPlacementStatusesInput = {
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDrivesNestedInput
    creator?: UserUpdateOneRequiredWithoutDrivesNestedInput
    eligibility?: EligibilityCriteriaUpdateOneWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateWithoutPlacementStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: EligibilityCriteriaUncheckedUpdateOneWithoutDriveNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    drives?: PlacementDriveCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    drives?: PlacementDriveUncheckedCreateNestedManyWithoutCreatorInput
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
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    drives?: PlacementDriveUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    drives?: PlacementDriveUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type StudentCreateWithoutResumeInput = {
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    skills?: StudentSkillCreateNestedManyWithoutStudentInput
    placementStatuses?: PlacementStatusCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutResumeInput = {
    id?: number
    userId: number
    prn: string
    branch: string
    year: number
    graduationYear?: number | null
    cgpa: number
    activeBacklogs?: number
    phone: string
    linkedin?: string | null
    github?: string | null
    portfolio?: string | null
    profileCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: StudentSkillUncheckedCreateNestedManyWithoutStudentInput
    placementStatuses?: PlacementStatusUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutResumeInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutResumeInput, StudentUncheckedCreateWithoutResumeInput>
  }

  export type StudentUpsertWithoutResumeInput = {
    update: XOR<StudentUpdateWithoutResumeInput, StudentUncheckedUpdateWithoutResumeInput>
    create: XOR<StudentCreateWithoutResumeInput, StudentUncheckedCreateWithoutResumeInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutResumeInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutResumeInput, StudentUncheckedUpdateWithoutResumeInput>
  }

  export type StudentUpdateWithoutResumeInput = {
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    skills?: StudentSkillUpdateManyWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutResumeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    prn?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    cgpa?: FloatFieldUpdateOperationsInput | number
    activeBacklogs?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StudentSkillUncheckedUpdateManyWithoutStudentNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PlacementDriveCreateManyCreatorInput = {
    id?: number
    companyId: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    type: $Enums.NotificationType
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PlacementDriveUpdateWithoutCreatorInput = {
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDrivesNestedInput
    eligibility?: EligibilityCriteriaUpdateOneWithoutDriveNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: EligibilityCriteriaUncheckedUpdateOneWithoutDriveNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSkillCreateManyStudentInput = {
    id?: number
    skillName: string
  }

  export type PlacementStatusCreateManyStudentInput = {
    id?: number
    driveId: number
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
  }

  export type StudentSkillUpdateWithoutStudentInput = {
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSkillUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type PlacementStatusUpdateWithoutStudentInput = {
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drive?: PlacementDriveUpdateOneRequiredWithoutPlacementStatusesNestedInput
  }

  export type PlacementStatusUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementStatusUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    driveId?: IntFieldUpdateOperationsInput | number
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementDriveCreateManyCompanyInput = {
    id?: number
    createdBy: number
    role: string
    package: string
    driveDate: Date | string
    venue: string
    deadline: Date | string
    jobType: string
    description: string
    hiringProcess: string
    status?: $Enums.DriveStatus
    createdAt?: Date | string
  }

  export type PlacementDriveUpdateWithoutCompanyInput = {
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutDrivesNestedInput
    eligibility?: EligibilityCriteriaUpdateOneWithoutDriveNestedInput
    placementStatuses?: PlacementStatusUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: EligibilityCriteriaUncheckedUpdateOneWithoutDriveNestedInput
    placementStatuses?: PlacementStatusUncheckedUpdateManyWithoutDriveNestedInput
  }

  export type PlacementDriveUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    driveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    jobType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hiringProcess?: StringFieldUpdateOperationsInput | string
    status?: EnumDriveStatusFieldUpdateOperationsInput | $Enums.DriveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementStatusCreateManyDriveInput = {
    id?: number
    studentId: number
    status?: $Enums.StudentStatus
    remarks?: string | null
    updatedAt?: Date | string
  }

  export type PlacementStatusUpdateWithoutDriveInput = {
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPlacementStatusesNestedInput
  }

  export type PlacementStatusUncheckedUpdateWithoutDriveInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementStatusUncheckedUpdateManyWithoutDriveInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibleBranchCreateManyEligibilityInput = {
    id?: number
    branch: string
  }

  export type EligibleBranchUpdateWithoutEligibilityInput = {
    branch?: StringFieldUpdateOperationsInput | string
  }

  export type EligibleBranchUncheckedUpdateWithoutEligibilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
  }

  export type EligibleBranchUncheckedUpdateManyWithoutEligibilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch?: StringFieldUpdateOperationsInput | string
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