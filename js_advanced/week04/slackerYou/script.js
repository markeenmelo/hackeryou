const app = {}

// cache jQuery Selectors
app.messageField = $('#messageInput')
app.nameField = $('#nameInput')
app.messageList = $('.messages')

app.config = () => {
    // firebase initialization
    const config = {
        apiKey: "AIzaSyBSw1TSiBh2DHhREDPxl4yJMX5Q2907YU0",
        authDomain: "slackeryou-a6638.firebaseapp.com",
        databaseURL: "https://slackeryou-a6638.firebaseio.com",
        projectId: "slackeryou-a6638",
        storageBucket: "",
        messagingSenderId: "1077760232539"
    }
    firebase.initializeApp(config);
    app.database = firebase.database()
    app.chat = app.database.ref('/chat')
}

app.init = () => {
    $('.chat').on('submit', event => {
        event.preventDefault()
        const message = {
            name: app.nameField.val(),
            text: app.messageField.val()
        }
        app.chat.push(message)
        app.messageField.val('')
    })
    app.chat.limitToLast(10).on('child_added', message => {
        const data = message.val()
        const username = data.name || 'Anonymous'
        const usermessage = data.text
        const key = message.key
        const element = `<li id=${key}>
                            <strong>${username}</strong>
                            <p>${usermessage}</p>
                            <button class="delete" id=${key}>
                                <i class="fasfa-times-circle"/>
                            </button>
                         </li>`
        app.messageList.append(element)
        app.messageList[0].scrollTop = app.messageList[0].scrollHeight
    })
    $('.messages').on('click', '.delete', function () {
        const id = $(this).data('id')
        app.database.ref(`chat/${id}`).remove()
    })
    app.chat.limitToLast(10).on('child_removed', message => app.messageList.find(`#${message.key}`).remove())
}

$(() => {
    app.config()
    app.init()
})
