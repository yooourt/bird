const config = {
}

const enableDebugMode = (game, enable) => {
    if (!enable) {
        return
    }

    e('#id-input-fps').addEventListener('input', (event) => {
        window.fps = Number(event.target.value)
    })
}