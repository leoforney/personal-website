export async function fetchProjectById(pool: any, id: number) {
    const result = await pool.query("SELECT * FROM projects WHERE id = $1", [id]);
    return result.rows[0];
}

export async function fetchAllProjects(pool: any) {
    const result = await pool.query("SELECT * FROM projects ORDER BY id ASC");
    return result.rows;
}

export async function insertProject(pool: any, { name, topic_id, description }: any) {
    const result = await pool.query(
        "INSERT INTO projects (name, topic_id, description) VALUES ($1, $2, $3) RETURNING *",
        [name, topic_id, description]
    );
    return result.rows[0];
}