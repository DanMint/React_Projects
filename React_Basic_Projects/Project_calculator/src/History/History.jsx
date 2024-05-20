

function History({equation, result}) {

    let empty = false;

    if (equation == null && result == null) 
        empty = true;

    return(
        <>
            {empty ? (
                <>
                    <h1>No history yet</h1>
                </>
            ) : (
                <>
                    <h1>Hello world</h1>
                </>
            )}
        </>
    );
}

export default History;