import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SavedProfilesPanel } from "./SavedProfilesPanel";
import { Background3D } from "./Background3D";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showSavedProfiles?: boolean;
}

export function Layout({ children, title, showSavedProfiles = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Background3D />
      <div className="relative z-10">
        <header className="border-b border-purple-500/30 bg-black/50 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
                <span className="text-2xl">🔍</span>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Influencer Search</span>
              </Link>
              <div className="flex items-center gap-3">
                {showSavedProfiles && <SavedProfilesPanel />}
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {title && (
            <header className="mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</h1>
            </header>
          )}
          <div className="backdrop-blur-md rounded-2xl bg-white/10 p-6 shadow-xl shadow-purple-500/20 border border-white/20">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}