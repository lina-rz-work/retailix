# Retailix Store
This project is a dynamic full-stack online store application designed to provide a seamless shopping experience. <br> The front-end is developed using React TypeScript, incorporating Redux for state management, Styled Components for styling, and React Router for navigation. The back-end is built with Express.js and MongoDB.

#### Technologies used: 
React TypeScript, Redux Toolkit, Styled Components, React Router, Redux Persist, Express.js, MongoDB

## Main Features:
- REST API requests for efficient client-server communication
- All product data is fetched from the database
- User registration with form validation
- JWT authentication for secure user sessions
- Bcrypt.js password encryption
- Profile management: profile editing, account deletion
- Shopping cart management: users can create and manage <br>
  their cart, with persistent cart data even for non-registered users
- Order management: users can place and cancel orders

The project is available at https://retailix.onrender.com/



## Running the Application

1\. Clone the repository

```bash
  git clone https://github.com/lina-rz-work/retailix.git
```

2\. Install dependencies for both frontend and backend:

```bash
  # in the project directory (retailix)
  npm install

  # in the client directory (client)
  cd client
  npm install
```

3\. Set up environment variables

сreate a .env file in the project directory (retailix) and add the necessary environment variables <br>
`MONGO`<br>
`JWT_SECRET`


4\. Run the application

```bash
  # in the project directory (retailix)
  yarn start

  # in the client directory (client)
  cd client
  yarn start
```
The app should now be running on [localhost:3000](http://localhost:3000/).
