import Header from './components/Header'
import RequestWindow from './components/RequestWindow'
import DiffViewer from './components/DiffViewer'
import ResponseStatus from './components/ResponseStatus'

import {useState} from 'react'

function App() {
    const [responseA, setResponseA] = useState(null)
    const [responseB, setResponseB] = useState(null)

  return (
    <>
        <Header></Header>
        <main className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 px-4 border border-border">
            <div className="pr-4">
                <RequestWindow id="A" state={setResponseA}/>
            </div>
            <div className="lg:pl-4 lg:border-l lg:border-border">
                <RequestWindow id="B" state={setResponseB} />
            </div>
        </main>
        <div className="flex flex-col gap-4 px-8 py-4">
            <div className="flex flex-row justify-between items-center gap-4 text-text-muted">
                <h1 className="font-bold">DIFF OUTPUT</h1>
                <div className="flex flex-row gap-4">
                    <p><span className="bg-diff-added rounded-full size-2.5 inline-block"></span> added</p>
                    <p><span className="bg-diff-removed rounded-full size-2.5 inline-block"></span> removed</p>
                    {/*<p><span className="bg-diff-changed rounded-full size-2.5 inline-block"></span> changed</p>*/}
                </div>
            </div>
            <DiffViewer responseA={responseA && responseA.data} responseB={responseB && responseB.data}></DiffViewer>
        </div>
        <footer className="bg-bg-surface border-t border-border py-4 px-8 fixed bottom-0 left-0 right-0">
            <div className="flex flex-row justify-between items-center gap-4 text-sm text-text-muted">
                <div className="flex flex-row justify-start items-center gap-8">
                    <ResponseStatus id="A" response={responseA}></ResponseStatus>
                    <ResponseStatus id="B" response={responseB}></ResponseStatus>
                </div>
                <p>© 2026 Brayden Simoneau</p>
            </div>

        </footer>
    </>
  )
}

export default App
