interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  nameColor?: string;      // 👈 optional
  buttonColor?: string;    // 👈 optional
}

export default function ProductCard({
  name,
  price,
  image,
  nameColor = 'text-black',
  buttonColor = 'bg-blue-600 text-white'
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className={`text-lg font-bold mb-2 ${nameColor}`}>{name}</h3>
        <p className="text-gray-600 mb-4">{price}</p>
        <button className={`px-4 py-2 rounded ${buttonColor} hover:bg-blue-700 transition`}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
