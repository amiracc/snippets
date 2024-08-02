import {ListItemBuilder, StructureResolver} from 'sanity/structure'
import colorThemes from './colorThemeStructure'
import products from './productStructure'
import pages from './pageStructure.js'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return !['colorTheme', 'media.tag', 'product', 'page'].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      pages(S, context),
      products(S, context),
      S.divider(),
      colorThemes(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
