const users = [
    {
        username: "David",
        status: "online",
        lastActivity: 10,
    },
    {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
    },
    {
        username: "Bob",
        status: "online",
        lastActivity: 104,
    },
];

let usersOnline = users.filter(item => item.status === 'online');
usersOnline = usersOnline.map(item => item.username).join(', ');

alert(`Сейчас в онлайн следующие пользователи: ${usersOnline}`);