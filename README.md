# Cloudflare Workers Internship Application: Full-Stack

## Description

I have refered to the documentation given online and applied everything I could from scratch while trying to understand what each of those things are doing

## Links Reffered to

- [Workers Quick Start documentation](https://developers.cloudflare.com/workers/quickstart/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/)
- [Cookie documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)


## Tasks Done

### 1. Request the URLs from the API

Make a fetch request inside of your script's event handler to the URL `https://cfw-takehome.developers.workers.dev/api/variants`, and parse the response as JSON. The response will be an array of URLs, which should be saved to a variable.

### 2. Request a variant

Make a fetch request to one of the two URLs, and return it as the response from the script.

### 3. Distribute requests between variants

### 4. Changing copy/URLs

For each variant page, there are a number of items on the page that can be customized. Try changing the following values inside of the variant, adding your own text or URLs:

- `title`: the title of the web page, displayed on the window or tab title in your browser.
- `h1#title`: the main title of the page. By default, this displays "Variant 1" or "Variant 2"
- `p#description`: the description paragraph on the page. By default, this displays the text "This is variant X of the take home project!".
- `a#url`: a Call to Action link with strong emphasis on the page. Try changing this to a URL of your choice, such as your personal website, and make sure to update the text "Return to cloudflare.com" as well!

### 5. Persisting variants

If a user visits the site and receives one of the two URLs, persist which URL is chosen in a cookie so that they always see the same variant when they return to the application. A cookie would be a great way to implement this!


## Deployed Link
https://vikky-noelle-cloudflare.vikky-noelle.workers.dev/
