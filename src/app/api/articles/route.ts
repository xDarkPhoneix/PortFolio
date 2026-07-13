import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Article } from '@/models/Article';

export async function GET() {
  try {
    await connectToDatabase();
    const articles = await Article.find({}).sort({ createdAt: -1 });
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectToDatabase();
    
    const newArticle = await Article.create(data);
    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Article ID is required for update' }, { status: 400 });
    }

    await connectToDatabase();
    const updatedArticle = await Article.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedArticle) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedArticle);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Article ID is required' }, { status: 400 });
    }

    await connectToDatabase();
    const deleted = await Article.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}
