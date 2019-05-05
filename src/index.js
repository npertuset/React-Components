import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this? 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:30pm" 
                    comment="This is comment"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail 
                    author="Mike" 
                    timeAgo="Today at 2:00am" 
                    comment="This is comment 2"
                    avatar={faker.image.avatar()}    
                />
            </ApprovalCard> 
            
            <ApprovalCard> 
                <CommentDetail 
                    author="Jill" 
                    timeAgo="Yesterday at 5:00pm" 
                    comment="This is comment 3"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard> 
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);