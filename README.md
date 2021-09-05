# math-tables
Learn and self-test the math tables

Demo site:
- Learn by doing: https://storage.googleapis.com/maths-for-kids/maths.html
- Roblox Challenge: https://storage.googleapis.com/maths-for-kids/maths.html?mode=roblox-challenge
- https://jszoja.github.io/math-tables/maths.html


# URL params
Until I do the admin UI settings are controlled from the URL, eg C:\\Desktop\maths.html?mode=roblox-challenge

## mode=single-level
### single-level mode
The quick one for half of the level eg 1+1 to 1+5 or 3+5 to 3+10.
I used it to before I allow doughter to play on tablet. She has to finish one such level.
That level requires 3 consequitive correct answers.

## roblox-challenge mode
You have to do all the full levels, eg 1+1 to 1+10, 2+1 to 2+10 ... 10+1 to 10+10
You need 3 consequitive correct answers to get to the next level.
I'm planning to add additional requirement, to have also at least 5 correct answers.
After completing this challenge daughter is awarded 400 R$.

This mode ignores the level param.

## level=2 
Starts from specific level, where in *single-level* mode you have half-level, eg 
level 1:  1+1 to 1+5, 
level 2: 1+5 to 1+10

# Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.