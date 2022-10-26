import {
    container,
    DependencyContainer
} from "tsyringe";
import {
    IPostDBLoadMod
} from "@spt-aki/models/external/IPostDBLoadMod";
import {ILogger} from "@spt-aki/models/spt/utils/ILogger";
import * as path from 'path';
class Mod implements IPostDBLoadMod {

    modPath: string = path.normalize(path.join(__dirname, '../../ProgramK'));
    public postDBLoad(container: DependencyContainer): void {
        const logger = container.resolve("WinstonLogger");
        const fs = require('fs')
        const StocksOverhaul = require("./StocksOverhaul")

        if (fs.existsSync(this.modPath)) {
            logger.log('ProgramK Core mod Detected, Skipping Extended Stock Slots execution', "blue")
        } 
        else {
            logger.log('ProgramK Core mod not Detected, Executing Stock Slots', "blue")
            StocksOverhaul.execute()
        }
    }
}

module.exports = {
    mod: new Mod()
}
