declare global {
  namespace JSX {
    interface IntrinsicElements {
      resistor: any
      custom: any
      capacitor: any
      inductor: any
      diode: any
      bug: any
      ground: any
      powersource: any
      group: any
      trace: any
      smtpad: any
      port: any
      ports: any
      footprint: any
      component: any
      platedhole: any
      hole: any
      schematicdrawing: any
      box: any
      constraint: any
      // conflicts w/ svg
      // line: any
    }
  }
}

export default {}