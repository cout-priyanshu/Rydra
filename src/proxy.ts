import { NextRequest, NextResponse } from "next/server"
import { auth } from "./auth"

    const PUBLIC_ROUTES=["/"]
    const PUBLIC_APIS=["api/auth"]
export async function proxy(req:NextRequest) {
    const{pathname}=req.nextUrl
    if(
        pathname.startsWith("/_next") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.startsWith(".")
    ){
        return NextResponse
    }
    if(PUBLIC_APIS.includes(pathname)){
        return NextResponse.next()
    }
    const session=await auth()
    if(!session){
        return NextResponse.redirect(new URL("/",req.url))
    }
    const role=session.user?.role

    if(pathname.startsWith("/admin")){
        if(role != "admin"){
            return NextResponse.redirect(new URL("/", req.url))
        }
    }
    if(pathname.startsWith("/partner")){
        if(role !="partner"){
            return NextResponse.redirect(new URL("/",req.url))
        }
    }
    if(pathname.startsWith("/api")){
        if(!session.user){
            return Response.json({
                message: "unauthorize"
            },{ status: 401 })
        }
    }
    return NextResponse.next()
}

export const config={
    matcher:["/((?!_next/static|_next/image|favicon.ico).*)"]
}