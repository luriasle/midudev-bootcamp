const Mensaje = (params) => {
    return (
        <>
            <h1 style={{color: params.color}}>{params.message}</h1>
            <p>{params.color}</p>
        </>
    )
}

export default Mensaje