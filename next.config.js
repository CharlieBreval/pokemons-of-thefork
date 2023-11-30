/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    hasura: process.env.hasura_admin_secret,
  },
};

module.exports = nextConfig;
