import {InfoOutlineIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {TrolleyIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .icon(TrolleyIcon)
    .schemaType('product')
    .child(S.documentTypeList('product')),
)
