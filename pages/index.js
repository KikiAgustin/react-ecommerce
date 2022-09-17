const HomePage = ({ products }) => {
  const { list } = products;

  console.log(list);

  return (
    <div>
      {
        list.map(list => {
          return (
            <p>{list.name}</p>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}

export default HomePage;