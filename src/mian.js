import foo from "./foo.js";
export default function () {
    console.log(foo);
    console.log(globalThis, "222");
}
