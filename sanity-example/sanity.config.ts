import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {colorInput} from '@sanity/color-input'
import {structure} from './structure'
import {defaultDocumentNode} from './utils/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Sanity Example',
  projectId: 'jc4lcfq1', // Normally I would move it to the env, but as this is a demo, for simplicity I left it here
  dataset: 'production',
  plugins: [structureTool({structure, defaultDocumentNode}), visionTool(), media(), colorInput()],
  schema: {
    types: schemaTypes,
  },
})
