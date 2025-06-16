import Header from './components/header_components/Header'
import MainContent from './components/task_components/MainContent'
import ViewChangerProvider from './context/header_trigger/ViewChangerProvider'
import SearchProvider from './context/search_trigger/SearchProvider'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-950'>
      <ViewChangerProvider>
        <SearchProvider>
          <Header />
          <div>
            <MainContent />
          </div>
        </SearchProvider>
      </ViewChangerProvider>
    </div>
  )
}

export default App