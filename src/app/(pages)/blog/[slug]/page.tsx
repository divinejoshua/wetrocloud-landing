import FooterComponent from '@/app/components/Footer';
import HeaderComponent from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dummy blog post data (in a real app, this would be fetched from an API or CMS)
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Cloud Computing',
    description: 'Learn the basics of cloud computing and how it can transform your business operations and infrastructure.',
    content: `
      <p>Cloud computing has revolutionized the way businesses operate, offering scalable resources and services over the internet. In this comprehensive guide, we'll explore the fundamentals of cloud computing and how it can benefit your organization.</p>
      
      <h2>What is Cloud Computing?</h2>
      <p>Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Cost Efficiency:</strong> Reduce capital expenses with a pay-as-you-go model</li>
        <li><strong>Scalability:</strong> Easily scale resources up or down based on demand</li>
        <li><strong>Accessibility:</strong> Access your data and applications from anywhere</li>
        <li><strong>Disaster Recovery:</strong> Robust backup and recovery solutions</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To begin your cloud journey, follow these steps:</p>
      <ol>
        <li>Assess your current infrastructure and needs</li>
        <li>Choose the right cloud service provider</li>
        <li>Start with a pilot project</li>
        <li>Train your team</li>
        <li>Monitor and optimize usage</li>
      </ol>
      
      <p>By leveraging cloud computing, businesses can focus on innovation rather than infrastructure management, leading to increased efficiency and competitive advantage.</p>
    `,
    date: 'May 15, 2025',
    readTime: '5 min read',
    author: {
      name: 'Alex Johnson',
      role: 'Cloud Solutions Architect',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'getting-started-with-cloud-computing',
    tags: ['Cloud Computing', 'Beginner', 'Infrastructure']
  },
  // Add other posts with similar structure
  {
    id: 2,
    title: 'The Future of AI in Business',
    description: 'Discover how artificial intelligence is reshaping industries and what it means for your business strategy.',
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's here and transforming businesses across all sectors. In this article, we'll explore the current state of AI and its implications for your business strategy.</p>
      
      <h2>The AI Revolution</h2>
      <p>AI is enabling businesses to automate processes, gain insights from data, and create more personalized customer experiences. From predictive analytics to natural language processing, the applications are endless.</p>
      
      <h2>Key Applications</h2>
      <ul>
        <li>Customer service automation with chatbots</li>
        <li>Predictive maintenance in manufacturing</li>
        <li>Personalized marketing campaigns</li>
        <li>Fraud detection in financial services</li>
      </ul>
      
      <p>As AI continues to evolve, businesses that embrace these technologies will gain a significant competitive advantage in their respective markets.</p>
    `,
    date: 'May 10, 2025',
    readTime: '4 min read',
    author: {
      name: 'Sarah Williams',
      role: 'AI Research Lead',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    image: 'https://images.unsplash.com/photo-1677442135136-760c50d52161?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    slug: 'future-of-ai-in-business',
    tags: ['AI', 'Business', 'Innovation']
  },
  // Add more posts as needed
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {post.tags[0]}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-500 mb-8 mx-auto">
                {post.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.name}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-16">
          <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div 
            className="prose prose-lg prose-blue mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-gray-50 p-6 rounded-2xl">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={64}
                  height={64}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {post.author.name} is a {post.author.role.toLowerCase()} with expertise in {post.tags.join(', ').toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </article>

      
      </main>
      
      <FooterComponent />
    </div>
  );
}
