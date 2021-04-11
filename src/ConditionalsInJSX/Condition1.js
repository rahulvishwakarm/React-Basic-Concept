import PropsChildrenGet from "../Props Children/PropsChildrenGet";
import FindingDOMNode from '../FInd DOM node/FindingDOMNode';

const Condition1 = (test="note") => {
    return test!="note" ? <PropsChildrenGet/>:<FindingDOMNode/>
}
export default Condition1;