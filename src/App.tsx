import { Route, Routes } from "react-router-dom"

import { LayoutPage, RecordPage, MainPage, OngoingPage } from "./page"



function App() {

  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/ongoing" element={<OngoingPage />} />
      </Route>
    </Routes>
  )
}

export default App
