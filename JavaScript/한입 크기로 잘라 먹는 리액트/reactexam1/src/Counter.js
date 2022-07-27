/* Counter component */

import React,{ useState } from "react"; 
import OddEvenResult from "./OddEvenResult";
// 상태를 사용할 수 있는 useState 메서드를 import 해주어야 한다.

const Counter = ({initialValue}) => { // 비구조화 할당으로 매개변수 전달
    // + 버튼과 - 버튼을 만들어준다.
    // 0에서 출발해서
    // 1씩 증가하고
    // 1씩 감소하는
    // count 상태 

    console.log("counter 호출"); // rerender 확인 -> 계속 새로 화면을 그려준다.

    // 첫번째 Counter
    const [count, setCount] = useState(initialValue);
    // 0번째 인덱스 count는 "상태의 값"으로 사용된다.
    // 즉 jsx에서 return을 해서 화면에 표시할 수 있다.
    // count의 초기값은 useState의 인자로 전달한다.
    // useState(0) -> count의 초기값을 0으로 초기화함.
    // 1번째 인덱스 setCount는 count라는 상태를 변화시키는 "상태 변화 함수"로 사용된다.

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

    /* JSX 문법 주의 */
    // JSX에서는 Camel Case를 사용한다.
    // onclick이 아닌 onClick
    // 'onIncrease()'가 아닌 {onIncrease}
    // 
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    )
};

Counter.defaultProps = { // props의 기본 값을 설정해서 props를 전달받지 못할 경우 error 방지
    initialValue: 0,
}

export default Counter; // Counter 내보내기