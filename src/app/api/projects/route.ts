import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/projects.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const projects = JSON.parse(fileContents);
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read projects data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const projects = JSON.parse(fileContents);
    
    const newId = projects.length > 0 ? Math.max(...projects.map((p: any) => p.id)) + 1 : 1;
    const projectWithId = { id: newId, ...newProject };
    
    projects.push(projectWithId);
    fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2));
    
    return NextResponse.json(projectWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
  }
}
