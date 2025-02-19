/* 
    Issue:
    With axios use then to get the data
    Cannot make axios to return data directly to variable. 
    It returns a promise object.
    So, the return value is not what we expect.
    We can use async and await to solve this issue.
*/

function getPlanets() {
    const data = axios.get("https://swapi.dev/api/planets")
    console.log(data)
}
getPlanets()