# Q-Airline

## Introduction

In the fast-paced digital age, the Airplane Ticket Booking and Management System provides a modern solution to the limitations of traditional ticketing methods. By leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js), this application offers a streamlined and secure platform for users to search, book, and manage flight tickets with ease.

## Features

- **User Management**: Register, log in, and manage user profiles securely.
- **Flight Search and Booking**: Search for flights based on various criteria, book tickets securely, and make payments through PCI-compliant gateways.
- **Admin Panel**: Manage flight listings, user information, and system configurations efficiently.
- **Responsive Design**: Enjoy a seamless experience across different devices, including desktops, laptops, tablets, and smartphones.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Kevin310703/Q-Airline.git
```

2. Navigate to the project directory:

```bash
cd Q-Airline
```

3. There are 2 directories Frontend and backend
for frontend
```bash
cd frontend
```

for backend
```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add environment variables for MySQL connection, Cloudinary, and other sensitive information.

5. Start the development frontend server:

```bash
npm run dev
```
And open your browser and visit `http://localhost:5173` to access the application.

6. Start the development backend server:

```bash
npx nodemon index.js
```
And open your browser and visit `http://localhost:5000` to access the application.

7. Start the development admin server:

```bash
npm start
```
And open your browser and visit `http://localhost:3000` to access the application.

## Usage

Once the application is running, users can:

- Register or log in to their accounts.
- Search for flights based on their preferences.
- Book tickets securely and make payments.
- Manage booked tickets, including viewing QR codes for verification.

Admin users can access additional functionalities through the admin panel, such as managing flight listings and user information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding!
