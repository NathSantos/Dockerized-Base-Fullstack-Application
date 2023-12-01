"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database/database"));
const dotenv_1 = __importDefault(require("dotenv"));
const AnimalRoutes_1 = __importDefault(require("./routes/AnimalRoutes"));
const Animal_1 = require("./models/Animal");
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/animals', AnimalRoutes_1.default);
database_1.default.addModels([Animal_1.Animal]);
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
