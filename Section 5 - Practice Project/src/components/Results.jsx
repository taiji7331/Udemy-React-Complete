import { formatter } from "../util/investment.js";

export default function Results() {
    return (
        <section id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{formatter.format(11450)}</td>
                        <td>{formatter.format(550)}</td>
                        <td>{formatter.format(550)}</td>
                        <td>{formatter.format(10900)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}