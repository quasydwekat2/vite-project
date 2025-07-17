export default function Cards(){
    return (
        <div>
                
<div className="container py-5">
  <div className="row">
    {/* Card 1 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="/girl.avif" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Now You Can Blog from Everywhere</h5>
          <p className="card-text text-muted small">Jul 19, 2022 • 1 min read</p>
          <p className="card-text">We've made it easy to manage your blog from anywhere...</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="/fruit.avif" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Grow Your Blog Community</h5>
          <p className="card-text text-muted small">Jul 22, 2022 • 1 min read</p>
          <p className="card-text">You’re not only sharing your voice, you’re building a community...</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="/architecture.avif" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Design a Beautiful Blog</h5>
          <p className="card-text text-muted small">Jul 27, 2022 • 1 min read</p>
          <p className="card-text">When it comes to design, we help you build beautiful posts...</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
