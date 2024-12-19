import { serve } from "bun";
import router from "./routes/index";
import { pool } from "./config/db";
import { migrate } from "./config/migrate";

(async () => {
    await migrate();

    serve({
        port: 3000,
        async fetch(req) {
            return await router(req, pool);
        },
    });

    console.log("Backend running at http://localhost:3000");
})();