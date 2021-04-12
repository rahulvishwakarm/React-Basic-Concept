import ClassComponent from '../Type of Components/ClassComponent';
import FunctionalComp from '../Type of Components/FunctionalComp';
const Condition2 = () => {
    return (
        <div>
            {
                ((t1="t1",t2="t2")=>{
                    if(t1==t2) {
                        return <ClassComponent name="class component"/>;
                    }
                    else {
                        return <FunctionalComp name="functional component"/>;
                    }
                })
            }
        </div>
    )
}

export default Condition2;