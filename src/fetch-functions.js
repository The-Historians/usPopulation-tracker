const stateAPI = 'https://datausa.io/api/data?drilldowns=State&measures=Population';

const nationAPI = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

export const getNationInfo = async (selectedYear) => {
    try {
        const response =  await fetch(nationAPI);
        
        if (!response.ok) throw new Error(`Failed to fetch info ${response.status}`)

        const info = await response.json();

        const nationInfoArr = [];

        info.data.forEach(data => {
            if (selectedYear === data.Year) {
                const obj = {
                    nation: data.Nation,
                    year: data.Year,
                    population: `${data.Population}`
                }
                nationInfoArr.push(obj);
            }
        })
        console.log(nationInfoArr)
        return nationInfoArr;
    }   
    catch (error) {
        console.warn(error.message)
        return null;
    }
}

export const getStateInfo = async (stateName, selectedYear) => {
    try {
        const response = await fetch(stateAPI);
        console.log(stateAPI)
        if (!response.ok) throw new Error(`Failed to fetch info ${response.status}`)

        const info = await response.json()

        const stateInfoArr = [];

        info.data.forEach(data => {
            if (stateName === data.State && selectedYear === data.Year) {
            const obj = {
                state: data.State,
                year: data.Year,
                population: `${data.Population}`
            }
            stateInfoArr.push(obj);
            }
        })
        console.log(stateInfoArr)
        return stateInfoArr;        
    }
    catch (error) {
        console.warn(error.message);
        return null;
    }
}

export const getAllYears = async () => {
    try {
        const response = await fetch(nationAPI);
        if (!response.ok) throw new Error(`Failed to fetch info ${response.status}`);

        const year = await response.json();

        const yearArr = [];

        year.data.forEach(data => {
            yearArr.push(`${data.Year}`);
        })
        return yearArr; 
    }
    catch (error) {
        console.warn(error.message);
        return null;
    }
}