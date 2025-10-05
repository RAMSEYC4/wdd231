async function getContent() {
  const content = document.querySelector('#discover-main');
  let renderHtml = '';
  try {
    //fetch the JSON file
    const response = await fetch('data/content.json')
    //Convert response to JavaScript object
    const contentRes = await response.json();
    contentRes.forEach(values => {
      const contentValues = `
      <section>
      <h2>${values.name}</h2>
      <figure>
          <img src="${values.image}" alt="${values.alt}" loading="lazy">
        </figure>
      <address>${values.address}</address>
      <p>${values.description}</p>
      <button>choose</button>
    </section>
      `
      renderHtml += contentValues;
    });
    content.innerHTML = renderHtml;
  } catch (error) {
    console.log(error)
  }
}
getContent()

