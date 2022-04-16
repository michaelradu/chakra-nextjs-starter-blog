<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# ChakraUI Nextjs Starter Blog
## WIP

[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

[![Deploy with Vercel](https://vercel.com/button)][vercel-url]

This is a [Next.js](https://nextjs.org/), [Chakra UI](https://chakra-ui.com/) blogging starter template.It comes out of the box configured with the latest technologies to make technical writing a breeze. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs. This project was inspired by its Tailwind CSS counterpart.

Check out the documentation below to get started.

Feature request? Check the past discussions to see if it has been brought up previously. Otherwise, feel free to start a new discussion thread. All ideas are welcomed!

## Motivation

I wanted to port my existing blog to Nextjs and Chakra UI but most templates I wanted to use as a base for getting MDX working were outdated. 

## Features

- Easy styling customization with [Chakra UI](https://chakra-ui.com/) and primary color attribute
- Mobile-friendly view
- Light and dark theme
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Blog templates
- Projects page
- SEO friendly

## Quick Start Guide

1. Clone the repo

```
git clone https://github.com/michaelradu/chakra-nextjs-starter-blog.git
```

2. Personalize the template
3. Add your projects to `/projects/`
4. Modify `headerNavLinks.js` to customize navigation links
5. Add blog posts to `/data/`
6. Deploy on Vercel or Netlify

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.

## Extend / Customize

`data` - replace with your own blog posts.

`public/img` - store assets such as images.

`public` - currently stores favicons

`styles/theme.jsx` and `styles/globals.css` - contain the stylesheet which can be modified to change the overall look and feel of the site.

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`components/Layout.js` - main template used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## Post

### gray-matter

Parse front-matter from a string or file.

Currently 5 fields are supported.

```
title (required)
subtitle (required)
date (required)
img (required)
tags (required)
```

Here's an example of a post's frontmatter:

```
---
title: "Test post"
subtitle: "This is a description."
date: "April 15th"
img: "/img/test.png"
tag: "Tech"
---
```

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
Websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/) are also supported. 



## Licence

[MIT](michaelradu/chakra-nextjs-starter-blog/LICENSE) © [Michael Radu](https://www.mihairadu.cf)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/michaelradu/chakra-nextjs-starter-blog.svg?style=social
[contributors-url]: https://github.com/michaelradu/chakra-nextjs-starter-blog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/michaelradu/chakra-nextjs-starter-blog.svg?style=social
[forks-url]: https://github.com/michaelradu/chakra-nextjs-starter-blog/network/members
[stars-shield]: https://img.shields.io/github/stars/michaelradu/chakra-nextjs-starter-blog.svg?style=social
[stars-url]: https://github.com/michaelradu/chakra-nextjs-starter-blog/stargazers
[issues-shield]: https://img.shields.io/github/issues/michaelradu/chakra-nextjs-starter-blog.svg?style=social
[issues-url]: https://github.com/michaelradu/chakra-nextjs-starter-blog/issues
[license-shield]: https://img.shields.io/github/license/michaelradu/chakra-nextjs-starter-blog.svg?style=social
[license-url]: https://github.com/michaelradu/chakra-nextjs-starter-blog/blob/master/LICENSE.txt
[vercel-url]: https://vercel.com/new/git/external?repository-url=https://github.com/michaelradu/chakra-nextjs-starter-blog