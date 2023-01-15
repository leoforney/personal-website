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
        fetch('cases/cases.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({cases: data})
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
                        <DetailView key={i} filename={storycase.name} description={storycase.description}/>
                    )
                })}
            </div>
        )
    }

}

export default ProjectsPage;
