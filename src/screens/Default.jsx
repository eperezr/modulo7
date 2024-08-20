import Logo from './_components/Logo.jsx';
import Description from './_components/Description.jsx';

import OpenLink from '../components/OpenLink.jsx';
import Contador from './_components/Contador.jsx';
//import Product from './Product.jsx';

const Default = () => {
    return (
        <header className="App-header">
            <Contador />
            
            <Logo />
            <Description />
            <OpenLink title="Learn React" url="https://reactjs.org" />
            <OpenLink title="Mi Proyecto React (GitHub)" url="https://github.com/eperezr/modulo7.git" />
         </header>
    );

};

export default Default