const nextId = (data) => {
    if(data.length === 0) return 1
    const ids = data.map(obj => obj.id)
    return Math.max(...ids)
}

export default nextId