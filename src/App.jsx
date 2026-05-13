import Header from './components/Header'
import RequestWindow from './components/RequestWindow'
import DiffViewer from './components/DiffViewer'

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
        <div className="flex flex-col gap-4 px-8 py-4">
            <div className="flex flex-row justify-between items-center gap-4 text-text-muted">
                <h1 className="font-bold">DIFF OUTPUT</h1>
                <div className="flex flex-row gap-4">
                    <p><span className="bg-diff-added rounded-full size-2.5 inline-block"></span> added</p>
                    <p><span className="bg-diff-removed rounded-full size-2.5 inline-block"></span> removed</p>
                    <p><span className="bg-diff-changed rounded-full size-2.5 inline-block"></span> changed</p>
                </div>
            </div>
            <DiffViewer responseA={JSON.stringify({
                status: 200,
                body: '{"test": "test"}'
            })} responseB={JSON.stringify({
                status: 200,
                body: '{"test": "test"}'
            })}></DiffViewer>
        </div>
        <footer className="bg-bg-surface border-t border-border py-4 px-8 fixed bottom-0 left-0 right-0">

        </footer>
    </>
  )
}

export default App
