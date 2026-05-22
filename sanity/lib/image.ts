import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

export const urlFor = (source: any) => {
  if (!client || !source) return null
  const builder = createImageUrlBuilder(client)
  return builder.image(source)
}
