// import reactLogo from 'src/assets/react.svg'
// import viteLogo from 'public/vite.svg'
import 'src/App.css'
import { SideBar } from 'src/components';
import { Router } from 'src/pages';

function App() {
  return (
    <>
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-10 text-black">
        <Router />
      </div>
    </div>
    </>
  )
}

export default App