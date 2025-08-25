class App extends React.Component {
    // render() {
    //     return React.createElement('div', null,
    //         React.createElement('h2', null, 'Hello from React via CDN!'),
    //         React.createElement('p', null, 'This is a simple React component rendered using React and ReactDOM from a CDN.')
    //     );
    // }
    render() {
        return (
            <div>
                <h2>Hello from React via CDN!</h2>
                <p>This is a simple React component rendered using React and ReactDOM from a CDN.</p>
            </div>
        );
    }

    // Babel https://babeljs.io/setup
    // render() {
    //     return React.createElement('div', null,
    //         React.createElement('h2', null, 'Hello from React via CDN!'),
    //         React.createElement('p', null, 'This is a simple React component rendered using React and ReactDOM from a CDN.')
    //     );
    // }
}

// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

// For React 18 and later, use the following code to render the App component:
ReactDOM.render(<App />, document.getElementById('app'));
