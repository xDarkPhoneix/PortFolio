"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [image, setImage] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [github, setGithub] = useState('');
  const [live, setLive] = useState('');
  const [category, setCategory] = useState('web');
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      longDescription,
      image,
      technologies: technologies.split(',').map(t => t.trim()),
      github,
      live,
      category,
      featured,
      stats: {}
    };

    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      alert('Project added successfully!');
      setTitle('');
      setDescription('');
      setLongDescription('');
      setImage('');
      setTechnologies('');
      setGithub('');
      setLive('');
      setCategory('web');
      setFeatured(false);
      fetchProjects();
    } else {
      alert('Failed to add project');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-900 dark:text-white">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input required value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Short Description</label>
                <input required value={description} onChange={e => setDescription(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Long Description</label>
                <textarea required value={longDescription} onChange={e => setLongDescription(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" rows={4} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input required value={image} onChange={e => setImage(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
                <input required value={technologies} onChange={e => setTechnologies(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" placeholder="React, Node.js, Next.js" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">GitHub Link</label>
                  <input required value={github} onChange={e => setGithub(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Live Link</label>
                  <input value={live} onChange={e => setLive(e.target.value)} className="w-full rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
              <div className="flex gap-4 items-center pt-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select value={category} onChange={e => setCategory(e.target.value)} className="rounded bg-gray-100 dark:bg-gray-700 border-none px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="web">Web App</option>
                    <option value="website">Web Site</option>
                  </select>
                </div>
                <div className="flex items-center mt-5">
                  <input type="checkbox" id="featured" checked={featured} onChange={e => setFeatured(e.target.checked)} className="mr-2 h-4 w-4 text-primary-600 rounded border-gray-300 dark:border-gray-600 focus:ring-primary-500" />
                  <label htmlFor="featured" className="text-sm font-medium">Featured Project</label>
                </div>
              </div>
              <button type="submit" className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition mt-4">
                Add Project
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-[calc(100vh-8rem)] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Existing Projects</h2>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <div className="space-y-4">
                {projects.map((p: any) => (
                  <div key={p.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center gap-4 hover:border-primary-500 transition-colors">
                    <img src={p.image} alt={p.title} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{p.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
