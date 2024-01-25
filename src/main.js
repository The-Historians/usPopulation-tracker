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

  // getNationInfo()
  //   .then(nation => renderNationInfo(InfoEl, nation))
  //   .catch(error => console.warn(error));

  getNationInfo()
    .then(nation => renderNationInfo(InfoEl, nation))
    .catch(error => console.warn(error));

  // getStateInfo('Iowa')
  //   .then(states => renderStateInfo(InfoEl, states))
  //   .catch(error => console.warn(error));

  const tooltipSpan = document.querySelector('#details-box');

  const handleHover = (e) => {
    if (e.target.tagName == 'path') {
        const content = e.target.dataset.name;
        tooltipSpan.innerHTML = content;
        tooltipSpan.style.opacity = "100%";
    }
    else {
        tooltipSpan.style.opacity = "0%";
    }
  }
  document.addEventListener('mouseover', handleHover);

  window.onmousemove = (e) => {
      let x = e.clientX, y = e.clientY;

      tooltipSpan.style.top = (y + 20) + 'px';
      tooltipSpan.style.left = (x) + 'px';

      const { name, id } = e.target.dataset
      if (!name || !id) return 
  };

  // const handleStateClick = async (e) => {
  //   if (e.target.tagName == 'path') {
  //     const getStateName = await getStateInfo(e.target.);


  //     // getStateInfo()
  //     //   .then(states => renderInfo(InfoEl, states))
  //     //   .catch(error => console.warn(error));
  //   }
  // }
  // document.addEventListener('click', handleStateClick);
}

main();

  