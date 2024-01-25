import './style.css'
import { 
  getNationInfo,
  getStateInfo
} from './fetch-functions.js'
import {
  renderStateInfo,
  renderNationInfo
} from './render-functions.js'

const main = () => {
  const InfoEl = document.querySelector("#info-box");
  const tooltipSpan = document.querySelector('#details-box');

  getNationInfo()
    .then(nation => renderNationInfo(InfoEl, nation))
    .catch(error => console.warn(error));

  const handleHover = (e) => {
    if (e.target.tagName == 'path') {
        const content = e.target.dataset.name;
        tooltipSpan.innerHTML = content;
        tooltipSpan.style.opacity = "100%";
    }
    else tooltipSpan.style.opacity = "0%";
  }
  document.addEventListener('mouseover', handleHover);

  window.onmousemove = (e) => {
    let x = e.clientX, y = e.clientY;

    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x) + 'px';

    const { name, id } = e.target.dataset
    if (!name || !id) return 
  };

  const handleStateClick = async (e) => {
    try {
      if (e.target.tagName == 'path') {
        const stateName = e.target.dataset.name;
        const getStateName = await getStateInfo(stateName);
        const updateStateInfo = await renderStateInfo(InfoEl, getStateName);
        return updateStateInfo;
      }
    }
    catch (error) {
      console.warn(error.message);
      return null;
    }
  } 
  document.addEventListener('click', handleStateClick);
}
main();