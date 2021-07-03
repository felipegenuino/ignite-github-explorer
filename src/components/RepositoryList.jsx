import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//https://api.github.com/users/felipegenuino/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}



export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

//useEffect dispara uma ação quando algo acontece na minha aplicação
// dependencias, é quando ela for alterada dispara o useEffect
useEffect( ()=> {
    fetch('https://api.github.com/users/felipegenuino/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
    // .then(data => console.log(data))
}, [])


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => ( 
                    <RepositoryItem key={repository.id} repository={repository} />
                ))} 
            </ul>
        </section>
    )
}