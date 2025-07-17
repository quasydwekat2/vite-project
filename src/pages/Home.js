import Layout from "../components/Layout";
import { NewArrivalsSection,WelcomeSection,Testimonial,BlogBanner } from "../components/Home";

export default function Home() {
  return (
    <div>
      <Layout> 
        <WelcomeSection />
        <NewArrivalsSection />
        <BlogBanner />
        <Testimonial />
      </Layout>
    </div>
  );
}
