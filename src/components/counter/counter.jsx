

export default function counter()
{

    const data = state({ count: 0 })

    function increment() {
        data.count++
    }
    
    const main =
    <div>
        <div id="counter">
            {data.count}
        </div>
        <button id="increment-button" on:click={increment}>Click me</button>
    </div>

    return main
}

