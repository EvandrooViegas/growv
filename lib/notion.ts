import { Client } from "@notionhq/client"
const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_ENV
})


export default notion