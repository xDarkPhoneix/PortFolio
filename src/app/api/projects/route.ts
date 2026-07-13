import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Project } from '@/models/Project';

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectToDatabase();
    
    const newProject = await Project.create(data);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data; // use id as the unique identifier string mapped to _id
    
    if (!id) {
      return NextResponse.json({ error: 'Project ID is required for update' }, { status: 400 });
    }

    await connectToDatabase();
    const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedProject) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    await connectToDatabase();
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
