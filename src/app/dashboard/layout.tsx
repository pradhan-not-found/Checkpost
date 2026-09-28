'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, BookOpen, Settings, Menu, X, LogOut, MoreVertical, User, Cloud, HelpCircle, Network, FlaskConical, ShieldCheck, AlertOctagon } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { AuthProvider } from '@/context/AuthContext';
import { DatabaseProvider } from '@/context/DatabaseContext';

const navSections = [
  {
    label: "Monitoring",
    items: [
      { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { title: "Audit Logs", path: "/dashboard/logs", icon: BookOpen },
    ],
  },
  {
    label: "Assets",
    items: [
      { title: "Agents", path: "/dashboard/agents", icon: Network },
      { title: "Test LLM", path: "/dashboard/llm-test", icon: FlaskConical },
    ],
  },
  {
    label: "Security",
    items: [
      { title: "Policies", path: "/dashboard/policies", icon: ShieldCheck },
      { title: "Threats", path: "/dashboard/threats", icon: AlertOctagon },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Settings", path: "/dashboard/settings", icon: Settings },
    ],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{name: string, email: string, avatar: string | null}>({
    name: 'Admin User',
    email: 'admin@checkpost.app',
    avatar: null
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || 'Admin User',
          email: currentUser.email || 'admin@checkpost.app',
          avatar: currentUser.photoURL || null
        });
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const gradientClass = "from-cyan-500/[0.06] via-transparent to-blue-500/[0.05] dark:from-cyan-900/10 dark:to-blue-950/10";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  return (
    <AuthProvider>
      <DatabaseProvider>
        <div className="flex absolute inset-0 bg-[var(--app-canvas)] text-[var(--app-ink)] antialiased overflow-hidden font-sans">

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden fixed top-4 right-4 z-40 p-2 rounded-lg bg-[var(--app-soft)] text-[var(--app-ink)] border border-[var(--app-hairline)]"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 shrink-0 transition-transform duration-200 ease-in-out border-r border-[var(--app-hairline)] bg-white flex flex-col ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'max-lg:-translate-x-full lg:translate-x-0'}`}>
          <div className="py-5 px-6 border-b border-[var(--app-hairline)] mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">

              <div className="flex flex-col leading-[1.1]">
                <span 
                  className="text-[26px] text-[var(--app-ink)] tracking-tight"
                  style={{
                    fontFamily: "var(--font-geist-pixel-grid, monospace)",
                    fontWeight: "bold",
                  }}
                >
                  Checkpost
                </span>
              </div>
            </div>
            
            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1 rounded-md text-[var(--app-muted)] hover:bg-[var(--app-soft)] hover:text-[var(--app-ink)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden sidebar-scroll">
            <div className="px-3 space-y-6">
              {navSections.map((section) => (
                <div key={section.label}>
                  <span className="block text-[11px] font-semibold text-[var(--app-muted)] uppercase tracking-wider mb-2 px-3">
                    {section.label}
                  </span>
                  <nav className="flex flex-col gap-0.5">
                    {section.items.map((item) => {
                      const isActive = item.path === '/dashboard' 
                      ? pathname === '/dashboard' 
                      : (pathname === item.path || pathname.startsWith(item.path + '/'));
                      return (
                        <Link 
                          key={item.path} 
                          href={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-[10px] px-[12px] py-[8px] rounded-[8px] transition-all text-[14px] font-[500] ${
                            isActive 
                              ? 'cta-btn-dark bg-black !text-white font-semibold shadow-sm' 
                              : 'text-[var(--app-muted)] hover:bg-[rgba(38,35,35,0.04)] hover:text-[var(--app-ink)]'
                          }`}
                        >
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 pb-4 px-4 relative">
            {isProfileOpen && (
              <div className="absolute bottom-full left-4 right-4 mb-2 bg-[var(--app-canvas)] border border-[var(--app-hairline)] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-1.5 z-50 animate-fade-up origin-bottom">
                <div className="px-2.5 py-2 mb-1 border-b border-[var(--app-hairline)]">
                  <p className="text-xs font-semibold text-[var(--app-ink)] truncate">{user.name}</p>
                  <p className="text-[10px] text-[var(--app-muted)] truncate">{user.email}</p>
                </div>
                
                <Link href="/dashboard/profile" className="w-full flex items-center gap-2.5 px-2.5 py-2 text-[13px] font-medium text-[var(--app-ink)] hover:bg-[var(--app-soft)] rounded-lg transition-colors">
                  <User className="size-4 text-[var(--app-muted)]" />
                  Profile
                </Link>
                
                <div className="h-px bg-[var(--app-hairline)] my-1.5 mx-1" />
                
                <Link href="/dashboard/help" className="w-full flex items-center gap-2.5 px-2.5 py-2 text-[13px] font-medium text-[var(--app-ink)] hover:bg-[var(--app-soft)] rounded-lg transition-colors">
                  <HelpCircle className="size-4 text-[var(--app-muted)]" />
                  Help Center
                </Link>
                
                <div className="h-px bg-[var(--app-hairline)] my-1.5 mx-1" />
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 text-[13px] font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors"
                >
                  <LogOut className="size-4" />
                  Log Out
                </button>
              </div>
            )}
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="group flex items-center justify-between gap-3 rounded-xl p-2.5 border border-[var(--app-hairline)] bg-[var(--app-soft)] hover:bg-[var(--app-canvas)] w-full text-left transition-colors"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="size-9 rounded-full bg-[var(--app-ink)] flex items-center justify-center shrink-0 overflow-hidden border border-[var(--app-hairline)] shadow-sm">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs font-semibold text-[var(--app-canvas)]">
                      {user.name.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--app-ink)] truncate">{user.name}</p>
                  <p className="text-[11px] text-[var(--app-muted)] truncate">{user.email}</p>
                </div>
              </div>
              <MoreVertical className="size-4 text-[var(--app-muted)] shrink-0" />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative bg-[var(--app-canvas)] flex flex-col lg:pl-64">
          {/* Fine noise texture overlay */}
          <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

          <div className="relative z-10 w-full flex-1">
            {children}
          </div>
        </main>
        </div>
      </DatabaseProvider>
    </AuthProvider>
  );
}
