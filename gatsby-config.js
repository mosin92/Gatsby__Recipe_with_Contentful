
require('dotenv').config();
module.exports = {
  siteMetadata:{
    title:"Simply Recipe" ,
    description:"my nice simply recipe site"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,{
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `1u4t2lmpqf2d`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_API_KEY,
    },
  },
  
],
}
