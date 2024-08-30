# Shop.app frontend clone with React

![screenshot](https://github.com/Fmd0/assets/blob/main/shop.jpg?raw=true)

This is a complete clone of [shop.app](https://shop.app), consisting of three parts: shop [frontend](https://github.com/Fmd0/Shop-frontend), shop [backend](https://github.com/Fmd0/Shop-backend), and shop [administration](https://github.com/Fmd0/Shop-administration-nextjs).

This is the shop frontend part of the project. It is fully responsive and quite comprehensive, including seven pages: the home page, market page, product page, search page, cart page, recently viewed page, and favorites page.

Now you can find a live version of this project [here](https://fmd0.github.io/pages/shop/).


Features:

- Typescript, Vite Setup
- JWT authentication
- SWR, data fetching and mutation
- Zustand state management
- Tailwind CSS for customization of UI
- Full responsiveness on all pages
- All UI in-house, no third-party component libraries


### Clone the repository

```shell
git clone https://github.com/Fmd0/Shop-frontend.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```env
VITE_AUTH_API_ADDRESS=
# This should be set to the API address of the `shop backend` project. Make sure to use the correct URL that matches your `shop backend` deployment.
```

### Start the app

```shell
npm run dev
```
