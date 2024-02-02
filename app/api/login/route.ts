import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

export async function POST(request: Request) { 
    try {
        const body = await request.json();
        
        const {username, password} = body;
        
        const user = await sql`SELECT * FROM users WHERE username = ${username}`;
        console.log(user)

        if (user.rows.length > 0) {
            console.log("test", user)
            const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);
            if (validPassword) {
                console.log('password correct')
                return NextResponse.json ("password correct")
                // const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                // res.json({ token });
            } else {
                console.log('password incorrect')
                return NextResponse.json ("password incorrect")
                // res.status(400).send('Invalid Password');
            }
        } else {
            return NextResponse.json ({error: 'User does not exist'}, {status : 400} );
        }   
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
}



