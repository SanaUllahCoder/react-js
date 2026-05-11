

const Button = ({btnText})=>{
    return(
        <button style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%'
        }}>{btnText}</button>
    )
}

export default Button;