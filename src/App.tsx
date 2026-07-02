import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SearchPage } from "@/pages/SearchPage";
import { ProfileDetailPage } from "@/pages/ProfileDetailPage";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "InfluencerHub — Instagram Creators",
      "/youtube": "InfluencerHub — YouTube Creators",
      "/tiktok": "InfluencerHub — TikTok Creators",
    };
    document.title = titles[location.pathname] || "InfluencerHub";
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <PageTitle />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/youtube" element={<SearchPage />} />
        <Route path="/tiktok" element={<SearchPage />} />
        <Route path="/profile/:username" element={<ProfileDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
