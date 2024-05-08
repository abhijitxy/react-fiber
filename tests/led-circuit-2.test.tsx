import React, { Fragment } from "react"
import test from "ava"
import { createRoot } from "lib/render"
import { createProjectBuilder } from "@tscircuit/builder"
import { logLayout } from "./utils/log-layout"

export const ExampleCircuit = () => {
  return (
    <Fragment>
      <resistor
        name="R1"
        resistance="10 ohm"
        footprint="0402"
        schX={2}
        schY={1}
      />
      <capacitor
        name="C1"
        capacitance="10 uF"
        schX={4}
        schY={2}
        schRotation="90deg"
        footprint="0402"
        pcbX="4mm"
        pcbY="2mm"
      />
      <resistor
        name="R2"
        resistance="10 ohm"
        schX={6}
        schY={1}
        schRotation="90deg"
        footprint="0402"
        pcbX="6mm"
        pcbY="1mm"
      />
      <trace
        path={[".R1 > port.right", ".C1 > port.left", ".R2 > port.left"]}
      />
      <powersource voltage="5V" schX={1} schY={2} name="main_power" />
      <trace path={[".main_power > port.positive", ".R1 > port.left"]} />
      <trace
        path={["power > port.negative", ".C1 > port.right", ".R2 > port.right"]}
      />
      <bug
        name="B1"
        schPortArrangement={{ leftSize: 3, rightSize: 3 }}
        schX={8}
        schY={3}
        pinLabels={{
          1: "PWR",
          2: "NC",
          3: "RG",
          4: "D0",
          5: "D1",
          6: "GND",
        }}
      />
      <trace path={[".B1 > port.PWR", ".R2 > port.left"]} />
      <ground name="GND" center={[11, 3]} />
      <trace from=".B1 > port.GND" to=".GND" />
      <diode
        name="D1"
        schX={6}
        schY={3.5}
        footprint="0402"
        schRotation="180deg"
        pcbX="6mm"
        pcbY="3.5mm"
      />
      <trace from=".D1 > .left" to=".B1 > .RG" />
      <trace from=".D1 > .right" to=".C1> .right" />
    </Fragment>
  )
}

test("example led-circuit (2)", async (t) => {
  const pb = createProjectBuilder()
  const result = await createRoot().render(<ExampleCircuit />, pb)
  await logLayout("led circuit 2", result)
  t.pass()
})
