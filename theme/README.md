# Gatsby Theme Portfolio

See the [live demo](https://gatsby-theme-portfolio.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm i gatsby-theme-portfolio
    ```

    or

    ```sh
    yarn add gatsby-theme-portfolio
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        {
          resolve: "gatsby-theme-portfolio",
          options: {
            contentPath: `${__dirname}/content` // the path to your markdown files
          }
        }
      ]
    }
    ```

3. There are two markdown files
   1. `intro.md` with content that looks like this:
   ```markdown
    ---
    section: intro
    title: Hi there!
    description: I’m John and I’m a Wizard!
    action: Hire me
    ---
   ```
   2. `about.md` with content that looks like this:
   ```markdown
    ---
    section: about
    title: Hello
    description: description
    action: Hire me
    ---
   ```

4. Create a `src/gatsby-theme-portfolio/data/index.js` file and pass in this object of data to override the theme's data:
   ```js
    module.exports = {
      defaultTitle: "Smakosh",
      logo: "https://gatsby-theme-portfolio.smakosh.com/favicon/favicon-512.png",
      author: "John Doe",
      url: "https://gatsby-theme-portfolio.smakosh.com",
      legalName: "John Doe",
      defaultDescription: "I’m John and I’m a Backend & Devops engineer!",
      socialLinks: {
        twitter: "http://www.twitter.com/smakosh",
        github: "https://github.com/smakosh",
        linkedin: "https://www.linkedin.com/in/ismail-ghallou-630149122/",
        instagram: "https://instagram.com/smakosh19",
        youtube: "https://www.youtube.com/user/smakoshthegamer",
        google: "https://plus.google.com/u/0/+IsmailSmakoshGhallou",
        telegram: "https://t.me/smakosh",
        stackOverflow: "https://stackoverflow.com/users/story/7396786"
      },
      googleAnalyticsID: "UA-xxxxx-x",
      themeColor: "#6b63ff",
      backgroundColor: "#6b63ff",
      social: {
        facebook: "appId",
        twitter: "@smakosh"
      },
      address: {
        city: "City",
        region: "Region",
        country: "Country",
        zipCode: "ZipCode"
      },
      contact: {
        email: "email",
        phone: "phone number"
      },
      foundingDate: "2019",
      recaptcha_key: "xxxxxxxxxx"
    };
   ```

5.  Create a `.env.development` file and put this env variable with your GitHub token as value
    ```sh
    GITHUB_TOKEN=xxxxxxxxxx
    ```

6.  Start your site
    ```sh
    gatsby develop
    ```

6.  You can override colors by creating a `src/gatsby-theme-portfolio/tokens/colors.js` file with object:
   ```js
    export default {
      primary: "#009688",
      primaryOverlay: "ccf2e2",
      buttonColor: "#009688",
      buttonColorSecondary: "#009688"
    };
   ```

When deploying on Netlify, you will have to set the private key as well

```sh
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check [this repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms
