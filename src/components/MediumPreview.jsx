import { useEffect, useState } from "react";

function MediumPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@xo.esther",
        );
        const data = await res.json();

        if (data?.items) {
          const postsWithImages = data.items.map((post) => {
            const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = imgMatch ? imgMatch[1] : null;

            const cleanExcerpt = post.description
              .replace(/<img[^>]*>/g, "")
              .replace(/<[^>]*>/g, "")
              .replace(/\s+/g, " ")
              .trim()
              .slice(0, 120);

            return {
              ...post,
              thumbnail,
              cleanExcerpt,
            };
          });

          setPosts(postsWithImages.slice(0, 3));
        }
      } catch (err) {
        console.log("Error fetching Medium posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <section className="pt-[3rem] bg-black text-primary overflow-hidden">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-center gap-2 py-12">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100" />
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200" />
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="pt-[3rem] bg-black text-primary overflow-hidden">
        <div className="mx-auto px-4">
          <div className="text-center py-12 bg-primary/10 rounded-xl">
            <p className="text-gray-300">No posts available yet.</p>
            <a
              href="https://medium.com/@xo.esther"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm mt-2 inline-block"
            >
              Visit my Medium →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[7rem] bg-black text-primary overflow-hidden">
      <div className="mx-auto px-4">
        <h1 className="text-[2.5rem] font-poppins md:text-[3rem] font-bold text-primary mb-4 text-center capitalize">
          A glimpse into my writing
        </h1>
        <p className="text-center mb-8 max-w-3xl mx-auto lg:text-[1.4rem]">
          Thoughts I don’t always code, but often think about
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-[400px] md:max-w-[1400px] mx-auto">
          {posts.map((post, index) => (
            <a
              key={post.guid}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start text-left p-4 bg-primary/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 ease-out w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-primary/10"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {post.thumbnail && (
                <div className="w-full mb-4 overflow-hidden rounded-xl">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                  />
                </div>
              )}

              {/* Date Badge */}
              <div className="mb-3">
                <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-bold lg:text-[1.5rem] text-left mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-[1.05rem] lg:text-[1.2rem] text-gray-400 text-left leading-relaxed line-clamp-3">
                {post.cleanExcerpt}
                {post.cleanExcerpt.length >= 120 && "..."}
              </p>

              <div className="flex items-center gap-2 text-primary/80 font-medium text-sm mt-4 transition-all duration-300 group-hover:gap-3 group-hover:text-primary">
                <span>Read more</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@xo.esther"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary/5 hover:bg-primary/15 border border-primary/20 hover:border-primary/40 rounded-full font-medium transition-all duration-300 hover:gap-3"
          >
            Read more on Medium
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default MediumPreview;
