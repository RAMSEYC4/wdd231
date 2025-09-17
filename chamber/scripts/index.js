async function fetchMembers() {
  const businesElement = document.querySelector('.generated-content')
  let renderHtml = '';
  try {
    //fetch the JSON file
    const response = await fetch('data/members.json');
    //Convert response to JavaScript object
    const members = await response.json();
    members.forEach((values) => {
      console.log(values);
      const memberValues = `
          <section class="businessname1">
          <div class="business-heading">
            <h2>${values.name}</h2>
            <p>${values.membershipLevel}</p>
          </div>
          <div class="business-content flex">
            <div class="content1">
              <img class="content1-image" src="${values.imagelink}" alt="${values.description}">
            </div>
            <div class="content2 black-text">
              <p><span class="bold-text">Email :</span>${values.email}</p>
              <p><span class="bold-text">PHONE :</span>${values.phone}</p>
              <p><span class="bold-text">URL :</span>${values.website}</p>
            </div>
          </div>
        </section>
      `
      renderHtml += memberValues;
      businesElement.innerHTML = renderHtml;
    });
  } catch (error) {
    console.erro('Error fetching members', error)
  }
}
fetchMembers()