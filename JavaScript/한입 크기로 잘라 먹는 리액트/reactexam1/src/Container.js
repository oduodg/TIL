// 컴포넌트를 감쌀 컴포넌트인 Container 컴포넌트
const Container = ({ children }) => {
    console.log(children);
    return (
        <div style={{margin: 20, padding: 20, border:"1px solid gray"}}>
            {children}
        </div>
    );
};

export default Container;