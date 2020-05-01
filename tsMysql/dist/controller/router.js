"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/heroes', (req, resp) => {
    resp.json({
        ok: true,
        message: 'Good idea'
    });
});
router.get('/heroes/:id', (req, resp) => {
    const id = req.params.id;
    resp.json({
        ok: true,
        message: 'Good idea, the id is ' + id
    });
});
exports.default = router;
