import HomeComing from "@/components/home/HomeComing";
import HomeShowing  from "@/components/home/HomeShowing";
import ImageCarousel from "@/components/home/ImageCarousel";


export default function Home() {
  return (
    <>
      <main className="text-center">
      <ImageCarousel />
      <HomeShowing />
      <HomeComing />
      </main>
    </>
  )
}
