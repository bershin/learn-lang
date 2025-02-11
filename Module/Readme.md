### What is Module?
- Module is the first step of order in heirarchy in program, used to identify a program.(Project / Github path)
- Module names are named after github or single name.
- Module is a collection of package.
- Definition of module is mentioned in `go.mod` file in project root directory.
    - Current module and its dependencies module.
    - Minumum go version
- External package are not stored in project directory like other programming language, instead stored in one place for space saving.

### What is packages?
- Package is a collection of files in one directory.
    - One directory one package
    - Package names are in lower case.
    - Package name same as directory name.
    - main goes in `main\main.go` and run with relative path like `go run main\main.go`

### Steps to create module
- Create directory for module: `mkdir simple`;`cd simple`
- Initialize it as module: `go mod init simple_service`; which creates a `go.mod` file 
    - It has "module name" & "minimum go version" to load this module.
- Create main file `mkdir main`; `vi main\main.go`
- Create service file `vi service.go`

### What does `go mod tidy` does
- All modules are downloaded locally or module deleted from file if you are not using them.
- same as `npm install` or `pip install`
