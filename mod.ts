import { encode } from "https://deno.land/std@0.139.0/encoding/base64.ts";
const bytes = await Deno.readAll(Deno.stdin);
const dec = new TextDecoder("UTF-8");
const encoded = encode(dec.decode(bytes));
console.log(`export default "${encoded}";`);
