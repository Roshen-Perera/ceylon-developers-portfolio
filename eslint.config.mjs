import nextConfig from "eslint-config-next";

export default [
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        ignores: ["node_modules/**", ".next/**", "out/**"],
    },
    ...nextConfig,
];