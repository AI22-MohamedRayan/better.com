
/** @type {import('next').NextConfig} */
export default {
    images: {
        domains: ['w7.pngwing.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.better.com",
            },
        ],
    },
};


