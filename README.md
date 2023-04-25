<h1>File Structure</h1> <br></br>

Like the previous versions, Next 13 uses the file system to create routes. This
method is used for both client and server side route creation. The main difference is that the endpoint of the route is a directory and not a file. 
Inside this ending directory, generic file names are used to modify the behavior and/or appearance of the endpoint. For expample, if your client side endpoint is '/menu/learn-more', learn-more is a directory that will contain a page.jsx file that will describe the ui of that endpoint. On the server side if you have an endpoint called 'users/create-user', create-user will be a directory containing a route.js file that will handle the request/response lifecycle. 


<h1>Dynamic Routing</h1> <br></br>
 To create a dynamic route, first create folder in the desired directory and
 put its name inside of brackets. The name you choose does not matter. You will will
 need to use this name inside your page component for the dynamic route if you want
 to access the dynamic value, but the actual value that you choose is arbitrary to
 begin with. 
 <br></br>








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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
