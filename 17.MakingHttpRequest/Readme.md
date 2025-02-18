

### XLHttpRequest

### Fetch
- Cleaner Syntax & Easier to remember.
- Supports Promise
- Not supported in I.E
- fetch response is a "stream"
    - response.json() reads the stream and provide another promise.
- Reject on only network failure. So catch encounter it.
    - Use if condition with 'response.ok' - No catch
    - Throw new Error(``) - Catch encounter 

### AXIOS
- Library for making http requests.