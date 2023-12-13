Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione:
Rifare l'esercizio della to do list.
Create una todolist in cui ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
Non proseguite nelle milestone se non avete terminato quella su cui state lavorando
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

scaffolding
1 - aggiunta createApp da vue,
2 - collegare vue all'html,
3 - aggiunta div con id app,
4 - creazione in data di array "todolist" di oggetti contenenti text e done,
5 - creare nell' html una lista ciclando gli oggetti dell'array,
6 - permettere di cambiare la variabile done a true,
7 - far visualizzare il testo sbarrato quando done è true,
8 - aggiungere pulsante per eliminazione oggetti nell'array,
9 - aggiungere input e pulsante "aggiungi",
10 - al click del pulsante far aggiungere il testo digitato all'array










