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

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName == 'path') {
        const content = e.target.dataset.name;
        document.getElementById("details-box").innerHTML = content;
        document.getElementById("details-box").style.opacity = "100%";
    }
    else {
        document.getElementById("details-box").style.opacity = "0%";
    }
});

window.onmousemove = function (e) {
    let x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};



