This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you have to do 2 things:
 ```
 1. create new file at top level of app(project) named as ".env.local"
    and edit this file as(for this visit https://developers.facebook.com/ and create an app):
    
    FACEBOOK_CLIENT_ID= facebook client id (eg: 281460480300281 )
    FACEBOOK_CLIENT_SECRET= facebook client secret (eg: 5ac49f5890f82f71262803ffe941e50e)
    NEXTAUTH_URL= nextauth url (eg: http://localhost:3000  i.e. domain of website)
    
    
 2. replace the content of file firebase.js on the top level(for this visit https://firebase.google.com/ and "go to console" add project and copy config code) 
    
    #this
    const firebaseConfig = {
      apiKey: "AIzaSyDKCq04DBS3MAsg8C0B_ogw_-t6XYjHyvM",
      authDomain: "socialapp-472b5.firebaseapp.com",
      projectId: "socialapp-472b5",
      storageBucket: "socialapp-472b5.appspot.com",
      messagingSenderId: "849168702219",
      appId: "1:849168702219:web:75da7cd1c693b35800600e",
    };
    
    #into your app's firebaseConfig
    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    };
 
 ```

Run the development server:

```bash
yarn run dev(if you are using yarn)
# or
npm run dev(if you are using npm)
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
