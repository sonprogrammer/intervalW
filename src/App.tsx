import { Route, Routes } from "react-router-dom"
import LayoutPage from "./page/LayoutPage/LayoutPage"
import MainPage from "./page/MainPage/MainPage"

function App() {

  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
