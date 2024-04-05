// Render the organizational chart using the provided data
function renderOrgChart(data, container) {
  const ul = document.createElement("ul");
  container.appendChild(ul);

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;

    if (item.children) {
      renderOrgChart(item.children, li);
    }

    ul.appendChild(li);
  });
}

// Get the container element where the chart will be rendered
const container = document.getElementById("chart");

// Render the organizational chart
renderOrgChart([orgChart], container);
