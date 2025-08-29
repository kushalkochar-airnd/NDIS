"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roster_service_1 = require("./services/roster.service");
void new roster_service_1.RosterService();
// ...existing code...
void new roster_service_1.RosterService();
const auditLog_service_1 = require("./services/auditLog.service");
const leaveRequest_service_1 = require("./services/leaveRequest.service");
const location_service_1 = require("./services/location.service");
const role_service_1 = require("./services/role.service");
// ...existing code...
const shift_service_1 = require("./services/shift.service");
const user_service_1 = require("./services/user.service");
// Dummy usage to force TypeScript to emit files
void new auditLog_service_1.AuditLogService();
void new leaveRequest_service_1.LeaveRequestService();
void new location_service_1.LocationService();
void new role_service_1.RoleService();
void new roster_service_1.RosterService();
void new shift_service_1.ShiftService();
void new user_service_1.UserService();
require("./services");
require("./services/auditLog.service");
require("./services/leaveRequest.service");
require("./services/location.service");
require("./services/role.service");
require("./services/roster.service");
require("./services/shift.service");
require("./services/user.service");
require("./services/roster.service");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const shift_controller_1 = __importDefault(require("./controllers/shift.controller"));
const role_controller_1 = __importDefault(require("./controllers/role.controller"));
const roster_controller_1 = __importDefault(require("./controllers/roster.controller"));
const leaveRequest_controller_1 = __importDefault(require("./controllers/leaveRequest.controller"));
const auditLog_controller_1 = __importDefault(require("./controllers/auditLog.controller"));
const location_controller_1 = __importDefault(require("./controllers/location.controller"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to MongoDB
(0, db_1.connectDB)().then(() => {
    console.log('MongoDB connected');
});
// API routes
app.use('/api/users', user_controller_1.default);
app.use('/api/shifts', shift_controller_1.default);
app.use('/api/roles', role_controller_1.default);
app.use('/api/rosters', roster_controller_1.default);
app.use('/api/leave-requests', leaveRequest_controller_1.default);
app.use('/api/audit-logs', auditLog_controller_1.default);
app.use('/api/locations', location_controller_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
