// import * as model from './model.mjs'; // One way of doing an import
// import {readEntity} from "./model.mjs";
// can also do this:
import readEntity, {COUNTRY} from "./model.mjs"; // mix the default export with other exports

console.log(readEntity());

console.log(model.COUNTRY); // with the explicit import above neither this or the below works

console.log(model.STATE); // this is undefined and doesn't work because STATE is not "export" in model.mjs