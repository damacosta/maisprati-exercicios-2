import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './styles/global.css';

const produtoExemplo = {
  id: 1,
  titulo: "Caneca Kaito",
  preco: 39.90,
  rating: 4.8,
  tag: "Novo",
  imagem: "public/images/kaito.png"
};

export default function CssGlobalApp() {
  return (
    <>
      <Navbar />
      <h2>Minha lojinha Vocaloid</h2>
      <ProductCard produto={produtoExemplo} onAdd={() => {}} disabled={false} />
    </>
  );
}
