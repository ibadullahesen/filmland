import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import VideoGrid from "./components/VideoGrid";
import AdsPanel from "./components/AdsPanel";
import { getVideos } from "./lib/cloudinary";

export default async function Page({ searchParams }: { searchParams: any }) {
  const lang = searchParams.lang || 'az';
  const videoId = searchParams.video;
  const videos = await getVideos();
  const activeVideo = videoId ? videos.find(v=>v.public_id===videoId) : videos[0];

  return (
    <main>
      <Header/>
      <AdsPanel/>
      <div className="mt-24 px-4">
        <HeroVideo video={activeVideo}/>
        <VideoGrid videos={videos} activeId={activeVideo.public_id}/>
      </div>
    </main>
  )
}
