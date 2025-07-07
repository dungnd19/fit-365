# fit-365

This repository contains a sample implementation of a body measurement and weight-loss tracking app.

## Mobile App (React Native with Expo)

Source located in [`mobile/`](mobile). It is a TypeScript Expo project using React Navigation and Redux. The app currently includes placeholder screens for:

1. Dashboard
2. Profile
3. Measurements
4. Weight Log
5. Nutrition
6. Activity
7. Photos
8. Settings

Run the project with `npm start` from the `mobile` folder once dependencies are installed.

## Backend (Spring Boot)

A minimal Spring Boot backend lives in [`backend/`](backend). It uses PostgreSQL via Spring Data JPA and exposes a simple `/api/weights` endpoint to store weight entries.

Build with Maven:

```bash
mvn spring-boot:run
```

Database connection settings can be adjusted in `backend/src/main/resources/application.properties`.
