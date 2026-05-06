import Header from './components/Header'
import RequestWindow from './components/RequestWindow'

function App() {
  return (
    <>
        <Header></Header>
        <main className="grid grid-cols-2 px-4 border border-border">
            <div className="pr-4">
                <RequestWindow id="A" />
            </div>
            <div className="pl-4 border-l border-border">
                <RequestWindow id="B" />
            </div>
        </main>
    </>
  )
}

export default App
