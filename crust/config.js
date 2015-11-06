function config() {
    return {
        env: process.env.NODE_ENV || "development",
        port: 3000
    };
}

module.exports = config;
