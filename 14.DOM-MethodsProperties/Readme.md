### "innerText"
- Select -> Return string
    - Extract the inner text removes the tag
    - const h1 = document.querySelector("h1") / const ul = document.querySelector("ul") / const body = document.querySelector("body") / h1.innerText
    - Show unformatted context ignoring tags. check for "p" tag
    - Do not show hidden content. `<b style="display: none">blahblah</b>`
- Update
    - h1.innerText = "Im hungry"
    - Not a good idea to update ul.
### "textContent" -> Extract the inner text
- Select -> Return string
    - Same as innerText. Extract the inner text removes the tag
    - const p = document.querySelector("p") / h1.textContent
    - Show formatted context ignoring tags. check for "p" tag
    - show hidden content. `display: none`
### "innerHTML"
- Select -> Return string
    - const form = document.querySelector("form"), 
    - `form.innerHTML` Extract the text with the tag inside <form>
- Update
    - h1.innerHTML = "<h2>Section-1</h2>"
    - h1.innerHTML += "is cool"

### value, src, href
- Select
    - const input = document.querySelectorAll('input')
        - Text value -> `input[0].value` -> string
        - Radio value -> `input[0].checked` -> boolean
        - Range value -> `input[0].value` -> string
    - const a = document.querySelectorAll('a')
        - a.href
    - const img = document.querySelectorAll('img')
        - img.src
- Update 
    - Set the text to empty after search -> `input[0].value = ''`
    - a.href = "www.google.com"
    - img.src = "http://image.jpg"
### getting or setting attribute
- getting attribute
    - const range = document.querySelector('input[type="range"]')
    - range.getAttribute('max') / range.getAttribute('min') / range.getAttribute('type')
- setting attribute
    - range.setAttribute('max', '500')
    - range.setAttribute('type', 'radio')
### Find Parent/Child/ Sibling
- parent
    - const firstLi = document.querySelector('li')
    - firstLi.parentElement.parentElement
- Children
    - const ul = document.querySelector('ul')
    - ul.children[0].innertext
- Sibling
    - firstLi.nextElementSibling -> next sibling
    - const thirdLI = firstLi.nextElementSibling.nextElementSibling
    - thirdLI.previousElementSibling
### Change multiple element
```
const allLis = document.querySelectorAll('li')
for(let i = 0; i < allLis.length; i++){
    console.log(allLis.innertext)
}
```
For each
```
const allLis = document.querySelectorAll('li')
for(let li of allLis){
    console.log(li)
}
```
### Altering Styles - get inline style value
- get
    - const h1 = document.querySelector("h1")
    - See all possible styles `h1.style` 
    - h1.style.color( inline is only visible )
- Set
    - h1.style.color = 'ochid'
    - h1.style.backgroundColor = 'orange'
```
const color = ["red","blue","green", "pink"]
const allLis = document.querySelectorAll('li')
allLis.forEach((li, idx)=>{
    li.style.color = color[idx]
}
```

### Get computed style value 
 - const li = document.querySelector("li")
 - const styles = getComputedStyle(li)
 - styles.font-size

 ### manipulate class
 Html for todo
 ```
<ul id="todos">
    <li class="todo">Mow lawn <button>X</button></li>
    <li class="todo">Do homework <button>X</button></li>
    <li class="todo">Go to Sleep <button>X</button></li>
</ul>
 ```
 JS in single line
 ```
const todo = document.querySelector("#todo .todo")
todo.style.color = "gray"
todo.style.textDecoration = "line-through"
todo.style.opacity = "50%"
 ```

 css
 ```
.done {
    color: "gray";
    text-decoration: "line-through";
    opacity: "50%";
}
 ```

 - todo.getAttribute('class')
 - todo.setAttribute('class', 'done')
    - Downside is we overrite the existing todo class with done class
    - todo.setAttribute('class', 'todo done') - Possibke but hardcoding
- todo.classList -> DOMTokenList
    - todo.classList.remove('done') -> remove once next time ignores
    - todo.classList.add('done') -> add once next time ignores
    - todo.classList.toggle('done') -> true/false
- Other way of doing
    - todo.getAttribute('class').includes('done') -> false
    - todo.setAttribute('class', todo.getAttribute('class') + ' done')

### Create Elements and append
- create a h2 element
    - const newh2 = document.createelement('h2')
    - newh2.innertext = "My subheading"
    - newh2.classList.add('special')
- Append the created element 
    - H2
        - const section = document.querySelector('section')
        - section.appendChild("newh2")
    - Image
        - const newImg = document.createElement('img')
        - newImg.src = 'https;//dfff'
        - newImg.style.width = '200px'
        - document.body.appendChild("newImg")
- prepend or insert middle using insert before 
    - const parentUl = document.querySelector('ul')
    - const newLi = document.createElement('li')
    - newLi.innerText = "i am new Li"
    - const firstLi = document.querySelector('li.todo')
    - parentUl.insertBefore(newLi, firstLi)
- insert before the created element (beforebegin/afterbegin/afterend/beforeend)
    - const i = document.createElement('i')
    - i.innerText = "i am italic"
    - const firstP = document.querySelector('p')
    - firstP.innerAdjacentElement('beforebegin', i)
- Append or prepend
    - firstP.append(i, newLI)
    - firstP.prepend(i, newLI)
### removeElement / remove
- removeChild
    - const ul = document.querySelector('section ul')
    - const removeMe = ul.querySelector('.special)
    - const deleted = ul.removeChild(removeMe)
- remove
    - const h1 = document.querySelector('h1')
    - h1.remove()
