import {type DefaultDocumentNodeResolver} from 'sanity/structure'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {type SanityDocument} from 'sanity'

// LOOK: This is for defining what url should the preview load on
const getPreviewUrl = (doc: SanityDocument) => {
  if (doc?.slug?.current && doc?.slug?.current !== 'home') {
    return `http://localhost:3000/${doc.slug.current}`
  } else {
    return `http://localhost:3000/`
  }
}

// LOOK: The document node of sanity or more precisly on which documents we would like to have a preview
// In this case page, as for this demo that makes most sense atm
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
