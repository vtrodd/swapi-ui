import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ResourceCardRoute } from './resourceCard/ResourceCard'

export const RouteLogic = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/resource/:resourceType/:resourceId' element={<ResourceCardRoute />} />
      </Routes>
    </BrowserRouter>
  )
}