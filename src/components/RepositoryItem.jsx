export function RepositoryItem({repository}){
   const {name, description, link} = repository 
    return(
        <li>
            <strong>{name ?? 'Título do repositório'}</strong>
            <p>{description}</p>
            <a href="{link}">Acessar repositório {link}</a>
        </li>
    )
}