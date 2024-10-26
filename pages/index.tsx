import IntroPage from "@/app/components/intro";
import Navbar from "@/app/components/navbar";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <>
    <div className="gradient-bg flex min-h-screen flex-col">
        <div className="bg-transparent">
            <Navbar />
        </div>
        <div className="grid grid-rows-[20px_1fr_20px] items-start lg:justify-items-start md:justify-items-center sm:justify-items-center h-full pt-8">
            <IntroPage />
        </div>
    </div>
    <div className="flex content-bg min-h-screen content">
      <div className=" flex flex-col justify-between flex-grow w-full">
        <main className=" items-start lg:justify-items-start md:justify-items-center sm:justify-items-center flex w-full flex-grow">
          <section id="projects-section" className="flex h-full">
            <Projects />
          </section>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>© 2024 Sonia Sunil · Designed in Figma and developed with React ✨</p>
        </footer>
      </div>
    </div>
    </>
  );
}
