export const renderStateInfo = async (InfoEl, states) => {
    InfoEl.innerHTML = "";

    states.forEach(state => {
        const p = document.createElement('p');
        p.textContent = `${state.state}`;
        InfoEl.append(p);

        const ul = document.createElement('ul');
        InfoEl.append(ul);

        const li = document.createElement('li');
        li.textContent = `Year of Population Data: ${state.year}`;
        ul.append(li);

        const li2 = document.createElement('li');
        li2.textContent = `State Population: ${state.population}`;
        ul.append(li2);
    })
}