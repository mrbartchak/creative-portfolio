import { NextResponse } from "next/server";

let currentColor = '#fffcfa';

export async function GET() {
    currentColor = currentColor === '#fffcfa' ? '#d1fae5' : '#fffcfa';
    return NextResponse.json({ backgroundColor: currentColor });
}