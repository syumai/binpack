import { encode } from "https://deno.land/std@0.139.0/encoding/base64.ts";
import { readAll } from "https://deno.land/std@0.139.0/streams/conversion.ts";
const bytes = await readAll(Deno.stdin);
const encoded = encode(bytes.buffer);
console.log(`export default "${encoded}";`);
