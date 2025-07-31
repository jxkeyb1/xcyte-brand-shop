import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Package } from "lucide-react";

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium outdoor gear designed for adventurers who demand both performance and style
          </p>
        </div>

        {/* Empty State */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-2 border-dashed border-border bg-muted/30">
            <CardContent className="p-16">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Collection Coming Soon
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're carefully curating an exceptional collection of premium outdoor clothing. 
                Our products will be available soon and will be priced in British Pounds (£).
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary-hover"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Product
                </Button>
                <p className="text-sm text-muted-foreground">
                  Products will be displayed here once added to your collection
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Package className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every product is crafted with the finest materials and attention to detail.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">£</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fair Pricing</h3>
              <p className="text-muted-foreground">
                Competitive prices in British Pounds with transparent pricing on all items.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">UK</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">UK Based</h3>
              <p className="text-muted-foreground">
                Fast delivery across the UK with free shipping on orders over £75.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;