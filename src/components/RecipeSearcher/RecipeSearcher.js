import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    constructor(props){
        super(props);
        this.state = { recipes: [] }
    }

    componentDidMount() {
        //this.getRandomRecipe();
        this.getRecipeByName('Roast');
        //this.getRecipeByLetter('M');
    }

    getRandomRecipe = () => {

        const _this = this;

        axios({
            //We can configure everything we need to about the http request in here
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
        .then(function (response) {
            _this.setState({ recipes: response.data.meals || [] })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    getRecipeByName = (name) => {

        const _this = this;

        axios({
            //We can configure everything we need to about the http request in here
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                s: name
            }
        })
        .then(function (response) {
            _this.setState({ recipes: response.data.meals || [] })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    getRecipeByLetter = (letter) => {

        const _this = this;

        axios({
            //We can configure eberything we need to about the http request in here
            method: 'Get',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                f: letter
            }
        })
        .then(function (response) {
            _this.setState({ recipes: response.data.meals || [] })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {

        return (
            <div></div>
        );
    }
}

export default RecipeSearcher;