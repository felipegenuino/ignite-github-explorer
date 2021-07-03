export function RepositoryItem({repository}){
   const {name, description, html_url} = repository 
    return(
        <li>
            <strong>{name ?? 'Título do repositório'}</strong>
            <p>{description}</p>
            <a href={html_url} target="_blank">Acessar repositório {html_url}</a>
        </li>
    )
}