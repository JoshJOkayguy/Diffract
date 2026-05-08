import Header from './components/Header'
import RequestWindow from './components/RequestWindow'

function App() {
  return (
    <>
        <Header></Header>
        <main className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 px-4 border border-border">
            <div className="pr-4">
                <RequestWindow id="A" />
            </div>
            <div className="lg:pl-4 lg:border-l lg:border-border">
                <RequestWindow id="B" />
            </div>
        </main>
    </>
  )
}

export default App
