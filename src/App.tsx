import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { FlexLayout, FlexWithSeparateLine, SideBar } from 'src/components';
import { Router } from 'src/pages';

function App() {
  return (
  <RecoilRoot>
    <BrowserRouter>
      <FlexLayout>
        <SideBar />
        <FlexWithSeparateLine>
          <Router />
        </FlexWithSeparateLine>
      </FlexLayout>
    </BrowserRouter>
  </RecoilRoot>
  )
}

export default App