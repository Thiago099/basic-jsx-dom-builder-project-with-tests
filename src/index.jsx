
import './style.css'

const data = state({ count: 0 })

function increment() {
    data.count++
}
export const app =
<div>
    <div id="counter">
        {data.count}
    </div>
    <button id="increment-button" on:click={increment}>Click me</button>
</div>


app.$parent(document.body)