export default async function fetchProducts() {
  try {
    const response = await fetch('./data/items.json');
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      return data;
    }
    else {
      throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error);
  }
}

fetchProducts()