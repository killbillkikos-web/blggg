import Header from "@/components/sections/header";
import PostList from "@/components/sections/post-list";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100/50">
      <Header />
      
      {/* Main Content Area */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {(() => {
              const selected = content.posts.filter(
                (p: any) => p.id === "tag:blogger.com,1999:blog-3066255942376026513.post-4582477378962155648"
              );
              return <PostList posts={selected} />;
            })()}
          </div>
          
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar />
          </div>
        </div>
      </main>

      <Credits />
    </div>
  );
}
