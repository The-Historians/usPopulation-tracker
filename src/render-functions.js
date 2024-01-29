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
        p.textContent = `Here is the population total for ${nation.nation} from ${nation.year}: ${nation.population}`;
        nationInfoEl.append(p);

        // const p = document.createElement('p');
        // p.textContent = `${nation.nation}`;
        // infoEl.append(p);

        // const ul = document.createElement('ul');
        // infoEl.append(ul);

        // const li = document.createElement('li');
        // li.textContent = `Year of Population Data: ${nation.year}`;
        
        // ul.append(li);
        // const li2 = document.createElement('li');
        // li2.textContent = `Nation Population: ${nation.population}`;
        // ul.append(li2);
    })
}

export const renderStateInfo = (infoEl, states) => {
    infoEl.innerHTML = "";

    states.forEach(state => {
        const p = document.createElement('p');
        p.textContent = `Here is the population total for ${state.state} from ${state.year}: ${state.population}`;
        infoEl.append(p);

        // const p = document.createElement('p');
        // p.textContent = `${state.state}`;
        // infoEl.append(p);

        // const ul = document.createElement('ul');
        // infoEl.append(ul);

        // const li = document.createElement('li');
        // li.textContent = `Year of Population Data: ${state.year}`;
        // ul.append(li);

        // const li2 = document.createElement('li');
        // li2.textContent = `State Population: ${state.population}`;
        // ul.append(li2);
    })
}