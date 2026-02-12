import { Link } from 'react-router-dom'

function BlogSection({ blogPosts }) {
  return (
    <section className="blog-section reveal" id="blog-posts">
      <div className="container">
        <p className="kicker dark center reveal" style={{ '--reveal-delay': '40ms' }}>
          Insights
        </p>
        <h2 className="section-title reveal" style={{ '--reveal-delay': '90ms' }}>
          Latest Legal Articles
        </h2>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="blog-card reveal"
              style={{ '--reveal-delay': `${130 + index * 70}ms` }}
              data-scroll-speed={index % 2 === 0 ? '0.03' : '0.05'}
            >
              <div className="blog-meta">
                <span>{post.tag}</span>
                <time>{post.date}</time>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to="/contact">Read Article</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
