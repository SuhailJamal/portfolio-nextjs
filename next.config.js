/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["some-package"], // ✅ Move it out of `experimental`

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            },
            {
                protocol : "https",
                hostname : "uxwing.com"
            }
        ],
    },

    experimental: {
        // Other experimental options can remain here if needed
    },
};

module.exports = nextConfig;
