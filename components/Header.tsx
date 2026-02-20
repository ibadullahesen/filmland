"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const lang = params.get("lang") || "az";

  const changeLang = (newLang: string) => {
    router.push(`${pathname}?lang=${newLang}`);
    if(newLang === 'tr') location.reload();
  }

  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 bg-[#1f1f1f] z-50">
      <div className="text-2xl font-bold">FilmLand</div>
      <nav className="flex gap-4">
        <span onClick={()=>changeLang('az')} className={`${lang==='az'?'underline':''} cursor-pointer`}>AZ</span>
        <span onClick={()=>changeLang('tr')} className={`${lang==='tr'?'underline':''} cursor-pointer`}>TR</span>
        <a href={`/${lang==='az'?'about':'about'}`} className="ml-4">Haqqımızda</a>
      </nav>
    </header>
  )
}
