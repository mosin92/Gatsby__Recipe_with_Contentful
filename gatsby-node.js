
const path=require("path")
const slugify=require("slugify")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result=await graphql(`
    query GetRecipeTag {
        allContentfulRecipeApp {
          nodes {
            contetn {
              tags
            }
          }
        }
      }
      
    `)
      console.log(result)
    result.data.allContentfulRecipeApp.nodes.forEach(item=>{
        item.contetn.tags.forEach(tag=>{
          const slug=slugify(tag,{lower:true})
            createPage({
                path:`/tags/${slug}` ,
                component:path.resolve('src/templates/tag-template.js') ,
                context:{
                    tag:tag
                }
            })
        })
    })

}
    