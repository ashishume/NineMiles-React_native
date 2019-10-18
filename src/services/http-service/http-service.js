import axios from 'axios';


export const getTestData = (email) => {
    axios.get(`https://ninemiles-project.herokuapp.com/tests/listTests?email=${email}`)
        .then(function (response) {
            console.log(response);
            
            return response
        })
        .catch(function (error) {
            return error;
        });
}