# padlr
Left and right padder.

## Usage Example

Example: index.ts
```typescript
import { Padlr } from "padlr";

const inputStr = "Hi there";
const str1 = Padlr.left(inputStr, 15);
const str2 = Padlr.left(inputStr, 15,"-");
const str3 = Padlr.right(inputStr, 15, "+");
const str4 = Padlr.right(inputStr, 15);

console.log(`str1: ${str1}.`);
console.log(`str2: ${str2}.`);
console.log(`str3: ${str3}.`);
console.log(`str4: ${str4}.`);
```

Sample Output:
```
> ts-node index.ts
str1:        Hi there.
str2: -------Hi there.
str3: Hi there+++++++.
str4: Hi there       .
```
