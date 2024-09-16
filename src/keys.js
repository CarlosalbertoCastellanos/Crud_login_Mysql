export const database = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || 8889, // YO VALERIA USO ESE PUERTO POR QUE USO MAMP, NO ME SIRVE DOCKER
  password: process.env.DB_PASSWORD || "example",
  database: process.env.DB_NAME || "smartphone",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
