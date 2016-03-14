/** Based on sample code from the TypeScript 1.7 announcement:
 * https://blogs.msdn.microsoft.com/typescript/2015/11/30/announcing-typescript-1-7/
 *
 * Node v0.12 will run the async/await part using the `--harmony` flag, but Node v4+ is
 * required to use the `for...of` syntax with arrays.
 */

async function printDelayed(
    elements: string[]
): Promise<void> {
    for (const element of elements) {
        await delay(200);
        console.log(element);
    }
    process.exit(0);
}

async function delay(
    milliseconds: number
): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

printDelayed([
    "Hello",
    "beautiful",
    "asynchronous",
    "world"
]).
then(() => {
    console.log();
    console.log("Printed every element!");
});
