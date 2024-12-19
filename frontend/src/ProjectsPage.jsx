import React from 'react';
import DetailView from "./DetailView.jsx";
import Typography from "@mui/material/Typography";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseApp } from "./WebsiteFirebaseConfig";

const analytics = getAnalytics(firebaseApp);

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
        logEvent(analytics, 'page_opened',
            {
                name: "Projects"
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h2" gutterBottom>
                     Projects
                </Typography>
                {this.state.cases.map((storycase, i) => {
                    return (
                        <DetailView key={i} filename={storycase.name} description={storycase.description} link={storycase.link}/>
                    )
                })}
            </div>
        )
    }

}

export default ProjectsPage;
