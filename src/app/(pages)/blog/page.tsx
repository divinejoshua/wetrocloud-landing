import FooterComponent from '@/app/components/Footer';
import HeaderComponent from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Dummy blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Cloud Computing',
    description: 'Learn the basics of cloud computing and how it can transform your business operations and infrastructure.',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'getting-started-with-cloud-computing'
  },
  {
    id: 2,
    title: 'The Future of AI in Business',
    description: 'Discover how artificial intelligence is reshaping industries and what it means for your business strategy.',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1677442135136-760c50d52161?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'future-of-ai-in-business'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity measures every business should implement to protect their digital assets.',
    date: 'May 5, 2025',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'cybersecurity-best-practices'
  },
  {
    id: 4,
    title: 'Optimizing Cloud Costs',
    description: 'Learn effective strategies to manage and reduce your cloud computing expenses without sacrificing performance.',
    date: 'April 28, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'optimizing-cloud-costs'
  },
  {
    id: 5,
    title: 'Hybrid Cloud Solutions',
    description: 'Explore the benefits and implementation of hybrid cloud environments for modern enterprises.',
    date: 'April 20, 2025',
    image: 'https://images.unsplash.com/photo-1544197150-b82a7708a9e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'hybrid-cloud-solutions'
  },
  {
    id: 6,
    title: 'Data Privacy Regulations',
    description: 'Understanding global data protection laws and how to ensure compliance for your business.',
    date: 'April 15, 2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'data-privacy-regulations'
  }
];

export default function BlogListPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12 mt-44">
          <h2 className="text-5xl md:text-6xl font-medium text-blackconstant mb-4 ">
            Blog
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mt-5 mb-1">
            Latest blog posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <time className="text-gray-500 text-sm mb-2">{post.date}</time>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {post.description}
                  </p>
                  <span className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                    Read more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
