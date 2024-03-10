import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import FrontPage from './Pages/FrontPage.tsx'
import FileUpload from './Pages/FileUpload.tsx'
import GithubRepo from './Pages/GithubRepo.tsx'
// import { dataSet } from './RecoilStore/DataSetAtom.tsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<FrontPage/>}/>
    {/* {
    dataSet.map((i,_)=>(<Route path={`/${i.destination}`} element={i.element}/>))
    } */}
    <Route path='/repoDownload' element={<GithubRepo/>}/>
    <Route path='/:id' element={<FileUpload/>}/>
    <Route path='/home' element={<App/>} />
  </>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router={router}/>
    </RecoilRoot>
  </React.StrictMode>,
)
