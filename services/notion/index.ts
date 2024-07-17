"use server"
import { Costumer } from "@/app/sections/form";
import notion from "@/lib/notion";

export const addCostumer = async (costumer: Costumer) => {
    const response = await notion.pages.create({
        parent: {
          database_id: '460e13d540b948d3ae0350136b0e058f',
        },
        properties: {
          'Full Name': {
            type: 'title',
            title: [
              {
                type: 'text',
                text: {
                  content: costumer.full_name,
                },
              },
            ],
          },

          'Company Name': {
            type: 'rich_text',
            rich_text: [{ type: "text", text: { content: costumer.company_name } }]
          },
          'Email': {
            type: 'email',
            email: costumer.email
          },
          'Already Have Website': {
            type: "status",
            status: { name: costumer.website ? 'True' : 'False' }
          },
          'Industry': {
            type: 'rich_text',
            rich_text: [
                {
                  type: 'text',
                  text: {
                    content: costumer.industry,
                  },
                },
              ],
          },
          'Website URL': {
            type: 'rich_text',
            rich_text: [
                {
                  type: 'text',
                  text: {
                    content: costumer.website_url || "",
                  },
                },
              ],
          },
          'Lead Type': {
            type: 'select',
            select: {
                name: "Website Form"
            }
          }
        },
      });
}