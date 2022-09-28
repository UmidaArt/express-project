import fs from 'fs'

const getUsersList = (req, res) => {
    const users = fs.readFileSync('./data.json', {encoding: 'utf-8'})
    const parsedUsers = JSON.parse(users)
    res.json(parsedUsers)
}

const getOneUser = (req, res) => {
    const users = fs.readFileSync('./data.json', {encoding: 'utf-8'})
    const parsedUsers = JSON.parse(users)
    const user = parsedUsers.find(user => user.id === +req.params.slug)
    if (!user) res.status(404).send('not found')
    res.json(user)
}

const postUser = async (req, res) => {
    const users = fs.readFileSync('./data.json')
    const updateUsers = [...JSON.parse(users), req.body]
    await fs.writeFileSync('./data.json', JSON.stringify(updateUsers, null, 2))
    res.json({status: 'ok'})
}

const deleteAllUsers = async (req, res) => {
    console.log(req.body)
    res.send('[]')
    await fs.writeFileSync('./data.json', JSON.stringify([]))
}

const deleteOneUser = async (req, res) => {
    const users = fs.readFileSync('./data.json', {encoding: 'utf-8'})
    const parsedUsers = JSON.parse(users)
    const user = parsedUsers.filter((user) => user.id !== +req.params.id);
    await fs.writeFileSync('./data.json', JSON.stringify(user, null, 2))
    res.json({message:' delete'})
    if (!user) res.status(404).send('not found')
}

const editUser = async (req, res) => {
    const users = fs.readFileSync('./data.json', {encoding: 'utf-8'})
    const parsedUsers = JSON.parse(users)
    const editUser = parsedUsers.map((item) => item.id === +req.params.id ? {...item, ...req.body} : item)
    await fs.writeFileSync('./data.json', JSON.stringify(editUser, null, 2))
    res.json(req.body);
}

export {getUsersList, getOneUser, postUser, deleteAllUsers, deleteOneUser, editUser}