import { Route, Routes } from "react-router-dom"

import { LayoutPage, RecordPage, MainPage, SettingPage } from "./page"



function App() {

  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Route>
    </Routes>
  )
}

export default App
