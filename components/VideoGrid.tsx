export default function VideoGrid({ videos, activeId }: { videos: any[], activeId: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {videos.filter(v=>v.public_id!==activeId).map(video => (
        <a key={video.public_id} href={`/?video=${video.public_id}`} className="glass rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={video.poster_url} alt={video.title_az} className="w-full h-48 object-cover"/>
          <div className="p-2">
            <h2 className="text-lg font-semibold">{video.title_az}</h2>
            <p className="text-sm">{video.description_az.slice(0,50)}...</p>
          </div>
        </a>
      ))}
    </div>
  )
}
