```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a test.</p>
    </div>
  );
}
```

This code will result in a warning in Next.js 13+ because the `pages` directory is no longer the default location for pages. To fix this, you should either move this file to the `app` directory (Next.js 13+) or change your `next.config.js` to point to the `pages` directory and use the `next export` command to export your app.