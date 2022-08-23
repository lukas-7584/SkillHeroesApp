    import React, {useMemo}from "react";
    import { useForm } from "../../hooks/useForm";
    import{useLocation, useNavigate} from "react-router-dom";
    import queryString from 'query-string'
    import {HeroCard} from'../components/HeroCard'
import { useHeroes } from "../../hooks/useHeroes";

    export const SearchPage = () => {

        const navigate = useNavigate();

        const location =  useLocation();

        const {getHeroByName} = useHeroes();

        const {q = ''}= queryString.parse(location.search);

        const heroes = useMemo(() => getHeroByName(q), [q])

    const {searchText, onInputChange } = useForm({
        searchText: q
    })
    
    const onSearchSubmit = (event) => {
        event.preventDefault();
        if( searchText.trim().length <= 1 ) return;
        console.log(searchText)
        
        navigate(`?q=${searchText}`);
        console.log(q)
    }

    return (
        <>
        <h1 className="mt-5 titulos animate__animated animate__lightSpeedInRight" >Search</h1>
        <hr />
        <div className="row">
            <div className="col-5">
            <hr />
            <form
                onSubmit={onSearchSubmit}
                className="animate__animated animate__rotateInDownLeft"
            >
                <input
                type="text"
                placeholder="Search a hero"
                className="form-control mt-4 mb-4"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
                />

                <button className="btn btn-success mt-1"> Search </button>
            </form>          
            </div>

            <div className="col-7 mt-5  animate__animated animate__lightSpeedInRight">
            <h4>Results</h4>
            <hr />

            <div className="alert alert-primary mt-5"
            style={{display: q === '' ? '' : 'none'}}
            >
                Search a hero
            </div>
            {
                !heroes.length && q !== ' ' && (
                    <div className="alert alert-danger">
                                No hero with <b>{q}</b>
                    </div>
                )
            } 
                {
                    heroes.map(hero =>(
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }
            </div>
        </div>
        </>
    );
    };