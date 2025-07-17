export default function Footer() {
  return (
    <footer className="bg-[#e6e7ea] text-[#2d2e2e] px-6 md:px-12 py-12 text-sm font-light border-t border-[#c5c5c5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-8">

        {/* Get to Know */}
        <div>
          <h4 className="italic font-medium text-lg mb-3">
            Get to Know <br />
            <span className="not-italic font-semibold">Bloom's Tea Better</span>
          </h4>
          <ul className="space-y-1">
            <li>Shop</li>
            <li>Extras</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <p className="mt-4 underline text-xs cursor-pointer">Visit Our Stores</p>
          <p className="text-xs">Customer service: 123-456-7890</p>
        </div>

        {/* Help */}
        <div>
          <h4 className="italic mb-3 border-b border-[#b7b8ba] w-fit">Help</h4>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Store Policy</li>
            <li>Payment Methods</li>
          </ul>
        </div>

        {/* Follow Us & Email */}
        <div>
          <h4 className="italic mb-3 border-b border-[#b7b8ba] w-fit">Follow Us</h4>
          <ul className="space-y-1 mb-4">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>

          <form className="text-xs space-y-2">
            <input
              type="email"
              placeholder="Enter your email here *"
              className="p-2 border border-gray-400 w-full md:w-[220px] focus:outline-none"
            />
            <div>
              <button className="bg-[#1c1e24] text-white text-xs px-4 py-1">
                Subscribe Now
              </button>
            </div>
            <label className="flex items-start gap-2">
              <input type="checkbox" />
              <span className="mt-[1px]">Yes, subscribe me to your newsletter.</span>
            </label>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 pt-4 border-t border-[#b7b8ba] text-xs text-gray-700 flex flex-col md:flex-row items-center justify-between">
        <p>©2025 by Bloom's Tea. Powered and secured by <span className="underline cursor-pointer">Wix</span></p>
        <a href="#top" className="mt-3 md:mt-0 hover:underline">↑ Back to top</a>
      </div>
    </footer>
  );
}
