import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Experience } from '@/models/Experience';

export async function GET() {
  try {
    await connectToDatabase();
    const experiences = await Experience.find({}).sort({ createdAt: -1 });
    return NextResponse.json(experiences);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch experience' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectToDatabase();
    
    const newExperience = await Experience.create(data);
    return NextResponse.json(newExperience, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Experience ID is required for update' }, { status: 400 });
    }

    await connectToDatabase();
    const updatedExperience = await Experience.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedExperience) {
      return NextResponse.json({ error: 'Experience not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedExperience);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update experience' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Experience ID is required' }, { status: 400 });
    }

    await connectToDatabase();
    const deleted = await Experience.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Experience not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
}