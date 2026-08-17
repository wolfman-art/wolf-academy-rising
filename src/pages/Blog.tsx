import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
                            THE <span className="text-gradient-gold">HOWL</span>
                        </h1>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                            Insights, training tips, and stories from the mats.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    aria-label={`Read article: ${post.title}`}
                                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                />
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h2 className="font-heading text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="font-body text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <span className="flex items-center gap-2 text-primary font-heading text-sm tracking-wider transition-transform group-hover:translate-x-1">
                                        READ ARTICLE <ArrowRight size={16} />
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
