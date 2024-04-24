export default function Log({ turns, player }) {
    return (
        <ol id="log">
            {turns.map((turn) =>
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {player} selected {turn.square.row}, {turn.square.col}
                </li>
            )}
        </ol>
    );
}