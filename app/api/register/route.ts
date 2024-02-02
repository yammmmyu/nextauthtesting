import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

export async function POST(request: Request) {
    
    try {
        const body = await request.json();
        
        const { username, password, email, grade_level, firstname, lastname_initial, school_code } = body;
        console.log(username);
        

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await sql`
            INSERT INTO users 
            (username, firstname, lastname_initial, email, password_hash, grade_level, school_code) 
            VALUES (${username}, ${firstname}, ${lastname_initial}, ${email}, ${hashedPassword}, ${grade_level}, ${school_code})
            RETURNING *;
        `;
        console. log("test", newUser)
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
      
}