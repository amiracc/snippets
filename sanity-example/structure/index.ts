import {ListItemBuilder, StructureResolver} from 'sanity/structure'
import colorThemes from './colorThemeStructure'
import products from './productStructure'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return !['colorTheme', 'media.tag', 'product'].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      products(S, context),
      S.divider(),
      colorThemes(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
