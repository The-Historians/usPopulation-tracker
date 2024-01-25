import './style.css'

const testRoute = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log('data:', data);
}
const url1 = 'https://datausa.io/api/data?drilldowns=State&measures=Population';
const url2 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

testRoute(url1);
testRoute(url2);

const tooltipSpan = document.getElementById('details-box');

const handleHover = (e) => {
  if (e.target.tagName == 'path') {
      const content = e.target.dataset.name;
      document.getElementById("details-box").innerHTML = content;
      document.getElementById("details-box").style.opacity = "100%";
  }
  else {
      document.getElementById("details-box").style.opacity = "0%";
  }
}
document.addEventListener('mouseover', handleHover);

window.onmousemove = (e) => {
    let x = e.clientX, y = e.clientY;

    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x) + 'px';

    const { name, id } = e.target.dataset
    if (!name || !id) return 
    console.log(name, id)
};

  const nationPopulationFetch = async () => {
    try {
      const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
 
  const renderData = (data) => {
    
    const years = data.data.map(entry => entry.Year).join(', ');
    const populations = data.data.map(entry => entry.Population).join(', ');

    document.getElementById("years").value = years;
    document.getElementById("population").value = populations;
  };

  const Render = async () => {
    try {
      const data = await fetchData();
      renderData(data);
    } catch (error) {
      console.error("Rendering error:", error);
    }
  };
  Render()
  nationPopulationFetch()
