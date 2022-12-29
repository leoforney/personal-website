import React from 'react';
import DetailView from "./DetailView";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cases: []
        }
    }

    componentDidMount() {
        fetch('cases/caselist.txt')
            .then(response => response.text())
            .then(data => {
                var linesplit = data.split(/\r\n|\r|\n/g);
                for (var i = 0; i < linesplit.length; i++) {
                    if (linesplit[i] === "") {
                        linesplit.splice(i, 1);
                    }
                }
                console.log(linesplit)
                this.setState({cases: linesplit})
            });
    }

    render() {
        return (
            <div>
                {this.state.cases.map((storycase, i) => {
                    return (
                        <DetailView key={i} filename={storycase}/>
                    )
                })}
            </div>
        )
    }

}

export default HomePage;
