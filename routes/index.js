import sales from "./sales.js"

const mountRoutes = (app) => {
    app.use('/sales', sales)
}

export default mountRoutes