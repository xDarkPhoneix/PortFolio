import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Hackathon from '@/models/Hackathon';

export async function GET() {
  try {
    await connectDB();
    const hackathons = await Hackathon.find({}).sort({ createdAt: -1 });
    return NextResponse.json(hackathons);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const newHackathon = await Hackathon.create(body);
    return NextResponse.json(newHackathon, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create hackathon' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'Hackathon ID is required for updating' }, { status: 400 });
    }

    const updatedHackathon = await Hackathon.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedHackathon) {
      return NextResponse.json({ error: 'Hackathon not found' }, { status: 404 });
    }

    return NextResponse.json(updatedHackathon);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update hackathon' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Hackathon ID is required' }, { status: 400 });
    }

    const deletedHackathon = await Hackathon.findByIdAndDelete(id);

    if (!deletedHackathon) {
      return NextResponse.json({ error: 'Hackathon not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Hackathon deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete hackathon' }, { status: 500 });
  }
}
