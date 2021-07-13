import React, { Component } from "react"
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        const url = 'https://randomuser.me/api/'
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    
    render() {
        const text = this.state.loading ? "loading...." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App