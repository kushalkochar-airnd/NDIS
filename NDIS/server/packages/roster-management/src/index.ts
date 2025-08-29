import { RosterService } from './services/roster.service';
void new RosterService();
// ...existing code...
void new RosterService();
import { AuditLogService } from './services/auditLog.service';
import { LeaveRequestService } from './services/leaveRequest.service';
import { LocationService } from './services/location.service';
import { RoleService } from './services/role.service';
// ...existing code...
import { ShiftService } from './services/shift.service';
import { UserService } from './services/user.service';

// Dummy usage to force TypeScript to emit files
void new AuditLogService();
void new LeaveRequestService();
void new LocationService();
void new RoleService();
void new RosterService();
void new ShiftService();
void new UserService();
import './services';
import './services/auditLog.service';
import './services/leaveRequest.service';
import './services/location.service';
import './services/role.service';
import './services/roster.service';
import './services/shift.service';
import './services/user.service';
import './services/roster.service';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

import userRouter from './controllers/user.controller';
import shiftRouter from './controllers/shift.controller';
import roleRouter from './controllers/role.controller';
import rosterRouter from './controllers/roster.controller';
import leaveRequestRouter from './controllers/leaveRequest.controller';
import auditLogRouter from './controllers/auditLog.controller';
import locationRouter from './controllers/location.controller';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
  console.log('MongoDB connected');
});

// API routes
app.use('/api/users', userRouter);
app.use('/api/shifts', shiftRouter);
app.use('/api/roles', roleRouter);
app.use('/api/rosters', rosterRouter);
app.use('/api/leave-requests', leaveRequestRouter);
app.use('/api/audit-logs', auditLogRouter);
app.use('/api/locations', locationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
