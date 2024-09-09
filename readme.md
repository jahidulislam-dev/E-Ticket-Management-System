Basic system requirements and instructions on how to install them:

---

# Bus Management System

This guide will walk you through the process of setting up the BTMS. By following these steps, you will clone the project, install dependencies, and configure mongodb atlas for database management. Let's get started!

## System Requirements

Before setting up the project, ensure that your system meets the following requirements:

- **Node.js:** v14.x or later
- **Yarn:** v1.x or later (optional if you prefer to use npm)
- **Mongodb atlas account:** create mongodb atlas account [official website](https://account.mongodb.com/account/login).
- **Git:** Latest version

### Installing Node.js and Yarn

1. **Node.js:**
    - Download and install Node.js from the [official website](https://nodejs.org/).
    - Verify the installation by running the following command in your terminal:

    ```bash
    node -v
    ```

    This should display the installed Node.js version.

2. **Yarn:**
    - Install Yarn globally using npm:

    ```bash
    npm install -g yarn
    ```

    - Verify the installation by running:

    ```bash
    yarn -v
    ```

    This should display the installed Yarn version.

### Create account on mongodb atlas account for database

1. **Mongodb:**
    - login/sign-in [official website](https://account.mongodb.com/account/login/).
    - create a database collection
    - create database online live urls

### Installing Git

1. **Git:**
    - Download and install Git from the [official website](https://git-scm.com/downloads).
    - Verify the installation by running:

    ```bash
    git --version
    ```

    This should display the installed Git version.

## Installation Steps

### Backend Setup

1. **Clone the project:** Open your terminal or command prompt and run the following command to clone the project repository:

    ```bash
    git clone https://github.com/jahidulislam-dev/Bus-Ticket-Management-System Bus-Ticket-Management-System
    ```

2. **Navigate into the project directory:** Use the `cd` command to navigate into the backend directory:

    ```bash
    cd server
    ```

3. **Install project dependencies:** Next, install the project dependencies by running the following command:

    ```bash
    yarn install
    ```

4. **setup other credentials at `.env` file:** there has `.env.example` and rename this to `.env`

    ```bash
    DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.g5umn.mongodb.net/travel_mangement_jahid"
    ```

5. **add database connection string at `.env` file:** a `.env` file in the project root directory and set the `DATABASE_URL` environment variable. Replace the placeholders with your database connection details:

    ```bash
    DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.g5umn.mongodb.net/travel_mangement_jahid"
    ```


### Frontend Setup

1. **Navigate to the frontend directory:** After setting up the backend, move to the frontend directory:

    ```bash
    cd ../client
    ```

2. **Install frontend dependencies:** Run the following command to install the necessary dependencies for the frontend:

    ```bash
    yarn install
    ```

3. **Start the development server:** Once the dependencies are installed, start the Next.js development server with:

    ```bash
    yarn dev
    ```

    This command will start the frontend application and make it accessible locally.

---

That's it! You have successfully set up the Bus-Ticket-Management-System project. You can now start exploring and working with the codebase. Refer to the project documentation or README for further instructions on how to run and use the core service.