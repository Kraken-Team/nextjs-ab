import { NextResponse } from "next/server";

export function middleware(request) {
    const url = request.nextUrl.clone();
    console.log('url.pathname', url.pathname);
    if (url.pathname === '/home') {
        console.log('here?')
        const varianat = Math.random() < 0.5 ? 'homepage-a' : 'homepage-b';
        url.pathname = `/${varianat}`;
        console.log("url.pathname", url.pathname);
        return NextResponse.rewrite(url);
    }
    return NextResponse.next();
}