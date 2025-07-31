import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Alpine Summit Jacket",
      price: 249,
      originalPrice: 299,
      rating: 4.8,
      reviews: 124,
      category: "Jackets",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=400&q=80",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Trail Explorer Pants",
      price: 129,
      rating: 4.6,
      reviews: 89,
      category: "Pants",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=400&q=80",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Peak Performance Tee",
      price: 59,
      rating: 4.9,
      reviews: 203,
      category: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Mountain Base Layer",
      price: 89,
      originalPrice: 109,
      rating: 4.7,
      reviews: 156,
      category: "Base Layers",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80",
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: "Adventure Shorts",
      price: 79,
      rating: 4.5,
      reviews: 67,
      category: "Shorts",
      image: "https://images.unsplash.com/photo-1506629905607-84d42d77c2c0?auto=format&fit=crop&w=400&q=80",
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: "Summit Hoodie",
      price: 159,
      rating: 4.8,
      reviews: 198,
      category: "Hoodies",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      isNew: true,
      isSale: false
    }
  ];

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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      New
                    </Badge>
                  )}
                  {product.isSale && (
                    <Badge variant="destructive">
                      Sale
                    </Badge>
                  )}
                </div>

                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-colors"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;