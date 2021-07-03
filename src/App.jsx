import './styles/global.scss' 
import { RepositoryList } from './components/RepositoryList' 
import { Counter } from './components/Counter'
import { Fragment } from 'react'
export function App(){
    return (
    <Fragment>
        <RepositoryList />
        <Counter />
    </Fragment>
        )
}