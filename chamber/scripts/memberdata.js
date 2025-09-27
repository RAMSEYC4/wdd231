async function fetchMembers() {
  const businesElement = document.querySelector('.generated-content')
  let renderHtml = '';
  try {
    //fetch the JSON file
    const response = await fetch('data/members.json');
    //Convert response to JavaScript object
    const members = await response.json();
    members.forEach((values) => {
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
    });
    businesElement.innerHTML = renderHtml;
  } catch (error) {
    console.log(error);
  }
}
fetchMembers()

async function fetchMembers2() {
  const displayHtml = document.querySelector('.jscontent');
  let html = '';
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const nonBronze = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].membershipLevel !== 'Bronze') {
        nonBronze.push(data[i]);
      }
    }

    if (nonBronze.length > 0) {
      let random1 = Math.floor(Math.random() * nonBronze.length);
      let random2 = Math.floor(Math.random() * nonBronze.length);
      let values1 = `
          <section class="businessname1">
          <div class="business-heading">
            <h2>${nonBronze[random1].name}</h2>
            <p>${nonBronze[random1].membershipLevel}</p>
          </div>
          <div class="business-content flex">
            <div class="content1">
              <img class="content1-image" src="${nonBronze[random1].imagelink}" alt="${nonBronze[random1].description}">
            </div>
            <div class="content2 black-text">
              <p><span class="bold-text">Email :</span>${nonBronze[random1].email}</p>
              <p><span class="bold-text">PHONE :</span>${nonBronze[random1].phone}</p>
              <p><span class="bold-text">URL :</span>${nonBronze[random1].website}</p>
            </div>
          </div>
        </section>
      `
      let values2 = `
          <section class="businessname1">
          <div class="business-heading">
            <h2>${nonBronze[random2].name}</h2>
            <p>${nonBronze[random2].membershipLevel}</p>
          </div>
          <div class="business-content flex">
            <div class="content1">
              <img class="content1-image" src="${nonBronze[random2].imagelink}" alt="${nonBronze[random2].description}">
            </div>
            <div class="content2 black-text">
              <p><span class="bold-text">Email :</span>${nonBronze[random2].email}</p>
              <p><span class="bold-text">PHONE :</span>${nonBronze[random2].phone}</p>
              <p><span class="bold-text">URL :</span>${nonBronze[random2].website}</p>
            </div>
          </div>
        </section>
      `
      html += values1;
      html += values2;
    }
    displayHtml.innerHTML = html;
  } catch (error) {
    console.log(error)
  }
}
fetchMembers2()


