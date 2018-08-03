# BroodHub

This project is based on [umi](https://umijs.org/)

## spelling rules

### File name 
- Components, page and styles files start with capital letter (except index files)
    for example:
    ```
    Header.js
    Home.js
    Header.less
    ```
- other files all start with lowercase letter

### Folder name
- All folders' names start with lowercase letter

### 

##Design Detail

###Plans page

- page padding is 5,0(mobile), 25,0(desktop)




## Delopyment

```
$ npm install
$ npm run build
```
> see `server.js` file

```javascript
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));   // when user reload page
});
```


