import { encode } from "./vendor/https/deno.land/x/std/encoding/base64.ts";
const bytes = await Deno.readAll(Deno.stdin);
const encoded = encode(bytes);
console.log(`export default "${encoded}";`);
