import { type SchemaTypeDefinition } from 'sanity'
import ContactFormSchema from "./contact-form"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ContactFormSchema],
}
