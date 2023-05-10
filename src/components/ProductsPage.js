import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Récupérer la liste des produits depuis le backend
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  // Ajouter un produit au panier
  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-5">Our products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm="6" md="4" lg="3" className="mb-4">
            <Card>
              <CardImg top width="100%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
                <Button onClick={() => handleAddToCart(product)}>Ajouter au panier</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsPage;