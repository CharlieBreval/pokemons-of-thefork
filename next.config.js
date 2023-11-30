/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    hasura_key: process.env.hasura_admin_secret,
  },
};

module.exports = nextConfig;
