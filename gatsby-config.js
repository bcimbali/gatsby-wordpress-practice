require('dotenv').config()

console.log(
  '.env file: ',
  process.env.API_TEST,
  process.env.CLIENT_SECRET,
  process.env.CLIENT_ID,
  process.env.WPCOM_USER,
  process.env.WPCOM_PASS
)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `bcimbali.wordpress.com`,
        protocol: `https`,
        // this is true because it's hosted on wordpress.com, not self-hosted.
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret: `${process.env.CLIENT_SECRET}`,
          wpcom_app_clientId: `${process.env.CLIENT_ID}`,
          wpcom_user: `${process.env.WPCOM_USER}`,
          wpcom_pass: `${process.env.WPCOM_PASS}`,
        },
      },
    },
    'gatsby-plugin-offline',
  ],
}
