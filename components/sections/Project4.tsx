// 'use client'
// import Link from "next/link"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { useEffect, useState } from "react";

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


// const swiperOptions = {
//     spaceBetween: 30,
//     loop: true,
//     slidesPerView: "auto" as const,
//     breakpoints: {
//         '1200': {
//             slidesPerView: "auto" as const,
//         },
//         '992': {
//             slidesPerView: "auto" as const,
//         },
//         '768': {
//             slidesPerView: 1,
//         },
//         '576': {
//             slidesPerView: 1,
//         },
//         '0': {
//             slidesPerView: 1,
//         },
//     },
// }

// export default function Project4() {


//       const [posts, setPosts] = useState<WPPost[]>([]);
//       const [allCategories, setAllCategories] = useState<Category[]>([]);
//       const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//       const [searchTerm, setSearchTerm] = useState("");
//       const [visiblePosts, setVisiblePosts] = useState<WPPost[]>([]);
//       const [isHovered, setIsHovered] = useState(false);
//       const postsPerPage = 3;
    
//       useEffect(() => {
//         const fetchData = async () => {
//           try {
//             // Fetch posts with embedded data
//             const postsRes = await fetch(process.env.NEXT_PUBLIC_POSTS_API!);
//             const postsData: WPPost[] = await postsRes.json();
            
//             // Filter out "Uncategorized" posts right away
//             const filteredPosts = postsData.filter((post: WPPost) => {
//               const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
//               return !categories || !categories.some((cat: { name: string }) => cat.name === "Uncategorized");
//             });
            
//             setPosts(filteredPosts);
    
//             // Fetch categories separately for the filter dropdown
//             const categoriesRes = await fetch(process.env.NEXT_PUBLIC_CATEGORIES_API!);
            
//             const categoriesData: Category[] = await categoriesRes.json();
            
//             // Exclude "Uncategorized" category based on the slug
//             const filteredCategories = categoriesData.filter((category: Category) => category.slug !== "uncategorized");
//             setAllCategories(filteredCategories);
            
//             // Initially show the first batch of posts
//             setVisiblePosts(filteredPosts.slice(0, postsPerPage));
            
//           } catch (error) {
//             console.error("Failed to fetch data", error);
//           }
//         };
        
//         fetchData();
//       }, []);
    
//       const stripHtml = (html: string) => {
//         return html.replace(/<[^>]*>?/gm, '');
//       };
    
    
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

//     return (
//         <>
//             <section className="project-area-4 pt-90 pb-120 overflow-hidden whybmsec">
//                 <div className="container">
//                     <div className="section__title mb-55">
//                         <h2 className="shadow-title">PROJECT</h2>
//                         <h2 className="title title2 text-white wow img-custom-anim-left">OVER 200 <br /> PROJECTS DONE.</h2>
//                     </div>
//                 </div>
//                 <div className="container-fluid p-0">
//                     <div className="swiper project-slider3-active">
//                         <Swiper {...swiperOptions} className="swiper-wrapper">
//                             <SwiperSlide>
//                                 <div className="project-card-item4 shine-animate-item">
//                                     <div className="project-card-thumb">
//                                         <Link className="shine-animate" href="/project-details">
//                                             <img src="/assets/img/project/project5-1.jpg" alt="img" />
//                                         </Link>
//                                     </div>
//                                     <div className="project-card-content">
//                                         <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
//                                         <span className="project-card-text">Design</span>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="project-card-item4 shine-animate-item">
//                                     <div className="project-card-thumb">
//                                         <Link className="shine-animate" href="/project-details">
//                                             <img src="/assets/img/project/project5-2.jpg" alt="img" />
//                                         </Link>
//                                     </div>
//                                     <div className="project-card-content">
//                                         <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
//                                         <span className="project-card-text">Design</span>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="project-card-item4 shine-animate-item">
//                                     <div className="project-card-thumb">
//                                         <Link className="shine-animate" href="/project-details">
//                                             <img src="/assets/img/project/project5-3.jpg" alt="img" />
//                                         </Link>
//                                     </div>
//                                     <div className="project-card-content">
//                                         <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
//                                         <span className="project-card-text">Design</span>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="project-card-item4 shine-animate-item">
//                                     <div className="project-card-thumb">
//                                         <Link className="shine-animate" href="/project-details">
//                                             <img src="/assets/img/project/project5-1.jpg" alt="img" />
//                                         </Link>
//                                     </div>
//                                     <div className="project-card-content">
//                                         <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
//                                         <span className="project-card-text">Design</span>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="project-card-item4 shine-animate-item">
//                                     <div className="project-card-thumb">
//                                         <Link className="shine-animate" href="/project-details">
//                                             <img src="/assets/img/project/project5-2.jpg" alt="img" />
//                                         </Link>
//                                     </div>
//                                     <div className="project-card-content">
//                                         <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
//                                         <span className="project-card-text">Design</span>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="project-card-item4 shine-animate-item">
//                                     <div className="project-card-thumb">
//                                         <Link className="shine-animate" href="/project-details">
//                                             <img src="/assets/img/project/project5-3.jpg" alt="img" />
//                                         </Link>
//                                     </div>
//                                     <div className="project-card-content">
//                                         <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
//                                         <span className="project-card-text">Design</span>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         </Swiper>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }


'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react";

// Interface for category
interface Category {
  id: number;
  name: string;
  slug: string;
}

// Interface for WordPress post
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
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
  };
}

const swiperOptions = {
    spaceBetween: 30,
    loop: true,
    slidesPerView: "auto" as const,
    breakpoints: {
        '1200': {
            slidesPerView: "auto" as const,
        },
        '992': {
            slidesPerView: "auto" as const,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

export default function Project4() {
    const [posts, setPosts] = useState<WPPost[]>([]);
    const [allCategories, setAllCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [visiblePosts, setVisiblePosts] = useState<WPPost[]>([]);
    const [isHovered, setIsHovered] = useState(false);
    const postsPerPage = 3;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch posts with embedded data
          const postsRes = await fetch(process.env.NEXT_PUBLIC_CASE_API!);
          const postsData: WPPost[] = await postsRes.json();
          
          // Filter out "Uncategorized" posts right away
          const filteredPosts = postsData.filter((post: WPPost) => {
            const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
            return !categories || !categories.some((cat: { name: string }) => cat.name === "Uncategorized");
          });
          
          setPosts(filteredPosts);
  
          // Fetch categories separately for the filter dropdown
          const categoriesRes = await fetch(process.env.NEXT_PUBLIC_CATEGORIES_API!);
          const categoriesData: Category[] = await categoriesRes.json();
          
          // Exclude "Uncategorized" category based on the slug
          const filteredCategories = categoriesData.filter((category: Category) => category.slug !== "uncategorized");
          setAllCategories(filteredCategories);
          
          // Initially show the first batch of posts
          setVisiblePosts(filteredPosts.slice(0, postsPerPage));
          
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      };
      
      fetchData();
    }, []);

    const stripHtml = (html: string) => {
      return html.replace(/<[^>]*>?/gm, '');
    };

    // Filter posts by category and search term
    const filteredPosts = posts.filter((post: WPPost) => {
      const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
      if (!categories) {
        return false; // Skip posts with no category
      }

      // Check category filter
      const categoryMatch = !selectedCategory || categories.some((cat: { id: number }) => cat.id === selectedCategory);

      // Check search filter (title or excerpt)
      const searchMatch =
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stripHtml(post.excerpt.rendered).toLowerCase().includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });

    // Get the first category name for a post
    const getFirstCategoryName = (post: WPPost) => {
      const categories = post._embedded?.["wp:term"]?.find(group => group[0]?.taxonomy === "category");
      return categories?.[0]?.name || "Uncategorized";
    };

    return (
        <>
            <section className="project-area-4 pt-90 pb-120 overflow-hidden whybmsec">
                <div className="container">
                    <div className="section__title mb-55">
                        <h2 className="shadow-title">PROJECT</h2>
                        <h2 className="title title2 text-white wow img-custom-anim-left">+35% conversion  <br /> in 3 months</h2>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="swiper project-slider3-active">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            {posts.slice(0, 6).map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div className="project-card-item4 shine-animate-item">
                                        <div className="project-card-thumb">
                                            <a className="shine-animate" href={post.link}>
                                                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                                                    <img 
                                                        src={post._embedded["wp:featuredmedia"][0].source_url} 
                                                        alt={post._embedded["wp:featuredmedia"][0]?.alt_text || post.title.rendered} 
                                                    />
                                                ) : (
                                                    <img src="/assets/img/project/project-default.jpg" alt="Default project" />
                                                )}
                                            </a>
                                        </div>
                                        <div className="project-card-content">
                                            <h4 className="project-card-title">
                                                <a href={post.link}>
                                                    {post.title.rendered}
                                                </a>
                                            </h4>
                                            <span className="project-card-text">
                                                {getFirstCategoryName(post)}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}