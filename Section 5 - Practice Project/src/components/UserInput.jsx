import InputField from "./InputField.jsx";

export default function UserInput({ userInput, onChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <InputField
                    label="Initial Investment"
                    id="initial-investment"
                    type="number"
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)}
                    required
                />
                <InputField
                    label="Annual Investment"
                    id="annual-investment"
                    type="number"
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <InputField
                    label="Expected Return"
                    id="expected-return"
                    type="number"
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)}
                    required
                />
                <InputField
                    label="Duration"
                    id="duration"
                    type="number"
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)}
                    required
                />
            </div>
        </section>
    );
}