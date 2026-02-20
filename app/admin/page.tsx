"use client"
import { useState } from "react";

export default function Admin() {
  const [video, setVideo] = useState<File|null>(null);
  const [poster, setPoster] = useState<File|null>(null);
  const [titleAz, setTitleAz] = useState('');
  const [titleTr, setTitleTr] = useState('');
  const [descAz, setDescAz] = useState('');
  const [descTr, setDescTr] = useState('');

  const uploadVideo = async () => {
    const form = new FormData();
    if(video){
      form.append("file", video);
      form.append("title_az", titleAz);
      form.append("title_tr", titleTr);
      form.append("description_az", descAz);
      form.append("description_tr", descTr);
      await fetch("/api/upload/video", { method:"POST", body: form });
      alert("Video Cloudinary-ə uğurla yükləndi");
    }
  }

  const uploadPoster = async () => {
    const form = new FormData();
    if(poster) {
      form.append("file", poster);
      await fetch("/api/upload/poster", { method:"POST", body: form });
      alert("Poster Cloudinary-ə uğurla yükləndi");
    }
  }

  return (
    <div className="mt-24 p-8 glass rounded-xl mx-4">
      <h2 className="text-xl font-bold mb-4">Video Yükləmə</h2>
      <input type="file" onChange={e=>setVideo(e.target.files?.[0]||null)}/>
      <input type="text" placeholder="Azərbaycan" value={titleAz} onChange={e=>setTitleAz(e.target.value)}/>
      <input type="text" placeholder="Türk" value={titleTr} onChange={e=>setTitleTr(e.target.value)}/>
      <textarea placeholder="Açıqlama AZ" value={descAz} onChange={e=>setDescAz(e.target.value)}/>
      <textarea placeholder="Açıqlama TR" value={descTr} onChange={e=>setDescTr(e.target.value)}/>
      <button onClick={uploadVideo}>Yüklə</button>

      <h2 className="text-xl font-bold my-4">Qapaq Şəkli Yükləmə</h2>
      <input type="file" onChange={e=>setPoster(e.target.files?.[0]||null)}/>
      <button onClick={uploadPoster}>Yüklə</button>
    </div>
  )
}
