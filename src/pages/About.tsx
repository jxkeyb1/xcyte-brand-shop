import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-background via-muted to-accent-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About XCYTE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from a passion for adventure and a commitment to excellence, 
              XCYTE represents the pinnacle of outdoor clothing design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in the heart of the mountains, XCYTE was born from the belief that outdoor gear 
                should be as bold and uncompromising as the adventures it enables. Our founders, 
                experienced climbers and outdoor enthusiasts, were frustrated by the lack of clothing 
                that could truly perform in extreme conditions while maintaining style and comfort.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece in our collection is tested in real-world conditions by athletes and 
                adventurers who push the boundaries of what's possible. From alpine ascents to 
                urban exploration, XCYTE gear is designed to excel wherever your journey takes you.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/a146e8d2-edb7-4c66-bc11-bdcb6aa4d6b2.png" 
                    alt="XCYTE Brand" 
                    className="w-1/2 h-auto filter brightness-0 invert opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Mountain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Performance</h3>
                <p className="text-muted-foreground">
                  Built to withstand the most demanding conditions and adventures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Supporting adventurers and outdoor enthusiasts worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Premium materials and craftsmanship in every piece.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to protecting the environments we explore.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The adventurers behind the brand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Alex Thompson</h3>
                <p className="text-accent font-medium mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Professional climber with 15+ years of experience in extreme outdoor conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Chen</h3>
                <p className="text-accent font-medium mb-2">Head of Design</p>
                <p className="text-muted-foreground text-sm">
                  Award-winning designer specializing in technical outdoor apparel.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Marcus Rodriguez</h3>
                <p className="text-accent font-medium mb-2">Head of Innovation</p>
                <p className="text-muted-foreground text-sm">
                  Materials scientist focused on sustainable and high-performance fabrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;