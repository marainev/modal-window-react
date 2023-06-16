import _ from 'lodash';

const modals = [
    {   
        id: 1, 
        title: 'Welcome 1 1',
        title1: 'Welcome 1 2',
        text: 'Text 1'
    },

    {   
        id: 2, 
        title: 'Welcome 2 1',
        title1: 'Welcome 2 2',
        text: 'Text 2'
    },

    {   
        id: 3, 
        title: 'Welcome 3 1',
        title1: 'Welcome 3 2',
        text: 'Text 3'
    },

    {   
        id: 4, 
        title: 'Welcome 4 1',
        title1: 'Welcome 4 2',
        text: 'Text 4'
    },

    {   
        id: 5, 
        title: 'Welcome 5 1',
        title1: 'Welcome 5 2',
        text: 'Text 5'
    },
]


const App = ({store, setStore}) => {
    return (
        <div id="app">
            <h1>Modal</h1>
            <div className="main">
                {
                    modals.map((modal, index) => {
                        return <button
                            key={`modal-${index}`}
                            onClick={() => {
                                const newStore = _.cloneDeep(store);
                                _.set(newStore, `modalProperty.showModal`, true);
                                _.set(newStore, `modalProperty.title`, modal.title);
                                _.set(newStore, `modalProperty.title1`, modal.title1);
                                _.set(newStore, `modalText`, modal.text);
                                setStore(newStore);
                            }}
                        >
                            Modal {modal.id}
                        </button>
                    })
                }
                {/* <button id="modal-1">Modal 1</button>
                <button id="modal-2">Modal 2</button>
                <button id="modal-3">Modal 3</button>
                <button id="modal-4">Modal 4</button>
                <button id="modal-5">Modal 5</button> */}
            </div>
      </div>
    )
}

export default App;