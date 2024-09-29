import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
    }),
})
export const Collections = {
    blog,
}