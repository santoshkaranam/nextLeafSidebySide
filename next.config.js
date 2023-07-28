/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
		config.module.rules.push({
			test: /node_modules\/leaflet-side-by-side/,
			resolve: {
				alias: {
					"*.css": false,
				},
			},
		});
		return config;
	},
}

module.exports = nextConfig


