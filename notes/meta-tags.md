# Meta Tags

What are meta tags?

Meta tags communicate data to browsers and other computer programs. That data usually assists with rendering, browser searching, and accesibility.

[The meta element is does not need a closing tag](https://stackoverflow.com/questions/19506028/do-you-need-to-close-meta-and-link-tags-in-html), unlike normal HTML5 elements. The exception would be if a meta element is part of an XHTML document, which does require closing tags.

Usually meta tags have a 'name' attribute to identify them and a 'content' tag to describe something about the html document in relation to the tag's identification.

Some common examples and explanations:

    <meta name="viewport" content="width=device-width initial-scale=1.0">

This meta tag is commonly used in tandem with css media queries in mobile optimized websites to avoid problems that arise from some [mobile devices using virtual viewports](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) in the rendering process of a web page.

Using a viewport meta tag in a website that utilizes CSS media queries to dynamically organize the display of content on a screen insures that fonts are not rendered too small to read, and all the data on the webpage follows the rules set by the media queries.

    <meta http-equiv="X-UA-Compatible" content="IE-edge">