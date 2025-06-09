import Header from './components/header'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-950'>
      <Header />
      <div>
        <MainContent />
      </div>
    </div>
  )
}

export default App