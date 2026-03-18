module.exports = {
  apps: [
    {
      name: "portfolio-next",
      cwd: "/var/www/portfolio-next/current",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
