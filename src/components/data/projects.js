export const projects = [
  {
    name: "E-commerce - Itsy Bitsy",
    about: `An E-commerce created with Vue3 and Vite, Node and Express with the database set in MongoDB. 
    Focus being able to choose between different colors and sizes and displaying chosen products in the cart.
    You can search for products, show product page, choose color/size, show cart and check out your order.
    Built in mobile first, a playful project where I got to learn Vue in depth and be creative.
    `,
  mainImg: {img: "./images/Vue-webshop/home.png", alt: 'Home view'},
  images: [
    { url: "./images/Vue-webshop/desktop-cart.png", alt: "Desktop cart" },
    { url: "./images/Vue-webshop/detail-view.png", alt: "Detail view of candle holder" },
  ],
  },
  {
  name: "Get Sorted - a task tracker",
  about: `Started off as a school project to create a todo app. In the app, one can create an account
        and sign in. When signed in you are redirected to the dashboard where you write todos, mark them as finished, delete, toggle between
        unfinished and finished, go to details page and update your todo. <br><br> During the summer I have worked details such as
        getting a loading spinner for signing up/signing in and error handling and error messages to the client side.
        <br> <br>
        Created with the MERN-stack.
    `,
  mainImg: {img: "./images/Todos-portfolio/dashboard-small.PNG", alt: 'small dashboard showing tasks'},
  images: [
    { url: "./images/Todos-portfolio/Loginpage.PNG", alt: "Login page" },
    { url: "./images/Todos-portfolio/register.PNG", alt: "register page" },
    { url: "./images/Todos-portfolio/dashboard.PNG", alt: "Dashboard where you write and view todos" },
  ],
}];
