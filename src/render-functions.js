export const renderSelectYear = (selectEl, years) => {
    const form = document.createElement('form');
    form.id = 'year-select-form'
    selectEl.append(form);
    
    const label = document.createElement('label');
    label.textContent = 'Choose a Year: ';
    label.setAttribute('for', 'selectYear');
    form.append(label);
    
    const select = document.createElement("select");
    label.setAttribute('name', 'selectYear');
    select.id = "selectYear";
    form.append(select);
    
    const optionDefault = document.createElement("option");
    optionDefault.textContent = '----';
    optionDefault.value = 'default';
    optionDefault.selected = true;
    select.append(optionDefault);

    years.forEach(year => {
        const option = document.createElement("option");
        option.textContent = year;
        option.value = year;
        select.append(option);
    })
}

export const renderNationInfo = (nationInfoEl, nations) => {
    nationInfoEl.innerHTML = "";

    nations.forEach(nation => {
        const p = document.createElement('p');
        p.textContent = `Here is the population total for the ${nation.nation} from ${nation.year}: ${nation.population}`;
        nationInfoEl.append(p);
    })
}

export const renderStateInfo = (infoEl, states) => {
    infoEl.innerHTML = "";

    states.forEach(state => {
        const p = document.createElement('p');
        p.textContent = `Here is the population total for ${state.state} from ${state.year}: ${state.population}`;
        infoEl.append(p);
    })
}