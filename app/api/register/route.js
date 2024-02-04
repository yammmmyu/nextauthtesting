import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export async function POST(request, res) {
    try {
        const body = await request.json();
        const { name, firstname, lastname_initial, email, password, grade_level, school_code } = body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name: name,
                firstname: firstname,
                last_initial: lastname_initial,
                email: email,
                password_hash: hashedPassword,
                grade_level: grade_level,
                school_code: school_code
            },
        });
        return NextResponse.json({ newUser })
        console.log('New user created:', newUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Register Failed' }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
}
