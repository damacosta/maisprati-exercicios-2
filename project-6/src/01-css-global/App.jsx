import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import './styles/global.css';
import React from 'react';

const produtos = [
    {
        id: 1,
        titulo: "Chaveiro Meiko",
        preco: 29.90,
        imagem: "/images/chaveiro-meiko.png"
    },
    {
        id: 2,
        titulo: "Hatsune Miku Chibi",
        preco: 80.00,
        imagem: "/images/hatsune-miku-chibi.png"
    },
    {
        id: 3,
        titulo: "Hatsune Miku Action Figure",
        preco: 280.00,
        imagem: "/images/hatsune-miku-figure.png"
    },
    {
        id: 4,
        titulo: "Kagamine Rin & Len Action Figure",
        preco: 370.00,
        imagem: "/images/kagamine-rin-len-figure.png"
    },
    {
        id: 5,
        titulo: "Kaito Action Figure",
        preco: 250.00,
        imagem: "/images/kaito-figure.png"
    }
    ,
    {
        id: 6,
        titulo: "Kagamine Rin Action Figure",
        preco: 280.00,
        imagem: "/images/kagamine-rin.png"
    },
    {
        id: 7,
        titulo: "Megurine Luka Action Figure",
        preco: 280.00,
        imagem: "/images/megurine-luka-figure.png"
    },
    {
        id: 8,
        titulo: "Meiko Action Figure",
        preco: 280.00,
        imagem: "/images/meiko-figure.png"
    },
    {
        id: 9,
        titulo: "Megurine Luka Pelúcia",
        preco: 90.00,
        imagem: "/images/pelucia-megurine-luka.png"
    }
];

export default function CssGlobalApp() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    return (
        <>
            <Navbar />
            <h2>Minha lojinha Vocaloid</h2>
            <div className="product-list">
                {loading
                    ? Array(6).fill(0).map((_, i) => <Skeleton key={i} width="220px" height="320px" />)
                    : produtos.map(produto => (
                        <ProductCard
                            key={produto.id}
                            produto={produto}
                            onAdd={() => { }}
                            disabled={false}
                        />
                    ))
                }
            </div>
        </>
    );
}