const express = require('express');  //importowanie
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

// kod strony html
const html =`<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz</title>
</head>
<body>
    <h1>Wprowadź dane</h1>
    <form action="/submit" method="POST">
        <label>Imie:</label>
        <input type="text" id="imie" name="imie" required>
        <br>
        <label >Nazwisko:</label>
        <input type="text" id="nazwisko" name="nazwisko" required>
        <br>
        <label >Email:</label>
        <input type="text" id="email" name="email" required>
        <br>
        <button type="submit">Wyślij</button>
    </form>
</body>
</html`;

//Middleware do przetwarzania danych formularzaa
app.use(bodyParser.urlencoded({ extended: true }));

//Obsługa zadania GET
app.get('/', (req, res) => {
    res.send(html); //Wysyłan na server podany plik index.html
});

app.post('/submit', (req, res) => {// Wyciagamy pobrane dane z formularza metoda POST
    const { imie, nazwisko,email } = req.body; 
    res.send(`<h1>Wprowadzone dane:</h1><p>Imie: ${imie}</p><p>Nazwisko: ${nazwisko}</p><p>Email: ${email}</p>`); //wypisujemy dane na stronie
});

//Uruchamiam server localhost na  podanym wyzej porcie
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
