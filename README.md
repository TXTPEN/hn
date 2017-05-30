# embeddable-hn

Embed Hacker News comment tree automatically on your website. Built with [Preact](https://preactjs.com).

## How it works

There is always better discussion on HN than in your Disqus comment box. Instead of a link to HN, you can embed it on your page.

Benefits:

1. Value-add your readers from other sources.

2. Boost site ranking and SEO. (GoogleBot executes JavaScript).

3. Keep discussion on your page.

4. Alternatively, checkout [txtpen](https://txtpen.com) for highlights and inline comments.

This tool queries from `hn.algolia.com/api` so the response time is around ~10ms. It won't slow your page down.

## Basic Usage

1. Embed the javascript file.

    a. Put these lines at the top of page before `</head>`

    ```
    <link rel="preload" href="https://txtpen.codes/txtpen-hn-embed.min.js" as="script">
    <link href="https://txtpen.codes/txtpen-hn-embed.min.css" rel="stylesheet">
    ```

    b. Put this after `</body>` tag

    ```
    <script src="https://txtpen.codes/txtpen-hn-embed.min.js"></script>
    ```

2. Add HTML tag to embed comment tree.

```
<txtpen-hn-comment> </txtpen-hn-comment>
```

3. That's it. Enjoy :+1:

4. Optional: if you want to specify the Story ID, add a meta tag similar to the one below. Otherwise it will query the url and link the corresponding HN comments automatically.

```
<meta property="hacker-news" content="{PUT_YOUR_STORY_ID_HERE}">
```


## Development

```
git clone https://github.com/txtpen/hn.git
cd hn
npm install
npm run dev
# Production build:
# npm run build
```
