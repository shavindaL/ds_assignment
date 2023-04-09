const routes = [
    {
        url: "/v1/admin",
        auth: "false",
        proxy: {
            target: "http://127.0.0.1:5001",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/admin"]: "",
            },
        },
    },
    {
        url: "/v1/customer",
        auth: "false",
        proxy: {
            target: "http://127.0.0.1:5002",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/customer"]: "",
            },
        },
    },
    {
        url: '/v1/inventory',
        auth: 'false',
        proxy: {
            target: "http://127.0.0.1:5003",
            changeOrigin: "true",
            pathRewrite:
            {
                ['^/v1/inventory']: ""
            },
        }
    },
    {
        url: "/v1/order",
        auth: "false",
        proxy: {
            target: "http://127.0.0.1:5004",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/order"]: "",
            },
        },
    },
    {
        url: "/v1/seller",
        auth: "false",
        proxy: {
            target: "http://127.0.0.1:5005",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/seller"]: "",
            },
        },
    },
    {
        url: "/v1/mail",
        auth: "false",
        proxy: {
            target: "http://127.0.0.1:5006",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/mail"]: "",
            },
        },
    }
];

module.exports.ROUTES = routes;
