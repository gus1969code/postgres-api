import pg from 'pg';



export const pool = new pg.Pool({

  user: "postgres",
  host: "localhost",
  password: "postgres",
  database:"plan_mantenimiento",
  port:"5433"


});


// pool.query('select NOW()').then(result => { console.log(result) }); (para probar la bd )

