### AXIOS
- Library for making http requests.
- External library, use fetch behind the scenes
- It is promises based
- It can be used in client & server
    - In Browser index.html include `<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>` above script line.
- After including type 'axios' in console to verify.
- Unlike 'fetch' no need to do JSON parsing.(inside 'data')
- Catch works for network of other error.
    - No need to throw like fetch for errors.