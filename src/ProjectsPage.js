import React from 'react';
import DetailView from "./DetailView";
import Typography from "@mui/material/Typography";

class ProjectsPage extends React.Component {

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
                <Typography variant="h2" gutterBottom>
                    Freelance projects
                </Typography>
                {this.state.cases.map((storycase, i) => {
                    return (
                        <DetailView key={i} filename={storycase}/>
                    )
                })}
            </div>
        )
    }

}

export default ProjectsPage;
