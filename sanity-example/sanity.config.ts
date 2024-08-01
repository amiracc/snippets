import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {colorInput} from '@sanity/color-input'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Sanity Example',
  projectId: 'jc4lcfq1',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool(), media(), colorInput()],
  schema: {
    types: schemaTypes,
  },
})
