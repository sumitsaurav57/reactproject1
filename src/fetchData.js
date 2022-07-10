export const options = {
    method: 'GET',
    url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
    headers: {
      'X-RapidAPI-Key': '5f8741d66dmshfdc62c9f56606afp1092e8jsnb1ecaa075b40',
      'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
};
  
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}