

// 'use client';

// import { useEffect, useState } from "react";
// import Layout from '@/components/layout/Layout';
// import Link from 'next/link';

// // Interface for category
// interface Category {
//   id: number;
//   name: string;
//   slug: string;
// }

// // Interface for WordPress post
// interface WPPost {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   content: { rendered: string };
//   slug: string;
//   link: string;
//   categories: number[];
//   _embedded?: {
//     "wp:term"?: Array<{
//       id: number;
//       name: string;
//       slug: string;
//       taxonomy: string;
//       parent: number;
//       link: string;
//     }[]>; 
//     "wp:featuredmedia"?: { source_url: string }[];
//   };
// }

// export default function Blog() {
  
//   const [posts, setPosts] = useState<WPPost[]>([]);
//   const [allCategories, setAllCategories] = useState<Category[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [visiblePosts, setVisiblePosts] = useState<WPPost[]>([]);
//   const [isHovered, setIsHovered] = useState(false);
//   const postsPerPage = 3;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch posts with embedded data
//         const postsRes = await fetch(process.env.NEXT_PUBLIC_POSTS_API!);
//         const postsData: WPPost[] = await postsRes.json();
        
//         // Filter out "Uncategorized" posts right away
//         const filteredPosts = postsData.filter((post: WPPost) => {
//           const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
//           return !categories || !categories.some((cat: { name: string }) => cat.name === "Uncategorized");
//         });
        
//         setPosts(filteredPosts);

//         // Fetch categories separately for the filter dropdown
//         const categoriesRes = await fetch(process.env.NEXT_PUBLIC_CATEGORIES_API!);
        
//         const categoriesData: Category[] = await categoriesRes.json();
        
//         // Exclude "Uncategorized" category based on the slug
//         const filteredCategories = categoriesData.filter((category: Category) => category.slug !== "uncategorized");
//         setAllCategories(filteredCategories);
        
//         // Initially show the first batch of posts
//         setVisiblePosts(filteredPosts.slice(0, postsPerPage));
        
//       } catch (error) {
//         console.error("Failed to fetch data", error);
//       }
//     };
    
//     fetchData();
//   }, []);

//   const stripHtml = (html: string) => {
//     return html.replace(/<[^>]*>?/gm, '');
//   };

//   // Filter posts by category and search term
//   const filteredPosts = posts.filter((post: WPPost) => {
//     const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
//     if (!categories) {
//       return false; // Skip posts with no category
//     }

//     // Check category filter
//     const categoryMatch = !selectedCategory || categories.some((cat: { id: number }) => cat.id === selectedCategory);

//     // Check search filter (title or excerpt)
//     const searchMatch =
//       post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       stripHtml(post.excerpt.rendered).toLowerCase().includes(searchTerm.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   // Handle "View More" click
//   const handleViewMore = () => {
//     const nextPosts = filteredPosts.slice(visiblePosts.length, visiblePosts.length + postsPerPage);
//     setVisiblePosts(prevPosts => [...prevPosts, ...nextPosts]);
//   };

//   // Update filtered posts based on category selection
//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const categoryId = e.target.value ? Number(e.target.value) : null;
//     setSelectedCategory(categoryId); // Set the selected category
//     setVisiblePosts(posts.slice(0, postsPerPage)); // Reset visible posts to the first page
//   };

//   return (
//     <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Blog">
//       <section className="blog-area-4 pt-30 pb-120">
//         <div className="container">
//           {/* Filter UI */}
//           <div style={{ marginBottom: 60, display: 'flex', gap: 15, flexWrap: 'wrap' }}>
//             <select className="title"
//               onChange={handleCategoryChange}
//               value={selectedCategory ?? ""}
//               style={{ padding: 8, borderRadius: 4, border: '2px solid #ccc',fontWeight :500 } }
//             >
//               <option value="">All Categories</option>
//               {allCategories.map((cat) => (
//                 <option key={cat.id} value={cat.id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>

//             <input 
//               type="text"
//               placeholder="Search posts..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setVisiblePosts(posts.slice(0, postsPerPage)); // reset visible posts
//               }}
//               style={{ padding: 8, borderRadius: 4, border: '2px solid #ccc', flexGrow: 1, minWidth: 200 ,fontWeight :500 }}
//             />
//           </div>

//           <div className="row gy-80 justify-content-center">
//             {filteredPosts.length > 0 ? filteredPosts.slice(0, visiblePosts.length).map((post) => (
//               <div className="col-xl-4 col-md-6" key={post.id}>
//                 <div className="blog__post-item-five shine-animate-item">
//                   <div className="blog__post-thumb">

            

//                     <a href={post.link} className="shine-animate">
//   {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
//     <img 
//       src={post._embedded["wp:featuredmedia"][0].source_url} 
//       alt={post.title.rendered} 
//     />
//   ) : (
//     <img src="/assets/img/blog/7-1.jpg" alt="Default blog image" />
//   )}
// </a>

//                   </div>
                  
//                   {/* Blog content Area */}
//                   <div className="blog__post-content">
//                     <h3 className="title" style={{marginBottom:'1rem'}}>
//                       <a href={post.link}>
//                         {post.title.rendered}
//                       </a>
//                     </h3>
//                     <p>{stripHtml(post.excerpt.rendered).substring(0, 100)}...</p>

//                     <a href={post.link} target="_blank" rel="noopener noreferrer" className="link-btn">
//                       Read More
//                       <i className="icon-arrow-top-left" />
//                     </a>
//                   </div>


//                 </div>
//               </div>
//             )) : (
//               <p>No posts found matching your criteria.</p>
//             )}
//           </div>

//         {filteredPosts.length > visiblePosts.length && (
//   <div style={{ textAlign: 'center', marginTop: '60px' }}>
//     <button
//       onClick={handleViewMore}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         padding: '10px 20px',
//         backgroundColor: isHovered ? '#555' : '#333', // change on hover
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s ease',
//       }}
//     >
//       View More
//     </button>
//   </div>
// )}

//         </div>
//       </section>
//     </Layout>
//   );
// }



'use client';

import { useEffect, useState } from "react";
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

// ======================
// Interfaces
// ======================
interface Category {
  id: number;
  name: string;
  slug: string;
}

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  link: string;
  categories: number[];
  _embedded?: {
    "wp:term"?: Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
      parent: number;
      link: string;
    }[]>;
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePosts, setVisiblePosts] = useState<WPPost[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const postsPerPage = 3;

  // ======================
  // Fetch WordPress Data
  // ======================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsRes = await fetch(process.env.NEXT_PUBLIC_CASE_API!);
        const postsData: WPPost[] = await postsRes.json();

        const filteredPosts = postsData.filter((post: WPPost) => {
          const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
          return !categories || !categories.some((cat: { name: string }) => cat.name === "Uncategorized");
        });

        setPosts(filteredPosts);

        const categoriesRes = await fetch(process.env.NEXT_PUBLIC_CATEGORIES_API!);
        const categoriesData: Category[] = await categoriesRes.json();

        const filteredCategories = categoriesData.filter((category: Category) => category.slug !== "uncategorized");
        setAllCategories(filteredCategories);

        setVisiblePosts(filteredPosts.slice(0, postsPerPage));
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  // ======================
  // Helper Functions
  // ======================
  const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');

  const filteredPosts = posts.filter((post: WPPost) => {
    const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
    if (!categories) return false;

    const categoryMatch = !selectedCategory || categories.some((cat: { id: number }) => cat.id === selectedCategory);
    const searchMatch =
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stripHtml(post.excerpt.rendered).toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleViewMore = () => {
    const nextPosts = filteredPosts.slice(visiblePosts.length, visiblePosts.length + postsPerPage);
    setVisiblePosts(prevPosts => [...prevPosts, ...nextPosts]);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value ? Number(e.target.value) : null;
    setSelectedCategory(categoryId);
    setVisiblePosts(posts.slice(0, postsPerPage));
  };

  // ======================
  // JSX
  // ======================
  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Blog">
      <section className="blog-area-4 pt-30 pb-120">
        <div className="container">

          {/* ======================
              Professional Filter Bar
          ====================== */}
          <div
            className="filter-bar"
            style={{
              marginBottom: 60,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              backgroundColor: "#f8f9fb",
              borderRadius: "12px",
              padding: "20px 25px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            {/* Category Dropdown */}
            <div
              style={{
                position: "relative",
                minWidth: "220px",
              }}
            >
              <select
                className="title"
                onChange={handleCategoryChange}
                value={selectedCategory ?? ""}
                style={{
                  width: "100%",
                  padding: "0px 14px",
                  borderRadius: "8px",
                  border: "1.5px solid #dcdcdc",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#333",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLSelectElement).style.borderColor = "#111")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLSelectElement).style.borderColor = "#dcdcdc")
                }
              >
                <option value="">All Categories</option>
                {allCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", flexGrow: 1, maxWidth: "400px" }}>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisiblePosts(posts.slice(0, postsPerPage));
                }}
                style={{
                  width: "100%",
                  padding: "10px 45px 10px 15px",
                  borderRadius: "8px",
                  border: "1.5px solid #dcdcdc",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#333",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor = "#111")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor = "#dcdcdc")
                }
              />
              <i
                className="icon-search"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                  color: "#888",
                }}
              />
            </div>

            {/* Reset Button */}
            {(selectedCategory || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm("");
                }}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  backgroundColor: "#111",
                  color: "#fff",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor = "#333")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor = "#111")
                }
              >
                Reset
              </button>
            )}
          </div>

          {/* ======================
              Blog Posts Grid
          ====================== */}
          <div className="row gy-80 justify-content-center">
            {filteredPosts.length > 0 ? (
              filteredPosts.slice(0, visiblePosts.length).map((post) => (
                <div className="col-xl-4 col-md-6" key={post.id}>
                  <div className="blog__post-item-five shine-animate-item">
                    <div className="blog__post-thumb">
                      <Link href={post.link} className="shine-animate">
                        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                          <img
                            src={post._embedded["wp:featuredmedia"][0].source_url}
                            alt={post.title.rendered}
                          />
                        ) : (
                          <img src="/assets/img/blog/7-1.jpg" alt="Default blog image" />
                        )}
                      </Link>
                    </div>

                    {/* Blog content */}
                    <div className="blog__post-content">
                      <h3 className="title" style={{ marginBottom: "1rem" }}>
                        <Link href={post.link}>{post.title.rendered}</Link>
                      </h3>
                      <p>{stripHtml(post.excerpt.rendered).substring(0, 100)}...</p>

                      <Link href={post.link} target="_blank" className="link-btn">
                        Read More <i className="icon-arrow-top-left" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts found matching your criteria.</p>
            )}
          </div>

          {/* ======================
              View More Button
          ====================== */}
          {filteredPosts.length > visiblePosts.length && (
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <button
                onClick={handleViewMore}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  padding: "10px 24px",
                  backgroundColor: isHovered ? "#444" : "#111",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
