# Petshop Mobile Application

This mobile application is designed to cater to pet owners, specifically cat lovers, offering a wide range of products including food, grooming tools, and accessories. The app aims to provide a seamless shopping experience across multiple platforms, utilizing React Native for frontend development and Golang for backend services. MongoDB is chosen as the database for its flexibility and scalability.

## Features

- **User Authentication**: Secure login and registration for customers, shop owners, and administrators.
- **Product Management**: Browse, search, and filter products by categories, including detailed product descriptions and images.
- **Cart and Checkout**: Add items to the cart, manage quantities, and proceed with the checkout process.
- **User Profiles**: Users can manage their profiles, view order history, and track current orders.
- **Shop Owner Features**: Shop owners can manage their product listings, view sales reports, and communicate with customers.
- **Admin Panel**: Admins have the ability to manage users, products, orders, feedback, and other administrative tasks.
- **Messaging**: In-app messaging feature for direct communication between customers and shop owners.
- **Feedback System**: Users can leave feedback and suggestions for the app or specific products.
- **Promotions and Vouchers**: Manage and apply vouchers and promotions during checkout.

## Roles

- **Customer**: Can browse products, make purchases, communicate with shop owners, and provide feedback.
- **Shop Owner**: Manages product listings, processes orders, and communicates with customers.
- **Administrator**: Oversees the entire application, manages user roles, and addresses feedback.

## Database Schema

- **Accounts**: Stores user information, including roles and contact details.
- **Categories**: Organizes products into hierarchical categories.
- **Products**: Detailed information on each product, including stock and origin.
- **Transactions**: Records of purchases, including product details and payment information.
- **Carts**: Temporary storage for users' intended purchases.
- **Origins**: Information about the product's origin and manufacturing details.
- **Vouchers**: Discounts and promotional offers available to users.
- **Messages**: Communication between customers and shop owners.
- **Feedbacks**: User feedback and suggestions for the platform.

## Development and Deployment

- **React Native**: Used for developing a cross-platform mobile application.
- **Golang**: Backend development including API services and database management.
- **MongoDB**: NoSQL database for storing application data.

## Security Measures

- **Data Encryption**: Sensitive data, including passwords, are encrypted before storage.
- **Secure API**: APIs are secured and require authentication for sensitive operations.

## Getting Started

Provide instructions on how to set up the project locally, including installing dependencies, setting up the database, and running the application.

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
cd <project-directory>
npm install

# Set up the database
<database-setup-instructions>

# Run the application
npm start
