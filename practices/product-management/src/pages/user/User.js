import {Outlet} from 'react-router-dom'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Slides from '../../components/Slides'
import ListPro from './product/ListPro'
import TopPro from './product/TopPro'
export default function User() {
    return (
        <>
            <hr></hr>
            <h1>User</h1>
            <Slides />
            <ListPro />
            <TopPro />
        </>
    )
}