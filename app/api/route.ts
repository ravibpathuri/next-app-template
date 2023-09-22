import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`);
  const product = await res.json();

  return NextResponse.json({ product });
}
