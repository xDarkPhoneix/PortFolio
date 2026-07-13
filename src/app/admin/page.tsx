"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, 
  Plus, 
  Trash2,
  Edit2, 
  FileText, 
  FolderGit2, 
  Settings, 
  LayoutDashboard,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  BookOpen,
  Trophy,
  Award
} from 'lucide-react';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [articles, setArticles] = useState([]);
  const [hackathons, setHackathons] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'projects' | 'add-project' | 'experience' | 'add-experience' | 'articles' | 'add-article' | 'hackathons' | 'add-hackathon' | 'certificates' | 'add-certificate' | 'cv'>('projects');
  const router = useRouter();

  // Project States
  const [editProjectId, setEditProjectId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [image, setImage] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [github, setGithub] = useState('');
  const [live, setLive] = useState('');
  const [category, setCategory] = useState('web');
  const [featured, setFeatured] = useState(false);

  // Experience States
  const [editExperienceId, setEditExperienceId] = useState<string | null>(null);
  const [expCompany, setExpCompany] = useState('');
  const [expRole, setExpRole] = useState('');
  const [expPeriod, setExpPeriod] = useState('');
  const [expLocation, setExpLocation] = useState('');
  const [expDescription, setExpDescription] = useState('');
  const [expAchievements, setExpAchievements] = useState('');
  const [expTechnologies, setExpTechnologies] = useState('');

  // Article States
  const [editArticleId, setEditArticleId] = useState<string | null>(null);
  const [artTitle, setArtTitle] = useState('');
  const [artExcerpt, setArtExcerpt] = useState('');
  const [artDate, setArtDate] = useState('');
  const [artReadTime, setArtReadTime] = useState('');
  const [artCategory, setArtCategory] = useState('');
  const [artImage, setArtImage] = useState('');
  const [artLink, setArtLink] = useState('');
  

  // Hackathon States
  const [editHackathonId, setEditHackathonId] = useState<string | null>(null);
  const [hName, setHName] = useState('');
  const [hEvent, setHEvent] = useState('');
  const [hDate, setHDate] = useState('');
  const [hPosition, setHPosition] = useState('');
  const [hPrize, setHPrize] = useState('');
  const [hParticipants, setHParticipants] = useState<number | ''>('');
  const [hDuration, setHDuration] = useState('');
  const [hDescription, setHDescription] = useState('');
  const [hProject, setHProject] = useState('');
  const [hTechnologies, setHTechnologies] = useState('');
  const [hAchievements, setHAchievements] = useState('');
  const [hImage, setHImage] = useState('');
  const [hCategory, setHCategory] = useState('');
  

  // Certificate States
  const [editCertificateId, setEditCertificateId] = useState<string | null>(null);
  const [cName, setCName] = useState('');
  const [cIssuer, setCIssuer] = useState('');
  const [cYear, setCYear] = useState('');
  const [cIcon, setCIcon] = useState('');
  
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [uploadingCv, setUploadingCv] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    fetchProjects();
    fetchExperiences();
    fetchArticles();
    fetchHackathons();
    fetchCertificates();
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

  const fetchExperiences = async () => {
    try {
      const res = await fetch('/api/experience');
      const data = await res.json();
      setExperiences(data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    } catch (e) {
      console.error(e);
    }
  };


  const fetchHackathons = async () => {
    try {
      const res = await fetch('/api/hackathons');
      const data = await res.json();
      setHackathons(data);
    } catch (e) {
      console.error(e);
    }
  };


  const fetchCertificates = async () => {
    try {
      const res = await fetch('/api/certificates');
      const data = await res.json();
      setCertificates(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  // --- Project Handlers ---
  const handleEditProject = (p: any) => {
    setEditProjectId(p.id);
    setTitle(p.title);
    setDescription(p.description);
    setLongDescription(p.longDescription);
    setImage(p.image);
    setTechnologies(p.technologies?.join(', ') || '');
    setGithub(p.github || '');
    setLive(p.live || '');
    setCategory(p.category || 'web');
    setFeatured(p.featured || false);
    setActiveTab('add-project');
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...(editProjectId && { id: editProjectId }),
      title,
      description,
      longDescription,
      image,
      technologies: technologies.split(',').map(t => t.trim()).filter(Boolean),
      github,
      live,
      category,
      featured,
      stats: {}
    };

    const method = editProjectId ? 'PUT' : 'POST';
    const res = await fetch('/api/projects', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      showNotification(editProjectId ? 'Project updated successfully!' : 'Project added successfully!');
      setEditProjectId(null);
      setTitle(''); setDescription(''); setLongDescription(''); setImage('');
      setTechnologies(''); setGithub(''); setLive(''); setCategory('web'); setFeatured(false);
      fetchProjects();
      setActiveTab('projects');
    } else {
      showNotification('Failed to save project', 'error');
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('Project deleted successfully!');
        fetchProjects();
      } else {
        showNotification('Failed to delete project', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during deletion', 'error');
    }
  };

  // --- Experience Handlers ---
  const handleEditExperience = (exp: any) => {
    setEditExperienceId(exp.id);
    setExpCompany(exp.company);
    setExpRole(exp.role);
    setExpPeriod(exp.period);
    setExpLocation(exp.location);
    setExpDescription(exp.description);
    setExpAchievements(exp.achievements?.join('\n') || '');
    setExpTechnologies(exp.technologies?.join(', ') || '');
    setActiveTab('add-experience');
  };

  const handleAddExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...(editExperienceId && { id: editExperienceId }),
      company: expCompany,
      role: expRole,
      period: expPeriod,
      location: expLocation,
      description: expDescription,
      achievements: expAchievements.split('\n').filter(Boolean),
      technologies: expTechnologies.split(',').map(t => t.trim()).filter(Boolean),
    };

    const method = editExperienceId ? 'PUT' : 'POST';
    const res = await fetch('/api/experience', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      showNotification(editExperienceId ? 'Experience updated successfully!' : 'Experience added successfully!');
      setEditExperienceId(null);
      setExpCompany(''); setExpRole(''); setExpPeriod(''); setExpLocation('');
      setExpDescription(''); setExpAchievements(''); setExpTechnologies('');
      fetchExperiences();
      setActiveTab('experience');
    } else {
      showNotification('Failed to save experience', 'error');
    }
  };

  const handleDeleteExperience = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience?')) return;
    try {
      const res = await fetch(`/api/experience?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('Experience deleted successfully!');
        fetchExperiences();
      } else {
        showNotification('Failed to delete experience', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during deletion', 'error');
    }
  };

  // --- Article Handlers ---
  const handleEditArticle = (art: any) => {
    setEditArticleId(art.id);
    setArtTitle(art.title);
    setArtExcerpt(art.excerpt);
    setArtDate(art.date);
    setArtReadTime(art.readTime);
    setArtCategory(art.category);
    setArtImage(art.image);
    setArtLink(art.link);
    setActiveTab('add-article');
  };

  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...(editArticleId && { id: editArticleId }),
      title: artTitle,
      excerpt: artExcerpt,
      date: artDate,
      readTime: artReadTime,
      category: artCategory,
      image: artImage,
      link: artLink,
    };

    const method = editArticleId ? 'PUT' : 'POST';
    const res = await fetch('/api/articles', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      showNotification(editArticleId ? 'Article updated successfully!' : 'Article added successfully!');
      setEditArticleId(null);
      setArtTitle(''); setArtExcerpt(''); setArtDate(''); setArtReadTime('');
      setArtCategory(''); setArtImage(''); setArtLink('');
      fetchArticles();
      setActiveTab('articles');
    } else {
      showNotification('Failed to save article', 'error');
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    try {
      const res = await fetch(`/api/articles?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('Article deleted successfully!');
        fetchArticles();
      } else {
        showNotification('Failed to delete article', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during deletion', 'error');
    }
  };


  // --- Hackathon Handlers ---
  const handleEditHackathon = (h: any) => {
    setEditHackathonId(h.id);
    setHName(h.name);
    setHEvent(h.event);
    setHDate(h.date);
    setHPosition(h.position);
    setHPrize(h.prize);
    setHParticipants(h.participants);
    setHDuration(h.duration);
    setHDescription(h.description);
    setHProject(h.project);
    setHTechnologies(h.technologies?.join(', ') || '');
    setHAchievements(h.achievements?.join('\n') || '');
    setHImage(h.image);
    setHCategory(h.category);
    setActiveTab('add-hackathon');
  };

  const handleAddHackathon = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...(editHackathonId && { id: editHackathonId }),
      name: hName,
      event: hEvent,
      date: hDate,
      position: hPosition,
      prize: hPrize,
      participants: Number(hParticipants),
      duration: hDuration,
      description: hDescription,
      project: hProject,
      technologies: hTechnologies.split(',').map((t: string) => t.trim()).filter(Boolean),
      achievements: hAchievements.split('\n').filter(Boolean),
      image: hImage,
      category: hCategory,
    };

    const method = editHackathonId ? 'PUT' : 'POST';
    const res = await fetch('/api/hackathons', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      showNotification(editHackathonId ? 'Hackathon updated successfully!' : 'Hackathon added successfully!');
      setEditHackathonId(null);
      setHName(''); setHEvent(''); setHDate(''); setHPosition(''); setHPrize('');
      setHParticipants(''); setHDuration(''); setHDescription(''); setHProject('');
      setHTechnologies(''); setHAchievements(''); setHImage(''); setHCategory('');
      fetchHackathons();
    fetchCertificates();
      setActiveTab('hackathons');
    } else {
      showNotification('Failed to save hackathon', 'error');
    }
  };

  const handleDeleteHackathon = async (id: string) => {
    if (!confirm('Are you sure you want to delete this hackathon?')) return;
    try {
      const res = await fetch(`/api/hackathons?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('Hackathon deleted successfully!');
        fetchHackathons();
    fetchCertificates();
      } else {
        showNotification('Failed to delete hackathon', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during deletion', 'error');
    }
  };


  // --- Certificate Handlers ---
  const handleEditCertificate = (c: any) => {
    setEditCertificateId(c.id);
    setCName(c.name);
    setCIssuer(c.issuer);
    setCYear(c.year);
    setCIcon(c.icon);
    setActiveTab('add-certificate');
  };

  const handleAddCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...(editCertificateId && { id: editCertificateId }),
      name: cName,
      issuer: cIssuer,
      year: cYear,
      icon: cIcon,
    };

    const method = editCertificateId ? 'PUT' : 'POST';
    const res = await fetch('/api/certificates', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      showNotification(editCertificateId ? 'Certificate updated successfully!' : 'Certificate added successfully!');
      setEditCertificateId(null);
      setCName(''); setCIssuer(''); setCYear(''); setCIcon('');
      fetchCertificates();
      setActiveTab('certificates');
    } else {
      showNotification('Failed to save certificate', 'error');
    }
  };

  const handleDeleteCertificate = async (id: string) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return;
    try {
      const res = await fetch(`/api/certificates?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('Certificate deleted successfully!');
        fetchCertificates();
      } else {
        showNotification('Failed to delete certificate', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during deletion', 'error');
    }
  };

  // --- CV Handlers ---
  const handleCvUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) return showNotification('Please select a file first', 'error');
    setUploadingCv(true);
    const formData = new FormData();
    formData.append('cv', cvFile);

    try {
      const res = await fetch('/api/cv', { method: 'POST', body: formData });
      if (res.ok) {
        showNotification('CV uploaded successfully!');
        setCvFile(null);
        const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        showNotification('Failed to upload CV', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during upload', 'error');
    } finally {
      setUploadingCv(false);
    }
  };

  const handleCvDelete = async () => {
    if (!confirm('Are you sure you want to delete the current CV?')) return;
    try {
      const res = await fetch('/api/cv', { method: 'DELETE' });
      if (res.ok) {
        showNotification('CV deleted successfully!');
      } else {
        showNotification('Failed to delete CV or CV not found', 'error');
      }
    } catch (e) {
      console.error(e);
      showNotification('An error occurred during deletion', 'error');
    }
  };

  const InputField = ({ label, value, onChange, type = "text", required = true, placeholder = "" }: any) => (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">{label}</label>
      <input 
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm" 
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col md:flex-row">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-6 py-3 rounded-full shadow-xl backdrop-blur-md border ${
              notification.type === 'success' 
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' 
                : 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'
            }`}
          >
            {notification.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="font-medium">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <aside className="w-full md:w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 dark:text-white">Admin Panel</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Workspace</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-2 px-2">Projects</div>
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'projects' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <FolderGit2 className="w-5 h-5" /> Manage Projects
          </button>
          <button
            onClick={() => {
              setEditProjectId(null);
              setTitle(''); setDescription(''); setLongDescription(''); setImage('');
              setTechnologies(''); setGithub(''); setLive(''); setCategory('web'); setFeatured(false);
              setActiveTab('add-project');
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'add-project' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Plus className="w-5 h-5" /> Add Project
          </button>

          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-2">Experience</div>
          <button
            onClick={() => setActiveTab('experience')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'experience' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Briefcase className="w-5 h-5" /> Manage Experience
          </button>
          <button
            onClick={() => {
              setEditExperienceId(null);
              setExpCompany(''); setExpRole(''); setExpPeriod(''); setExpLocation('');
              setExpDescription(''); setExpAchievements(''); setExpTechnologies('');
              setActiveTab('add-experience');
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'add-experience' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Plus className="w-5 h-5" /> Add Experience
          </button>

          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-2">Articles</div>
          <button
            onClick={() => setActiveTab('articles')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'articles' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <BookOpen className="w-5 h-5" /> Manage Articles
          </button>
          <button
            onClick={() => {
              setEditArticleId(null);
              setArtTitle(''); setArtExcerpt(''); setArtDate(''); setArtReadTime('');
              setArtCategory(''); setArtImage(''); setArtLink('');
              setActiveTab('add-article');
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'add-article' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Plus className="w-5 h-5" /> Add Article
          </button>


          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-2">Hackathons</div>
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'hackathons' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Trophy className="w-5 h-5" /> Manage Hackathons
          </button>
          <button
            onClick={() => {
              setEditHackathonId(null);
              setHName(''); setHEvent(''); setHDate(''); setHPosition(''); setHPrize('');
              setHParticipants(''); setHDuration(''); setHDescription(''); setHProject('');
              setHTechnologies(''); setHAchievements(''); setHImage(''); setHCategory('');
              setActiveTab('add-hackathon');
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'add-hackathon' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Plus className="w-5 h-5" /> Add Hackathon
          </button>


          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-2">Certificates</div>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'certificates' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Award className="w-5 h-5" /> Manage Certificates
          </button>
          <button
            onClick={() => {
              setEditCertificateId(null);
              setCName(''); setCIssuer(''); setCYear(''); setCIcon('');
              setActiveTab('add-certificate');
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'add-certificate' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <Plus className="w-5 h-5" /> Add Certificate
          </button>

          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-2">Settings</div>
          <button
            onClick={() => setActiveTab('cv')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'cv' 
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            <FileText className="w-5 h-5" /> Resume / CV
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            
            {/* Manage Projects */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Projects</h1>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300">
                    {projects.length} Total
                  </span>
                </div>
                {loading ? (
                  <div className="grid grid-cols-1 gap-4">
                    {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl" />)}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {projects.map((p: any) => (
                      <div key={p.id} className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex items-center gap-4 hover:border-primary-500/50 transition-all shadow-sm hover:shadow-md">
                        <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">{p.title}</h3>
                            {p.featured && <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase rounded-md tracking-wider">Featured</span>}
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{p.description}</p>
                          <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 font-medium">
                            {p.category.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">
                          <button onClick={() => handleEditProject(p)} className="p-3 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-colors">
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDeleteProject(p.id)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Add Project */}
            {activeTab === 'add-project' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {editProjectId ? 'Update Project' : 'Create New Project'}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    {editProjectId ? 'Edit the details of your project.' : 'Add a new project to your portfolio.'}
                  </p>
                </div>
                <form onSubmit={handleAddProject} className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                  <InputField label="Project Title" value={title} onChange={(e: any) => setTitle(e.target.value)} placeholder="e.g. AI Content Generator" />
                  <InputField label="Short Description" value={description} onChange={(e: any) => setDescription(e.target.value)} placeholder="A brief one-liner about the project" />
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Long Description</label>
                    <textarea required value={longDescription} onChange={e => setLongDescription(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm min-h-[120px]" />
                  </div>
                  <InputField label="Cover Image URL" value={image} onChange={(e: any) => setImage(e.target.value)} placeholder="https://unsplash.com/..." />
                  <InputField label="Technologies (comma separated)" value={technologies} onChange={(e: any) => setTechnologies(e.target.value)} placeholder="Next.js, TailwindCSS, OpenAI" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="GitHub Repository URL" value={github} onChange={(e: any) => setGithub(e.target.value)} placeholder="https://github.com/..." />
                    <InputField label="Live Site URL" value={live} onChange={(e: any) => setLive(e.target.value)} required={false} placeholder="https://..." />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Category</label>
                      <select value={category} onChange={e => setCategory(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50">
                        <option value="web">Web App</option>
                        <option value="website">Web Site</option>
                        <option value="ai">Agentic AI</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3 pt-8">
                      <div className="flex h-6 items-center">
                        <input id="featured" type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-600" />
                      </div>
                      <div className="ml-2 text-sm">
                        <label htmlFor="featured" className="font-medium text-gray-900 dark:text-white cursor-pointer">Feature this project</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> {editProjectId ? 'Update Project' : 'Publish Project'}
                  </button>
                </form>
              </div>
            )}

            {/* Manage Experiences */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h1>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300">
                    {experiences.length} Roles
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {experiences.map((exp: any) => (
                    <div key={exp.id} className="group p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex items-start justify-between gap-4 hover:border-primary-500/50 transition-all shadow-sm">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company} • {exp.period}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies?.slice(0, 5).map((tech: string) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">{tech}</span>
                          ))}
                          {exp.technologies?.length > 5 && <span className="px-2 py-1 text-gray-400 text-xs">+{exp.technologies.length - 5}</span>}
                        </div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">
                        <button onClick={() => handleEditExperience(exp)} className="p-3 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-colors">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button onClick={() => handleDeleteExperience(exp.id)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {experiences.length === 0 && <p className="text-gray-500">No experience records found.</p>}
                </div>
              </div>
            )}

            {/* Add Experience */}
            {activeTab === 'add-experience' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {editExperienceId ? 'Update Experience' : 'Add Experience'}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    {editExperienceId ? 'Edit the details of this role.' : 'Log a new internship, job, or major role.'}
                  </p>
                </div>
                <form onSubmit={handleAddExperience} className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Company / Organization" value={expCompany} onChange={(e: any) => setExpCompany(e.target.value)} placeholder="e.g. D2D Social Studio" />
                    <InputField label="Role / Title" value={expRole} onChange={(e: any) => setExpRole(e.target.value)} placeholder="e.g. Software Engineer Intern" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Period" value={expPeriod} onChange={(e: any) => setExpPeriod(e.target.value)} placeholder="e.g. Winter 2025 (1 month)" />
                    <InputField label="Location" value={expLocation} onChange={(e: any) => setExpLocation(e.target.value)} placeholder="e.g. Patna, Bihar, India" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Short Summary</label>
                    <textarea required value={expDescription} onChange={e => setExpDescription(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 min-h-[80px]" placeholder="Brief overview of your role..." />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Key Achievements (One per line)</label>
                    <textarea required value={expAchievements} onChange={e => setExpAchievements(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 min-h-[150px]" placeholder="Led a team of 13 developers...&#10;Architected full stack platform...&#10;Designed RBAC system..." />
                  </div>

                  <InputField label="Technologies (comma separated)" value={expTechnologies} onChange={(e: any) => setExpTechnologies(e.target.value)} placeholder="React, Next.js, Node.js" />
                  
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2">
                      <Plus className="w-5 h-5" /> {editExperienceId ? 'Update Experience' : 'Save Experience'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Manage Articles */}
            {activeTab === 'articles' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Articles</h1>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300">
                    {articles.length} Total
                  </span>
                </div>
                {loading ? (
                  <div className="grid grid-cols-1 gap-4">
                    {[1, 2].map(i => <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl" />)}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {articles.map((art: any) => (
                      <div key={art.id} className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex items-center gap-4 hover:border-primary-500/50 transition-all shadow-sm hover:shadow-md">
                        <img src={art.image} alt={art.title} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">{art.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{art.excerpt}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="inline-block text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 font-medium">
                              {art.category}
                            </span>
                            <span className="inline-block text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 font-medium">
                              {art.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">
                          <button onClick={() => handleEditArticle(art)} className="p-3 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-colors">
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDeleteArticle(art.id)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {articles.length === 0 && <p className="text-gray-500">No articles found.</p>}
                  </div>
                )}
              </div>
            )}

            {/* Add Article */}
            {activeTab === 'add-article' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {editArticleId ? 'Update Article' : 'Create New Article'}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    {editArticleId ? 'Edit the details of this article.' : 'Add a new article or blog post link.'}
                  </p>
                </div>
                <form onSubmit={handleAddArticle} className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                  <InputField label="Article Title" value={artTitle} onChange={(e: any) => setArtTitle(e.target.value)} placeholder="e.g. Building Autonomous Agents" />
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Excerpt</label>
                    <textarea required value={artExcerpt} onChange={e => setArtExcerpt(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm min-h-[80px]" placeholder="A short summary of the article..." />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Publish Date" value={artDate} onChange={(e: any) => setArtDate(e.target.value)} placeholder="e.g. May 15, 2024" />
                    <InputField label="Read Time" value={artReadTime} onChange={(e: any) => setArtReadTime(e.target.value)} placeholder="e.g. 8 min read" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Category" value={artCategory} onChange={(e: any) => setArtCategory(e.target.value)} placeholder="e.g. Agentic AI" />
                    <InputField label="Cover Image URL" value={artImage} onChange={(e: any) => setArtImage(e.target.value)} placeholder="https://unsplash.com/..." />
                  </div>
                  
                  <InputField label="Article Link (URL)" value={artLink} onChange={(e: any) => setArtLink(e.target.value)} placeholder="https://medium.com/..." />

                  <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> {editArticleId ? 'Update Article' : 'Publish Article'}
                  </button>
                </form>
              </div>
            )}


            {/* Manage Hackathons */}
            {activeTab === 'hackathons' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Hackathons</h1>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300">
                    {hackathons.length} Total
                  </span>
                </div>
                {loading ? (
                  <div className="grid grid-cols-1 gap-4">
                    {[1, 2].map(i => <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl" />)}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {hackathons.map((h: any) => (
                      <div key={h.id} className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex items-center gap-4 hover:border-primary-500/50 transition-all shadow-sm hover:shadow-md">
                        <img src={h.image} alt={h.name} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">{h.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{h.event} - {h.position}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="inline-block text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 font-medium">
                              {h.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">
                          <button onClick={() => handleEditHackathon(h)} className="p-3 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-colors">
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDeleteHackathon(h.id)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {hackathons.length === 0 && <p className="text-gray-500">No hackathons found.</p>}
                  </div>
                )}
              </div>
            )}

            {/* Add Hackathon */}
            {activeTab === 'add-hackathon' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {editHackathonId ? 'Update Hackathon' : 'Create New Hackathon'}
                  </h1>
                </div>
                <form onSubmit={handleAddHackathon} className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                  <InputField label="Hackathon Name" value={hName} onChange={(e: any) => setHName(e.target.value)} placeholder="e.g. SmartCity Dashboard" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Event Name" value={hEvent} onChange={(e: any) => setHEvent(e.target.value)} placeholder="e.g. Urban IOT Challange" />
                    <InputField label="Date" value={hDate} onChange={(e: any) => setHDate(e.target.value)} placeholder="e.g. June 2025" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Position/Result" value={hPosition} onChange={(e: any) => setHPosition(e.target.value)} placeholder="e.g. 4th Place" />
                    <InputField label="Prize" value={hPrize} onChange={(e: any) => setHPrize(e.target.value)} placeholder="e.g. $10,000 or —" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField type="number" label="Participants" value={hParticipants} onChange={(e: any) => setHParticipants(e.target.value)} placeholder="e.g. 800" />
                    <InputField label="Duration" value={hDuration} onChange={(e: any) => setHDuration(e.target.value)} placeholder="e.g. 72 hours" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">General Description</label>
                    <textarea required value={hDescription} onChange={(e: any) => setHDescription(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm min-h-[80px]" placeholder="Briefly explain the goal and outcome..." />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Project Built (Highlight)</label>
                    <textarea required value={hProject} onChange={(e: any) => setHProject(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 transition-all shadow-sm min-h-[80px]" placeholder="A sentence describing the project..." />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Key Achievements (One per line)</label>
                    <textarea required value={hAchievements} onChange={(e: any) => setHAchievements(e.target.value)} className="w-full rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500/50 min-h-[120px]" placeholder="Runner-up in Smart Cities category\nBest User Experience Award" />
                  </div>

                  <InputField label="Technologies (comma separated)" value={hTechnologies} onChange={(e: any) => setHTechnologies(e.target.value)} placeholder="React.js, MongoDB, Express" />
                  <InputField label="Image URL" value={hImage} onChange={(e: any) => setHImage(e.target.value)} placeholder="https://..." />
                  <InputField label="Category" value={hCategory} onChange={(e: any) => setHCategory(e.target.value)} placeholder="e.g. finalist, participant" />

                  <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> {editHackathonId ? 'Update Hackathon' : 'Save Hackathon'}
                  </button>
                </form>
              </div>
            )}


            {/* Manage Certificates */}
            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Certificates</h1>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300">
                    {certificates.length} Total
                  </span>
                </div>
                {loading ? (
                  <div className="grid grid-cols-1 gap-4">
                    {[1, 2].map(i => <div key={i} className="h-24 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl" />)}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {certificates.map((c: any) => (
                      <div key={c.id} className="group p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl flex items-center gap-4 hover:border-primary-500/50 transition-all shadow-sm hover:shadow-md">
                        <div className="text-4xl">{c.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">{c.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{c.issuer} - {c.year}</p>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">
                          <button onClick={() => handleEditCertificate(c)} className="p-3 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-colors">
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDeleteCertificate(c.id)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {certificates.length === 0 && <p className="text-gray-500">No certificates found.</p>}
                  </div>
                )}
              </div>
            )}

            {/* Add Certificate */}
            {activeTab === 'add-certificate' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {editCertificateId ? 'Update Certificate' : 'Create New Certificate'}
                  </h1>
                </div>
                <form onSubmit={handleAddCertificate} className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                  <InputField label="Certificate Name" value={cName} onChange={(e: any) => setCName(e.target.value)} placeholder="e.g. AWS Certified Solutions Architect" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Issuer" value={cIssuer} onChange={(e: any) => setCIssuer(e.target.value)} placeholder="e.g. Amazon Web Services" />
                    <InputField label="Year" value={cYear} onChange={(e: any) => setCYear(e.target.value)} placeholder="e.g. 2023" />
                  </div>
                  
                  <InputField label="Emoji Icon" value={cIcon} onChange={(e: any) => setCIcon(e.target.value)} placeholder="e.g. ☁️" />

                  <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> {editCertificateId ? 'Update Certificate' : 'Save Certificate'}
                  </button>
                </form>
              </div>
            )}

            {/* Manage CV Tab */}


            {activeTab === 'cv' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Resume / CV</h1>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
                  <form onSubmit={handleCvUpload} className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-10 text-center relative">
                      <input type="file" id="cv-upload" accept=".pdf" onChange={(e) => setCvFile(e.target.files?.[0] || null)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <UploadCloud className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                      <h3 className="text-lg font-bold">{cvFile ? cvFile.name : 'Click or drag PDF to upload'}</h3>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button type="submit" disabled={uploadingCv || !cvFile} className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold">
                        {uploadingCv ? 'Uploading...' : 'Save New CV'}
                      </button>
                      <button type="button" onClick={handleCvDelete} className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl font-bold">
                        Delete Current CV
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
