This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# E-Commerce Application
it is a e commerce site that shows different products for the user to choose and buy from, they can filter through with search and use pagination to go through various pages. They can add product to cart and checkout. In cart user have the option to edit or delete their items.

## Technologies Used
- Next js - Easier setup, inbuild navigation routing, SEO functionailties, faster developer experience 
- Zustand - Very little boiler plate to setup, best for small and medium projects, faster and easy to use
- Tailwind - Easier to use, faster than other, small sizes, shad cn framework uses tailwind

## Features Completed
- [x] Product listing with search and filters
- [x] Product detail page
- [x] Shopping cart with add/remove/update
- [x] Cart persistence
- [ ] User profiles (not completed)

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open browser to `http://localhost:3000`

## Time Spent
Approximately 5 hours

## Known Issues
- Error management is still in Progress
- Cart delete instantly deletes the item rather than show alert box first
- 

## Assumptions Made
- No real authentication required
- Using mock data for products and details

