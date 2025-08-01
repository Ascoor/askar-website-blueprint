# Security

This document describes the security headers applied to the frontend.

## Content Security Policy

The application includes a strict Content Security Policy to prevent loading unauthorized scripts and styles.
Add the following tag inside `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'" />
```

This policy blocks external scripts while allowing Google Fonts, Font Awesome styles, and local assets. Images are restricted to local files and `data:` URLs.

### Server Headers

If you deploy the project behind a backend or proxy, enable the same `Content-Security-Policy` as an HTTP header together with other headers such as `Strict-Transport-Security`, `X-Frame-Options`, and `Referrer-Policy`.

### Verification

Open the browser developer tools after deployment and check the **Console** tab. If any scripts or styles are blocked by the policy, they will appear as CSP violations. Adjust the policy only when necessary.

