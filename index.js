console.log('Hi there!');
const fetchData = async() => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey : 'c27617df',
            s: 'avengers'
        }
    });
    console.log(response.data);
}
fetchData()