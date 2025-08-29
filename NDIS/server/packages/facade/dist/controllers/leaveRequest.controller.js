"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLeaveRequest = exports.updateLeaveRequest = exports.getLeaveRequestById = exports.getAllLeaveRequests = exports.createLeaveRequest = void 0;
const services_1 = require("@roster-management/services");
const leaveRequestService = new services_1.LeaveRequestService();
const createLeaveRequest = async (req, res) => {
    const result = await leaveRequestService.create(req.body);
    res.json(result);
};
exports.createLeaveRequest = createLeaveRequest;
const getAllLeaveRequests = async (req, res) => {
    const result = await leaveRequestService.getAll();
    res.json(result);
};
exports.getAllLeaveRequests = getAllLeaveRequests;
const getLeaveRequestById = async (req, res) => {
    const result = await leaveRequestService.getById(req.params.id);
    res.json(result);
};
exports.getLeaveRequestById = getLeaveRequestById;
const updateLeaveRequest = async (req, res) => {
    const result = await leaveRequestService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateLeaveRequest = updateLeaveRequest;
const deleteLeaveRequest = async (req, res) => {
    const result = await leaveRequestService.delete(req.params.id);
    res.json(result);
};
exports.deleteLeaveRequest = deleteLeaveRequest;
