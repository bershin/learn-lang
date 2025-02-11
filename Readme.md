## GOLANG
### Installing GO
- Download and install biary: "https://go.dev/"
- Check installed version `go version`

### Features of Go( Why GO? )
- Strictly typed
    - Can use "duck typing" like other scripting language.
    - `name := "john"`
- Run code with one command `go run main.go`
    - Other scripting language interprets line by line.
    - Go compiles in temp location and executes.
- Convert to binary `go build -o app main.go`
    - Very fast compare to other programming language.
- Cross compile capability`env GOOS=windows GOARCH=amd64 go build -o app.exe main.go`
    - Build binaries for different opearting system. Build windows exe for Mac. 
- Mature module system