import Head from 'next/head'
import Navbar from '@/app/components/Navbar' 
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import CategoryGrid from '@/app/components/CategoryGrid'
import ProductCard from '@/app/components/ProductCard'

export default function Home() {
  const products = [
    {
      name: ' Hoodie',
      price: '$39.99',
      image: '/hoodie.webp',
    },
    {
      name: ' Sneakers',
      price: '$59.99',
      image: '/sneakers.webp',
    },
    {
      name: ' T-Shirt',
      price: '$29.99',
      image: '/T-shirt.webp',
    },
    {
      name: ' Cap',
      price: '$19.99',
      image: '/cap.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>BlueShop</title>
        <meta name="description" content="Stylish and modern blue-themed e-commerce store" />
      </Head>
      <div className="flex flex-col min-h-screen bg-lightBlue">
        <Navbar />
        <Header />
        <Hero />
        <CategoryGrid />
        
        <main className="flex-grow p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              name={product.name}
              price={product.price}
              image={product.image}
              // Pass optional styling props if needed
              nameColor="text-blue-800"   // 👈 product name color
              buttonColor="bg-blue-600 text-white" // 👈 Add to cart button color
            />
          ))}
        </main>
        
        <Footer />
      </div>
    </>
  ) 
}
