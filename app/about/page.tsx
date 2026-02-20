export default function About({ searchParams }: { searchParams: any }) {
  const lang = searchParams.lang || 'az';
  const text = lang==='az'
    ? "FilmLand AxtarGet.xyz komandası tərəfindən yaradılmışdır. Məqsədimiz istifadəçilərə hər həftə 5 ən yaxşı filmi təqdim etmək və rahat izləmə imkanı yaratmaqdır."
    : "FilmLand AxtarGet.xyz ekibi tarafından oluşturulmuştur. Amacımız kullanıcılara her hafta en iyi 5 filmi sunmak ve rahat izleme deneyimi sağlamaktır.";

  return (
    <div className="mt-24 p-8 glass rounded-xl mx-4">
      <p>{text}</p>
    </div>
  )
}
