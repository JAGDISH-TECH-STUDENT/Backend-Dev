const os = require('os');
const fs = require('fs');
function getSystemInfo() {
    const info = {
        platform: os.platform(),
        cpu: os.cpus()[0].model,
        memory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`
    };

    const log = `Platform: ${info.platform}, CPU: ${info.cpu}, Memory: ${info.memory}\n`;
    fs.appendFile('system_log.txt', log, (err) => {
        if (err) console.error('Error writing log:', err);
    });
}

setInterval(getSystemInfo, 1000);
