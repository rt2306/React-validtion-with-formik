import {Routes, Route} from 'react-router-dom';
import Register from '../Component/Register';
import Notfound from '../Component/Notfound';
export default function AppRoutes() {
const routes =[
    {name:"register",path:'/',Component:Register}
]

const Routing = routes.map(({name,path,Component},i)=>(
    <Route key={i} path={path} element={<Component/>} />
));

return(
    <div className='routing'>
        <Routes>
            {Routing}
            <Route path="*" element ={<Notfound/>} />
        </Routes>
    </div>
)
};