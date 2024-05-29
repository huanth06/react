import axios from 'axios';
import React, { Component } from 'react'

export default class Country extends Component {
    constructor(){
        super();
        this.state={
            list: [],
            inpSearch:'',
            rsCountry:[]
        }
    }
    getAll(){
        axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res)=>{
            this.setState({
                list:res.data
            });
        });
    }
    componentDidMount(){
        this.getAll();
    }
    changeInp(e){
        this.setState({
            inpSearch: e.target.value
        });
    }
    search = () =>{
        let [...newCountryList] = this.state.list;
        let rsCountry = newCountryList.filter((rs)=>rs.name.common.includes(this.state.inpSearch));
        this.setState({
            rsCountry:rsCountry
        })
    }
  render() {
    return (
        <>
            <div id='main_content'>
                <div className='col country_list'>
                    <h1>Country list:</h1>
                    {
                        this.state.list.map((country, key)=>(
                            <p className='country_row' key={key}><img src={country.flags.png} alt={country.name.common}/>Name: {country.name.common}, Area: {country.area}, Population: {country.population}</p>
                        ))
                    }
                </div>
                <div className='col search'>
                    <input type="" name=""  placeholder='Search...' onChange={(e)=>{this.changeInp(e)}} />
                    <button type="submit" onClick={()=>{this.search()}}>Search</button>
                    {
                        this.state.rsCountry.map((country,key)=>(
                            <p key={key}>
                                <img width={50} src={country.flags.png} alt={country.name.common}/> Name: {country.name.common}, Area: {country.area}, Population: {country.population}
                            </p>
                        ))
                    }
                </div>
            </div>
            
        </>
    )
  }
}
