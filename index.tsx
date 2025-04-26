import { render } from "jsx-email";
import { Template } from "./template.js";
import React from "react";

console.log("hello");

// Comment this line and the error will be correctly mapped.
// Any reference to jsx-email seems to cause source-map issues.
await render(<Template />)

throw new Error("test");

console.log("hello2");
