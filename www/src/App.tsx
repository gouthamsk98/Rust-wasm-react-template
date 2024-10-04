import "./App.css";
import React, { useEffect, useState } from "react";
import { greet } from "rust-wasm";
function App() {
  greet(); // Call the Wasm function
  return <></>;
}

export default App;
