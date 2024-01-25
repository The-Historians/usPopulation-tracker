const stateAPI = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

const nationAPI = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest';

export const getNationInfo = async () => {
    try {
        const response =  await fetch(nationAPI);
        if (!response.ok) throw new Error(`Failed to fetch info ${response.status}`)

        const info = await response.json();
        console.log('data:', info);

        const nationInfoArr = [];

        info.data.forEach(data => {
            const obj = {
                nation: data.Nation,
                year: data.Year,
                population: `${data.Population}`
            }
            console.log(obj);
            nationInfoArr.push(obj);
        })
        console.log(nationInfoArr)
        return nationInfoArr;
    }   
    catch (error) {
        console.warn(error.message)
        return null;
    }
}

export const getStateInfo = async (stateName) => {
    try {
        const response = await fetch(stateAPI);
        if (!response.ok) throw new Error(`Failed to fetch info ${response.status}`)

        const info = await response.json()
        console.log('This is from getStateinfo:', info)

        const stateInfoArr = [];

        info.data.forEach(data => {
            if (stateName === data.State) {
            const obj = {
                state: data.State,
                year: data.Year,
                population: `${data.Population}`
            }
            console.log(obj);
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