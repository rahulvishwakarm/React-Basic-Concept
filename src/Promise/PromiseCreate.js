import React, { Component } from 'react';

class PromiseCreate extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name:''
            }
        }

        componentWillMount() {
            const promise = Promise((resolve,reject) => {
                let name = "Testing";
                if(name==="Rahul") {
                    resolve("Promise Resolved Succesfully");
                }
                else {
                    reject(Error("Promise Rejected"));
                }
            });

            promise.then(result => {
                this.setState({name:result});
            },function(error) {
                this.setState({name:error});
            }); 
        }

    render() {
        const {name} = this.state;
        console.log(name);
        return (
            <div>
                    <h1>Hello Promise</h1>
                    <h2>{name}</h2>
            </div>
        )
    }
}

export default  PromiseCreate;