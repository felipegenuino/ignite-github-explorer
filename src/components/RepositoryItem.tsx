interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps){ 
    return(
        <li>
            <strong>{props.repository.name ?? 'Título do repositório'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">Acessar repositório {props.repository.html_url}</a>
        </li>
    )
}