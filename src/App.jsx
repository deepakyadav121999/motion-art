
import './App.css'
import Content from './Components/Content'
import Content1 from './Components/Content1'
import Footer from './Components/Footer'
import Header from './Components/Header'
import AnimatedCursor from "react-animated-cursor"


function App() {


  return (
    <div className='flex flex-col gap-10 bg-gray-900 APP'>
      <Header/>
      <Content/>
      <Content1/>
      <Footer/>
      <AnimatedCursor
      innerSize={25}
      outerSize={30}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
      trailingSpeed={15}
      />
    </div>
  )
}

export default App
