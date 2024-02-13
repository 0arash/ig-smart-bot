import fs from "fs";

async function ape() {
    const a = await fs.existsSync("fafait.lst");
    console.log(a);
}
ape();
