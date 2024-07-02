/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'covers.openlibrary.org',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
