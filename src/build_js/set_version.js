
const fs  = require("fs"),
      pkg = JSON.parse(fs.readFileSync("./package.json"));





const version_file_contents = `
const version = "${pkg.version}",
      built   = ${new Date().getTime()};

export { version, built };

`;





fs.writeFileSync("./src/ts/generated_code/version.ts", version_file_contents);
