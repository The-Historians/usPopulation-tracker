import './style.css'
import { 
  getNationInfo,
  getStateInfo,
  getAllYears
} from './fetch-functions.js'
import {
  renderStateInfo,
  renderNationInfo,
  renderSelectYear
} from './render-functions.js'

const main = () => {
  const infoEl = document.querySelector("#info-box");
  const tooltipSpan = document.querySelector("#details-box");
  const selectEl = document.querySelector("#year-select");
  let yearData = "";
  const nationInfoEl = document.querySelector("#nation-info-box");

  getAllYears()
    .then(years => renderSelectYear(selectEl, years))
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

    tooltipSpan.style.top = (y + 17) + 'px';
    tooltipSpan.style.left = (x) + 'px';

    const { name, id } = e.target.dataset
    if (!name || !id) return 
  };

  const handleYearSelect = () => {
    try {
      const yearSelect = document.querySelector('#selectYear');
      const output = yearSelect.value;
      yearData = output;
      console.log(output)
      return output;
    }
    catch {
      console.warn(error.message);
      return null;
    }
  }
  document.addEventListener('change', handleYearSelect);

  getNationInfo(yearData)
    .then(nation => renderNationInfo(nationInfoEl, nation))
    .catch(error => console.warn(error));

  const handleStateClick = async (e) => {
    try {
      if (e.target.tagName == 'path') {
        const stateName = e.target.dataset.name;
        console.log(stateName)
        const selectedYear = yearData;
        const getStateName = await getStateInfo(stateName, selectedYear);
        const updateStateInfo = await renderStateInfo(infoEl, getStateName);
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