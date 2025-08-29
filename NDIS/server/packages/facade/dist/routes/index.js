"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientFacade_service_1 = require("../services/clientFacade.service");
const rosterFacade_service_1 = require("../services/rosterFacade.service");
const router = (0, express_1.Router)();
const clientFacade = new clientFacade_service_1.ClientFacadeService();
const rosterFacade = new rosterFacade_service_1.RosterFacadeService();
router.use('/clients', (req, res, next) => {
    // ...client routes logic...
    next();
});
router.use('/rosters', (req, res, next) => {
    // ...roster routes logic...
    next();
});
exports.default = router;
