module.exports = (err) => {
    const errorName = { name } = err
    const { path } = err.errors[0]
    switch (errorName) {
        case 'SequelizeUniqueConstraintError':
            return `${path} is already in use`;
        default: return errorName


    }


}