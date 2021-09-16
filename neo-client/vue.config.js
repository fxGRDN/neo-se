const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, "../public"),
    devServer: {
        proxy: {
            '/neo' : {
                target: 'http://localhost:5000'
            }
        }
    }
}