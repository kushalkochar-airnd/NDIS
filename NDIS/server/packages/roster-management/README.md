# Roster Server (TypeScript)

A Node.js server for a robust rostering system with MongoDB, designed for local and AWS Lambda deployment.

## Features
- CRUD APIs for Users, Shifts, Roles, Rosters, LeaveRequests, AuditLogs, Locations
- GUID primary key for all collections
- MongoDB connection pooling
- Clean architecture: controllers, services, DTOs, repositories
- Auto-generates schema in MongoDB
- DTO validation and error handling

## Usage
- Local: Run with Node.js
- Lambda: Deploy using AWS Lambda (handler provided)

## Structure
- `/src/controllers` - API route handlers
- `/src/services` - Business logic
- `/src/dto` - Data transfer objects
- `/src/repositories` - DB access logic
- `/src/models` - Mongoose schemas
- `/src/utils` - Utility functions (e.g., GUID generator)
- `/src/config` - Configuration (DB, Lambda handler)

## Setup
1. Install dependencies: `npm install`
2. Configure MongoDB URI in `.env`
3. Run locally: `npm start`
4. Deploy to Lambda: Use provided handler

---
Replace placeholders as needed for your environment.
