import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//https://api.github.com/users/felipegenuino/repos

 
interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

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
                    <RepositoryItem key={repository.name} repository={repository} />
                ))} 
            </ul>
        </section>
    )
}