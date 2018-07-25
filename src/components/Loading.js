import React from 'react';
import { Loader } from 'semantic-ui-react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <Loader active size="massive" />;
const Home = () => {
    return (
        <div>
            <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            <p></p>
            </div>
        </div>
    );
};
export default ReactDelayRender({ delay: 300 })(Loading);