export async function fetchPostById(pool: any, id: number) {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    return result.rows[0];
}

export async function fetchAllPosts(pool: any) {
    const result = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
    return result.rows;
}

export async function fetchPostsByProjectId(pool: any, projectId: number) {
    const query = 'SELECT * FROM posts WHERE project_id = $1';
    const values = [projectId];
    const result = await pool.query(query, values);
    return result.rows;
}

export async function insertPost(pool: any, { project_id, content_html, title }: any) {
    const result = await pool.query(
        "INSERT INTO posts (project_id, content_html, title) VALUES ($1, $2, $3) RETURNING *",
        [project_id, content_html, title]
    );
    return result.rows[0];
}

export async function updatePostById(pool: any, id: number, { project_id, content_html, title }: any) {
    console.log(id, project_id, title, content_html?.substring(0, 10))
    const result = await pool.query(
        `UPDATE posts
         SET project_id = $1, content_html = $2, title = $3, updated_at = NOW()
         WHERE id = $4 RETURNING *`,
        [project_id, content_html, title, id]
    );
    return result.rows[0];
}