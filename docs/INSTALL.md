# Installation and Running Guide

This guide explains how to set up the mobile and backend projects contained in this repository.

## Prerequisites

- **Node.js** (>=18) and npm
- **Expo CLI** (`npm install -g expo-cli`)
- **Java Development Kit** (JDK 17 recommended)
- **Maven**
- **PostgreSQL** running locally

## Mobile App Setup

1. Install dependencies:

   ```bash
   cd mobile
   npm install
   ```

2. Start the Expo development server:

   ```bash
   npm start
   ```

   From the Expo output, open the app on a simulator or the Expo Go app on your device.

## Backend Setup

1. Ensure PostgreSQL is running and create a database (default name: `fit365`).
2. Update database credentials in `backend/src/main/resources/application.properties` if necessary.
3. Build and run the Spring Boot application:

   ```bash
   cd backend
   mvn spring-boot:run
   ```

The backend API will be available at `http://localhost:8080` with the `/api/weights` endpoint as an example.

## Testing

The project currently has no automated tests. You can still run the default commands:

```bash
cd mobile && npm test
cd backend && mvn test
```

Both commands will succeed but produce no test output.
