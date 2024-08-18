const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const markdownDir = path.join(__dirname, '/notes');

fs.readdir(markdownDir, (err, files) => {
    if (err) {
        return console.error(`Unable to scan directory: ${err}`);
    }

    files.forEach((file) => {
        const filePath = path.join(markdownDir, file);
        // lstatSync syncronisely gets data about a symlink,
        // so we can use to identify if this is a file
        if (fs.lstatSync(filePath).isFile()) {
            // run marked on file:
            compileMarkdown(file, filePath);
        }
    });
});



function compileMarkdown(file, filepath) {
    const outputDir = path.join(__dirname, '/public')
    exec(`marked ${filepath} -o ${outputDir}/${file.split('.')[0]}.html`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`Standard Error: ${stderr}`);
            return;
        }

        console.log(`${file}: ...built`)
    });
}
