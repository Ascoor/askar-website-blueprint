# CMS Setup

This project uses **Strapi** as the headless CMS. Configure the CMS base URL in `.env` using `VITE_CMS_BASE_URL`.

## Content Models

### Blog

- `title` (Text)
- `slug` (UID)
- `summary` (Text)
- `content` (Rich Text)
- `publishedAt` (DateTime)

### Careers

- `title` (Text)
- `slug` (UID)
- `location` (Text)
- `description` (Rich Text)
- `open` (Boolean)

### Partners

- `name` (Text)
- `logo` (Media)
- `description` (Rich Text)
- `website` (Text)
