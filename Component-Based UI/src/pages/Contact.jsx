import Input from "../components/shared/Input"
import Button from "../components/shared/Button"


const Contact = () => {
    let sendBtn = "Send"
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Contact Us</h1>
            <form style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                <Input />
                <Button btnText={sendBtn} />
            </form>
        </div>
    )
}

export default Contact;