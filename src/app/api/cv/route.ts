import { NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('cv') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    
    const buffer = Buffer.from(await file.arrayBuffer());
    const publicPath = path.join(process.cwd(), 'public', 'cv.pdf');
    
    await writeFile(publicPath, buffer);
    
    return NextResponse.json({ success: true, message: 'CV uploaded successfully' }, { status: 200 });
  } catch (error) {
    console.error('CV Upload Error:', error);
    return NextResponse.json({ error: 'Failed to upload CV' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const publicPath = path.join(process.cwd(), 'public', 'cv.pdf');
    if (fs.existsSync(publicPath)) {
      await unlink(publicPath);
      return NextResponse.json({ success: true, message: 'CV deleted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'CV not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('CV Delete Error:', error);
    return NextResponse.json({ error: 'Failed to delete CV' }, { status: 500 });
  }
}
