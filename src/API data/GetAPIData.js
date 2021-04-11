import React from 'react';

class GetAPIData extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            error:null,
            data:[]
        };
    }

    async componentDidMount() {

        //fetch("http://jsonplaceholder.typicode.com/posts")
        //.then((res) => res.json())
        //.then((data) => console.log(data))

        try{
            const response = await fetch('http://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            this.setState({data:data})
        }catch(err) {
            console.log(err);
        }
    }

    render() {
        const {error,data} = this.state;
        console.log(data);
        if(error) {
            return <div>Error: {error.message}</div>;
        }else {
            return (
                <ul>
                    {
                        data.map(item=>{
                            return <li key={item.id}>{item.id} - {item.title}</li>
                        })}
                </ul>
            )
        }
    }
}

export default GetAPIData;