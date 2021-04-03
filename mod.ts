const bytes = await Deno.readAll(Deno.stdin);
const dec = new TextDecoder("UTF-8");
const encoded = btoa(dec.decode(bytes));
console.log(`export default "${encoded}";`);
