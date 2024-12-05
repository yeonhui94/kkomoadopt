
module.exports = function(app) {
    app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrgin: true
    })
    )
}