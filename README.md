# API template

## Getting started

```bash
# Clone the repo
git clone https://github.com/adam-dorin/api-template.git .
# Remove the git history
rm -rf .git
# Install dependencies
npm install
# Start dev db
docker-compose up -d
```
* Remove the migrations from .gitignore
* Add your git remote
* Change `apiTemplate` in `schema.prisma` to your db name
* Change `apiTemplate` in `.env.example` `>` `DATABASE_URL` to your db name

```bash
# create .env file
cat .env.example > .env
# Generate prisma client
npm run gs
# Generate first migration
npm run md
```

## Development

```bash
# Generate new secret
npm run secret
# Start dev server
npm run dev
```

## Production

```bash
# Build
npm run build:prod
npm start
```
