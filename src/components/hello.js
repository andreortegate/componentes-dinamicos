import '../components/hello.css';

const HelloWorld = ({name}) => {
    return (
        <>
        <h2 className='title'>
        {name}
        </h2>
        </>
    )
} 

export default HelloWorld;