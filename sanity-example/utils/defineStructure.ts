import {ConfigContext} from 'sanity'
import {StructureBuilder} from 'sanity/structure'

// This is a helper for creating structured components in sanity
export default function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType,
) {
  return factory
}
