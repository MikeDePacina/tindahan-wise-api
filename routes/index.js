const sales = require("./sales.js")

const mountRoutes = (app) => {
    app.use('/sales', sales)
}

module.exports = mountRoutes