import { serve } from "bun";
import router from "./routes/index";
import { pool } from "./config/db";
import { migrate } from "./config/migrate";

(async () => {
    await migrate();

    serve({
        port: 3000,
        async fetch(req) {
            const res = await router(req, pool);
            res.headers.set('Access-Control-Allow-Origin', '*');
            res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            return res;
        },
    });

    console.log("Backend running at http://localhost:3000");
})();