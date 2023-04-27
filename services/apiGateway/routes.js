const routes = [
    {
        url: "/v1/admin",
        auth: "false",
        proxy: {
            target: "http://10.5.0.2:5001",
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
            target: "http://10.5.0.4:5002",
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
            target: "http://10.5.0.5:5003",
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
            target: "http://10.5.0.7:5004",
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
            target: "http://10.5.0.8:5005",
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
            target: "http://10.5.0.6:5006",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/mail"]: "",
            },
        },
    },
    {
        url: "/v1/sms",
        auth: "false",
        proxy: {
            target: "http://10.5.0.9:5007",
            changeOrigin: "true",
            pathRewrite: {
                ["^/v1/sms"]: "",
            },
        },
    }
];

module.exports.ROUTES = routes;
