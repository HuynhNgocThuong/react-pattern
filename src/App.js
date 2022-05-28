import React, { useState } from "react";

function Input(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
      placeholder="Temp in °C"
    />
  );
}
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input value={value} handleChange={setValue} />
      <Kelvin value={value} />
      <Fahrenheit value={value} />
    </div>
  );
}
function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}
function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}

// Render props
function InputRenderProps(props) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function AppRenderProps() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <InputRenderProps
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}
