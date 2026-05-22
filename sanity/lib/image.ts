import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

export const urlFor = (source: any) => {
  if (!client) return ''
  const builder = createImageUrlBuilder(client)
  return builder.image(source)
}
