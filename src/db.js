import pg from 'pg';
//import { config } from 'dotenv';
//config();

export const pool = new pg.Pool({
  connectionString: 'postgresql://gus:3WouqxBDmd6gTJjkFtkbaYqXe7qr6E0u@dpg-d7f17r3bc2fs73c6qh3g-a.oregon-postgres.render.com/postgres_api_db',
  ssl: true

  // user: "postgres",
  // host: "localhost",
  // password: "postgres",
  // database:"plan_mantenimiento",
  // port:"5433"

  // user: "gus",
  // host: "dpg-d7f17r3bc2fs73c6qh3g-a.oregon-postgres.render.com",
  // password: "3WouqxBDmd6gTJjkFtkbaYqXe7qr6E0u",
  // database: "postgres_api_db",
  // port: "5432",
});


// pool.query('select NOW()').then(result => { console.log(result) }); (para probar la bd )

