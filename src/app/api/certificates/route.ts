import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Certificate from '@/models/Certificate';

export async function GET() {
  try {
    await connectDB();
    const certificates = await Certificate.find({}).sort({ createdAt: -1 });
    return NextResponse.json(certificates);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const newCertificate = await Certificate.create(body);
    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'Certificate ID is required for updating' }, { status: 400 });
    }

    const updatedCertificate = await Certificate.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedCertificate) {
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    return NextResponse.json(updatedCertificate);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update certificate' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Certificate ID is required' }, { status: 400 });
    }

    const deletedCertificate = await Certificate.findByIdAndDelete(id);

    if (!deletedCertificate) {
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete certificate' }, { status: 500 });
  }
}
