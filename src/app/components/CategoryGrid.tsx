import Image from "next/image";

type Category = {
  title: string;
  image: string;
};

const categories: Category[] = [
  { title: 'Clothing', image: '/cloth4.jpg' }, // ✅ Fixed path
  { title: 'Footwear', image: '/foot.jpeg' },
  { title: 'Accessories', image: '/Accessories.jpeg' },
  { title: 'Watches', image: '/watches.jpg' },
  { title: 'Bags', image: '/Bags.webp' },
  { title: 'Gadgets', image: '/Gadgets.jpeg' },
  { title: 'Furniture', image: '/furniture.webp' },
  { title: 'Decor', image: '/Decor.jpg' },
  { title: 'Toys', image: '/toys.jpg' },
  { title: 'Fitness', image: '/fitness.jpg' },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={cat.image} alt={cat.title} className="w-full h-36 object-cover" />
            <div className="p-3 text-center">
              <h3 className="text-blue-700 font-semibold">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
