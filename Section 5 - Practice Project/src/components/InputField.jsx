export default function InputField({ label, id, ...props }) {

    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}></input>
        </p>
    );
}