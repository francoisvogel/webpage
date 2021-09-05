module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "webpage",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    'gatsby-plugin-postcss', // added for tailwind css to work
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "274942225",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
    
              // the github handler whose gists are to be accessed
              username: "<string>",
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              // DEPRECATED (PLEASE USE gistDefaultCssInclude)
              includeDefaultCss: true || false,
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              gistDefaultCssInclude: true || false,
    
              // a flag indicating whether the github default gist css should be preloaded or not
              // use this if you want to load the default css asynchronously.
              // default: false
              gistCssPreload: true || false,
    
              // a string that represents the github default gist css url.
              // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
              gistCssUrlAddress: "<string>"
            }
          }
        ]
      }
    }
  ],
};
