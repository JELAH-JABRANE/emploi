function App() {
  const [products, setProducts] = React.useState([]);
  const [form, setForm] = React.useState({ name: '', price: '', category: '' });

  React.useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();
    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(product => {
        setProducts([...products, product]);
        setForm({ name: '', price: '', category: '' });
      });
  };

  return (
    <div>
      <h1>Apple Products</h1>
      <form onSubmit={addProduct}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product name" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
        <button type="submit">Add Product</button>
      </form>
      <table>
        <thead>
          <tr><th>Name</th><th>Price</th><th>Category</th></tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}><td>{p.name}</td><td>{p.price}</td><td>{p.category}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
