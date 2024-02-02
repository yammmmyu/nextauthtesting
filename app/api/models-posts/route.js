const { sql } = require('@vercel/postgres');
const { NextResponse } = require('next/server');

async function GET(request) {
  try {
    const result = await sql`
    CREATE TABLE questions(
        question_id SERIAL PRIMARY KEY,
        question TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE answers(
        ans_id SERIAL PRIMARY KEY,
        question_id INTEGER REFERENCES questions(question_id) ON DELETE CASCADE,
        author_id INTEGER REFERENCES users(user_id),
        ans_content TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        last_updateds TIMESTAMP WITH TIME ZONE,
        likes_count INTEGER DEFAULT 0,
        views_count INTEGER DEFAULT 0
    );

    CREATE TABLE posts(
        post_id serial PRIMARY KEY,
        author_id INTEGER REFERENCES users(user_id),
        title VARCHAR(255) NOT NULL,
        post_content TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE,
        likes_count INTEGER DEFAULT 0,
        view_count INTEGER DEFAULT 0s
    );

    CREATE TABLE comments(
        comment_id SERIAL PRIMARY KEY,
        post_id INTEGER REFERENCES Posts(post_id) ON DELETE CASCADE,
        author_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
        comment_content JSONB NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE
    );

    CREATE TABLE likes (
        like_id SERIAL PRIMARY KEY,
        ans_id INTEGER REFERENCES answers(ans_id) ON DELETE CASCADE,
        post_id INTEGER REFERENCES posts(post_id) ON DELETE CASCADE,
        user_id INTEGER NOT NULL REFERENCES Users(user_id)
    );

    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

module.exports = { GET };
