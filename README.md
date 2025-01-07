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

The project is available at http://ec2-13-53-117-58.eu-north-1.compute.amazonaws.com/



## Running the Application
This project uses Docker Compose for environment management. The Makefile contains essential commands for setting up, starting, and managing the environment.

1\. Environment Setup

```bash
  make up
```

2\. Starting the Environment

```bash
  make up
```

3\. Stopping the Environment

```bash
  make stop
```


4\. Full Cleanup

```bash
  make down
```

5\. Viewing Logs

```bash
  make logs
```

## Notes
- Ensure the .env file contains valid configurations for database connections and other services.
- If you encounter issues, verify that Docker is running and the ports specified in .env are not occupied by other processes.
