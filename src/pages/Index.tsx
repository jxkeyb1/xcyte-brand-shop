import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
