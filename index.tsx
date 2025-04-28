import { Html } from "jsx-email";
import React from "react";

// Comment this line and the error will be correctly mapped.
// Any reference to jsx-email seems to cause source-map issues.
console.log(<Html />)

throw new Error("test");

console.log("hello2");
