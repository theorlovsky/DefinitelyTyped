// Type definitions for try-catch 3.0
// Project: http://github.com/coderaiser/try-catch
// Definitions by: Alex Orlovsky <https://github.com/theorlovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

declare function tryCatch<T extends any, Args extends any[]>(
    fn: (this: undefined, ...args: Args) => T,
    ...args: Args
): [null, T] | [Error];

export = tryCatch;
