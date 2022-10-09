import {
  ComponentBuilder,
  createBugBuilder,
  createCapacitorBuilder,
  createDiodeBuilder,
  createGroundBuilder,
  createGroupBuilder,
  createInductorBuilder,
  createPowerSourceBuilder,
  createResistorBuilder,
  createTraceBuilder,
  GroupBuilder,
  ProjectBuilder,
  TraceBuilder,
  createSMTPadBuilder,
  createPortBuilder,
  createPortsBuilder,
  createFootprintBuilder,
} from "@tscircuit/builder"

export const builderTypeToInitializer = {
  resistor: createResistorBuilder,
  capacitor: createCapacitorBuilder,
  inductor: createInductorBuilder,
  diode: createDiodeBuilder,
  ground: createGroundBuilder,
  bug: createBugBuilder,
  powersource: createPowerSourceBuilder,
  group: createGroupBuilder,
  trace: createTraceBuilder,
  smtpad: createSMTPadBuilder,
  port: createPortBuilder,
  ports: createPortsBuilder,
  footprint: createFootprintBuilder,
}

export type BuilderType = keyof typeof builderTypeToInitializer

export const getBuilderForType = (
  type: string,
  project_builder: ProjectBuilder
): ComponentBuilder | TraceBuilder | GroupBuilder => {
  if (!(type in builderTypeToInitializer)) {
    throw new Error(`Unknown builder type: "${type}"`)
  }
  return builderTypeToInitializer[type](project_builder)
}