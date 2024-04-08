import InputField from "./InputField.jsx";

export default function UserInput() {
    return (
        <section id="user-input">
            <ul className="input-group">
                <InputField label="Initial Investment" type="number" />
                <InputField label="Annual Investment" type="number" />
            </ul>
            <ul className="input-group">
                <InputField label="Expected Return" type="number" />
                <InputField label="Duration" type="number" />
            </ul>
        </section>
    );
}